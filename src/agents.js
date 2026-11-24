// La salle des agents : trois missions jouées par une petite équipe d'agents, et une personne au bout.
// Les agents sont de vrais objets modélisés dans Blender (blender/scripts/agents_salle.py → public/models/agents.glb) :
// métal graphite, verre fumé, filets de lumière à la couleur de la mission, et la personne en céramique blanche.
// Ils reflètent un environnement de bandes lumineuses froides et se mirent dans un sol brillant (sur ordinateur).
// Tant que le modèle n'est pas chargé (ou s'il ne charge pas), chaque agent est dessiné en traits de lumière.
// Les fibres relient ceux qui se parlent, un point de lumière transporte le travail de l'un à l'autre.
// Le DOM porte tout ce qui se lit : noms, bulles, journal, boutons. Sans WebGL ou en mouvement réduit,
// la même mission se lit sur un schéma à plat.
import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, Color, Vector3, BufferGeometry, Float32BufferAttribute,
  LineSegments, LineBasicMaterial, Mesh, MeshBasicMaterial, SphereGeometry, PlaneGeometry, BoxGeometry,
  TubeGeometry, CatmullRomCurve3, ShaderMaterial, AdditiveBlending, GridHelper,
  MeshStandardMaterial, MeshPhysicalMaterial, PMREMGenerator, ACESFilmicToneMapping, DirectionalLight, BackSide, DoubleSide,
} from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Reflector } from 'three/addons/objects/Reflector.js';
import { MISSIONS, missionState, gateAt } from './missions.js';

// ---------- Les modèles Blender : chargés une seule fois, à l'approche de la salle ----------
let modelsP = null;
function loadModels() {
  if (!modelsP) {
    modelsP = new GLTFLoader().loadAsync(new URL('models/agents.glb', document.baseURI).href)
      .then((gltf) => {
        const out = {};
        gltf.scene.traverse((o) => {
          if (o.isMesh) o.userData.shared = true; // géométrie partagée entre les missions : jamais libérée
          if (o.name.startsWith('agent_')) out[o.name.slice(6)] = o;
        });
        return out;
      })
      .catch(() => null);
  }
  return modelsP;
}

// L'environnement que reflètent les agents : une pièce sombre, un plafonnier doux et des bandes de lumière froide.
// Les couleurs dépassent 1 : ce sont des sources de lumière, pas des surfaces.
function studio() {
  const s = new Scene();
  s.add(new Mesh(new BoxGeometry(14, 7, 14), new MeshBasicMaterial({ color: 0x06080c, side: BackSide })));
  const strip = (w, h, pos, rot, color, k) => {
    const m = new Mesh(new PlaneGeometry(w, h), new MeshBasicMaterial({ color: new Color(color).multiplyScalar(k), side: DoubleSide }));
    m.position.set(...pos); m.rotation.set(...rot); s.add(m);
  };
  strip(7, 1.6, [0, 3.3, 0], [Math.PI / 2, 0, 0], '#dfe8ff', 2.4);        // plafonnier
  strip(0.35, 4.5, [-6.5, 0.5, 0.5], [0, Math.PI / 2, 0], '#8fb6ff', 7);   // bande gauche, bleutée
  strip(0.35, 4.5, [6.5, 0.5, -0.5], [0, -Math.PI / 2, 0], '#ffffff', 4);  // bande droite
  strip(6, 0.22, [0, 1.2, 6.5], [0, Math.PI, 0], '#ffffff', 6);            // filet face aux agents : le reflet net sur le métal
  strip(6, 0.12, [0, -0.6, 6.5], [0, Math.PI, 0], '#9fc0ff', 4);
  return s;
}

// Le sol miroir : il ne reflète que la lumière (mélange additif) et s'efface vers les bords.
const MIRROR = {
  name: 'SolMiroir',
  uniforms: { color: { value: null }, tDiffuse: { value: null }, textureMatrix: { value: null } },
  vertexShader: `uniform mat4 textureMatrix; varying vec4 vUv; varying vec2 vPos;
    void main(){ vUv = textureMatrix * vec4(position, 1.); vPos = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }`,
  fragmentShader: `uniform vec3 color; uniform sampler2D tDiffuse; varying vec4 vUv; varying vec2 vPos;
    void main(){
      vec3 r = texture2DProj(tDiffuse, vUv).rgb;
      float fade = 1. - smoothstep(.25, 1., length(vec2(vPos.x / 7., (vPos.y - .45) / 3.2)));
      gl_FragColor = vec4(r * color * .3 * fade, 1.);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`,
};

const TAU = Math.PI * 2;
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// ---------- Les formes des agents, en segments de droite ----------
function lines() {
  const p = [];
  const api = {
    seg(a, b) { p.push(...a, ...b); return api; },
    poly(pts, closed = false) { for (let i = 0; i < pts.length - (closed ? 0 : 1); i++) api.seg(pts[i], pts[(i + 1) % pts.length]); return api; },
    // Cercle dans le plan perpendiculaire à l'axe donné, éventuellement partiel (de a0 à a1).
    circle(c, r, n = 40, axis = 'z', a0 = 0, a1 = TAU) {
      const pts = [];
      for (let i = 0; i <= n; i++) {
        const a = a0 + ((a1 - a0) * i) / n, u = Math.cos(a) * r, v = Math.sin(a) * r;
        pts.push(axis === 'z' ? [c[0] + u, c[1] + v, c[2]] : axis === 'y' ? [c[0] + u, c[1], c[2] + v] : [c[0], c[1] + u, c[2] + v]);
      }
      return api.poly(pts);
    },
    rect(c, w, h, axis = 'z', rot = 0) {
      const cs = Math.cos(rot), sn = Math.sin(rot);
      const q = [[-w / 2, -h / 2], [w / 2, -h / 2], [w / 2, h / 2], [-w / 2, h / 2]].map(([u, v]) => [u * cs - v * sn, u * sn + v * cs]);
      return api.poly(q.map(([u, v]) => (axis === 'z' ? [c[0] + u, c[1] + v, c[2]] : [c[0] + u, c[1], c[2] + v])), true);
    },
    geo() { const g = new BufferGeometry(); g.setAttribute('position', new Float32BufferAttribute(p, 3)); return g; },
  };
  return api;
}

const SHAPES = {
  // écoute : un anneau épais et un cercle perpendiculaire, comme un gyroscope
  ring: (b) => { b.circle([0, 0, 0.06], 0.42).circle([0, 0, -0.06], 0.42).circle([0, 0, 0], 0.2, 30, 'x'); for (let i = 0; i < 16; i++) { const a = (i / 16) * TAU; b.seg([Math.cos(a) * 0.42, Math.sin(a) * 0.42, 0.06], [Math.cos(a) * 0.42, Math.sin(a) * 0.42, -0.06]); } },
  // cherche : une sonde (octaèdre) et son antenne
  probe: (b) => { const r = 0.36, V = [[r, 0, 0], [-r, 0, 0], [0, r, 0], [0, -r, 0], [0, 0, r], [0, 0, -r]]; [[0, 2], [0, 3], [0, 4], [0, 5], [1, 2], [1, 3], [1, 4], [1, 5], [2, 4], [4, 3], [3, 5], [5, 2]].forEach(([a, c]) => b.seg(V[a], V[c])); b.seg([0, r, 0], [0, 0.72, 0]).circle([0, 0.78, 0], 0.06, 16); },
  // analyse : un prisme, un rayon qui entre, trois qui sortent
  prism: (b) => { const T = (z) => [0, 1, 2].map((i) => [Math.cos(i * TAU / 3 + Math.PI / 2) * 0.36, Math.sin(i * TAU / 3 + Math.PI / 2) * 0.36, z]); const A = T(0.22), B = T(-0.22); b.poly(A, true).poly(B, true); A.forEach((a, i) => b.seg(a, B[i])); b.seg([-0.75, 0.05, 0], [-0.2, 0.02, 0]); [-0.14, 0, 0.14].forEach((d) => b.seg([0.2, 0, 0], [0.72, d * 1.6, 0])); },
  // rédige : une plume et sa ligne d'encre
  quill: (b) => { const s0 = [-0.24, -0.38, 0], s1 = [0.28, 0.46, 0]; b.seg(s0, s1); for (let i = 1; i < 9; i++) { const t = i / 9, x = s0[0] + (s1[0] - s0[0]) * t, y = s0[1] + (s1[1] - s0[1]) * t, l = 0.16 * Math.sin(t * Math.PI); b.seg([x, y, 0], [x - l, y + l * 0.35, 0.02]).seg([x, y, 0], [x + l * 0.5, y - l * 0.6, -0.02]); } const ink = []; for (let i = 0; i <= 14; i++) ink.push([-0.55 + i * 0.06, -0.5 + Math.sin(i * 1.3) * 0.025, 0]); b.poly(ink); },
  // vérifie : une loupe
  lens: (b) => { b.circle([-0.08, 0.08, 0], 0.3, 40).circle([-0.08, 0.08, 0], 0.24, 40); b.seg([0.13, -0.13, 0], [0.44, -0.44, 0]).seg([0.16, -0.1, 0], [0.47, -0.41, 0]); },
  // oriente : une boussole, l'aiguille en losange
  compass: (b) => { b.circle([0, 0, 0], 0.42, 48).circle([0, 0, 0], 0.05, 12); b.poly([[0, 0.34, 0], [0.07, 0, 0], [0, -0.34, 0], [-0.07, 0, 0]], true); b.seg([0, 0.34, 0], [0, -0.34, 0]); },
  // structure : trois plans empilés, reliés aux coins
  planes: (b) => { [-0.3, 0, 0.3].forEach((y, i) => b.rect([0, y, 0], 0.72, 0.5, 'y', (i - 1) * 0.12)); [[-0.36, -0.25], [0.36, -0.25], [0.36, 0.25], [-0.36, 0.25]].forEach(([x, z]) => b.seg([x, -0.3, z], [x, 0.3, z])); },
  // assemble : des lames en éventail, comme des plans de montage
  blades: (b) => { [-0.42, -0.14, 0.14, 0.42].forEach((a, i) => { const cs = Math.cos(a), sn = Math.sin(a), q = [[-0.07, 0], [0.07, 0], [0.07, 0.62], [-0.07, 0.62]].map(([u, v]) => [u * cs - v * sn, -0.3 + u * sn + v * cs, (i - 1.5) * 0.04]); b.poly(q, true); }); },
  // donne de la voix : un diapason et ses ondes
  fork: (b) => { b.seg([-0.12, 0.05, 0], [-0.12, 0.5, 0]).seg([0.12, 0.05, 0], [0.12, 0.5, 0]).circle([0, 0.05, 0], 0.12, 16, 'z', Math.PI, TAU).seg([0, -0.07, 0], [0, -0.45, 0]); [0.26, 0.38].forEach((r) => b.circle([0, 0.3, 0], r, 14, 'z', -0.5, 0.5).circle([0, 0.3, 0], r, 14, 'z', Math.PI - 0.5, Math.PI + 0.5)); },
  // met en forme : un ruban qui ondule
  ribbon: (b) => { const A = [], B = []; for (let i = 0; i <= 18; i++) { const x = -0.5 + i / 18, y = Math.sin(i * 0.55) * 0.16, z = Math.cos(i * 0.55) * 0.14; A.push([x, y + 0.1, z]); B.push([x, y - 0.1, -z]); if (i % 2 === 0) b.seg(A[i], B[i]); } b.poly(A).poly(B); },
  // décide : le carré humain, toujours le même
  human: (b) => { b.rect([0, 0, 0], 0.66, 0.66).rect([0, 0, 0], 0.16, 0.16); },
};

// Petit halo doux (une tache, sans rayons ni couronne)
const glowMat = (color) => new ShaderMaterial({
  transparent: true, depthWrite: false, blending: AdditiveBlending,
  uniforms: { uColor: { value: new Color(color) }, uA: { value: 0 } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }',
  fragmentShader: 'uniform vec3 uColor; uniform float uA; varying vec2 vUv; void main(){ float d = length(vUv - .5) * 2.; gl_FragColor = vec4(uColor, pow(max(0., 1. - d), 2.6) * uA); }',
});
// Fibre : base discrète, pointillés qui avancent quand elle transporte, pleine une fois le travail passé
const fiberMat = (color) => new ShaderMaterial({
  transparent: true, depthWrite: false, blending: AdditiveBlending,
  uniforms: { uColor: { value: new Color(color) }, uTime: { value: 0 }, uOn: { value: 0 }, uDone: { value: 0 }, uHead: { value: -1 } },
  vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }',
  fragmentShader: `uniform vec3 uColor; uniform float uTime; uniform float uOn; uniform float uDone; uniform float uHead; varying vec2 vUv;
  void main(){
    float dash = step(.55, fract(vUv.x * 26. - uTime * 1.4));
    float trail = smoothstep(.0, .25, uHead - vUv.x) * step(vUv.x, uHead);
    float a = .07 + uDone * .3 + uOn * dash * .35 + trail * .5;
    gl_FragColor = vec4(mix(uColor, vec3(1.), trail * .3), a);
  }`,
});

/** La scène 3D seule : on lui donne un état de mission, elle le dessine. */
function createRoom(stage, { compact }) {
  const canvas = document.createElement('canvas'); canvas.className = 'ag__gl'; canvas.setAttribute('aria-hidden', 'true');
  stage.prepend(canvas);
  const renderer = new WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, compact ? 1.5 : 1.75));
  renderer.toneMapping = ACESFilmicToneMapping; renderer.toneMappingExposure = 1.15;
  const scene = new Scene(), camera = new PerspectiveCamera(32, 1, 0.1, 60);

  // Les reflets : l'environnement de studio, précalculé une fois ; une lumière de face et une lumière de découpe.
  const pmrem = new PMREMGenerator(renderer), env = studio();
  scene.environment = pmrem.fromScene(env, 0.035).texture;
  pmrem.dispose(); env.traverse((o) => { o.geometry?.dispose(); o.material?.dispose(); });
  const key = new DirectionalLight(0xdde6ff, 2.2); key.position.set(-3, 4, 5);
  const rim = new DirectionalLight(0x5b8cff, 1.6); rim.position.set(3, 2.5, -4);
  scene.add(key, rim);
  // Les surfaces des modèles (repérées par le nom de leur matériau dans Blender).
  const mats = {
    metal: new MeshStandardMaterial({ color: 0x9aa3b2, metalness: 1, roughness: 0.3, envMapIntensity: 1.35 }),
    verre: new MeshPhysicalMaterial({ color: 0x141a24, metalness: 0.2, roughness: 0.1, clearcoat: 1, clearcoatRoughness: 0.04, envMapIntensity: 1.8 }),
    ceramique: new MeshStandardMaterial({ color: 0xe6eaf2, roughness: 0.42, metalness: 0, envMapIntensity: 0.9 }),
  };
  const shared = new Set(Object.values(mats));

  const FLOOR_Y = compact ? -2.7 : -1.05;
  const floor = new GridHelper(16, 32, 0x2f80ff, 0x2f80ff);
  floor.material.transparent = true; floor.material.opacity = 0.07; floor.material.depthWrite = false; floor.position.y = FLOOR_Y; scene.add(floor);
  // Le sol miroir, sur ordinateur seulement (il redessine la salle une seconde fois).
  let mirror = null;
  if (!compact) {
    mirror = new Reflector(new PlaneGeometry(16, 10), { clipBias: 0.003, textureWidth: 512, textureHeight: 256, color: 0xffffff, shader: MIRROR });
    mirror.rotation.x = -Math.PI / 2; mirror.position.y = FLOOR_Y - 0.002;
    Object.assign(mirror.material, { transparent: true, blending: AdditiveBlending, depthWrite: false });
    scene.add(mirror);
  }
  const world = new Group(); scene.add(world);
  let agents = [], fibers = [], packet = null, layout = [], mission = null, models = null, asked = false, gone = false;

  // Les modèles arrivent quand la salle approche (ou au premier rendu) ; on refait alors l'équipe en vrais objets.
  const want = () => {
    if (asked) return; asked = true;
    loadModels().then((m) => { if (!m || gone) return; models = m; if (mission) setMission(mission); });
  };
  const near = new IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting)) { near.disconnect(); want(); } }, { rootMargin: '150% 0px' });
  near.observe(stage);

  const place = (n, i) => {
    // Téléphone : un zigzag vertical, centré, assez serré pour que toute l'équipe tienne dans la scène.
    if (compact) return new Vector3(i % 2 ? 0.95 : -0.95, ((n - 1) / 2 - i) * 0.82, i % 2 ? -0.2 : 0.2);
    const u = n > 1 ? i / (n - 1) : 0.5, x = (u - 0.5) * 7.6;
    return new Vector3(x, Math.sin(u * Math.PI * 2.2) * 0.22, -1.1 * Math.sin(u * Math.PI) + 0.25);
  };
  const clear = () => {
    // Les géométries des modèles et les matériaux communs servent aux trois missions : on ne les libère pas.
    world.traverse((o) => { if (!o.userData.shared) o.geometry?.dispose(); if (o.material && !shared.has(o.material)) o.material.dispose(); });
    world.clear(); agents = []; fibers = []; packet = null;
  };
  function setMission(m) {
    clear(); mission = m;
    const n = m.kinds.length, accent = new Color(m.color);
    layout = m.kinds.map((_, i) => place(n, i));
    agents = m.kinds.map((kind, i) => {
      const g = new Group(); g.position.copy(layout[i]);
      const human = kind === 'human', col = human ? new Color('#F4F7FF') : accent.clone().lerp(new Color('#ffffff'), 0.15);
      const src = models?.[kind];
      let shape, lum = null, cera = null;
      if (src) {
        // Le vrai objet : ses filets de lumière prennent la couleur de la mission (blanc bleuté pour la personne).
        shape = src.clone(true); shape.position.set(0, 0, 0); shape.rotation.set(0, 0, 0); shape.scale.setScalar(compact ? 1.1 : 1.2);
        lum = new MeshStandardMaterial({ color: 0x000000, emissive: human ? new Color('#cfe0ff') : new Color(m.color), emissiveIntensity: 0.2, roughness: 1, metalness: 0 });
        if (human) cera = mats.ceramique.clone();
        shape.traverse((o) => {
          if (!o.isMesh) return;
          const n = o.material?.name;
          o.material = n === 'lumiere' ? lum : n === 'verre' ? mats.verre : n === 'ceramique' ? (cera || mats.ceramique) : mats.metal;
        });
      } else {
        const b = lines(); SHAPES[kind](b);
        shape = new LineSegments(b.geo(), new LineBasicMaterial({ color: col, transparent: true, opacity: 0.3, depthWrite: false }));
      }
      const glow = new Mesh(new PlaneGeometry(1.7, 1.7), glowMat(human ? '#9DB8FF' : m.color)); glow.position.z = -0.15;
      const core = new Mesh(new SphereGeometry(0.035, 10, 8), new MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.4 }));
      core.visible = !src;
      // La barre de regard : la même pour tous, elle s'allume quand l'agent travaille.
      const bar = new Mesh(new BoxGeometry(0.5, 0.018, 0.018), new MeshBasicMaterial({ color: col, transparent: true, opacity: 0.2 })); bar.position.y = -0.66;
      g.add(glow, shape, core, bar); world.add(g);
      return { g, shape, glow, core, bar, human, lum, cera, model: !!src, lit: 0, spin: Math.random() * TAU };
    });
    for (let i = 0; i < n - 1; i++) {
      const a = layout[i], c = layout[i + 1], mid = a.clone().add(c).multiplyScalar(0.5);
      mid.y += compact ? 0.05 : 0.55; mid.z += compact ? 0.35 : 0.25;
      if (compact) mid.x *= 0.2;
      const curve = new CatmullRomCurve3([a.clone(), mid, c.clone()]);
      const tube = new Mesh(new TubeGeometry(curve, 56, 0.011, 5, false), fiberMat(i === n - 2 ? '#9DB8FF' : m.color));
      world.add(tube); fibers.push({ tube, curve });
    }
    const pm = new Group();
    pm.add(new Mesh(new SphereGeometry(0.05, 12, 10), new MeshBasicMaterial({ color: '#ffffff' })));
    const pg = new Mesh(new PlaneGeometry(0.9, 0.9), glowMat(m.color)); pg.material.uniforms.uA.value = 0.9; pm.add(pg);
    pm.visible = false; world.add(pm); packet = { g: pm, glow: pg };
  }

  let W = 1, H = 1;
  const resize = () => {
    W = stage.clientWidth || 1; H = stage.clientHeight || 1;
    renderer.setSize(W, H, false); camera.aspect = W / H;
    // Cadrage : toute l'équipe tient dans le champ, quelle que soit la largeur.
    const tan = Math.tan((camera.fov * Math.PI) / 360);
    if (compact) {
      // En hauteur : les six étages et leurs noms ; en largeur : le zigzag et ses étiquettes.
      const dist = Math.max(5.7 / 2 / tan, 3.6 / 2 / tan / camera.aspect);
      camera.position.set(0, 0.1, dist); camera.lookAt(0, -0.14, 0);
    } else {
      const dist = (8.6 / 2 / tan) / Math.min(camera.aspect, 2.4) * 1.02;
      camera.position.set(0, 1.1, Math.max(6.4, dist)); camera.lookAt(0, 0.05, 0);
    }
    camera.updateProjectionMatrix();
    // Le reflet est calculé à mi-résolution : assez net pour un sol brillant, deux fois moins coûteux.
    const pr = renderer.getPixelRatio();
    mirror?.getRenderTarget().setSize(Math.max(64, Math.round(W * pr * 0.5)), Math.max(64, Math.round(H * pr * 0.5)));
  };
  const ro = new ResizeObserver(resize); ro.observe(stage); resize();

  const v = new Vector3();
  /** Position à l'écran (px, dans la scène) d'un point au-dessus (dy > 0) ou au-dessous d'un agent. */
  const project = (i, dy = 0) => { v.copy(layout[i]); v.y += dy; v.project(camera); return { x: (v.x * 0.5 + 0.5) * W, y: (-v.y * 0.5 + 0.5) * H }; };

  let px = 0, py = 0;
  const html = document.documentElement;
  function render(st, time, dt, pointer) {
    if (!mission) return;
    want();
    // « Réduire les effets » ou machine trop lente : le sol garde sa grille mais perd son reflet.
    if (mirror) mirror.visible = !html.classList.contains('fx-off') && !html.classList.contains('fx-lite');
    px += ((pointer?.x || 0) - px) * 0.05; py += ((pointer?.y || 0) - py) * 0.05;
    world.rotation.y = px * 0.12; world.rotation.x = py * 0.05;
    st.agents.forEach((a, i) => {
      const A = agents[i]; if (!A) return;
      const target = a.state === 'work' ? 1 : a.state === 'wait' ? 0.75 + 0.25 * Math.sin(time * TAU * 0.6) : a.state === 'done' ? 0.62 : 0.24;
      A.lit += (target - A.lit) * (1 - Math.exp(-dt * 6));
      if (A.model) {
        // Le vrai objet : ses filets s'allument quand il travaille ; la personne s'éclaire doucement quand on l'attend.
        A.lum.emissiveIntensity = 0.12 + A.lit * 3.4;
        if (A.cera) A.cera.emissive.setRGB(0.32, 0.42, 0.75).multiplyScalar(a.state === 'wait' ? 0.12 + 0.12 * Math.sin(time * TAU * 0.6) : 0);
        A.glow.material.uniforms.uA.value = A.lit * (A.human ? 0.2 : 0.3);
      } else {
        A.shape.material.opacity = 0.18 + A.lit * 0.82;
        A.glow.material.uniforms.uA.value = A.lit * (A.human ? 0.4 : 0.55);
        A.core.material.opacity = 0.25 + A.lit * 0.75;
      }
      A.bar.material.opacity = 0.12 + (a.state === 'work' ? 0.55 + 0.3 * Math.sin(time * TAU * 1.1) : a.state === 'done' ? 0.45 : a.state === 'wait' ? 0.6 : 0);
      A.bar.scale.x = a.state === 'work' ? 0.3 + 0.7 * a.w : a.state === 'idle' ? 0.3 : 1;
      if (!A.human) { A.spin += dt * (0.15 + (a.state === 'work' ? 1.1 : 0)); A.shape.rotation.y = Math.sin(A.spin) * (A.model ? 0.45 : 0.6); A.shape.rotation.x = Math.sin(A.spin * 0.7) * 0.12; }
      else A.g.scale.setScalar(a.state === 'wait' ? 1 + 0.05 * Math.sin(time * TAU * 0.6) : 1);
      A.g.position.y = layout[i].y + Math.sin(time * 0.8 + i) * 0.04;
      A.glow.quaternion.copy(camera.quaternion);
    });
    fibers.forEach((F, i) => {
      const u = F.tube.material.uniforms; u.uTime.value = time;
      const done = st.T >= i + 1 ? 1 : 0, on = st.packet && st.packet.from === i ? 1 : 0;
      u.uDone.value += (done - u.uDone.value) * (1 - Math.exp(-dt * 5)); u.uOn.value = on;
      u.uHead.value = on ? st.packet.f * 1.05 : -1;
    });
    if (st.packet && fibers[st.packet.from]) {
      packet.g.visible = true; packet.g.position.copy(fibers[st.packet.from].curve.getPointAt(clamp(st.packet.f)));
      packet.glow.quaternion.copy(camera.quaternion);
    } else packet.g.visible = false;
    renderer.render(scene, camera);
  }
  return {
    setMission, render, project, resize,
    destroy() {
      gone = true; ro.disconnect(); near.disconnect(); clear();
      floor.geometry.dispose(); floor.material.dispose(); mirror?.dispose(); scene.environment?.dispose();
      shared.forEach((m) => m.dispose()); renderer.dispose(); canvas.remove();
    },
  };
}

/**
 * La salle complète : onglets, scène, bulles, journal, commandes et porte humaine.
 * Renvoie { scroll(p), destroy() } ; scroll(p) fait avancer la mission pilotée par le défilement.
 */
export function initAgentRoom({ els, texts, ui, reduced, compact }) {
  const { stage, log, tabs, ctl, note, section } = els;
  const T = texts;
  let room = null;
  if (!reduced) { try { room = createRoom(stage, { compact }); } catch { room = null; } }
  section.classList.toggle('is-flat', !room);

  // État de chaque mission : temps visé, temps affiché (lissé), validation, lecture.
  const S = MISSIONS.map((m) => ({ m, t: 0, shown: 0, approved: false, playing: false }));
  let cur = 0, visible = false, raf = 0, last = performance.now(), time = 0, lastSig = '';
  const pointer = { x: 0, y: 0 };

  // Onglets
  tabs.innerHTML = MISSIONS.map((m, i) => {
    const t = T.missions[m.id];
    return `<button type="button" role="tab" data-m="${i}" style="--c:${m.color}" aria-selected="${i === 0}"><i>${String(i + 1).padStart(2, '0')}</i><span>${esc(t.tab)}</span><b>${esc(t.status)}</b></button>`;
  }).join('');

  // Noms sous les agents, une bulle au-dessus de celui qui parle, schéma à plat si la 3D n'est pas là.
  const layer = document.createElement('div'); layer.className = 'ag__layer'; stage.append(layer);
  let tags = [], bubbles = [], slot = 0, lastSpeaker = null;
  const flat = document.createElement('ol'); flat.className = 'ag__flat'; stage.append(flat);

  function build() {
    const m = MISSIONS[cur], t = T.missions[m.id];
    room?.setMission(m);
    layer.innerHTML = '';
    tags = m.kinds.map((k, i) => { const d = document.createElement('div'); d.className = 'ag__tag' + (k === 'human' ? ' is-human' : ''); d.innerHTML = `<b>${esc(t.agents[i])}</b><span>${esc(T.kinds[k])}</span>`; layer.append(d); return d; });
    bubbles = [0, 1].map(() => { const d = document.createElement('div'); d.className = 'ag__bubble'; layer.append(d); return d; });
    flat.innerHTML = m.kinds.map((k, i) => `<li class="ag__step${k === 'human' ? ' is-human' : ''}"><b>${esc(t.agents[i])}</b><span>${esc(t.say[i])}</span></li>`).join('');
    section.style.setProperty('--c', m.color);
    note.innerHTML = `<span class="badge badge--${m.id === 'site' ? 'vision' : 'prototype'}">${esc(t.status)}</span> ${esc(t.note)}`;
    $$tab().forEach((b, i) => { b.setAttribute('aria-selected', i === cur); b.classList.toggle('is-on', i === cur); });
    lastSig = ''; draw(true);
  }
  const $$tab = () => [...tabs.querySelectorAll('button')];

  // Commandes : pour les missions jouées au clic (lecture, pause, passer, revoir) ; la porte pour toutes.
  ctl.innerHTML = `<button type="button" class="ag__btn" data-act="play"></button><button type="button" class="ag__btn" data-act="skip">${esc(ui.skip)}</button>
    <button type="button" class="ag__gate" data-act="gate"><i></i><span>${esc(T.gate)}</span></button><span class="ag__hint">${esc(ui.scroll)}</span>`;
  const $play = ctl.querySelector('[data-act="play"]'), $skip = ctl.querySelector('[data-act="skip"]'), $gate = ctl.querySelector('[data-act="gate"]'), $hint = ctl.querySelector('.ag__hint');

  function approve() {
    const s = S[cur]; if (s.approved) return;
    s.approved = true;
    if (s.m.mode === 'play') s.playing = true;
    window.dispatchEvent(new CustomEvent('agents:approve', { detail: { mission: s.m.id } }));
    draw(true);
  }
  ctl.addEventListener('click', (e) => {
    const b = e.target.closest('[data-act]'); if (!b) return;
    const s = S[cur], st = missionState(s.m, s.shown, s.approved);
    if (b.dataset.act === 'gate') return approve();
    if (b.dataset.act === 'play') {
      if (st.done) { s.t = s.shown = 0; s.approved = false; s.playing = true; }
      else s.playing = !s.playing;
    }
    if (b.dataset.act === 'skip') { s.t = s.approved ? s.m.kinds.length : gateAt(s.m); if (reduced) s.shown = s.t; }
    draw(true);
  });
  tabs.addEventListener('click', (e) => {
    const b = e.target.closest('[data-m]'); if (!b) return;
    cur = +b.dataset.m; const s = S[cur];
    if (s.m.mode === 'play' && !s.approved) { s.t = s.shown = 0; s.playing = true; if (reduced) s.t = s.shown = gateAt(s.m); }
    build();
  });
  // Flèches gauche et droite entre les onglets, comme attendu pour une liste d'onglets.
  tabs.addEventListener('keydown', (e) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const n = MISSIONS.length, next = (cur + (e.key === 'ArrowRight' ? 1 : n - 1)) % n;
    $$tab()[next].click(); $$tab()[next].focus();
  });

  // Dessin : la scène et le DOM, à partir de l'état pur de la mission.
  function draw(force = false) {
    const s = S[cur], m = s.m, t = T.missions[m.id], st = missionState(m, s.shown, s.approved);
    // Journal : écrit d'après l'état, jamais d'après l'historique (on peut reculer).
    const sig = `${cur}|${st.logs}|${st.waiting}|${st.done}|${s.playing}|${s.approved}`;
    if (force || sig !== lastSig) {
      lastSig = sig;
      log.innerHTML = `<p class="ag__logh">${esc(ui.log)} · ${esc(t.title)}</p>` + t.log.slice(0, st.logs).map((l, i) => `<p class="${i === st.logs - 1 ? 'is-new' : ''}${i === m.kinds.length - 1 ? ' is-human' : ''}"><span>${String(i + 1).padStart(2, '0')}</span> <b>${esc(t.agents[i])}</b> ${esc(l)}</p>`).join('')
        + (st.waiting ? `<p class="is-wait"><span>··</span> ${esc(T.gateWait)}</p>` : '') + (st.done ? `<p class="is-done"><span>✓</span> ${esc(T.done)}</p>` : '');
      $gate.hidden = !st.waiting;
      const play = m.mode === 'play';
      $play.hidden = !play; $skip.hidden = !play || st.done || st.waiting; $hint.hidden = play || st.waiting || st.done;
      $play.textContent = st.done ? ui.replay : s.playing ? ui.pause : ui.play;
      [...flat.children].forEach((li, i) => { const a = st.agents[i]; li.className = `ag__step is-${a.state}${m.kinds[i] === 'human' ? ' is-human' : ''}`; });
      section.classList.toggle('is-waiting', st.waiting);
    }
    if (!room) return st;
    // Noms et bulles collés aux agents (positions projetées de la 3D).
    tags.forEach((d, i) => { const p = room.project(i, compact ? -0.5 : -0.82); d.style.transform = `translate(${p.x.toFixed(1)}px, ${p.y.toFixed(1)}px)`; d.className = `ag__tag is-${st.agents[i].state}${m.kinds[i] === 'human' ? ' is-human' : ''}`; });
    // Deux bulles en réserve : quand l'orateur change, l'ancienne s'efface pendant que la nouvelle apparaît.
    const speaker = st.talking[0];
    if (speaker !== lastSpeaker) { if (speaker != null) slot = 1 - slot; lastSpeaker = speaker; }
    bubbles.forEach((d, k) => {
      const i = k === slot ? speaker : null;
      if (i == null) { d.classList.remove('is-on'); return; }
      const txt = st.waiting && i === m.kinds.length - 1 ? T.gateWait : t.say[i];
      if (d.dataset.i !== String(i) || d.dataset.txt !== txt) { d.dataset.i = i; d.dataset.txt = txt; d.textContent = txt; }
      // La bulle reste entière dans la salle, même au-dessus d'un agent placé au bord.
      const p = room.project(i, compact ? 0.48 : 0.72), half = d.offsetWidth / 2, W = stage.clientWidth;
      const x = Math.min(W - half - 10, Math.max(half + 10, p.x)), y = Math.max(d.offsetHeight + 8, p.y);
      d.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px) translate(-50%, -100%)`;
      d.classList.add('is-on');
    });
    return st;
  }

  // Boucle : ne tourne que si la salle est à l'écran.
  const frame = (now) => {
    raf = requestAnimationFrame(frame);
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    // Visibilité testée ici plutôt que par un IntersectionObserver : avec l'épinglage, celui-ci rate parfois le retour à l'écran.
    const r = section.getBoundingClientRect();
    visible = r.bottom > 0 && r.top < window.innerHeight;
    if (!visible) return;
    time += dt;
    const s = S[cur];
    if (s.m.mode === 'play' && s.playing) {
      s.t = Math.min(s.approved ? s.m.kinds.length : gateAt(s.m), s.t + dt / 1.6);
      if (s.approved && s.t >= s.m.kinds.length) s.playing = false;
    }
    // Tant que la personne n'a pas validé, rien ne dépasse la porte, même si l'on a défilé plus loin.
    const cap = s.approved ? s.m.kinds.length : gateAt(s.m);
    s.shown += (Math.min(s.t, cap) - s.shown) * (1 - Math.exp(-dt * (s.m.mode === 'scroll' ? 5 : 12)));
    const st = draw();
    room?.render(st, time, dt, pointer);
  };
  const onMove = (e) => { pointer.x = (e.clientX / window.innerWidth) * 2 - 1; pointer.y = (e.clientY / window.innerHeight) * 2 - 1; };
  window.addEventListener('pointermove', onMove, { passive: true });

  // Mouvement réduit ou sans 3D : la mission se montre d'un coup, la porte reste à franchir.
  if (reduced || !room) S.forEach((s) => { s.t = s.shown = gateAt(s.m); });
  build();
  if (!reduced) raf = requestAnimationFrame(frame); else draw(true);

  return {
    /** Mission pilotée par le défilement : p de 0 à 1 sur toute la scène épinglée. */
    scroll(p) {
      const s = S[0]; if (reduced || !room) return;
      s.t = clamp(p * 1.08) * s.m.kinds.length;
    },
    approve,
    /** Pour les vérifications automatiques : l'état interne, en lecture seule. */
    get debug() { return { cur, visible, has3d: !!room, missions: S.map((s) => ({ id: s.m.id, t: +s.t.toFixed(2), shown: +s.shown.toFixed(2), approved: s.approved })) }; },
    destroy() { cancelAnimationFrame(raf); window.removeEventListener('pointermove', onMove); room?.destroy(); layer.remove(); flat.remove(); },
  };
}

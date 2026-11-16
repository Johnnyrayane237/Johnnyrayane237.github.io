// Pipeline en 3D — « la machine » : sept plateformes reliées par des rails lumineux.
// Le paquet (l'e-mail) avance avec le défilement, se dédouble à la décision,
// puis attend à l'étape « Brouillon » qu'une personne valide.
// Le rendu ne tourne que lorsque la section est à l'écran.
import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, Mesh, Vector3, Vector2, Color,
  MeshStandardMaterial, MeshBasicMaterial, ShaderMaterial, LineBasicMaterial, LineSegments, PointsMaterial,
  BufferGeometry, BufferAttribute, BoxGeometry, PlaneGeometry, SphereGeometry, IcosahedronGeometry, OctahedronGeometry,
  TorusGeometry, RingGeometry, TubeGeometry, CubicBezierCurve3, AmbientLight, DirectionalLight, PointLight,
  CanvasTexture, Sprite, SpriteMaterial, Points, AdditiveBlending, DoubleSide, Plane, Raycaster,
} from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

const C = { blue: 0x2f80ff, ice: 0x8ab8ff, green: 0x35e08b, amber: 0xffb347, red: 0xff5a5a };
// Place des sept étapes sur le sol (x, z) : la décision ouvre une fourche.
const POS = [[-9, 0], [-6, 0.9], [-3, 0], [0, 0.6], [2.8, -1.7], [4.3, 1.9], [7.4, 0.2]];
const ACCENT = [C.blue, C.blue, C.ice, C.blue, C.amber, C.red, C.green];
// Rails : départ, arrivée, instant de départ (en « étapes »), couleur.
const EDGES = [[0, 1, 0.35, C.blue], [1, 2, 1.35, C.blue], [2, 3, 2.35, C.blue], [3, 4, 3.35, C.amber], [3, 5, 4.35, C.red], [4, 6, 5.35, C.green], [5, 6, 5.35, C.green]];
const DUR = 0.75;
const IN = 0.085, OUT = 0.9; // part du défilement réservée au plan large d'ouverture et de fin
// Point que la caméra regarde, selon l'avancement (étape, x, z).
const FOCUS = [[-0.7, -9, 0], [0.35, -9, 0], [1.1, -6, 0.9], [1.35, -6, 0.9], [2.1, -3, 0], [2.35, -3, 0], [3.1, 0, 0.6], [3.35, 0, 0.6], [4.1, 2.6, -0.9], [5.1, 3.6, 1.1], [5.35, 3.8, 1.0], [6.1, 6.0, 0.3], [9, 6.0, 0.3]];

const clamp01 = (x) => Math.min(1, Math.max(0, x));
const sstep = (a, b, x) => { const t = clamp01((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const lerp = (a, b, t) => a + (b - a) * t;

function glowTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d'), gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.22, 'rgba(255,255,255,.55)'); gr.addColorStop(0.55, 'rgba(255,255,255,.13)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
  return new CanvasTexture(c);
}
// Liseré néon du dessus d'une plateforme (rectangle arrondi).
function rimTexture() {
  const W = 512, H = 407, pad = 56, r = 26;
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const g = c.getContext('2d');
  const path = () => { const x = pad, y = pad, w = W - pad * 2, h = H - pad * 2; g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); };
  g.strokeStyle = '#fff'; g.shadowColor = '#fff';
  g.lineWidth = 10; g.shadowBlur = 34; g.globalAlpha = 0.5; path(); g.stroke();
  g.lineWidth = 4; g.shadowBlur = 10; g.globalAlpha = 1; path(); g.stroke();
  return new CanvasTexture(c);
}

// Petit objet flottant propre à chaque étape.
function makeGlyph(i, accent) {
  const g = new Group(), mats = [];
  const M = (base = 0.1) => { const m = new MeshStandardMaterial({ color: 0x1c2942, emissive: accent.clone(), emissiveIntensity: base, metalness: 0.15, roughness: 0.4, flatShading: true }); m.userData.base = base; mats.push(m); return m; };
  const add = (geo, mat, x = 0, y = 0, z = 0) => { const m = new Mesh(geo, mat); m.position.set(x, y, z); g.add(m); return m; };
  const white = new MeshBasicMaterial({ color: 0xeaf1ff });
  if (i === 0) { // Gmail : une enveloppe
    add(new BoxGeometry(0.74, 0.48, 0.06), M());
    const pts = new Float32Array([-0.37, 0.24, 0, 0, -0.03, 0, 0, -0.03, 0, 0.37, 0.24, 0]);
    [0.034, -0.034].forEach((z) => { const lg = new BufferGeometry(); lg.setAttribute('position', new BufferAttribute(pts, 3)); const l = new LineSegments(lg, new LineBasicMaterial({ color: 0xeaf1ff })); l.position.z = z; g.add(l); });
  } else if (i === 1) { // Préparer : des couches de contexte
    for (let k = 0; k < 3; k++) add(new BoxGeometry(0.66, 0.06, 0.46), M(), 0, (k - 1) * 0.17, 0).rotation.y = (k - 1) * 0.28;
  } else if (i === 2) { // Claude : un noyau dans sa cage
    add(new IcosahedronGeometry(0.2, 0), M(0.45));
    const shell = new Mesh(new IcosahedronGeometry(0.42, 1), new MeshBasicMaterial({ color: accent, wireframe: true, transparent: true, opacity: 0.5 }));
    g.add(shell); g.userData.shell = shell;
  } else if (i === 3) { // Décision : un losange
    add(new OctahedronGeometry(0.36, 0), M()).scale.y = 1.3;
  } else if (i === 4) { // Brouillon : une feuille
    add(new BoxGeometry(0.5, 0.66, 0.04), M());
    [0.17, 0.03, -0.11].forEach((y, k) => [0.025, -0.025].forEach((z) => add(new BoxGeometry(k === 2 ? 0.2 : 0.34, 0.035, 0.008), white, k === 2 ? -0.07 : 0, y, z)));
  } else if (i === 5) { // Alerte : un point d'exclamation cerclé
    add(new TorusGeometry(0.34, 0.036, 10, 44), M());
    add(new BoxGeometry(0.075, 0.27, 0.075), M(0.45), 0, 0.06, 0);
    add(new SphereGeometry(0.052, 12, 10), M(0.45), 0, -0.17, 0);
  } else { // Journal : un tableau de cellules
    for (let k = 0; k < 9; k++) add(new BoxGeometry(0.17, 0.17, 0.17), M(), ((k % 3) - 1) * 0.23, (1 - Math.floor(k / 3)) * 0.23, 0);
  }
  return { g, mats };
}

const TUBE_VERT = 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }';
const TUBE_FRAG = /* glsl */ `
uniform float uFill; uniform vec3 uColor; uniform float uTime; varying vec2 vUv;
void main(){
  float on = step(.0005, uFill);
  float lit = smoothstep(uFill + .006, uFill - .006, vUv.x) * on;
  float head = smoothstep(.08, 0., abs(vUv.x - uFill)) * on * step(uFill, .9995);
  float dash = .72 + .28 * sin(vUv.x * 44. - uTime * 5.);
  vec3 col = mix(vec3(.022, .03, .055), uColor * dash * 1.2, lit) + vec3(1.) * head * .8;
  gl_FragColor = vec4(col, 1.);
  #include <colorspace_fragment>
}`;
const TUBE_GLOW = /* glsl */ `
uniform float uFill; uniform vec3 uColor; varying vec2 vUv;
void main(){
  float on = step(.0005, uFill);
  float lit = smoothstep(uFill + .01, uFill - .01, vUv.x) * on;
  float head = smoothstep(.1, 0., abs(vUv.x - uFill)) * on * step(uFill, .9995);
  gl_FragColor = vec4(uColor, lit * .17 + head * .55);
  #include <colorspace_fragment>
}`;
const FLOOR_FRAG = /* glsl */ `
uniform vec3 uFocus; uniform float uRadius; uniform float uTime; varying vec3 vW;
void main(){
  vec2 g = abs(fract(vW.xz / .6) - .5);
  float d = length(g);
  float dotA = smoothstep(.065, .03, d);
  float dist = distance(vW.xz, uFocus.xz);
  float fade = smoothstep(uRadius, uRadius * .2, dist);
  float wave = smoothstep(.7, 0., abs(dist - mod(uTime * 1.6, uRadius))) * (1. - dist / uRadius);
  vec3 col = mix(vec3(.2, .26, .4), vec3(.1, .34, 1.), clamp(wave, 0., 1.));
  gl_FragColor = vec4(col, dotA * fade * (.5 + wave * .9));
  #include <colorspace_fragment>
}`;

// compact : version téléphone (écran étroit, en hauteur) — moins de pixels, étiquettes près du paquet seulement.
export function initPipeline3D({ section, mount, labels, compact = false }) {
  const root = document.documentElement;
  const canvas = document.createElement('canvas'); canvas.className = 'pipe3d'; canvas.setAttribute('aria-hidden', 'true');
  const renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, compact ? 1.5 : 2));
  const shade = document.createElement('i'); shade.className = 'pipe3d__shade'; shade.setAttribute('aria-hidden', 'true');
  mount.prepend(canvas, shade);
  section.classList.add('is-3d');

  const scene = new Scene();
  const camera = new PerspectiveCamera(30, 1, 0.1, 120);
  const tex = { glow: glowTexture(), rim: rimTexture() };
  const time = { value: 0 };

  // Lumières : une ambiance froide, un projecteur, et la souris qui éclaire.
  scene.add(new AmbientLight(0x7d93c4, 1.25));
  const sun = new DirectionalLight(0xffffff, 1.7); sun.position.set(-5, 9, 6); scene.add(sun);
  const cursorLight = new PointLight(0xa8c8ff, 0, 9, 2); cursorLight.position.set(0, 1.2, 3); scene.add(cursorLight);

  // Sol : une grille de points, comme le canevas de n8n.
  const floorU = { uFocus: { value: new Vector3() }, uRadius: { value: 16 }, uTime: time };
  const floor = new Mesh(new PlaneGeometry(90, 60), new ShaderMaterial({ transparent: true, depthWrite: false, uniforms: floorU,
    vertexShader: 'varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }', fragmentShader: FLOOR_FRAG }));
  floor.rotation.x = -Math.PI / 2; scene.add(floor);

  // Plateformes
  const platGeo = new RoundedBoxGeometry(1.9, 0.2, 1.4, 4, 0.08);
  const nodes = POS.map(([x, z], i) => {
    const accent = new Color(ACCENT[i]);
    const g = new Group(); g.position.set(x, 0, z);
    const body = new Mesh(platGeo, new MeshStandardMaterial({ color: 0x141b2c, metalness: 0.3, roughness: 0.42, emissive: accent.clone(), emissiveIntensity: 0 })); body.position.y = 0.1;
    const rim = new Mesh(new PlaneGeometry(2.432, 1.933), new MeshBasicMaterial({ map: tex.rim, color: accent.clone(), transparent: true, opacity: 0.2, blending: AdditiveBlending, depthWrite: false })); rim.rotation.x = -Math.PI / 2; rim.position.y = 0.206;
    const halo = new Mesh(new PlaneGeometry(4.6, 3.9), new MeshBasicMaterial({ map: tex.glow, color: accent.clone(), transparent: true, opacity: 0, blending: AdditiveBlending, depthWrite: false })); halo.rotation.x = -Math.PI / 2; halo.position.y = 0.012;
    const led = new Mesh(new SphereGeometry(0.045, 12, 8), new MeshBasicMaterial({ color: 0x3a4152 })); led.position.set(0.78, 0.225, 0.53);
    const mkRing = () => { const r = new Mesh(new RingGeometry(1.0, 1.05, 72), new MeshBasicMaterial({ color: accent.clone(), transparent: true, opacity: 0, blending: AdditiveBlending, side: DoubleSide, depthWrite: false })); r.rotation.x = -Math.PI / 2; r.position.y = 0.03; return r; };
    const ring = mkRing(), ping = mkRing();
    const glyph = makeGlyph(i, accent); glyph.g.position.y = 1.0;
    g.add(body, rim, halo, led, ring, ping, glyph.g); scene.add(g);
    return { g, body, rim, halo, led, ring, ping, glyph, accent, spin: i * 0.9 };
  });

  // Rails
  const edges = EDGES.map(([a, b, t0, col]) => {
    const A = new Vector3(POS[a][0], 0.06, POS[a][1]), B = new Vector3(POS[b][0], 0.06, POS[b][1]);
    const dx = (B.x - A.x) * 0.5;
    const curve = new CubicBezierCurve3(A, new Vector3(A.x + dx, 0.06, A.z), new Vector3(B.x - dx, 0.06, B.z), B);
    const uniforms = { uFill: { value: 0 }, uColor: { value: new Color(col) }, uTime: time };
    const tube = new Mesh(new TubeGeometry(curve, 56, 0.034, 8, false), new ShaderMaterial({ uniforms, vertexShader: TUBE_VERT, fragmentShader: TUBE_FRAG }));
    const glow = new Mesh(new TubeGeometry(curve, 56, 0.13, 8, false), new ShaderMaterial({ uniforms, vertexShader: TUBE_VERT, fragmentShader: TUBE_GLOW, transparent: true, depthWrite: false, blending: AdditiveBlending }));
    scene.add(tube, glow);
    return { curve, uniforms, t0 };
  });

  // Paquets lumineux et leurs traînées
  const makeOrb = (color, size, lit) => {
    const col = new Color(color), g = new Group();
    const core = new Mesh(new SphereGeometry(size, 18, 12), new MeshBasicMaterial({ color: 0xffffff }));
    const halo = new Sprite(new SpriteMaterial({ map: tex.glow, color: col.clone(), blending: AdditiveBlending, depthWrite: false, transparent: true })); halo.scale.setScalar(size * 10);
    g.add(core, halo);
    let light = null; if (lit) { light = new PointLight(col.clone(), 11, 7, 2); g.add(light); }
    const trail = [];
    for (let k = 0; k < 14; k++) { const s = new Sprite(new SpriteMaterial({ map: tex.glow, color: col.clone(), blending: AdditiveBlending, depthWrite: false, transparent: true, opacity: 0 })); s.scale.setScalar(size * (6 - k * 0.32)); scene.add(s); trail.push(s); }
    g.visible = false; scene.add(g);
    return { g, halo, light, trail, col, size };
  };
  const tickOrb = (o, vis) => {
    o.g.visible = vis > 0.01; o.g.scale.setScalar(Math.max(vis, 0.001));
    o.halo.material.color.copy(o.col); if (o.light) { o.light.color.copy(o.col); o.light.intensity = 11 * vis; }
    let prev = o.g.position;
    o.trail.forEach((s, k) => {
      if (vis <= 0.01) { s.position.copy(o.g.position); s.material.opacity = 0; return; }
      s.position.lerp(prev, 0.42);
      s.material.opacity = vis * Math.min(1, s.position.distanceTo(o.g.position) * 2.4) * (1 - k / o.trail.length) * 0.75;
      s.material.color.copy(o.col); prev = s.position;
    });
  };
  const orbA = makeOrb(C.ice, 0.11, true), orbB = makeOrb(C.red, 0.085, false);
  const logA = makeOrb(C.green, 0.06, false), logB = makeOrb(C.green, 0.06, false);
  const sent = makeOrb(C.green, 0.1, false);

  // Éclats de la validation
  const BN = 60, bPos = new Float32Array(BN * 3), bDir = [];
  for (let k = 0; k < BN; k++) { const a = Math.random() * Math.PI * 2, e = Math.random() * 1.2 + 0.15, s = 1.1 + Math.random() * 2.4; bDir.push([Math.cos(a) * Math.cos(e) * s, Math.sin(e) * s, Math.sin(a) * Math.cos(e) * s]); }
  const bGeo = new BufferGeometry(); bGeo.setAttribute('position', new BufferAttribute(bPos, 3));
  const burst = new Points(bGeo, new PointsMaterial({ map: tex.glow, color: C.green, size: 0.2, transparent: true, opacity: 0, blending: AdditiveBlending, depthWrite: false }));
  burst.frustumCulled = false; scene.add(burst);

  // Poussières en suspension, pour la profondeur
  const DN = 240, dPos = new Float32Array(DN * 3);
  for (let k = 0; k < DN; k++) { dPos[k * 3] = -14 + Math.random() * 26; dPos[k * 3 + 1] = 0.3 + Math.random() * 4.2; dPos[k * 3 + 2] = -7 + Math.random() * 13; }
  const dGeo = new BufferGeometry(); dGeo.setAttribute('position', new BufferAttribute(dPos, 3));
  const dust = new Points(dGeo, new PointsMaterial({ map: tex.glow, color: C.ice, size: 0.07, transparent: true, opacity: 0.55, blending: AdditiveBlending, depthWrite: false }));
  scene.add(dust);

  // ---------- État ----------
  let W = 1, H = 1, aspect = 1.6;
  let p = 0, f = -0.7, dirty = true, visible = false, validated = false, vClock = -1;
  let raf = 0, last = performance.now(), camReady = false, inside = false;
  const mouse = new Vector2(0, 0), ray = new Raycaster(), lightPlane = new Plane(new Vector3(0, 1, 0), -1.2);
  const foc = { x: -9, z: 0 }, look = new Vector3(), want = new Vector3(), wantLook = new Vector3(), camPos = new Vector3(), camLook = new Vector3(), tmp = new Vector3(), hit = new Vector3();
  const amber = new Color(C.amber), green = new Color(C.green), ice = new Color(C.ice), grey = new Color(0x3a4152), mix = new Color();
  const N4 = new Vector3(POS[4][0], 0.55, POS[4][1]);
  const a = new Array(POS.length).fill(0);

  const focusAt = (x) => {
    let k = 0; while (k < FOCUS.length - 2 && x > FOCUS[k + 1][0]) k++;
    const A = FOCUS[k], B = FOCUS[k + 1], t = sstep(A[0], B[0], x);
    foc.x = lerp(A[1], B[1], t); foc.z = lerp(A[2], B[2], t);
  };
  const atNode = (i, v, y = 0.55) => v.set(POS[i][0], y, POS[i][1]);
  const along = (e, u, v) => { edges[e].curve.getPointAt(u, v); v.y = 0.5 + Math.sin(Math.PI * u) * 0.1; return v; };
  const bez = (A, B, Cc, u, v) => v.set(lerp(lerp(A[0], B[0], u), lerp(B[0], Cc[0], u), u), lerp(lerp(A[1], B[1], u), lerp(B[1], Cc[1], u), u), lerp(lerp(A[2], B[2], u), lerp(B[2], Cc[2], u), u));

  function update(dt, still) {
    const t = time.value;
    for (let i = 0; i < a.length; i++) a[i] = sstep(i, i + 0.2, f);
    edges.forEach((e) => { e.uniforms.uFill.value = sstep(0, 1, (f - e.t0) / DUR); });

    // Validation humaine
    if (vClock >= 0 && vClock < 1) { vClock = Math.min(1, vClock + dt / 1.9); dirty = true; }
    const vk = validated ? (vClock < 0 ? 1 : sstep(0, 0.3, vClock)) : 0;
    const acc4 = mix.copy(amber).lerp(green, vk);
    const n4 = nodes[4]; n4.rim.material.color.copy(acc4); n4.halo.material.color.copy(acc4); n4.ring.material.color.copy(acc4); n4.ping.material.color.copy(acc4); n4.body.material.emissive.copy(acc4);
    n4.glyph.mats.forEach((m) => m.emissive.copy(acc4));
    edges[3].uniforms.uColor.value.copy(acc4);

    // Paquet principal
    let visA = 1;
    if (f < 0) { const u = sstep(0, 1, (f + 0.7) / 0.7); bez([-14, 3.4, -3], [-11, 3.2, -1], [POS[0][0], 0.55, POS[0][1]], u, orbA.g.position); visA = sstep(0, 0.25, u); }
    else {
      let done = false;
      for (let k = 0; k < 4 && !done; k++) {
        const t0 = edges[k].t0;
        if (f < t0) { atNode(EDGES[k][0], orbA.g.position); done = true; } else if (f < t0 + DUR) { along(k, sstep(0, 1, (f - t0) / DUR), orbA.g.position); done = true; }
      }
      if (!done) atNode(4, orbA.g.position, 0.55 + (still ? 0 : Math.sin(t * 2) * 0.03));
    }
    orbA.col.copy(ice).lerp(acc4, sstep(3.9, 4.15, f));
    tickOrb(orbA, visA);

    // Alerte : un second paquet part de la décision
    let visB = 0;
    if (f >= 4.35) { if (f < 4.35 + DUR) { along(4, sstep(0, 1, (f - 4.35) / DUR), orbB.g.position); visB = 1; } else { atNode(5, orbB.g.position); visB = 0.75; } }
    else atNode(3, orbB.g.position);
    tickOrb(orbB, visB);

    // Journal : deux petites impulsions convergent
    const lu = (f - 5.35) / DUR, lv = lu > 0 && lu < 1 ? 1 : 0;
    if (lv) { along(5, sstep(0, 1, lu), logA.g.position); along(6, sstep(0, 1, lu), logB.g.position); } else { atNode(lu <= 0 ? 4 : 6, logA.g.position); atNode(lu <= 0 ? 5 : 6, logB.g.position); }
    tickOrb(logA, lv); tickOrb(logB, lv);

    // Envoi validé : une comète verte et des éclats
    const showV = vClock > 0 && vClock < 1 && a[4] > 0.5;
    if (showV) {
      const u = 1 - (1 - vClock) ** 2.2;
      bez([N4.x, N4.y, N4.z], [4.2, 4.8, -2.8], [12, 7.5, -9], u, sent.g.position);
      const e = 1 - (1 - vClock) ** 3;
      for (let k = 0; k < BN; k++) { bPos[k * 3] = N4.x + bDir[k][0] * e; bPos[k * 3 + 1] = N4.y + bDir[k][1] * e - e * e * 0.7; bPos[k * 3 + 2] = N4.z + bDir[k][2] * e; }
      bGeo.attributes.position.needsUpdate = true; burst.material.opacity = (1 - vClock) * 0.95;
    } else { sent.g.position.copy(N4); burst.material.opacity = 0; }
    tickOrb(sent, showV ? 1 - sstep(0.7, 1, vClock) : 0);

    // Plateformes
    nodes.forEach((n, i) => {
      const on = a[i];
      const busy = i < 4 ? sstep(i + 0.02, i + 0.12, f) * (1 - sstep(i + 0.3, i + 0.45, f)) : 0;
      n.body.material.emissiveIntensity = on * 0.09;
      n.rim.material.opacity = 0.2 + on * 0.8;
      n.halo.material.opacity = on * 0.4 + busy * 0.15;
      n.led.material.color.copy(grey).lerp(i === 4 && vk < 0.5 ? amber : green, on);
      n.ring.scale.setScalar(1 + on * 1.5); n.ring.material.opacity = Math.sin(Math.PI * on) * 0.85;
      // Battement : le brouillon attend, l'alerte sonne
      const beat = i === 4 ? on * (1 - vk) : i === 5 ? on : 0;
      if (beat > 0.01 && !still) { const c = (t * (i === 5 ? 0.9 : 0.55)) % 1; n.ping.scale.setScalar(1 + c * 1.5); n.ping.material.opacity = (1 - c) * 0.55 * beat; } else n.ping.material.opacity = 0;
      const gl = n.glyph;
      if (!still) n.spin += dt * (0.35 + on * 0.45 + busy * 6);
      gl.g.rotation.y = n.spin;
      gl.g.position.y = 1.0 + (still ? 0 : Math.sin(t * 1.3 + i * 1.7) * 0.05);
      gl.g.scale.setScalar(0.8 + on * 0.2 + busy * 0.08);
      gl.mats.forEach((m, k) => { m.emissiveIntensity = m.userData.base + (i === 6 ? clamp01(on * 9 - k) * 1.15 : on * 1.05) + busy * 0.8; });
      if (gl.g.userData.shell) { gl.g.userData.shell.rotation.x = -n.spin * 0.6; gl.g.userData.shell.material.opacity = 0.3 + on * 0.5; }
    });
    if (!still) dust.position.y = Math.sin(t * 0.25) * 0.18;

    // Caméra : plan large, puis elle suit le paquet, puis plan large
    focusAt(f);
    const follow = sstep(0, IN, p) * (1 - sstep(OUT, 1, p));
    const fk = Math.max(1, 1.5 / aspect), wk = Math.max(1, 1.9 / aspect);
    look.set(foc.x + 0.4, 0.6, foc.z * 0.5 + 0.3);
    want.set(lerp(-1.2, look.x - 1.6 * fk, follow), lerp(10.5 * wk, look.y + 4.4 * fk, follow), lerp(17.5 * wk, look.z + 8.4 * fk, follow));
    wantLook.set(lerp(-1.2, look.x, follow), lerp(0, look.y, follow), lerp(1.5, look.z, follow));
    if (inside) { want.x += mouse.x * 0.7; want.y += mouse.y * 0.35; }
    const k = still || !camReady ? 1 : 1 - Math.exp(-dt * 6);
    camPos.lerp(want, k); camLook.lerp(wantLook, k); camReady = true;
    camera.position.copy(camPos); camera.lookAt(camLook); camera.updateMatrixWorld();
    floorU.uFocus.value.set(lerp(-1.2, look.x, follow), 0, lerp(1.5, look.z, follow)); floorU.uRadius.value = lerp(26 * wk, 15 * fk, follow);

    // La souris porte une lampe
    ray.setFromCamera(mouse, camera);
    if (inside && ray.ray.intersectPlane(lightPlane, hit)) cursorLight.position.lerp(hit, 0.25);
    cursorLight.intensity += ((inside ? 16 : 0) - cursorLight.intensity) * 0.12;

    // Étiquettes HTML accrochées aux plateformes
    labels.forEach((el, i) => {
      tmp.set(POS[i][0], 0, POS[i][1] + 1.0).project(camera);
      const x = (tmp.x * 0.5 + 0.5) * W, y = (-tmp.y * 0.5 + 0.5) * H;
      // Sur téléphone, seules les étiquettes proches du paquet restent visibles, sinon elles se chevauchent.
      const near = !compact || (follow > 0.6 && Math.abs(i + 0.1 - f) < 1.3);
      const ok = near && tmp.z < 1 && x > -90 && x < W + 90 && y > H * 0.2 && y < H + 20;
      el.style.transform = `translate3d(${x.toFixed(1)}px, ${(y + 10).toFixed(1)}px, 0)`;
      el.style.opacity = ok ? (0.42 + 0.58 * a[i]).toFixed(2) : '0';
      el.style.visibility = ok ? 'visible' : 'hidden';
    });
  }

  const frame = (now) => {
    raf = requestAnimationFrame(frame);
    const dt = Math.min((now - last) / 1000, 0.05); last = now;
    if (!visible || document.hidden) return;
    const still = root.classList.contains('fx-off');
    if (still && !dirty) return;
    if (!still) time.value += dt;
    dirty = false;
    update(dt, still);
    renderer.render(scene, camera);
  };

  const resize = () => {
    W = mount.clientWidth || window.innerWidth; H = mount.clientHeight || window.innerHeight; aspect = W / H;
    renderer.setSize(W, H, false); camera.aspect = aspect;
    // Écran en hauteur : le titre occupe le haut, alors la scène est décalée vers le bas.
    if (aspect < 1) camera.setViewOffset(W, H, 0, -H * 0.1, W, H); else camera.clearViewOffset();
    camera.updateProjectionMatrix(); dirty = true;
  };
  const ro = new ResizeObserver(resize); ro.observe(mount); resize();
  const io = new IntersectionObserver((es) => { visible = es[0].isIntersecting; dirty = true; }, { rootMargin: '10% 0px' }); io.observe(mount);
  const onMove = (e) => { const r = mount.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height; inside = x >= 0 && x <= 1 && y >= 0 && y <= 1; mouse.set(x * 2 - 1, 1 - y * 2); };
  window.addEventListener('pointermove', onMove, { passive: true });
  raf = requestAnimationFrame(frame);

  return {
    steps: POS.length,
    // Reçoit l'avancement du défilement (0 → 1) et renvoie l'étape en cours (−0,7 → 7).
    setProgress(v) {
      p = clamp01(v);
      f = p < IN ? -0.7 + (p / IN) * 0.7 : p < OUT ? ((p - IN) / (OUT - IN)) * 6.6 : 6.6 + ((p - OUT) / (1 - OUT)) * 0.4;
      dirty = true; return f;
    },
    validate() { if (validated) return; validated = true; vClock = 0; dirty = true; },
    destroy() {
      cancelAnimationFrame(raf); ro.disconnect(); io.disconnect(); window.removeEventListener('pointermove', onMove);
      scene.traverse((o) => { o.geometry?.dispose(); if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => m.dispose()); });
      tex.glow.dispose(); tex.rim.dispose(); renderer.dispose(); canvas.remove(); shade.remove();
      section.classList.remove('is-3d');
      labels.forEach((el) => { el.style.transform = ''; el.style.opacity = ''; el.style.visibility = ''; });
    },
  };
}

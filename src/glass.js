// Les objets de verre des fiches projet (modélisés dans Blender : blender/scripts/objets_verre.py).
// Un seul moteur de rendu pour tout le site, un objet à la fois, téléchargé seulement à l'ouverture de sa fiche.
// Le verre est « bon marché » : pas de vraie réfraction, mais un bord lumineux (Fresnel), deux bandes de studio
// qui glissent sur les surfaces quand l'objet tourne, et un cœur lumineux à la couleur de la station.
// On le fait tourner du doigt ou à la souris (glisser à l'horizontale) ; sans effets, il ne tourne pas tout seul.
import { WebGLRenderer, Scene, PerspectiveCamera, ShaderMaterial, MeshBasicMaterial, Color, Box3, Vector3, Group, BackSide, FrontSide } from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const vertex = /* glsl */ `
varying vec3 vN; varying vec3 vV;
void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.); vN = normalize(normalMatrix * normal); vV = -mv.xyz; gl_Position = projectionMatrix * mv; }`;
const fragment = /* glsl */ `
uniform vec3 uTint; uniform float uSide;
varying vec3 vN; varying vec3 vV;
void main(){
  vec3 n = normalize(vN) * uSide, v = normalize(vV);
  float f = pow(1. - clamp(dot(n, v), 0., 1.), 2.4);
  vec3 r = reflect(-v, n);
  // Un studio imaginaire, fixe par rapport au regard : une bande en haut, une autre en biais à gauche.
  float band = smoothstep(.55, .92, r.y) * .9 + smoothstep(.72, .95, -r.x * .8 + r.y * .35) * .55;
  vec3 col = mix(vec3(.72, .82, 1.), uTint, .25) * (f * 1.15 + band * .8) + uTint * .06;
  float a = clamp(.07 + f * .85 + band * .5, 0., 1.) * (uSide < 0. ? .5 : 1.);
  gl_FragColor = vec4(col * a, a);
}`;

// Inclinaison de départ, par objet : le tampon d'Encaisse se lit mieux vu d'un peu plus haut.
const TILT = { encaisse: 0.55, aiguilleur: 0.32 };

export function initGlass({ reduced = false, calm = () => false } = {}) {
  const canvas = document.createElement('canvas');
  canvas.className = 'glass__gl';
  const renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, premultipliedAlpha: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);
  const scene = new Scene(), camera = new PerspectiveCamera(28, 1, 0.1, 30);
  camera.position.set(0, 0, 5.2);
  const holder = new Group(); scene.add(holder);
  const tint = new Color('#2F80FF');
  const mats = {
    back: new ShaderMaterial({ vertexShader: vertex, fragmentShader: fragment, uniforms: { uTint: { value: tint }, uSide: { value: -1 } }, side: BackSide, transparent: true, depthWrite: false, premultipliedAlpha: true }),
    front: new ShaderMaterial({ vertexShader: vertex, fragmentShader: fragment, uniforms: { uTint: { value: tint }, uSide: { value: 1 } }, side: FrontSide, transparent: true, depthWrite: false, premultipliedAlpha: true }),
    core: new MeshBasicMaterial({ color: tint.clone() }),
  };
  const loader = new GLTFLoader(), cache = {};
  const load = (id) => cache[id] || (cache[id] = loader.loadAsync(new URL(`models/verre/${id}.glb`, document.baseURI).href).then((g) => {
    // Recentré, mis à l'échelle ; chaque pièce de verre est dédoublée (faces arrière puis avant) pour donner de l'épaisseur.
    const root = new Group(), model = g.scene, box = new Box3().setFromObject(model), c = box.getCenter(new Vector3()), s = box.getSize(new Vector3());
    model.position.sub(c); root.add(model); root.scale.setScalar(1.9 / Math.max(s.x, s.y, s.z));
    const glass = [];
    model.traverse((o) => { if (o.isMesh) (o.material?.name === 'lumiere' ? (o.material = mats.core, o.renderOrder = 1) : glass.push(o)); });
    glass.forEach((o) => { const b = o.clone(); b.material = mats.back; b.renderOrder = 0; o.parent.add(b); o.material = mats.front; o.renderOrder = 2; });
    return root;
  }).catch(() => { delete cache[id]; return null; }));

  let host = null, cur = null, want = null, raf = 0, last = 0, visible = false;
  let rx = 0.2, ry = -0.5, vx = 0, vy = 0, drag = null, t = 0;
  const size = () => { if (!host) return; const r = host.getBoundingClientRect(), w = Math.max(1, r.width), h = Math.max(1, r.height); renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); };
  const draw = () => { holder.rotation.set(rx, ry, 0); renderer.render(scene, camera); };
  const moving = () => !reduced && !calm();
  const frame = (now) => {
    raf = 0; if (!host || !visible) return;
    const dt = Math.min(0.05, (now - (last || now)) / 1000); last = now; t += dt;
    if (!drag) { ry += vy; vy *= 0.94; vx *= 0.9; if (moving()) ry += dt * 0.32; }
    // Le cœur respire doucement (jamais un clignotement).
    mats.core.color.copy(tint).multiplyScalar(moving() ? 0.88 + 0.12 * Math.sin(t * 1.6) : 1);
    draw();
    if (moving() || drag || Math.abs(vy) > 1e-4) raf = requestAnimationFrame(frame);
  };
  const kick = () => { if (!raf && host && visible) { last = 0; raf = requestAnimationFrame(frame); } };
  const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) kick(); }, { threshold: 0.01 });
  const ro = new ResizeObserver(() => { size(); if (!raf) draw(); });

  canvas.addEventListener('pointerdown', (e) => { drag = { x: e.clientX, y: e.clientY }; vy = 0; canvas.setPointerCapture?.(e.pointerId); kick(); });
  canvas.addEventListener('pointermove', (e) => {
    if (!drag) return;
    const dx = e.clientX - drag.x, dy = e.clientY - drag.y; drag = { x: e.clientX, y: e.clientY };
    vy = dx * 0.011; ry += vy; rx = Math.max(-0.9, Math.min(1.1, rx + dy * 0.008));
    if (!raf) draw();
  });
  const up = () => { drag = null; kick(); };
  canvas.addEventListener('pointerup', up); canvas.addEventListener('pointercancel', up);

  return {
    // Affiche l'objet du projet id dans l'élément host, teinté de la couleur de sa station.
    async show(el, id, color = '#2F80FF') {
      if (host !== el) { io.disconnect(); ro.disconnect(); host = el; el.prepend(canvas); io.observe(el); ro.observe(el); size(); }
      tint.set(color); mats.core.color.copy(tint);
      want = id; el.classList.remove('is-ready');
      const obj = await load(id);
      if (want !== id || host !== el) return;
      if (cur) holder.remove(cur);
      cur = obj; if (!obj) return;
      holder.add(obj); rx = TILT[id] ?? 0.2; ry = -0.5; vy = 0;
      el.classList.add('is-ready'); draw(); kick();
    },
    // La fiche se ferme : on arrête de dessiner (l'objet reste en mémoire pour une prochaine ouverture).
    stop() { visible = false; if (raf) cancelAnimationFrame(raf); raf = 0; io.disconnect(); ro.disconnect(); host = null; },
  };
}

// « La Machine » : un seul nuage de particules traverse tout le site.
// Il écrit le nom, devient sphère, puis voyage vers le futur : à chaque station, la tâche manuelle d'aujourd'hui
// (une silhouette modélisée dans Blender, gris papier, au geste lent et appliqué) bascule dans son futur automatisé
// (la sculpture lumineuse du projet, vive et fluide). Entre deux stations, on saute : aucun anneau, aucun cadran.
import {
  WebGLRenderer, Scene, PerspectiveCamera, BufferGeometry, BufferAttribute, ShaderMaterial,
  Points, AdditiveBlending, Color, Vector3, Vector2, Vector4, Mesh, PlaneGeometry, Group,
} from 'three';
import { STATIONS, byId } from './stations.js';
import { loadChr, sampleChr } from './shapes-loader.js';

const TAU = Math.PI * 2;
const HALF = Math.tan((35 * Math.PI) / 360); // demi-ouverture verticale de la caméra (35°)
const lerp = (a, b, t) => a + (b - a) * t;
// Centre de l'orbe vocale du standardiste (repris tel quel dans le shader).
const VOICE_ORB = [-1.3, 0.05, 0];

// Ordre du voyage : la valeur « k » avance le long de cette piste. Les stations viennent de stations.js :
// pour chacune, l'étape « aujourd'hui » (auj_<id>) puis l'étape « futur » (<id>), au même endroit de la route.
export const TRACK = ['cloud', 'name', 'sphere', 'terrain', ...STATIONS.flatMap((s) => [`auj_${s.id}`, s.id]), 'dim', 'path', 'end'];
export const K = Object.fromEntries(TRACK.map((n, i) => [n, i]));
const isToday = (key) => key.startsWith('auj_');
const stationOf = (key) => byId[isToday(key) ? key.slice(4) : key] || null;

// ---------- Hasard reproductible ----------
function mulberry(seed) {
  let a = seed >>> 0;
  return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

// ---------- Outil de sculpture : pose des points, puis mélange leur ordre ----------
function builder(N, seed) {
  const pos = new Float32Array(N * 3), meta = new Float32Array(N * 2);
  const rnd = mulberry(seed);
  let i = 0;
  const j = (a) => (rnd() - 0.5) * a;
  // ton : 0 = couleur de base, 1 = couleur d'accent · prm : paramètre d'animation (−1 = poussière d'ambiance)
  const put = (x, y, z, tone = 0, prm = 0) => { if (i >= N) return; pos[i * 3] = x; pos[i * 3 + 1] = y; pos[i * 3 + 2] = z; meta[i * 2] = tone; meta[i * 2 + 1] = prm; i++; };
  const b = {
    rnd, j, put,
    n: (frac) => Math.max(1, Math.floor(N * frac)),
    line(n, p, q, tone = 0, w = 0.012, p0 = 0, p1 = 1) { for (let k = 0; k < n; k++) { const t = rnd(); put(lerp(p[0], q[0], t) + j(w), lerp(p[1], q[1], t) + j(w), lerp(p[2], q[2], t) + j(w), tone, lerp(p0, p1, t)); } },
    curve(n, fn, tone = 0, w = 0.012, p0 = 0, p1 = 1) { for (let k = 0; k < n; k++) { const t = rnd(), c = fn(t); put(c[0] + j(w), c[1] + j(w), c[2] + j(w), tone, lerp(p0, p1, t)); } },
    ring(n, c, r, plane = 'xy', tone = 0, w = 0.012, prm = null) {
      for (let k = 0; k < n; k++) {
        const a = rnd() * TAU, u = Math.cos(a) * r, v = Math.sin(a) * r;
        const p = plane === 'xy' ? [u, v, 0] : plane === 'xz' ? [u, 0, v] : [0, u, v];
        put(c[0] + p[0] + j(w), c[1] + p[1] + j(w), c[2] + p[2] + j(w), tone, prm == null ? a / TAU : prm);
      }
    },
    box(n, c, s, tone = 0, w = 0.008, prm = 0) {
      for (let k = 0; k < n; k++) {
        const axis = Math.floor(rnd() * 3), t = rnd() - 0.5, sa = rnd() < 0.5 ? -0.5 : 0.5, sb = rnd() < 0.5 ? -0.5 : 0.5;
        const v = axis === 0 ? [t, sa, sb] : axis === 1 ? [sa, t, sb] : [sa, sb, t];
        put(c[0] + v[0] * s[0] + j(w), c[1] + v[1] * s[1] + j(w), c[2] + v[2] * s[2] + j(w), tone, prm);
      }
    },
    shell(n, c, r, tone = 0, prm = 0) {
      for (let k = 0; k < n; k++) {
        const y = rnd() * 2 - 1, a = rnd() * TAU, q = Math.sqrt(1 - y * y);
        put(c[0] + Math.cos(a) * q * r, c[1] + y * r, c[2] + Math.sin(a) * q * r, tone, prm);
      }
    },
    // La marque d'un agent : un anneau et sa barre de regard, comme les agents de la salle (section « Les agents au travail »).
    // prm 40 : l'anneau, qui respire · prm 41 : la barre de regard, qui s'allume quand l'agent travaille.
    agent(c, s = 1) {
      b.ring(b.n(0.016), c, 0.24 * s, 'xy', 1, 0.008, 40);
      b.ring(b.n(0.006), c, 0.15 * s, 'xy', 0.5, 0.006, 40);
      for (let k = 0, n = b.n(0.008); k < n; k++) put(c[0] + (rnd() - 0.5) * 0.24 * s, c[1] + j(0.022 * s), c[2] + 0.02 + j(0.01), 1, 41);
    },
    done(spread = [5.2, 3.2, 2.6]) {
      while (i < N) put(j(spread[0] * 2), j(spread[1] * 2), j(spread[2] * 2) - 0.6, 0, -1);
      for (let k = N - 1; k > 0; k--) {
        const m = Math.floor(rnd() * (k + 1));
        for (let c = 0; c < 3; c++) { const t = pos[k * 3 + c]; pos[k * 3 + c] = pos[m * 3 + c]; pos[m * 3 + c] = t; }
        for (let c = 0; c < 2; c++) { const t = meta[k * 2 + c]; meta[k * 2 + c] = meta[m * 2 + c]; meta[m * 2 + c] = t; }
      }
      return { pos, meta };
    },
  };
  return b;
}

// Contour d'un rectangle arrondi (centré), parcouru dans le sens des aiguilles d'une montre : u ∈ [0, 1] → [x, y].
function rrPoint(u, w, h, r) {
  const sw = w - 2 * r, sh = h - 2 * r, arc = (Math.PI * r) / 2, Q = Math.PI / 2;
  const corner = (cx, cy, a0) => (t) => [cx + Math.cos(a0 - t * Q) * r, cy + Math.sin(a0 - t * Q) * r];
  const segs = [
    [sw, (t) => [-sw / 2 + t * sw, h / 2]], [arc, corner(sw / 2, sh / 2, Q)],
    [sh, (t) => [w / 2, sh / 2 - t * sh]], [arc, corner(sw / 2, -sh / 2, 0)],
    [sw, (t) => [sw / 2 - t * sw, -h / 2]], [arc, corner(-sw / 2, -sh / 2, -Q)],
    [sh, (t) => [-w / 2, -sh / 2 + t * sh]], [arc, corner(-sw / 2, sh / 2, Math.PI)],
  ];
  let d = u * (2 * sw + 2 * sh + 4 * arc);
  for (const [len, f] of segs) { if (d <= len) return f(len > 0 ? d / len : 0); d -= len; }
  return segs[0][1](0);
}

// ---------- Les formes ----------
const SHAPES = {
  // Galaxie de départ : les points arrivent de loin.
  cloud(N) {
    const b = builder(N, 11);
    for (let k = 0; k < N; k++) { const r = 2.6 + Math.pow(b.rnd(), 0.6) * 6, a = b.rnd() * TAU; b.put(Math.cos(a) * r, b.j(3.4), Math.sin(a) * r * 0.7 - 1.2, b.rnd() > 0.8 ? 1 : 0, 0); }
    return b.done();
  },
  // Le nom, écrit en points de lumière (mesuré sur un canevas caché).
  name(N) {
    const W = 1600, H = 720, c = document.createElement('canvas'); c.width = W; c.height = H;
    const g = c.getContext('2d', { willReadFrequently: true });
    const setFont = (px) => { g.font = `800 ${px}px "Inter Tight Variable", "Inter Tight", system-ui, sans-serif`; try { g.letterSpacing = `${-px * 0.055}px`; } catch { /* ancien navigateur */ } };
    let px = 300; setFont(px);
    const wide = Math.max(g.measureText('JOHANNE').width, g.measureText('PAMEGNE.').width);
    px = (px * W * 0.95) / wide; setFont(px);
    const full = Math.max(g.measureText('JOHANNE').width, g.measureText('PAMEGNE.').width);
    const cap = px * 0.72, lh = px * 0.86, top = (H - (lh + cap)) / 2, x0 = (W - full) / 2;
    g.textBaseline = 'alphabetic'; g.fillStyle = '#00ff00';
    g.fillText('JOHANNE', x0, top + cap);
    const w2 = g.measureText('PAMEGNE').width, wd = g.measureText('.').width, x2 = x0 + full - (w2 + wd);
    g.fillText('PAMEGNE', x2, top + cap + lh);
    g.fillStyle = '#ff0000'; g.fillText('.', x2 + w2, top + cap + lh);
    const d = g.getImageData(0, 0, W, H).data, cand = [];
    for (let y = 0; y < H; y += 2) for (let x = 0; x < W; x += 2) { const o = (y * W + x) * 4; if (d[o + 3] > 128) cand.push(x, y, d[o] > 128 ? 1 : 0); }
    if (cand.length < 300) return SHAPES.sphere(N);
    const b = builder(N, 12), M = cand.length / 3, n = b.n(0.94);
    for (let k = 0; k < n; k++) { const q = Math.floor(b.rnd() * M) * 3; b.put((cand[q] + b.j(2) - W / 2) / (W / 2), -(cand[q + 1] + b.j(2) - H / 2) / (W / 2), b.j(0.03), cand[q + 2], 0); }
    return b.done([1.3, 0.75, 0.5]);
  },
  sphere(N) {
    const b = builder(N, 5), g = Math.PI * (3 - Math.sqrt(5)), R = 1.75;
    for (let k = 0; k < N; k++) { const y = 1 - (k / (N - 1)) * 2, r = Math.sqrt(1 - y * y), t = g * k; b.put(Math.cos(t) * r * R, y * R, Math.sin(t) * r * R, b.rnd() > 0.86 ? 1 : 0, 0); }
    return b.done();
  },
  terrain(N) {
    const b = builder(N, 6), cols = Math.round(Math.sqrt(N * 2.2)), rows = N / cols;
    for (let k = 0; k < N; k++) b.put(((k % cols) / cols - 0.5) * 9.5, -1.15, (Math.floor(k / cols) / rows - 0.5) * 6.5, b.rnd() > 0.86 ? 1 : 0, 0);
    return b.done();
  },
  // Doublage : une voix entre à gauche, traverse l'anneau, ressort dans une autre langue.
  wave(N) {
    const b = builder(N, 21), BARS = 64, per = Math.floor(b.n(0.66) / BARS);
    for (let q = 0; q < BARS; q++) {
      const u = q / (BARS - 1), x = (u - 0.5) * 3.9; if (Math.abs(x) < 0.17) continue;
      const env = 0.22 + 0.95 * Math.exp(-Math.pow(x * 0.62, 2)), amp = env * (0.3 + 0.7 * Math.abs(Math.sin(q * 1.7) * Math.cos(q * 0.63 + 1.2)));
      for (let k = 0; k < per; k++) { const layer = Math.floor(b.rnd() * 3) - 1; b.put(x + b.j(0.018), (b.rnd() * 2 - 1) * amp * (1 - Math.abs(layer) * 0.35), layer * 0.3 + b.j(0.02), x > 0 ? 1 : 0, u); }
    }
    b.ring(b.n(0.1), [0, 0, 0], 1.28, 'yz', 0.5, 0.015, 2);
    b.ring(b.n(0.06), [0, 0, 0], 0.92, 'yz', 1, 0.012, 3);
    b.agent([0, 1.45, 0], 0.85);
    return b.done();
  },
  // Accueil client par SMS : le téléphone sonne dans le vide, puis la conversation s'écrit bulle après bulle,
  // et trois créneaux tournent autour de lui sur une orbite inclinée ; celui que le client choisit s'allume.
  // prm : 1–1,32 bulles (ordre d'arrivée) · 1,6 voyant d'appel manqué · 2–2,2 ondes · 3–3,3 orbite des créneaux · 4 structure calme (4,1–4,2 : face avant, plus lumineuse).
  sms(N) {
    const b = builder(N, 111), W = 1.22, H = 2.3, R = 0.2;
    const outline = (n, w, h, r, cx, cy, z, tone, prm, wj = 0.008) => { for (let k = 0; k < n; k++) { const q = rrPoint(b.rnd(), w, h, r); b.put(cx + q[0] + b.j(wj), cy + q[1] + b.j(wj), z + b.j(wj), tone, prm); } };
    // Le téléphone : la face, le dos, le bord de l'écran, l'écouteur et la barre du bas.
    outline(b.n(0.06), W, H, R, 0, 0, 0.06, 0, 4.1);
    outline(b.n(0.045), W, H, R, 0, 0, -0.06, 0, 4);
    outline(b.n(0.035), W - 0.12, H - 0.12, R - 0.05, 0, 0, 0.065, 0, 4.2);
    b.line(b.n(0.006), [-0.14, H / 2 - 0.12, 0.07], [0.14, H / 2 - 0.12, 0.07], 0, 0.008, 4, 4);
    b.line(b.n(0.006), [-0.2, -H / 2 + 0.1, 0.07], [0.2, -H / 2 + 0.1, 0.07], 0, 0.008, 4, 4);
    // Le voyant de l'appel manqué.
    b.shell(b.n(0.008), [W / 2 - 0.2, H / 2 - 0.22, 0.09], 0.05, 1, 1.6);
    // La conversation : l'entreprise à droite (couleur d'accent), le client à gauche.
    const bubbles = [[1, 0.8, 0.27], [0, 0.6, 0.2], [1, 0.84, 0.44], [0, 0.28, 0.18], [1, 0.72, 0.24]];
    let y = H / 2 - 0.36;
    bubbles.forEach(([mine, bw, bh], k) => {
      const cx = mine ? W / 2 - 0.13 - bw / 2 : -W / 2 + 0.13 + bw / 2, cy = y - bh / 2, prm = 1 + k * 0.08, tone = mine ? 1 : 0;
      outline(b.n(0.022), bw, bh, Math.min(0.09, bh / 2), cx, cy, 0.08, tone, prm, 0.006);
      const rows = Math.max(1, Math.round((bh - 0.08) / 0.1)), per = Math.floor(b.n(0.026) / rows);
      for (let l = 0; l < rows; l++) {
        const ly = rows === 1 ? cy : cy + bh / 2 - 0.12 - l * 0.1, lw = (bw - 0.18) * (rows > 1 && l === rows - 1 ? 0.55 : 1), x0 = cx - (bw - 0.18) / 2;
        b.line(per, [x0, ly, 0.08], [x0 + lw, ly, 0.08], tone, 0.01, prm, prm);
      }
      const tx = mine ? cx + bw / 2 - 0.06 : cx - bw / 2 + 0.06, dir = mine ? 1 : -1;
      b.line(b.n(0.004), [tx, cy - bh / 2, 0.08], [tx + dir * 0.07, cy - bh / 2 - 0.06, 0.08], tone, 0.008, prm, prm);
      y -= bh + 0.1;
    });
    // Les ondes de l'appel manqué, à la forme du téléphone.
    for (let r = 0; r < 3; r++) for (let k = 0, n = b.n(0.045); k < n; k++) { const a = b.rnd() * TAU; b.put(Math.cos(a) + b.j(0.012), Math.sin(a) * 1.3 + b.j(0.012), -0.3 + b.j(0.012), 0.6, 2 + r * 0.1); }
    // Les trois créneaux proposés, en orbite ; le choisi est plein et coché.
    const RO = 1.48;
    b.ring(b.n(0.025), [0, 0, 0], RO, 'xz', 0, 0.01, 3.3);
    for (let s = 0; s < 3; s++) {
      const a = 0.55 + (s * TAU) / 3, c = [Math.cos(a) * RO, 0, Math.sin(a) * RO], u = [-Math.sin(a), 0, Math.cos(a)], chosen = s === 1, prm = 3 + s * 0.1;
      const P = (x, yy, tone) => b.put(c[0] + u[0] * x + b.j(0.006), yy + b.j(0.006), c[2] + u[2] * x + b.j(0.006), tone, prm);
      for (let k = 0, n = b.n(0.03); k < n; k++) { const q = rrPoint(b.rnd(), 0.58, 0.2, 0.1); P(q[0], q[1], chosen ? 1 : 0.35); }
      if (chosen) {
        for (let k = 0, n = b.n(0.03); k < n; k++) P((b.rnd() - 0.5) * 0.5, (b.rnd() - 0.5) * 0.13, 1);
        const tick = [[-0.09, 0.0], [-0.03, -0.05], [0.09, 0.06]];
        for (let k = 0, n = b.n(0.01); k < n; k++) { const t = b.rnd(), seg = t < 0.35 ? 0 : 1, f = seg ? (t - 0.35) / 0.65 : t / 0.35, A = tick[seg], B = tick[seg + 1]; b.put(c[0] * 1.03 + u[0] * lerp(A[0], B[0], f), lerp(A[1], B[1], f), c[2] * 1.03 + u[2] * lerp(A[0], B[0], f), 1, prm); }
      }
    }
    b.ring(b.n(0.03), [0, -1.5, 0], 1.7, 'xz', 0, 0.012, 4);
    b.agent([-1.2, 1.2, 0.3], 0.9);
    return b.done();
  },
  // Devis IA : la demande du client coule vers la feuille ; le devis s'écrit ligne par ligne, prix et total en couleur d'accent ;
  // trois relances (J+3, J+8, J+15) partent du total en éventail, puis la case « Bon pour accord » se coche.
  // prm : 0–0,97 mots de la demande (rangée l / 3 + position × 0,3) · 1–1,6 lignes du devis (ordre d'écriture) · 1,75 ligne de lecture · 2 total
  // · 3–3,2 relances · 4 accord · 4,5 éclat de l'accord · 5 structure calme (5,1 : en-tête).
  devis(N) {
    const b = builder(N, 131), W = 1.5, H = 2.1, cy0 = 0.05, z = 0.04;
    const outline = (n, w, h, r, cx, cy, zz, tone, prm, wj = 0.008) => { for (let k = 0; k < n; k++) { const q = rrPoint(b.rnd(), w, h, r); b.put(cx + q[0] + b.j(wj), cy + q[1] + b.j(wj), zz + b.j(wj), tone, prm); } };
    const fill = (n, x0, x1, y0, y1, zz, tone, prm) => { for (let k = 0; k < n; k++) b.put(lerp(x0, x1, b.rnd()), lerp(y0, y1, b.rnd()), zz + b.j(0.006), tone, prm); };
    // La feuille, et une seconde page en retrait pour la profondeur.
    outline(b.n(0.075), W, H, 0.07, 0, cy0, 0, 0, 5);
    outline(b.n(0.03), W, H, 0.07, 0.1, cy0 - 0.1, -0.16, 0, 5);
    // En-tête : le logo, le titre, les références, puis le filet.
    fill(b.n(0.014), -0.62, -0.44, 0.8, 0.96, z, 1, 5.1);
    b.line(b.n(0.012), [-0.34, 0.92, z], [0.04, 0.92, z], 0, 0.022, 5.1, 5.1);
    b.line(b.n(0.006), [-0.34, 0.83, z], [-0.1, 0.83, z], 0, 0.008, 5, 5);
    b.line(b.n(0.006), [0.3, 0.92, z], [0.62, 0.92, z], 0, 0.008, 5, 5);
    b.line(b.n(0.006), [0.38, 0.84, z], [0.62, 0.84, z], 0, 0.008, 5, 5);
    b.line(b.n(0.012), [-0.62, 0.71, z], [0.62, 0.71, z], 0, 0.006, 5, 5);
    // Les lignes du devis : désignation, quantité, puis le prix (accent), écrites l'une après l'autre.
    [0.62, 0.48, 0.66, 0.4, 0.56, 0.5].forEach((len, r) => {
      const y = 0.55 - r * 0.17, prm = 1 + r * 0.1;
      b.line(b.n(0.02), [-0.62, y, z], [-0.62 + len, y, z], 0, 0.014, prm, prm);
      b.line(b.n(0.004), [0.12, y, z], [0.2, y, z], 0, 0.012, prm, prm);
      b.line(b.n(0.009), [0.34, y, z], [0.62, y, z], 1, 0.016, prm + 0.05, prm + 0.05);
    });
    // Le filet, puis le total encadré.
    b.line(b.n(0.012), [0.06, -0.43, z], [0.62, -0.43, z], 0, 0.006, 1.6, 1.6);
    b.line(b.n(0.01), [-0.62, -0.58, z], [-0.3, -0.58, z], 0, 0.02, 2, 2);
    outline(b.n(0.024), 0.6, 0.2, 0.05, 0.34, -0.58, z, 1, 2, 0.006);
    b.line(b.n(0.016), [0.16, -0.58, z], [0.54, -0.58, z], 1, 0.03, 2, 2);
    // « Bon pour accord » : la case, la coche, puis la signature.
    outline(b.n(0.012), 0.15, 0.15, 0.025, -0.52, -0.84, z, 1, 4, 0.005);
    const tick = [[-0.58, -0.84], [-0.53, -0.89], [-0.44, -0.77]];
    for (let k = 0, n = b.n(0.01); k < n; k++) { const t = b.rnd(), sg = t < 0.35 ? 0 : 1, f = sg ? (t - 0.35) / 0.65 : t / 0.35, A = tick[sg], B = tick[sg + 1]; b.put(lerp(A[0], B[0], f) + b.j(0.008), lerp(A[1], B[1], f) + b.j(0.008), z + 0.02, 1, 4); }
    b.curve(b.n(0.016), (t) => [-0.32 + t * 0.6, -0.84 + Math.sin(t * 15) * 0.035 * (1 - t * 0.5) + t * 0.03, z], 1, 0.008, 4, 4);
    // La demande du client : trois rangées de mots qui coulent vers la feuille ; les mots reconnus par l'IA sont en accent.
    const bez = (t, l) => {
      const u = 1 - t, P0 = [-1.85, 0.95 - l * 0.13, 0.5], P1 = [-1.35, 1.3 - l * 0.13, 0.32], P2 = [-0.82, 0.4 - l * 0.1, z];
      return [0, 1, 2].map((c) => u * u * P0[c] + 2 * u * t * P1[c] + t * t * P2[c]);
    };
    for (let l = 0; l < 3; l++) {
      const cnt = 13 + l * 3;
      for (let k = 0, n = b.n(0.045); k < n; k++) {
        const wi = Math.floor(b.rnd() * cnt), t = (wi + b.rnd() * (0.45 + ((wi * 7 + l) % 4) * 0.08)) / cnt, c = bez(t, l);
        b.put(c[0] + b.j(0.01), c[1] + b.j(0.01), c[2] + b.j(0.01), (wi * 5 + l) % 7 === 3 ? 1 : 0, l / 3 + t * 0.3);
      }
    }
    // Les trois relances partent du total en éventail ; leurs trajectoires restent en pointillés.
    const S0 = [0.66, -0.58, z - 0.06];
    const fly = (k, e) => [S0[0] + 0.82 * e, S0[1] + (1.5 - k * 0.62) * Math.sin((e * Math.PI) / 2), S0[2] + 0.3 * e];
    for (let k = 0; k < 3; k++) {
      const prm = 3 + k * 0.1;
      for (let q = 0, n = b.n(0.02); q < n; q++) { const r = rrPoint(b.rnd(), 0.36, 0.24, 0.03); b.put(S0[0] + r[0] + b.j(0.006), S0[1] + r[1] + b.j(0.006), S0[2] + b.j(0.006), 1, prm); }
      b.line(b.n(0.007), [S0[0] - 0.17, S0[1] + 0.11, S0[2]], [S0[0], S0[1] - 0.02, S0[2]], 1, 0.008, prm, prm);
      b.line(b.n(0.007), [S0[0] + 0.17, S0[1] + 0.11, S0[2]], [S0[0], S0[1] - 0.02, S0[2]], 1, 0.008, prm, prm);
      for (let q = 0, n = b.n(0.012); q < n; q++) { const e = (Math.floor(b.rnd() * 22) + b.rnd() * 0.35) / 22, c = fly(k, 0.12 + e * 0.88); b.put(c[0] + b.j(0.008), c[1] + b.j(0.008), c[2] + b.j(0.008), 0.35, 5); }
    }
    // La ligne de lecture : elle descend la feuille pendant que l'IA rédige le devis.
    b.line(b.n(0.02), [-0.7, 0, z + 0.03], [0.7, 0, z + 0.03], 1, 0.01, 1.75, 1.75);
    // L'éclat de l'accord : un anneau qui part de la case cochée.
    b.ring(b.n(0.016), [-0.52, -0.84, z + 0.02], 0.12, 'xy', 1, 0.008, 4.5);
    b.ring(b.n(0.03), [0, -1.32, 0], 1.65, 'xz', 0, 0.012, 5);
    b.agent([-1.35, -0.55, 0.3], 0.85);
    return b.done();
  },
  // Standardiste vocal : l'orbe de la voix respire et parle ; la parole ondule, se redresse en donnée,
  // et se pose dans l'agenda, où le créneau réservé s'allume.
  // prm : 0–1 flux qui voyage · 1–1,5 ondes sonores · 2 orbe · 3 créneau réservé · 4 structure calme.
  voice(N) {
    const b = builder(N, 101), O = VOICE_ORB, R = 0.34;
    // L'orbe : un cœur dense dans une coque.
    b.shell(b.n(0.05), O, R, 1, 2);
    b.shell(b.n(0.025), O, R * 0.55, 1, 2);
    // Les ondes « ))) » tournées vers l'agenda.
    for (let w = 0; w < 3; w++) {
      const r = 0.56, a0 = -0.9, a1 = 0.9;
      b.curve(b.n(0.045), (t) => { const a = lerp(a0, a1, t); return [O[0] + Math.cos(a) * r, O[1] + Math.sin(a) * r, O[2]]; }, 0, 0.014, 1 + w * 0.15, 1 + w * 0.15);
    }
    // L'agenda : cadre, en-tête, anneaux, jours, et 5 × 4 créneaux.
    const C = [0.9, -0.05, 0], W = 1.7, H = 1.6, top = C[1] + H / 2;
    b.box(b.n(0.07), C, [W, H, 0.12], 0, 0.008, 4);
    b.line(b.n(0.018), [C[0] - W / 2, top - 0.3, 0.06], [C[0] + W / 2, top - 0.3, 0.06], 0, 0.008, 4, 4);
    [-0.45, 0.45].forEach((dx) => b.ring(b.n(0.012), [C[0] + dx, top, 0], 0.09, 'yz', 1, 0.008, 4));
    const x0 = C[0] - W / 2 + 0.07, y0 = top - 0.37, cw = (W - 0.14) / 5, rh = (y0 - (C[1] - H / 2 + 0.07)) / 4;
    for (let c = 0; c < 5; c++) b.line(b.n(0.006), [x0 + cw * (c + 0.5) - 0.07, top - 0.15, 0.06], [x0 + cw * (c + 0.5) + 0.07, top - 0.15, 0.06], 0, 0.008, 4, 4);
    let booked = null;
    for (let c = 0; c < 5; c++) for (let r = 0; r < 4; r++) {
      const cx = x0 + cw * (c + 0.5), cy = y0 - rh * (r + 0.5), mine = c === 2 && r === 1;
      if (mine) booked = [cx, cy, 0.04];
      b.box(b.n(mine ? 0.02 : 0.011), [cx, cy, 0.03], [cw * 0.78, rh * 0.72, 0.03], mine ? 1 : 0, 0.006, mine ? 3 : c * 0.18 + r * 0.03);
    }
    // Le créneau réservé, plein de lumière.
    for (let k = 0, n = b.n(0.05); k < n; k++) b.put(booked[0] + (b.rnd() - 0.5) * cw * 0.74, booked[1] + (b.rnd() - 0.5) * rh * 0.68, booked[2] + b.j(0.03), 1, 3);
    // La parole : elle ondule en sortant de l'orbe, se redresse, et se pose dans le créneau.
    const S = [O[0] + R + 0.06, O[1] + 0.05, 0], P1 = [-0.35, 1.05, 0.4], P2 = [0.5, 0.95, 0.45], E = booked;
    const bez = (t) => { const m = 1 - t; return [0, 1, 2].map((d) => m * m * m * S[d] + 3 * m * m * t * P1[d] + 3 * m * t * t * P2[d] + t * t * t * E[d]); };
    for (let k = 0, n = b.n(0.13); k < n; k++) {
      const t = b.rnd(), c = bez(t), amp = 0.085 * Math.pow(1 - t, 1.6) * Math.sin(t * 46);
      b.put(c[0] + b.j(0.012), c[1] + amp + b.j(0.012), c[2] + b.j(0.012), b.rnd() < 0.18 ? 1 : 0, t * 0.98);
    }
    b.ring(b.n(0.04), [0.1, -1.08, 0], 1.95, 'xz', 0, 0.012, 4);
    b.agent([-1.3, 0.92, 0.1], 0.85);
    return b.done();
  },
  // JobHunter : le tri des offres. Les fiches d'offres avancent en file jusqu'au trait de lecture de l'agent ;
  // chaque fiche lue part sur sa pile : en haut les candidatures préparées (couleur d'accent, la coche attend
  // la validation d'une personne), en bas les offres écartées, éteintes. Aucun cercle : des fiches, une file, deux piles.
  // prm : 0 rail de la file · 1–1,575 fiches de la file (1 + rang × 0,1, + 0,05 si retenue, + 0,025 pour l'aspect « après lecture »)
  // · 2 trait de lecture · 3 pile retenue · 3,5 coche · 4 pile écartée.
  // Les fiches de la file sont posées à l'origine : le shader les place sur leur trajet (voir life(), id 4).
  // « radar » reste le nom de la station (stations.js), même si la sculpture n'a plus rien d'un radar.
  radar(N) {
    const b = builder(N, 31), FW = 0.36, FH = 0.23;
    const card = (n, cx, cy, cz, tone, prm, rz = 0, wj = 0.006) => {
      const cs = Math.cos(rz), sn = Math.sin(rz);
      const P = (x, y) => b.put(cx + x * cs - y * sn + b.j(wj), cy + x * sn + y * cs + b.j(wj), cz + b.j(wj), tone, prm);
      for (let k = 0; k < n * 0.6; k++) { const q = rrPoint(b.rnd(), FW, FH, 0.035); P(q[0], q[1]); }
      // Le logo de l'entreprise, l'intitulé du poste, puis une ligne de détail.
      for (let k = 0; k < n * 0.1; k++) P(-0.12 + b.j(0.05), 0.045 + b.j(0.05));
      for (let k = 0; k < n * 0.17; k++) P(-0.065 + b.rnd() * 0.2, 0.055);
      for (let k = 0; k < n * 0.13; k++) P(-0.145 + b.rnd() * 0.19, -0.05);
    };
    // La file : six fiches, chacune en deux aspects (avant lecture, après lecture) ; 1 fiche sur 2 environ est retenue.
    const KEPT = [1, 0, 1, 1, 0, 0];
    KEPT.forEach((kept, k) => {
      card(b.n(0.032), 0, 0, 0, 0, 1 + k * 0.1 + kept * 0.05);
      card(b.n(0.032), 0, 0, 0, kept ? 1 : 0.15, 1 + k * 0.1 + kept * 0.05 + 0.025);
    });
    // Le rail discret de la file (de x = −1,32 au trait de lecture, en x = 0,08), et le trait de lecture de l'agent,
    // coiffé de sa barre de regard. Ces repères sont repris dans le shader : les changer ici, c'est les changer là-bas.
    b.line(b.n(0.025), [-1.32, -0.08, -0.02], [-0.02, -0.08, -0.02], 0, 0.006, 0, 0);
    b.line(b.n(0.03), [0.08, -0.24, 0.04], [0.08, 0.42, 0.04], 1, 0.008, 2, 2);
    for (let k = 0, n = b.n(0.01); k < n; k++) b.put(0.08 + (b.rnd() - 0.5) * 0.26, 0.52 + b.j(0.022), 0.05 + b.j(0.01), 1, 41);
    // Pile retenue : sept candidatures préparées, bien alignées ; la coche (en bas à droite de celle du dessus) attend la personne.
    for (let k = 0; k < 7; k++) card(b.n(0.026), 1.28 + k * 0.012, 0.62 + k * 0.034, -0.2 + k * 0.03, 1, 3);
    const top = [1.28 + 6 * 0.012, 0.62 + 6 * 0.034, -0.2 + 6 * 0.03 + 0.01];
    b.line(b.n(0.005), [top[0] + 0.07, top[1] - 0.04, top[2]], [top[0] + 0.095, top[1] - 0.07, top[2]], 1, 0.006, 3.5, 3.5);
    b.line(b.n(0.008), [top[0] + 0.095, top[1] - 0.07, top[2]], [top[0] + 0.15, top[1] - 0.01, top[2]], 1, 0.006, 3.5, 3.5);
    // Pile écartée : six offres en vrac, éteintes.
    for (let k = 0; k < 6; k++) card(b.n(0.018), 1.23 + b.j(0.12), -0.82 + k * 0.026, -0.2 + k * 0.03, 0.15, 4, b.j(0.5));
    return b.done();
  },
  // Aiguilleur : un e-mail entre, la voie se divise vers le bon collègue.
  switch(N) {
    const b = builder(N, 41);
    const bez = (p0, p1, p2, p3) => (t) => { const m = 1 - t, a = m * m * m, c = 3 * m * m * t, d = 3 * m * t * t, e = t * t * t; return [a * p0[0] + c * p1[0] + d * p2[0] + e * p3[0], a * p0[1] + c * p1[1] + d * p2[1] + e * p3[1], a * p0[2] + c * p1[2] + d * p2[2] + e * p3[2]]; };
    const track = (n, fn, p0, p1) => {
      for (let k = 0; k < n; k++) {
        let t = b.rnd(); const tie = b.rnd() > 0.72; if (tie) t = Math.round(t * 22) / 22;
        const c = fn(t), c2 = fn(Math.min(1, t + 0.01)), dx = c2[0] - c[0], dy = c2[1] - c[1], L = Math.hypot(dx, dy) || 1;
        const off = tie ? (b.rnd() * 2 - 1) * 0.08 : (b.rnd() < 0.5 ? 1 : -1) * 0.055;
        b.put(c[0] + (-dy / L) * off + b.j(0.008), c[1] + (dx / L) * off + b.j(0.008), c[2] + b.j(0.008), 0, lerp(p0, p1, t));
      }
    };
    const J = [-0.35, 0, 0], ENDS = [[1.4, 0.98, -0.3], [1.55, 0, 0.2], [1.4, -0.98, -0.3]];
    track(b.n(0.16), (t) => [lerp(-1.95, J[0], t), 0, 0], 0, 0.4);
    ENDS.forEach((E) => {
      track(b.n(0.15), bez(J, [0.4, 0, 0], [E[0] - 0.85, E[1], E[2]], E), 0.4, 1);
      b.box(b.n(0.05), [E[0] + 0.27, E[1], E[2]], [0.46, 0.46, 0.46], 1, 0.008, 1);
      b.shell(b.n(0.014), [E[0] + 0.27, E[1], E[2]], 0.09, 1, 1);
    });
    // L'enveloppe qui arrive
    const ex = -1.55, ey = 0.52, ew = 0.3, eh = 0.2, nE = b.n(0.012);
    b.line(nE, [ex - ew, ey - eh, 0], [ex + ew, ey - eh, 0], 1, 0.01, 0, 0); b.line(nE, [ex - ew, ey + eh, 0], [ex + ew, ey + eh, 0], 1, 0.01, 0, 0);
    b.line(nE, [ex - ew, ey - eh, 0], [ex - ew, ey + eh, 0], 1, 0.01, 0, 0); b.line(nE, [ex + ew, ey - eh, 0], [ex + ew, ey + eh, 0], 1, 0.01, 0, 0);
    b.line(nE, [ex - ew, ey + eh, 0], [ex, ey - 0.02, 0], 1, 0.01, 0, 0); b.line(nE, [ex + ew, ey + eh, 0], [ex, ey - 0.02, 0], 1, 0.01, 0, 0);
    b.ring(b.n(0.03), J, 0.17, 'xy', 1, 0.01, 0.4);
    b.agent([-0.35, 0.62, 0.1], 0.8);
    return b.done();
  },
  // Le socle (VorcheX) : toutes les équipes d'agents reliées en constellation, et l'humain au centre — un simple carré blanc.
  // prm : 0 structure des équipes · 1–1,99 messages qui voyagent vers le centre (position sur la fibre)
  // · 2 l'humain · 2,5 son halo · 3 l'anneau extérieur qui tourne lentement.
  server(N) {
    const b = builder(N, 51), HUB = [];
    for (let q = 0; q < 6; q++) { const a = (q / 6) * TAU + 0.52; HUB.push([Math.cos(a) * 1.5, Math.sin(a) * 1.12, (q % 2 ? 0.35 : -0.35)]); }
    HUB.forEach((h, q) => {
      // Une équipe : un orchestrateur (la marque d'agent) et ses quatre spécialistes autour de lui.
      b.agent(h, 0.78);
      for (let s = 0; s < 4; s++) {
        const a = (s / 4) * TAU + q, c = [h[0] + Math.cos(a) * 0.42, h[1] + Math.sin(a) * 0.36, h[2] + Math.sin(a * 2) * 0.12];
        b.ring(b.n(0.006), c, 0.07, 'xy', 0, 0.006, 0); b.line(b.n(0.004), h, c, 0, 0.006, 0, 0);
      }
      // La fibre vers le centre, où voyagent les messages, et le lien vers l'équipe voisine.
      b.line(b.n(0.03), h, [0, 0, 0], 0, 0.01, 1, 1.99);
      b.line(b.n(0.012), h, HUB[(q + 1) % 6], 0, 0.008, 0, 0);
    });
    // L'humain : un carré blanc, sobre, au centre de tout.
    const S = 0.24;
    [[-S, -S, S, -S], [S, -S, S, S], [S, S, -S, S], [-S, S, -S, -S]].forEach(([x0, y0, x1, y1]) => b.line(b.n(0.012), [x0, y0, 0.05], [x1, y1, 0.05], 1, 0.006, 2, 2));
    for (let k = 0, n = b.n(0.03); k < n; k++) b.put((b.rnd() - 0.5) * 2 * S * 0.82, (b.rnd() - 0.5) * 2 * S * 0.82, 0.05 + b.j(0.01), 1, 2);
    b.ring(b.n(0.02), [0, 0, 0.05], 0.44, 'xy', 1, 0.006, 2.5);
    b.ring(b.n(0.05), [0, 0, 0], 2.15, 'xy', 0, 0.014, 3);
    return b.done();
  },
  // Créer un site (vision) : dans un cadre de navigateur, la page se construit toute seule, bloc par bloc,
  // pendant qu'un agent la surveille. prm : 0 cadre · 1–1,99 blocs dans l'ordre de construction · 2 curseur de l'agent.
  site(N) {
    const b = builder(N, 141), W = 2.7, H = 1.95, z = 0;
    const rect = (n, cx, cy, w, h, tone, prm, zz = z) => { for (let k = 0; k < n; k++) { const q = rrPoint(b.rnd(), w, h, Math.min(0.05, h / 2)); b.put(cx + q[0] + b.j(0.006), cy + q[1] + b.j(0.006), zz + b.j(0.006), tone, prm); } };
    const fill = (n, cx, cy, w, h, tone, prm, zz = z + 0.02) => { for (let k = 0; k < n; k++) b.put(cx + (b.rnd() - 0.5) * w, cy + (b.rnd() - 0.5) * h, zz + b.j(0.006), tone, prm); };
    // Le cadre du navigateur, sa barre et ses trois pastilles, et une seconde fenêtre en retrait.
    rect(b.n(0.08), 0, 0, W, H, 0, 0);
    rect(b.n(0.03), 0.14, -0.12, W, H, 0, 0, -0.25);
    b.line(b.n(0.016), [-W / 2, H / 2 - 0.2, z], [W / 2, H / 2 - 0.2, z], 0, 0.006, 0, 0);
    [-1.22, -1.12, -1.02].forEach((x) => b.ring(b.n(0.004), [x, H / 2 - 0.1, z], 0.025, 'xy', 0, 0.004, 0));
    rect(b.n(0.012), 0.15, H / 2 - 0.1, 1.5, 0.09, 0, 0);
    // Les blocs, construits dans l'ordre : en-tête, grand visuel et titre, trois cartes, puis le bouton d'action.
    const blocks = [
      () => { rect(b.n(0.02), 0, 0.62, W - 0.2, 0.16, 0, 1.0); fill(b.n(0.008), -1.05, 0.62, 0.3, 0.06, 1, 1.0); },
      () => { rect(b.n(0.03), -0.55, 0.18, 1.4, 0.6, 0, 1.15); },
      () => { fill(b.n(0.016), -0.62, 0.3, 1.1, 0.07, 1, 1.25); fill(b.n(0.01), -0.75, 0.13, 0.85, 0.04, 0, 1.25); },
      () => { rect(b.n(0.02), 0.78, 0.18, 0.86, 0.6, 0, 1.35); fill(b.n(0.012), 0.78, 0.18, 0.7, 0.44, 0.35, 1.35); },
      () => { [-0.86, 0, 0.86].forEach((x, i) => { rect(b.n(0.014), x, -0.46, 0.76, 0.5, 0, 1.5 + i * 0.08); fill(b.n(0.006), x, -0.36, 0.56, 0.05, 0, 1.5 + i * 0.08); }); },
      () => { rect(b.n(0.016), 0, -0.84, 0.62, 0.15, 1, 1.78); fill(b.n(0.012), 0, -0.84, 0.5, 0.08, 1, 1.78); },
    ];
    blocks.forEach((f) => f());
    // L'agent qui construit, à l'angle de la fenêtre, et le fil qui le relie à la page.
    b.agent([-1.62, 1.18, 0.35], 0.85);
    b.curve(b.n(0.014), (t) => [lerp(-1.4, -0.9, t), lerp(1.05, 0.7, t) + Math.sin(t * Math.PI) * 0.1, lerp(0.3, 0.04, t)], 1, 0.006, 2, 2);
    b.ring(b.n(0.03), [0, -1.3, 0], 1.7, 'xz', 0, 0.012, 0);
    return b.done();
  },
  // Encaisse : trois factures empilées, et le tampon qui valide.
  invoice(N) {
    const b = builder(N, 61), w = 1.3, h = 1.8;
    for (let s = 0; s < 3; s++) {
      const ox = -0.3 + s * 0.3, oy = 0.14 - s * 0.14, oz = -0.55 + s * 0.55, rz = -0.09 + s * 0.07, cs = Math.cos(rz), sn = Math.sin(rz), front = s === 2, share = front ? 0.36 : 0.2;
      const P = (x, y, tone) => b.put(ox + x * cs - y * sn + b.j(0.008), oy + x * sn + y * cs + b.j(0.008), oz + b.j(0.008), tone, y / h + 0.5);
      for (let k = 0, n = b.n(share * 0.3); k < n; k++) { const e = Math.floor(b.rnd() * 4), t = b.rnd() * 2 - 1; P(e < 2 ? (t * w) / 2 : ((e === 2 ? -1 : 1) * w) / 2, e < 2 ? ((e === 0 ? -1 : 1) * h) / 2 : (t * h) / 2, 0); }
      for (let k = 0, n = b.n(share * 0.12); k < n; k++) P(-w / 2 + 0.12 + b.rnd() * 0.5, h / 2 - 0.2 + b.j(0.05), front ? 1 : 0);
      for (let k = 0, n = b.n(share * 0.5); k < n; k++) { const r = Math.floor(b.rnd() * 9), len = 0.45 + (((r * 37) % 10) / 10) * 0.5; P(-w / 2 + 0.12 + b.rnd() * (w - 0.24) * len, h / 2 - 0.48 - r * 0.125, 0); }
      for (let k = 0, n = b.n(share * 0.08); k < n; k++) P(w / 2 - 0.12 - b.rnd() * 0.42, -h / 2 + 0.2 + b.j(0.03), front ? 1 : 0);
    }
    b.ring(b.n(0.05), [0.64, -0.58, 0.62], 0.3, 'xy', 1, 0.012, 2);
    b.line(b.n(0.02), [0.49, -0.58, 0.62], [0.59, -0.69, 0.62], 1, 0.014, 2, 2);
    b.line(b.n(0.035), [0.59, -0.69, 0.62], [0.81, -0.44, 0.62], 1, 0.014, 2, 2);
    b.agent([-1.15, 1.25, 0.4], 0.85);
    return b.done();
  },
  // Motion : un ruban de pellicule qui ondule, et le bouton lecture.
  film(N) {
    const b = builder(N, 71), half = 0.36, F = 9;
    const P = (u, v, tone, wj = 0.008) => { const a = u * 0.7; b.put(u * 1.9 + b.j(wj), Math.sin(u * Math.PI) * 0.5 + Math.cos(a) * v + b.j(wj), Math.cos(u * Math.PI) * 0.55 - 0.2 + Math.sin(a) * v + b.j(wj), tone, (u + 1) / 2); };
    for (let k = 0, n = b.n(0.2); k < n; k++) P(b.rnd() * 2 - 1, b.rnd() < 0.5 ? half : -half, 0);
    for (let k = 0, n = b.n(0.14); k < n; k++) P(Math.round((b.rnd() * 2 - 1) * 22) / 22 + b.j(0.012), (b.rnd() < 0.5 ? 1 : -1) * (half - 0.06) + b.j(0.02), 0, 0.004);
    for (let k = 0, n = b.n(0.2); k < n; k++) {
      const f = Math.floor(b.rnd() * F), u0 = -1 + f * (2 / F) + 0.02, u1 = u0 + 2 / F - 0.04, v = half - 0.13, e = Math.floor(b.rnd() * 4), t = b.rnd();
      P(e < 2 ? lerp(u0, u1, t) : e === 2 ? u0 : u1, e < 2 ? (e === 0 ? -v : v) : lerp(-v, v, t), 0);
    }
    for (let k = 0, n = b.n(0.12); k < n; k++) { const f = Math.floor(b.rnd() * 5) * 2, u0 = -1 + f * (2 / F) + 0.03; P(u0 + b.rnd() * (2 / F - 0.06), (b.rnd() * 2 - 1) * (half - 0.15), 0.35); }
    const A = [-0.2, 0.28], B = [-0.2, -0.28], C = [0.3, 0], z = 0.95;
    [[A, B], [B, C], [C, A]].forEach(([p, q]) => b.line(b.n(0.022), [p[0], p[1], z], [q[0], q[1], z], 1, 0.012, 0.5, 0.5));
    for (let k = 0, n = b.n(0.05); k < n; k++) { let r1 = b.rnd(), r2 = b.rnd(); if (r1 + r2 > 1) { r1 = 1 - r1; r2 = 1 - r2; } b.put(A[0] + (B[0] - A[0]) * r1 + (C[0] - A[0]) * r2, A[1] + (B[1] - A[1]) * r1 + (C[1] - A[1]) * r2, z + b.j(0.01), 1, 0.5); }
    b.ring(b.n(0.06), [0, 0, z], 0.58, 'xy', 1, 0.012, 0.5);
    b.agent([1.45, 1.05, 0.3], 0.8);
    return b.done();
  },
  // La trajectoire : une double hélice qui monte de mes premières étapes jusqu'à 2026 (pleine),
  // puis se prolonge en pointillés lumineux vers ce que je veux construire ensuite.
  // prm : 0–0,7 la partie parcourue (hauteur) · 0,7–1 le prolongement en pointillés (prm > 0,7) · étapes marquées en accent.
  helix(N) {
    const b = builder(N, 91), H = 4.4, R = 0.78, turns = 2.6, DONE = 0.7;
    const S = (t, ph) => { const a = t * turns * TAU + ph; return [Math.cos(a) * R, (t - 0.5) * H, Math.sin(a) * R]; };
    // Les deux brins : pleins jusqu'à aujourd'hui, en pointillés au-delà.
    for (const ph of [0, Math.PI]) {
      b.curve(b.n(0.2), (t) => S(t * DONE, ph), 0, 0.014, 0, DONE);
      for (let k = 0, n = b.n(0.05); k < n; k++) { const t = DONE + (Math.floor(b.rnd() * 26) + b.rnd() * 0.32) / 26 * (1 - DONE), c = S(t, ph); b.put(c[0] + b.j(0.01), c[1] + b.j(0.01), c[2] + b.j(0.01), 0.6, t); }
    }
    for (let k = 0, n = b.n(0.15); k < n; k++) { const t = (Math.round(b.rnd() * 20) / 20) * DONE, p = S(t, 0), q = S(t, Math.PI), s = b.rnd(); b.put(lerp(p[0], q[0], s), p[1] + b.j(0.01), lerp(p[2], q[2], s), 0, t); }
    for (let q = 0; q < 6; q++) b.shell(b.n(0.02), S(0.08 + q * 0.12, 0), 0.12, 1, 0.08 + q * 0.12);
    // L'étape suivante, encore à écrire : un anneau ouvert au sommet.
    b.ring(b.n(0.03), S(0.97, 0), 0.22, 'xz', 1, 0.008, 0.97);
    return b.done();
  },
};

// ---------- Les silhouettes « aujourd'hui » (Blender → public/models/auj_<id>.chr) ----------
// Tant qu'un modèle n'est pas chargé, ou s'il manque, la station montre sa forme « futur » en gris papier :
// jamais d'erreur visible. Le modèle est recentré et mis à l'échelle de la Machine (FIT_W × FIT_H).
const MODELS = {};
for (const s of STATIONS) {
  const id = `auj_${s.id}`;
  SHAPES[id] = (N) => {
    const parts = MODELS[id];
    if (!parts) return SHAPES[s.id](N);
    const b = builder(N, 300 + s.level * 7 + s.id.length);
    let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity, z0 = Infinity, z1 = -Infinity;
    for (const p of parts) for (let i = 0; i < p.v.length; i += 3) { x0 = Math.min(x0, p.v[i]); x1 = Math.max(x1, p.v[i]); y0 = Math.min(y0, p.v[i + 1]); y1 = Math.max(y1, p.v[i + 1]); z0 = Math.min(z0, p.v[i + 2]); z1 = Math.max(z1, p.v[i + 2]); }
    const sc = Math.min(3.1 / Math.max(1e-3, x1 - x0), 2.85 / Math.max(1e-3, y1 - y0)), cx = (x0 + x1) / 2, cy = (y0 + y1) / 2, cz = (z0 + z1) / 2;
    const fit = { ...b, put: (x, y, z, t, p) => b.put((x - cx) * sc, (y - cy) * sc, (z - cz) * sc, t, p) };
    sampleChr(parts, fit, b.n(0.94));
    return b.done();
  };
}

// ---------- Les étapes du voyage : forme, effet, couleurs, place à l'écran ----------
// pose(v) → [x, y, z, rotX, rotY, rotZ, échelle] ; v = demi-largeur et demi-hauteur visibles, et « mobile ».
// Quand la page a mesuré la place laissée libre par le texte (v.stages), la sculpture s'y centre et s'y ajuste.
const FIT_W = 3.2, FIT_H = 3.1; // encombrement d'une sculpture à l'échelle 1
const side = (v, rx, ry, s = 1) => {
  const st = v.stages && v.stages[v.cur];
  if (st && v.W) {
    const z = st.top ? -0.4 : 0, hh = HALF * (7.2 - z), hw = hh * v.aspect;
    const x = (((st.x + st.w / 2) / v.W) * 2 - 1) * hw, y = (1 - ((st.y + st.h / 2) / v.H) * 2) * hh;
    const fit = Math.min(((st.w / v.W) * 2 * hw) / FIT_W, ((st.h / v.H) * 2 * hh) / FIT_H);
    return [x, y, z, rx, st.top ? ry * 0.6 : ry, 0, s * Math.max(0.3, Math.min(st.top ? 0.62 : 1, fit))];
  }
  return v.mobile ? [0, v.hh * 0.47, -0.4, rx, ry * 0.6, 0, 0.5 * s] : [v.hw * 0.47, 0.05, 0, rx, ry, 0, s];
};
const STOPS = {
  cloud: { shape: 'cloud', fx: 0, col: ['#2F80FF', '#EAF1FF'], fade: 0, halo: 0, sway: 0, pose: () => [0, 0, -1, 0, 0, 0, 1.2] },
  name: { shape: 'name', fx: 0, col: ['#DCE8FF', '#2F80FF'], fade: 0.95, halo: 0.2, sway: 0.05, pose: (v) => [0, v.mobile ? 0.25 : 0.05, 0, 0, 0, 0, v.hw * 0.9] },
  sphere: { shape: 'sphere', fx: 1, col: ['#2F80FF', '#EAF1FF'], fade: 1, halo: 1, sway: 0, pose: (v) => [0, 0, 0, 0, 0, 0.18, v.mobile ? 0.77 : 1] },
  terrain: { shape: 'terrain', fx: 2, col: ['#2F80FF', '#EAF1FF'], fade: 0.42, halo: 0, sway: 0, pose: () => [0, 0, 0, 0.55, 0, 0.18, 1] },
  devis: { shape: 'devis', fx: 13, col: ['#2F80FF', '#D2F65A'], fade: 1, halo: 0.35, sway: 0.2, pose: (v) => side(v, 0.1, -0.5, 0.95) },
  sms: { shape: 'sms', fx: 12, col: ['#2F80FF', '#FF7AD9'], fade: 1, halo: 0.35, sway: 0.2, pose: (v) => side(v, 0.06, -0.36, 0.92) },
  voice: { shape: 'voice', fx: 11, col: ['#2F80FF', '#C49BFF'], fade: 1, halo: 0.35, sway: 0.18, pose: (v) => side(v, 0.06, -0.42, 0.95) },
  wave: { shape: 'wave', fx: 3, col: ['#2F80FF', '#7CF5D0'], fade: 1, halo: 0.35, sway: 0.22, pose: (v) => side(v, 0.12, -0.5, 0.92) },
  radar: { shape: 'radar', fx: 4, col: ['#2F80FF', '#35E08B'], fade: 1, halo: 0.3, sway: 0.16, pose: (v) => side(v, 0.06, -0.34, 0.95) },
  switch: { shape: 'switch', fx: 5, col: ['#2F80FF', '#FFC46B'], fade: 1, halo: 0.3, sway: 0.2, pose: (v) => side(v, 0.1, -0.38, 0.95) },
  server: { shape: 'server', fx: 6, col: ['#35E08B', '#F4F7FF'], fade: 1, halo: 0.45, sway: 0.16, pose: (v) => side(v, 0.12, -0.3, 0.98) },
  invoice: { shape: 'invoice', fx: 7, col: ['#5C9BFF', '#FFB347'], fade: 1, halo: 0.3, sway: 0.2, pose: (v) => side(v, 0.08, -0.48, 1) },
  film: { shape: 'film', fx: 8, col: ['#2F80FF', '#FF6B6B'], fade: 1, halo: 0.3, sway: 0.2, pose: (v) => side(v, 0.1, -0.35, 0.95) },
  site: { shape: 'site', fx: 14, col: ['#2F80FF', '#5EC8FF'], fade: 1, halo: 0.32, sway: 0.18, pose: (v) => side(v, 0.06, -0.4, 0.98) },
  dim: { shape: 'terrain', fx: 2, col: ['#2F80FF', '#EAF1FF'], fade: 0.3, halo: 0, sway: 0, pose: () => [0, 0, 0, 0.55, 0, 0.18, 1] },
  path: { shape: 'helix', fx: 10, col: ['#2F80FF', '#8AB8FF'], fade: 0.6, halo: 0.15, sway: 0.1, pose: (v) => (v.mobile ? [v.hw * 0.55, 0, -1.2, 0, 0, 0.12, 0.7] : [v.hw * 0.72, 0, -0.4, 0, 0, 0.14, 1]) },
  // L'épilogue : la sphère se range à droite (en retrait sur téléphone), pour laisser l'adresse et le texte lisibles.
  end: { shape: 'sphere', fx: 1, col: ['#2F80FF', '#EAF1FF'], fade: 0.62, halo: 0.6, sway: 0, pose: (v) => (v.mobile ? [0, v.hh * 0.45, -1.8, 0, 0, 0.18, 0.58] : [v.hw * 0.74, 0.3, -1.8, 0, 0, 0.18, 0.74]) },
};
// Les étapes « aujourd'hui » : la même place que leur futur, en gris papier et encre de stylo, sans halo, au ralenti (old = 1).
// Tant que le modèle Blender n'est pas là, la forme de secours (le futur en gris) garde l'animation du futur.
const PAPER = ['#9DA4AE', '#7FA2DC'];
for (const s of STATIONS) {
  const id = `auj_${s.id}`, F = STOPS[s.id];
  STOPS[id] = { shape: id, col: PAPER, fade: 0.86, halo: 0, sway: 0.05, old: 1, pose: F.pose, get fx() { return MODELS[id] ? 20 : F.fx; } };
}

// ---------- Le voyage ----------
// Pour chaque passage d'une étape à la suivante : distance parcourue et manière d'y aller
// (1 : on traverse la forme quittée et la suivante arrive du fond ; 0 : la forme se transforme sur place).
// La bascule « aujourd'hui → futur » se fait sur place (0) ; le passage d'un futur à la station suivante est un saut (1).
// Après la dernière station, on glisse sans saut vers le fond calme de la salle des agents
// (le monde y est mis en pause : jamais figé en plein saut). Pas de saut vers le contact : on y lit longtemps.
const LEG = { cloud: [6, 0], name: [0, 0], server: [8, 0], path: [20, 0] };
STATIONS.forEach((s) => { LEG[`auj_${s.id}`] = [0, 0]; });
const legOf = (i) => LEG[TRACK[i]] || [14, 1];
// Abscisse de chaque étape le long de la route.
const AT = TRACK.map((_, i) => { let d = 0; for (let j = 0; j < i; j++) d += legOf(j)[0]; return d; });
// Couleur d'une étape pour ses balises : celle de la station (sa promesse), sinon le bleu clair.
const tintOf = (key) => stationOf(key)?.color || (STOPS[key].col[1] === '#EAF1FF' ? '#8AB8FF' : STOPS[key].col[1]);
// Courbe « élan vers l'avant » des sauts : on recule un peu pour prendre son élan, on traverse,
// on dépasse légèrement l'arrivée, puis on se pose. Jamais de mouvement linéaire.
const elan = (f) => { const s = f * f * (3 - 2 * f); return s - 0.055 * Math.sin(TAU * f) * (1 - Math.abs(2 * f - 1) * 0.35); };
// Méandres de la route : le décor s'incline comme dans un virage.
const bend = (x) => 2.4 * Math.sin(x * 0.043) + 1.1 * Math.sin(x * 0.107 + 1.3);
const bendSlope = (x) => 2.4 * 0.043 * Math.cos(x * 0.043) + 1.1 * 0.107 * Math.cos(x * 0.107 + 1.3);
const DEEP = 96; // profondeur du décor visible devant la caméra

// ---------- Shaders ----------
const NOISE = /* glsl */ `
vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}
vec4 mod289(vec4 x){return x-floor(x*(1./289.))*289.;}
vec4 permute(vec4 x){return mod289(((x*34.)+1.)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1./6.,1./3.);const vec4 D=vec4(0.,.5,1.,2.);
  vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.,i1.z,i2.z,1.))+i.y+vec4(0.,i1.y,i2.y,1.))+i.x+vec4(0.,i1.x,i2.x,1.));
  float n_=.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.+1.;vec4 s1=floor(b1)*2.+1.;vec4 sh=-step(h,vec4(0.));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);m=m*m;
  return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}`;

const vertex = /* glsl */ `
uniform float uTime; uniform float uMix; uniform float uSize; uniform float uPixel; uniform float uVel;
uniform float uFlight; uniform float uWarp; uniform float uAspect;
uniform float uFxA; uniform float uFxB; uniform float uScatter; uniform float uFocus;
uniform vec3 uMouse; uniform float uMouseStrength; uniform vec3 uPulsePos; uniform float uPulse;
uniform float uOldA; uniform float uOldB;
// Mise en lumière d'une partie de la sculpture (un chiffre clé survolé) : points dont prm ∈ [x, y] et ton ∈ [z, w],
// avec une intensité propre à chacune des deux formes en cours (uHiAB.x pour A, .y pour B).
uniform vec4 uHi; uniform vec2 uHiAB;
attribute vec3 aTo; attribute vec2 aMetaA; attribute vec2 aMetaB; attribute vec3 aRand;
varying float vAlpha; varying float vToneA; varying float vToneB; varying float vM; varying float vStretch; varying vec2 vDir;
${NOISE}
mat2 rot(float a){ float c = cos(a), s = sin(a); return mat2(c, -s, s, c); }
float hiOf(vec2 meta){ return step(uHi.x, meta.y) * step(meta.y, uHi.y) * step(uHi.z, meta.x) * step(meta.x, uHi.w); }
// La partie désignée s'avive, le reste de la sculpture s'efface à moitié (sans jamais disparaître).
float lit(float g, vec2 meta, float amt){ return mix(g, mix(min(g, -.15) - .38, max(g, .3) + .9, hiOf(meta)), amt); }

// Chaque forme a sa vie propre : déplacement + éclat. T est son horloge : à pleine vitesse pour le futur,
// ralentie pour le travail manuel d'aujourd'hui (« le manuel peine, l'automatique coule »). Toujours fluide :
// une animation saccadée se confondait avec un ordinateur qui rame.
vec3 life(vec3 p, vec2 meta, float id, float T, out float glow){
  glow = 0.;
  float tone = meta.x, prm = meta.y;
  if (prm < -.5) { p.y += sin(uTime * .25 + aRand.x * 6.283) * .14; p.x += cos(uTime * .2 + aRand.y * 6.283) * .12; return p; }
  // La marque d'agent, commune à toutes les formes du futur : l'anneau respire, la barre de regard travaille.
  if (prm > 39.5) { glow = prm > 40.5 ? .55 + .45 * sin(uTime * 3.1 + p.x * 4.) : .22 + .12 * sin(uTime * 1.2 + aRand.x * 6.283); return p; }
  if (id > 19.5) {
    // Le geste manuel, en boucle (silhouettes Blender) : 0 structure · 1–1,99 séquence qui grossit puis recommence
    // · 2 partie qui vibre (sonnerie) · 3 voyant lent · 4 va-et-vient vertical (tampon, crayon, claquette).
    glow = .1 + .05 * sin(uTime * .8 + p.y * 3.) + tone * .14;
    if (prm > 3.5) { float d = smoothstep(.55, 1., .5 + .5 * sin(uTime * 2.3)); p.y -= d * .24; glow += d * .55 * tone; }
    else if (prm > 2.5) glow = .3 + .5 * (.5 + .5 * sin(uTime * 2.));
    else if (prm > 1.995) { float ring = step(.5, fract(uTime * .45)); p.x += ring * sin(uTime * 61.) * .022; p.z += ring * cos(uTime * 47.) * .018; glow += ring * .2; }
    else if (prm > .999) {
      float s = fract(uTime / 2.6) * 1.18, r = prm - 1., age = s - r;
      float on = step(0., age);
      p.y -= (1. - smoothstep(0., .05, age)) * .1;
      glow = on > .5 ? glow + .12 + smoothstep(.06, 0., age) * .6 : -5.;
    }
    return p;
  }
  if (id > 13.5) {
    // Le site qui se construit (cycle d'environ 10 s) : chaque bloc arrive du fond à son tour, l'agent veille.
    float s = fract(uTime * .1);
    if (prm > 1.95) glow = .4 + .3 * sin(uTime * 4.);
    else if (prm > .999) {
      float r = (prm - 1.) * .72 + .04, on = smoothstep(r, r + .05, s) * (1. - smoothstep(.93, .99, s));
      p.z -= (1. - on) * .6; p.y -= (1. - on) * .12;
      glow = on > .01 ? mix(-.65, .3 + tone * .4, on) + smoothstep(r + .05, r, s) * step(r, s) * 1.2 : -5.;
    }
    else glow = .16 + .06 * sin(uTime * .8 + p.x * 2.);
    return p;
  }
  if (id < .5) {
    glow = .4 + .3 * sin(uTime * 2.2 + aRand.x * 40.);
  } else if (id < 1.5) {
    p.xz = rot(uTime * .07) * p.xz;
    float n = snoise(p * 1.25 + vec3(0., 0., uTime * .12));
    p += normalize(p) * n * .22; glow = n * .9;
  } else if (id < 2.5) {
    p.xz = rot(uTime * .07) * p.xz;
    p.y += sin(p.x * 1.4 + uTime * .55) * .16 + cos(p.z * 1.7 + uTime * .4) * .14;
  } else if (id < 3.5) {
    if (prm < 1.5) { float w = .5 + .5 * sin(prm * 26. - uTime * 3.2), w2 = .5 + .5 * sin(prm * 9. + uTime * 1.3); p.y *= .32 + .68 * w * (.55 + .45 * w2); glow = w * .55; }
    else { p.yz = rot(uTime * (prm > 2.5 ? -.45 : .3)) * p.yz; glow = .35 + .25 * sin(uTime * 2. + prm); }
  } else if (id < 4.5) {
    // JobHunter, le tri (une fiche toutes les 2 s, trajet de 12 s) : la fiche glisse sur le rail, marque un temps
    // sous le trait de lecture, change d'aspect une fois lue, puis part sur sa pile. Le trait s'éclaire à chaque lecture.
    if (prm > 3.9) glow = .02 + .04 * sin(uTime * .6 + p.x * 4.);
    else if (prm > 3.4) glow = .6 + .3 * sin(uTime * 2.2);
    else if (prm > 2.9) glow = .22 + .1 * sin(uTime * .9 + p.y * 7.);
    else if (prm > 1.9) glow = .18 + pow(1. - fract(uTime / 2. - .72), 6.) * 1.3;
    else if (prm > .999) {
      float x = (prm - 1.) * 10. + .001, k = floor(x), r = x - k, kept = step(.4, r), after = step(.2, r - kept * .5);
      float t = fract(k / 6. + uTime / 12.), e = smoothstep(.66, .97, t), u = 1. - e;
      // Repères de radar() : rail de x = −1,32 au trait de lecture (x = 0,08), dessus des deux piles.
      vec3 R = vec3(.08, .1, .08);
      vec3 c = vec3(mix(-1.32, .08, min(t / .58, 1.)), .1, smoothstep(.48, .6, t) * .08);
      if (t > .66) {
        vec3 E = kept > .5 ? vec3(1.364, .858, .01) : vec3(1.23, -.664, -.02);
        vec3 C1 = kept > .5 ? vec3(.63, .8, .45) : vec3(.63, -.2, .35);
        c = u * u * R + 2. * u * e * C1 + e * e * E;
      }
      // Une offre écartée bascule en tombant ; une retenue reste droite.
      if (kept < .5) p.xy = rot(-.45 * e) * p.xy;
      p += c;
      float vis = after > .5 ? smoothstep(.6, .64, t) * (1. - smoothstep(.93, .985, t)) : smoothstep(0., .06, t) * (1. - smoothstep(.6, .64, t));
      float level = after > .5 ? (kept > .5 ? .45 : mix(.05, -.4, e)) : .16;
      glow = vis > .05 ? mix(-.7, level + exp(-pow((t - .62) / .02, 2.)) * 1.1, vis) : -5.;
    }
    else glow = .05 + .04 * sin(uTime * .8 + p.x * 3.);
  } else if (id < 5.5) {
    glow = pow(.5 + .5 * sin((prm - uTime * .22) * 12.566), 14.) * 1.9;
    if (tone > .9) glow += .2;
  } else if (id < 6.5) {
    // La constellation : les messages convergent vers l'humain, qui reste calme ; l'anneau extérieur tourne.
    if (prm > 2.9) { p.xy = rot(-uTime * .05) * p.xy; glow = .16 + .1 * sin(uTime * .9 + aRand.x * 6.283); }
    else if (prm > 2.4) { float d = fract(uTime * .25); p.xy *= .9 + d * .5; glow = (1. - d) * .9 - .3; }
    else if (prm > 1.9) glow = .75 + .15 * sin(uTime * 1.3);
    else if (prm > .999) glow = pow(fract((prm - 1.) * 2. - uTime * .42 + aRand.z * .02), 9.) * 1.8 + .05;
    else glow = .2 + .14 * sin(uTime * 1.6 + aRand.x * 9.);
  } else if (id < 7.5) {
    if (prm > 1.5) glow = .5 + .45 * sin(uTime * 2.6);
    else { glow = smoothstep(.07, 0., abs(prm - (1. - fract(uTime * .22)))) * 1.7; p.z += sin(uTime * .9 + prm * 3.) * .035; }
  } else if (id < 8.5) {
    if (tone > .9) glow = .35 + .3 * sin(uTime * 2.4);
    else { p.y += sin(prm * 9.42 + uTime * 1.1) * .07; glow = pow(.5 + .5 * sin((prm - uTime * .18) * 18.85), 10.) * 1.3; }
  } else if (id > 12.5) {
    // Devis IA (cycle d'environ 11 s) : la demande coule vers la feuille, le devis s'écrit ligne par ligne, le total s'allume,
    // les trois relances partent en éventail, puis la case « Bon pour accord » se coche.
    float s = fract(uTime * .09), fin = 1. - smoothstep(.95, 1., s);
    float scanY = max(.55 - 2.833 * (s - .03), -.6), scanOn = smoothstep(0., .03, s) * (1. - smoothstep(.4, .45, s));
    if (prm > 4.9) glow = (prm > 5.05 ? .3 : .08) + .08 * sin(uTime * .8 + p.y * 3.) + exp(-pow((p.y - scanY) * 9., 2.)) * scanOn * step(abs(p.x), .8) * .9;
    else if (prm > 4.4) {
      vec2 C = vec2(-.52, -.84);
      float d = clamp((s - .86) / .09, 0., 1.), act = step(.86, s) * (1. - step(.999, d));
      p.xy = C + (p.xy - C) * (act > .5 ? .5 + d * 3.2 : 0.);
      p.z -= (1. - act) * .4;
      glow = act > .5 ? (1. - d) * 1.8 - .3 : -5.;
    }
    else if (prm > 3.9) {
      float on = smoothstep(.84, .88, s) * fin;
      p.z += (1. - on) * .2;
      glow = mix(-.62, .6 + .35 * sin(uTime * 4.), on) + smoothstep(.84, .86, s) * (1. - smoothstep(.86, .93, s)) * 1.2;
    }
    else if (prm > 2.9) {
      float k = floor((prm - 3.) * 10. + .5), st = .48 + k * .1, d = clamp((s - st) / .3, 0., 1.), e = d * d * (3. - 2. * d);
      float launched = step(st, s) * step(.5, fin);
      vec3 S0 = vec3(.66, -.58, -.02);
      p = S0 + (p - S0) * launched * smoothstep(0., .035, s - st);
      p += vec3(.82 * e, (1.5 - k * .62) * sin(e * 1.5708) + sin(e * 9.42 + k) * .035 * e, .3 * e);
      p.z -= (1. - launched) * .5;
      glow = launched > .5 ? mix(1.1 + .3 * sin(uTime * 5. + k * 2.), .15, smoothstep(.6, 1., d)) : -5.;
    }
    else if (prm > 1.9) {
      float on = smoothstep(.4, .43, s) * fin;
      glow = mix(-.62, .5 + .3 * sin(uTime * 3.), on) + smoothstep(.4, .42, s) * (1. - smoothstep(.42, .52, s)) * 1.4;
    }
    else if (prm > 1.65) {
      p.y += scanY;
      p.x *= smoothstep(0., .6, scanOn);
      p.z -= (1. - scanOn) * .4;
      glow = scanOn > .01 ? mix(-.7, 1.1 + .3 * sin(uTime * 9. + p.x * 6.), scanOn) : -5.;
    }
    else if (prm > .999) {
      float age = s - .03 - (prm - 1.) * .6, on = smoothstep(0., .02, age) * fin;
      p.x -= (1. - on) * .12;
      glow = mix(-.62, tone > .5 ? .5 : .2, on) + smoothstep(0., .01, age) * (1. - smoothstep(.01, .09, age)) * 1.4;
    }
    else {
      // Les mots glissent le long de leur rangée jusqu'à la feuille, où ils s'éteignent.
      float l = floor(prm * 3. + .001), t = (prm - l / 3.) / .3, tt = fract(t + uTime * .06), u = 1. - t, v = 1. - tt;
      vec3 P0 = vec3(-1.85, .95 - l * .13, .5), P1 = vec3(-1.35, 1.3 - l * .13, .32), P2 = vec3(-.82, .4 - l * .1, .04);
      p += (v * v * P0 + 2. * v * tt * P1 + tt * tt * P2) - (u * u * P0 + 2. * u * t * P1 + t * t * P2);
      float env = smoothstep(0., .12, tt) * (1. - smoothstep(.82, 1., tt));
      glow = mix(-.7, (tone > .5 ? .9 : .4) * (.45 + .55 * (1. - smoothstep(.35, .5, s))), env);
    }
  } else if (id > 11.5) {
    // Accueil SMS : le voyant clignote, les ondes de l'appel manqué s'élargissent, la conversation s'écrit bulle après bulle,
    // les trois créneaux tournent sur une orbite inclinée, et celui choisi par le client bat.
    if (prm > 3.5) glow = (prm > 4.05 ? .24 : .07) + .1 * sin(uTime * .8 + p.y * 3.);
    else if (prm > 2.5) {
      p.xz = rot(uTime * .28) * p.xz; p.yz = rot(.34) * p.yz;
      glow = tone > .9 ? .5 + .45 * sin(uTime * 3.2) : .1 + .08 * sin(uTime * 1.4 + prm * 30.);
    }
    else if (prm > 1.9) { float d = fract(uTime * .32 - (prm - 2.) * 3.333); p.xy *= .85 + d * 1.15; glow = pow(1. - d, 2.) * 1.5 - .35; }
    else if (prm > 1.5) glow = .4 + .9 * step(.5, fract(uTime * 1.1));
    else {
      float s = fract(uTime * .1) * 1.3, at = (prm - 1.) / .08 / 5.5, age = s - at, on = smoothstep(0., .03, age);
      p.y -= (1. - on) * .12;
      glow = mix(-.62, .22, on) + smoothstep(0., .012, age) * smoothstep(.16, .02, age) * 1.5;
    }
  } else if (id > 10.5) {
    // Standardiste : l'orbe respire et parle, les ondes partent vers l'agenda, le créneau réservé bat.
    vec3 c = vec3(-1.3, .05, 0.);
    if (prm > 3.5) glow = .08 + .1 * sin(uTime * .8 + p.x * 3.);
    else if (prm > 2.5) { float h = .5 + .5 * sin(uTime * 2.8); glow = .45 + h * .9; p.z += h * .03; }
    else if (prm > 1.5) { float n = snoise(p * 2.6 + vec3(0., 0., uTime * .7)); float talk = .5 + .5 * sin(uTime * 7.) * sin(uTime * 2.3); p = c + (p - c) * (1. + n * .14 + talk * .07); glow = .45 + n * .8 + talk * .3; }
    else if (prm > .999) { float d = fract(uTime * .42 - (prm - 1.) * 2.222); p = c + (p - c) * (.62 + d * .8); glow = pow(1. - d, 2.) * 1.7 - .25; }
    else { glow = pow(.5 + .5 * sin((prm - uTime * .24) * 18.85), 10.) * 1.5; if (tone > .9) glow += .3; }
  } else {
    // La trajectoire : la lumière monte le long du chemin parcouru ; au-delà de 2026, les pointillés scintillent doucement.
    p.xz = rot(uTime * .3) * p.xz;
    if (prm > .7 && tone < .9) glow = .1 + .4 * pow(.5 + .5 * sin(uTime * 1.4 - prm * 30.), 4.);
    else { glow = pow(fract(prm * 2. - uTime * .25), 6.) * 1.5; if (tone > .9) glow += .35; }
  }
  return p;
}

void main(){
  float gA; float gB;
  // Horloge du travail manuel : ralentie, jamais saccadée.
  float tSlow = uTime * .6;
  vec3 a = life(position, aMetaA, uFxA, mix(uTime, tSlow, uOldA), gA);
  vec3 b = life(aTo, aMetaB, uFxB, mix(uTime, tSlow, uOldB), gB);
  // Une forme peut cacher un point en renvoyant un éclat < −2 : il devient transparent, sans fantôme.
  float hA = step(-2., gA), hB = step(-2., gB); gA = max(gA, -.7); gB = max(gB, -.7);
  if (uHiAB.x + uHiAB.y > .001) { gA = max(lit(gA, aMetaA, uHiAB.x), -.7); gB = max(lit(gB, aMetaB, uHiAB.y), -.7); }
  // Chaque point part à son heure : la forme se défait puis se reforme par vagues.
  float m = clamp(uMix * 1.65 - aRand.x * .65, 0., 1.);
  m = m * m * (3. - 2. * m);
  float mid = sin(m * 3.14159);
  // Le voyage : la forme quittée file vers le visiteur et le dépasse, la suivante arrive du fond de l'espace.
  float leave = 1. - step(.5, m), u = min(m * 2., 1.), v = max(m * 2. - 1., 0.);
  vec3 pos = mix(mix(a, b, m), mix(b, a, leave), uFlight);
  vec3 sw = vec3(sin(pos.y * 1.9 + uTime * .9 + aRand.y * 6.283), cos(pos.z * 1.7 + uTime * .7 + aRand.z * 6.283), sin(pos.x * 2.1 + uTime * .8 + aRand.x * 6.283));
  pos += sw * mid * uScatter * (.3 + aRand.z * .9) * (1. - uFlight * .6);
  vec4 world = modelMatrix * vec4(pos, 1.);
  vec3 dm = world.xyz - uMouse; float dist = length(dm);
  world.xyz += normalize(dm + 1e-4) * smoothstep(1.1, 0., dist) * .42 * uMouseStrength;
  // Onde de choc au clic : un anneau part du doigt et bouscule les points.
  vec3 dp = world.xyz - uPulsePos; float pd = length(dp) - (1. - uPulse) * 4.2; float ring = exp(-pd * pd * 6.) * uPulse;
  world.xyz += normalize(dp + 1e-4) * ring * .5;
  vec4 mv = viewMatrix * world;
  float depth = -mv.z;
  float go = uFlight * leave * u * u, come = uFlight * (1. - leave) * (1. - v) * (1. - v);
  mv.z += go * (depth - 1.1);
  mv.xy *= 1. + go * (.4 + aRand.y * 1.1);
  mv.z -= come * (14. + aRand.z * 30.);
  gl_Position = projectionMatrix * mv;
  float glow = clamp(mix(gA, gB, m) + ring * 1.6, -.7, 2.4);
  float dust = mix(step(aMetaA.y, -.5), step(aMetaB.y, -.5), m);
  float big = step(.955, aRand.y);
  float coc = abs(depth - uFocus);
  // Traînées : verticales quand la page défile, rayonnantes quand on file d'une étape à l'autre.
  vec2 sc = gl_Position.xy / max(gl_Position.w, .001);
  vDir = normalize(mix(vec2(0., 1.), normalize(vec2(sc.x * uAspect, sc.y) + 1e-4), uWarp) + 1e-4);
  vStretch = 1. + uVel * (2.2 + aRand.x * 2.6) + uWarp * (1.2 + aRand.x * 2.8);
  float size = uSize * (.55 + aRand.z * .9) * (1. + max(glow, 0.) * .45) * mix(1., 3.4, big) * (1. + coc * .18) * (1. + mid * .5 * (1. - uFlight));
  float fly = mix(1., leave > .5 ? 1. - smoothstep(.42, 1., u) : smoothstep(0., .55, v), uFlight);
  vAlpha = (.5 + .5 * glow) * mix(1., .16, big) * mix(1., .3, dust) / (1. + coc * .5) * mix(hA, hB, m) * fly * smoothstep(1.3, 2.8, -mv.z);
  gl_PointSize = vAlpha > .002 ? size * uPixel / max(-mv.z, 1.6) * vStretch : 0.;
  vToneA = aMetaA.x; vToneB = aMetaB.x; vM = m;
}`;

const fragment = /* glsl */ `
uniform vec3 uBaseA; uniform vec3 uAccA; uniform vec3 uBaseB; uniform vec3 uAccB; uniform float uFade; uniform float uWarp;
varying float vAlpha; varying float vToneA; varying float vToneB; varying float vM; varying float vStretch; varying vec2 vDir;
void main(){
  vec2 c = gl_PointCoord - .5, dr = vec2(vDir.x, -vDir.y);
  c = vec2(dot(c, vec2(-dr.y, dr.x)) * vStretch, dot(c, dr)); float d = length(c);
  if (d > .5) discard;
  float a = smoothstep(.5, .05, d) + smoothstep(.16, 0., d) * .5;
  vec3 col = mix(mix(uBaseA, uAccA, vToneA), mix(uBaseB, uAccB, vToneB), vM);
  // Aberration chromatique radiale pendant un saut : le rouge en tête de la traînée, le bleu en queue.
  col = max(col + vec3(.55, 0., -.55) * c.y * uWarp * 1.3, 0.);
  gl_FragColor = vec4(col, a * vAlpha * uFade / sqrt(vStretch));
}`;
// La vie des formes reçoit son horloge T : dans life(), uTime devient T (pleine vitesse ou ralentie selon l'époque de la forme).
const VERTEX = vertex.replace(/vec3 life\([\s\S]*?\n}\n/, (s) => s.replaceAll('uTime', 'T'));

// Décor : étoiles (genre 0), fil de route (1), balises des étapes (2). Tout est placé par rapport à la caméra
// et défile quand on avance : uTravel = distance parcourue, uDrift = lente dérive des étoiles au repos.
const skyVertex = /* glsl */ `
uniform float uTravel; uniform float uDrift; uniform float uWarp; uniform float uPixel; uniform float uTime; uniform float uFade; uniform float uAspect; uniform float uEnd;
uniform vec3 uTint; uniform float uEra;
attribute vec4 aP; attribute vec4 aS; attribute vec3 aC;
varying float vA; varying vec2 vDir; varying float vStretch; varying vec3 vCol;
float bend(float x){ return 2.4 * sin(x * .043) + 1.1 * sin(x * .107 + 1.3); }
void main(){
  float kind = aP.w, L = ${DEEP.toFixed(1)};
  float dz = kind > 1.5 ? aP.z - uTravel : mod(aP.z - uTravel - (kind < .5 ? uDrift : 0.), L);
  float s = uTravel + dz;
  vec3 p = vec3(aP.x + bend(s) - bend(uTravel), aP.y, 7.2 - dz);
  vec4 mv = modelViewMatrix * vec4(p, 1.);
  gl_Position = projectionMatrix * mv;
  vec2 sc = gl_Position.xy / max(gl_Position.w, .001);
  vDir = normalize(vec2(sc.x * uAspect, sc.y) + 1e-4);
  float streak = min(uWarp * 34. / (dz + 3.), 10.), size, a;
  if (kind < .5) { size = aS.z * 58.; a = (.3 + .7 * aS.x) * (.65 + .35 * sin(uTime * (.8 + aS.y * 2.) + aS.y * 40.)); a *= smoothstep(.8, 4., dz); }
  else if (kind < 1.5) { size = aS.z * 24.; a = .6 + aS.y * .6; streak *= .4; a *= smoothstep(3., 8., dz) * step(s, uEnd + 7.4); }
  else { size = 84.; float here = 1. - smoothstep(.5, 3., abs(dz - 7.2)); a = (.5 + .3 * sin(uTime * 2.2 + aS.x * 1.7)) * (.45 + here * .8); streak = 0.; a *= smoothstep(3., 6., dz); }
  vStretch = 1. + streak;
  vA = a * (1. - smoothstep(L * .45, L, dz)) * step(0., dz) * uFade;
  // Les points trop fins pour l'écran gardent deux pixels, en devenant plus discrets : ainsi ils restent visibles.
  float ps = size * uPixel / max(-mv.z, 1.), floorPs = 2.2 * uPixel;
  vA *= pow(min(1., ps / floorPs), .65);
  gl_PointSize = vA > .003 ? max(ps, floorPs) * vStretch : 0.;
  vCol = mix(aC, uTint, kind < .5 ? step(.8, aS.y) * .75 : 0.);
  // Étalonnage : aujourd'hui (uEra = 0), un gris de bureau sous néon froid ; le futur (1), la palette du projet.
  vCol = mix(vec3(dot(vCol, vec3(.3, .59, .11))) * vec3(.82, .9, 1.04), vCol, uEra);
  vA *= .72 + .28 * uEra;
}`;
const skyFragment = /* glsl */ `
varying float vA; varying vec2 vDir; varying float vStretch; varying vec3 vCol;
void main(){
  vec2 c = gl_PointCoord - .5, dr = vec2(vDir.x, -vDir.y);
  vec2 q = vec2(dot(c, dr), dot(c, vec2(-dr.y, dr.x)) * vStretch);
  float r = length(q) * 2.; if (r > 1.) discard;
  gl_FragColor = vec4(vCol, (smoothstep(1., .0, r) * .75 + smoothstep(.45, .0, r) * .5) * vA / sqrt(vStretch));
}`;

export function initWorld(canvas, { reduced = false, onQuality = null, onFrame = null, seed = 0 } = {}) {
  const renderer = new WebGLRenderer({ canvas, antialias: false, alpha: true, powerPreference: 'high-performance' });
  const mobile = window.matchMedia('(max-width: 760px)').matches;
  let pixel = Math.min(window.devicePixelRatio || 1, mobile ? 1.5 : 1.75);
  renderer.setPixelRatio(pixel);
  const scene = new Scene();
  const camera = new PerspectiveCamera(35, 1, 0.1, 100);
  camera.position.set(0, 0, 7.2);

  const N = mobile ? 11000 : 26000;
  const shapes = {};
  const shapeOf = (key) => shapes[key] || (shapes[key] = SHAPES[key](N));

  const geo = new BufferGeometry();
  // Hasard de chaque point : reproductible quand on fixe une graine (captures automatiques, ?capture).
  const rng = seed ? mulberry(seed) : Math.random;
  const rand = new Float32Array(N * 3); for (let i = 0; i < N * 3; i++) rand[i] = rng();
  const attr = { a: new BufferAttribute(new Float32Array(N * 3), 3), b: new BufferAttribute(new Float32Array(N * 3), 3), ma: new BufferAttribute(new Float32Array(N * 2), 2), mb: new BufferAttribute(new Float32Array(N * 2), 2) };
  geo.setAttribute('position', attr.a); geo.setAttribute('aTo', attr.b); geo.setAttribute('aMetaA', attr.ma); geo.setAttribute('aMetaB', attr.mb);
  geo.setAttribute('aRand', new BufferAttribute(rand, 3));

  const uniforms = {
    uTime: { value: 0 }, uMix: { value: 0 }, uSize: { value: mobile ? 22 : 25 }, uPixel: { value: pixel }, uVel: { value: 0 },
    uFlight: { value: 0 }, uWarp: { value: 0 }, uAspect: { value: 1 },
    uFxA: { value: 0 }, uFxB: { value: 0 }, uScatter: { value: 0.55 }, uFocus: { value: 7.2 },
    uMouse: { value: new Vector3(9, 9, 0) }, uMouseStrength: { value: 0 }, uFade: { value: 1 }, uPulsePos: { value: new Vector3(9, 9, 0) }, uPulse: { value: 0 },
    uBaseA: { value: new Color() }, uAccA: { value: new Color() }, uBaseB: { value: new Color() }, uAccB: { value: new Color() },
    uOldA: { value: 0 }, uOldB: { value: 0 },
    uHi: { value: new Vector4(0, 0, -1, 2) }, uHiAB: { value: new Vector2(0, 0) },
  };
  const mat = new ShaderMaterial({ vertexShader: VERTEX, fragmentShader: fragment, uniforms, transparent: true, depthWrite: false, blending: AdditiveBlending });
  const points = new Points(geo, mat); points.frustumCulled = false;
  const rig = new Group(); rig.add(points); scene.add(rig);

  // Lumière diffuse derrière la forme : une simple nappe froide, sans couronne ni anneau pulsant (rien qui évoque un soleil).
  const haloMat = new ShaderMaterial({ transparent: true, depthWrite: false, blending: AdditiveBlending, uniforms: { uFade: { value: 0 }, uTime: uniforms.uTime, uTint: { value: new Color('#2F80FF') } },
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }',
    fragmentShader: 'uniform float uFade; uniform vec3 uTint; varying vec2 vUv; void main(){ float d = length(vUv - .5) * 2.; float core = pow(max(0., 1. - d), 4.); vec3 c = mix(uTint * .7, vec3(.62, .78, 1.), core * .6); gl_FragColor = vec4(c, core * .42 * uFade); }' });
  const halo = new Mesh(new PlaneGeometry(8.05, 8.05), haloMat); scene.add(halo);

  // Braises qui montent
  const EMB = mobile ? 240 : 560, ePos = new Float32Array(EMB * 3), eSeed = new Float32Array(EMB * 3);
  for (let i = 0; i < EMB; i++) { ePos[i * 3] = (Math.random() - 0.5) * 13; ePos[i * 3 + 1] = (Math.random() - 0.5) * 8; ePos[i * 3 + 2] = (Math.random() - 0.5) * 6 + 1; eSeed[i * 3] = 0.08 + Math.random() * 0.32; eSeed[i * 3 + 1] = Math.random(); eSeed[i * 3 + 2] = 0.4 + Math.random() * 1.6; }
  const eGeo = new BufferGeometry(); eGeo.setAttribute('position', new BufferAttribute(ePos, 3)); eGeo.setAttribute('aSeed', new BufferAttribute(eSeed, 3));
  const eMat = new ShaderMaterial({ transparent: true, depthWrite: false, blending: AdditiveBlending, uniforms: { uTime: uniforms.uTime, uPixel: uniforms.uPixel, uFade: { value: 1 } },
    vertexShader: 'uniform float uTime; uniform float uPixel; attribute vec3 aSeed; varying float vA; varying float vT; void main(){ vec3 p = position; p.y = mod(p.y + uTime * aSeed.x + 4., 8.) - 4.; p.x += sin(uTime * .5 + aSeed.y * 6.283) * .35; p.z += cos(uTime * .4 + aSeed.y * 9.) * .25; vec4 mv = modelViewMatrix * vec4(p, 1.); gl_Position = projectionMatrix * mv; gl_PointSize = aSeed.z * uPixel * 34. / -mv.z; vA = smoothstep(4., 2.4, abs(p.y)) * (.45 + .55 * sin(uTime * 1.7 + aSeed.y * 40.)); vT = aSeed.y; }',
    fragmentShader: 'uniform float uFade; varying float vA; varying float vT; void main(){ float d = length(gl_PointCoord - .5); if (d > .5) discard; float a = pow(1. - d * 2., 2.2); vec3 c = mix(vec3(1., .72, .38), vec3(.35, .62, 1.), step(.42, vT)); gl_FragColor = vec4(c, a * vA * uFade * .9); }' });
  scene.add(new Points(eGeo, eMat));

  // ---------- Le décor du voyage ----------
  const SN = mobile ? 900 : 2200, RN = mobile ? 300 : 560, BN = TRACK.length - K.sphere, TN = SN + RN + BN;
  const aP = new Float32Array(TN * 4), aS = new Float32Array(TN * 4), aC = new Float32Array(TN * 3), col = new Color();
  const STAR = ['#FFFFFF', '#CFE0FF', '#8AB8FF', '#FFE2B8'];
  for (let i = 0; i < TN; i++) {
    let x = 0, y = -1.95, z = 0, kind = 0, s1 = Math.random(), s2 = Math.random(), sz = 1;
    if (i < SN) {
      // Étoiles en tube autour du chemin : jamais sur l'axe, pour ne pas traverser la sculpture.
      const a = Math.random() * TAU, r = 2.4 + Math.pow(Math.random(), 0.7) * 15;
      x = Math.cos(a) * r; y = Math.sin(a) * r * 0.78; z = Math.random() * DEEP; sz = 0.35 + Math.pow(Math.random(), 3) * 1.5;
      col.set(STAR[Math.floor(Math.random() * STAR.length)]);
    } else if (i < SN + RN) {
      // Fil de route : une ligne de points fins, une borne plus vive tous les 7 pas.
      const t = (i - SN) / RN; kind = 1; z = t * DEEP; x = (Math.random() - 0.5) * 0.03; y = -1.95 + (Math.random() - 0.5) * 0.02;
      const milestone = (Math.round(t * DEEP) % 7 === 0) && Math.abs(t * DEEP - Math.round(t * DEEP)) < 0.12;
      s2 = milestone ? 1 : Math.random() * 0.25; sz = milestone ? 1.9 : 0.55 + Math.random() * 0.4;
      col.set(milestone ? '#CFE0FF' : '#5C9BFF');
    } else {
      // Balise de chaque étape, sous l'endroit où se tient sa sculpture.
      const k = K.sphere + (i - SN - RN); kind = 2; z = AT[k] + 7.2; s1 = k; col.set(tintOf(TRACK[k]));
    }
    aP.set([x, y, z, kind], i * 4); aS.set([s1, s2, sz, 0], i * 4); aC.set([col.r, col.g, col.b], i * 3);
  }
  const skyGeo = new BufferGeometry();
  skyGeo.setAttribute('position', new BufferAttribute(new Float32Array(TN * 3), 3));
  skyGeo.setAttribute('aP', new BufferAttribute(aP, 4)); skyGeo.setAttribute('aS', new BufferAttribute(aS, 4)); skyGeo.setAttribute('aC', new BufferAttribute(aC, 3));
  const skyU = { uTravel: { value: 0 }, uDrift: { value: 0 }, uWarp: uniforms.uWarp, uPixel: uniforms.uPixel, uTime: uniforms.uTime, uFade: { value: 1 }, uAspect: uniforms.uAspect, uEnd: { value: AT[K.end] }, uTint: { value: new Color('#2F80FF') }, uEra: { value: 1 } };
  const sky = new Points(skyGeo, new ShaderMaterial({ vertexShader: skyVertex, fragmentShader: skyFragment, uniforms: skyU, transparent: true, depthWrite: false, blending: AdditiveBlending }));
  sky.frustumCulled = false; sky.renderOrder = -2; scene.add(sky);

  // Seuils des sauts : un point invisible sur la route, entre deux étapes où l'on voyage. Il n'y a plus d'anneau
  // à l'écran (il restait trop longtemps et se lisait comme un halo rond) : le franchissement ne donne qu'un bref
  // étirement des traînées, et prévient la page (événement « saut:seuil »).
  const GATES = [];
  for (let i = K.sphere; i < K.end; i++) if (legOf(i)[1]) GATES.push({ at: AT[i] + legOf(i)[0] * 0.88, label: TRACK[i + 1] });

  // ---------- Mise en place selon la taille de l'écran ----------
  const view = { hw: 3.6, hh: 2.27, mobile };
  const poses = {};
  const resize = () => {
    const w = canvas.clientWidth || window.innerWidth, h = canvas.clientHeight || window.innerHeight;
    renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
    view.hh = HALF * 7.2; view.hw = view.hh * camera.aspect; view.mobile = w <= 760; view.W = w; view.H = h; view.aspect = camera.aspect;
    uniforms.uAspect.value = camera.aspect;
    placeAll();
  };
  function placeAll() { TRACK.forEach((key) => { view.cur = key; poses[key] = STOPS[key].pose(view); }); }
  resize();
  window.addEventListener('resize', resize);

  // ---------- Paire de formes en cours ----------
  let pair = -1;
  const setPair = (i) => {
    pair = i;
    const A = STOPS[TRACK[i]], B = STOPS[TRACK[i + 1]], sa = shapeOf(A.shape), sb = shapeOf(B.shape);
    attr.a.array.set(sa.pos); attr.b.array.set(sb.pos); attr.ma.array.set(sa.meta); attr.mb.array.set(sb.meta);
    attr.a.needsUpdate = attr.b.needsUpdate = attr.ma.needsUpdate = attr.mb.needsUpdate = true;
    uniforms.uFxA.value = A.fx; uniforms.uFxB.value = B.fx;
    uniforms.uOldA.value = A.old ? 1 : 0; uniforms.uOldB.value = B.old ? 1 : 0;
    uniforms.uBaseA.value.set(A.col[0]); uniforms.uAccA.value.set(A.col[1]); uniforms.uBaseB.value.set(B.col[0]); uniforms.uAccB.value.set(B.col[1]);
  };
  // Le nom est redessiné dès que la police du site est chargée.
  document.fonts?.load('800 100px "Inter Tight Variable"').then(() => { delete shapes.name; if (pair >= 0 && pair <= K.name) setPair(pair); }).catch(() => {});
  // Les silhouettes Blender se chargent après l'affichage du contenu, dans l'ordre du voyage (≈ 25 Ko chacune).
  // À l'arrivée d'un modèle, sa forme est recalculée ; si elle est à l'écran, la paire en cours est rechargée.
  let alive = true;
  const loadModels = async () => {
    for (const s of STATIONS) {
      const id = `auj_${s.id}`, parts = await loadChr(id);
      if (!alive) return;
      if (!parts) continue;
      MODELS[id] = parts; delete shapes[id];
      if (pair >= 0 && (TRACK[pair] === id || TRACK[pair + 1] === id)) setPair(pair);
    }
  };
  const idle = window.requestIdleCallback || ((f) => setTimeout(f, 1200));
  idle(() => loadModels(), { timeout: 2500 });

  // ---------- Souris ----------
  const ndc = new Vector2(0, 0), target = new Vector3(9, 9, 0), tmp = new Vector3();
  let strength = 0;
  const onMove = (e) => {
    ndc.x = (e.clientX / window.innerWidth) * 2 - 1; ndc.y = -(e.clientY / window.innerHeight) * 2 + 1;
    tmp.set(ndc.x, ndc.y, 0.5).unproject(camera).sub(camera.position).normalize();
    target.copy(camera.position).add(tmp.multiplyScalar(-camera.position.z / tmp.z)); strength = 1;
  };
  window.addEventListener('pointermove', onMove, { passive: true });
  let pulse = 0;
  const onDown = (e) => { onMove(e); uniforms.uPulsePos.value.copy(target); pulse = 1; };
  window.addEventListener('pointerdown', onDown, { passive: true });
  const onTilt = (e) => { if (e.gamma == null || e.beta == null) return; ndc.x = Math.max(-1, Math.min(1, e.gamma / 28)); ndc.y = Math.max(-1, Math.min(1, (e.beta - 50) / 28)); };
  const touchOnly = !window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (touchOnly && !reduced) window.addEventListener('deviceorientation', onTilt, { passive: true });

  // ---------- Boucle ----------
  let running = true, raf = 0, last = performance.now(), time = 0, kT = 0, kS = 0, vel = 0, dim = 1;
  let travel = 0, lastTravel = 0, warp = 0, drift = 0, calm = false, land = 0, landed = false, prevK = 0;
  // era : étalonnage en cours · kick : les deux ou trois images d'étirement au franchissement d'un seuil · seg : passage en cours.
  let era = 1, kick = 0, seg = { i: 0, f: 0, a: TRACK[0], b: TRACK[1], flight: 0 };
  // Mise en lumière : la forme visée (clé de la station), son intensité actuelle et celle visée.
  let hiKey = null, hiAmt = 0, hiGoal = 0;
  const tint = new Color(), cA = new Color(), cB = new Color();
  const apply = (k) => {
    const i = Math.min(TRACK.length - 2, Math.max(0, Math.floor(k))), f = Math.min(1, Math.max(0, k - i));
    if (i !== pair) setPair(i);
    uniforms.uHiAB.value.set(TRACK[i] === hiKey ? hiAmt : 0, TRACK[i + 1] === hiKey ? hiAmt : 0);
    // Le voyage : distance parcourue sur la route, et traversée de la forme si ce passage en est une.
    // Un saut suit la courbe « élan » (recul, traversée, léger dépassement) ; une bascule sur place reste douce.
    const leg = legOf(i), flight = reduced || calm ? 0 : leg[1];
    const A = STOPS[TRACK[i]], B = STOPS[TRACK[i + 1]], pa = poses[TRACK[i]], pb = poses[TRACK[i + 1]];
    const e = flight ? elan(f) : f * f * (3 - 2 * f), mid = Math.sin(Math.min(1, Math.max(0, e)) * Math.PI);
    uniforms.uMix.value = f;
    travel = AT[i] + leg[0] * e;
    // L'étalonnage : 0 pour le travail manuel d'aujourd'hui, 1 pour le futur automatisé.
    era = lerp(A.old ? 0 : 1, B.old ? 0 : 1, f * f * (3 - 2 * f));
    skyU.uEra.value = era;
    seg = { i, f, a: TRACK[i], b: TRACK[i + 1], flight };
    uniforms.uFlight.value = flight;
    // La caméra plonge un peu, s'incline dans le virage et ouvre son champ pendant la traversée.
    const swing = flight * mid;
    camera.position.z = 7.2 - swing * 0.55;
    camera.lookAt(0, 0, 0);
    camera.rotateZ(swing * (0.075 * (i % 2 ? 1 : -1) - bendSlope(travel + 18) * 0.45));
    const fov = 35 + swing * 11 + warp * 4;
    if (Math.abs(camera.fov - fov) > 0.01) { camera.fov = fov; camera.updateProjectionMatrix(); }
    const z = lerp(pa[2], pb[2], e) + mid * 0.9 * (1 - flight);
    rig.position.set(lerp(pa[0], pb[0], e), lerp(pa[1], pb[1], e), z);
    rig.rotation.set(lerp(pa[3], pb[3], e) + ndc.y * -0.1, lerp(pa[4], pb[4], e) + Math.sin(time * 0.32) * lerp(A.sway, B.sway, e) + ndc.x * 0.16, lerp(pa[5], pb[5], e));
    const s = lerp(pa[6], pb[6], e); rig.scale.setScalar(s);
    uniforms.uFade.value = lerp(A.fade, B.fade, e) * dim;
    uniforms.uFocus.value = camera.position.z - z;
    halo.position.set(rig.position.x, rig.position.y, z - 0.7); halo.scale.setScalar(s * (1 + Math.sin(time * 0.6) * 0.04));
    haloMat.uniforms.uFade.value = (lerp(A.halo, B.halo, e) * (1 - mid * (0.5 + flight * 0.45)) + land * 0.6) * dim;
    cA.set(A.col[0]); cB.set(B.col[0]); haloMat.uniforms.uTint.value.copy(tint.copy(cA).lerp(cB, e));
    eMat.uniforms.uFade.value = (0.35 + uniforms.uFade.value * 0.65) * (1 - warp * 0.7) * (0.3 + 0.7 * era);
    // Le décor suit la distance parcourue.
    skyU.uTravel.value = travel; skyU.uDrift.value = drift; skyU.uFade.value = dim * (0.75 + 0.25 * lerp(A.fade, B.fade, e));
    cA.set(tintOf(TRACK[i])); cB.set(tintOf(TRACK[i + 1])); skyU.uTint.value.copy(cA).lerp(cB, e);
  };

  // Mesure de la fluidité : si l'appareil peine, on allège tout seul.
  let level = 0, acc = 0, frames = 0, warm = 0;
  const lighten = () => {
    level++;
    if (level === 1) { pixel = Math.min(pixel, 1); renderer.setPixelRatio(pixel); uniforms.uPixel.value = pixel; resize(); geo.setDrawRange(0, Math.floor(N * 0.7)); }
    else if (level === 2) { geo.setDrawRange(0, Math.floor(N * 0.42)); uniforms.uSize.value *= 1.25; thinSky(0.45); }
    onQuality?.(level);
  };

  // Moins d'étoiles quand l'appareil peine (le fil de route et les balises restent entiers).
  const thinSky = (keep) => { const n = Math.floor(SN * keep); aP.copyWithin(n * 4, SN * 4, TN * 4); aS.copyWithin(n * 4, SN * 4, TN * 4); aC.copyWithin(n * 3, SN * 3, TN * 3); skyGeo.attributes.aP.needsUpdate = skyGeo.attributes.aS.needsUpdate = skyGeo.attributes.aC.needsUpdate = true; skyGeo.setDrawRange(0, n + RN + BN); };
  const frame = (now) => {
    raf = requestAnimationFrame(frame);
    const raw = (now - last) / 1000, dt = Math.min(raw, 0.05); last = now;
    if (!running) return;
    time += dt; uniforms.uTime.value = time;
    warm += dt;
    if (warm > 2.5 && raw < 0.25 && level < 3) { acc += raw; frames++; if (frames >= 80) { if (acc / frames > 1 / 27) lighten(); acc = 0; frames = 0; } }
    // Pendant une traversée, la caméra prend son temps : le vol dure à peu près une seconde, même si l'on défile vite.
    const rate = !calm && legOf(Math.min(TRACK.length - 2, Math.max(0, Math.floor(kS))))[1] ? 3.6 : 6.5;
    kS += (kT - kS) * (1 - Math.exp(-dt * rate)); if (Math.abs(kT - kS) < 1e-4) kS = kT;
    camera.position.x += (ndc.x * 0.5 - camera.position.x) * 0.04; camera.position.y += (ndc.y * 0.32 - camera.position.y) * 0.04;
    if (!calm) drift += dt * 0.6;
    // Arrivée au contact : une onde part de la sphère et la lumière diffuse s'avive un instant.
    if (!landed && kS >= K.end - 0.02 && prevK < K.end - 0.02 && kS > prevK && !calm) { landed = true; land = 1; uniforms.uPulsePos.value.copy(rig.position); pulse = 1; }
    if (kS < K.end - 0.3) landed = false;
    land = Math.max(0, land - dt * 0.45); prevK = kS;
    hiAmt += (hiGoal - hiAmt) * (1 - Math.exp(-dt * 7)); if (hiAmt < 1e-3 && !hiGoal) { hiAmt = 0; hiKey = null; }
    apply(kS);
    // Franchissement d'un seuil : un étirement très bref et peu contrasté, jamais un flash.
    let crossed = null;
    if (!calm && travel !== lastTravel) for (const G of GATES) if ((lastTravel < G.at && travel >= G.at) || (lastTravel > G.at && travel <= G.at)) { crossed = G; kick = 1; }
    kick = Math.max(0, kick - dt * 18);
    const speed = Math.abs(travel - lastTravel) / Math.max(dt, 1e-3); lastTravel = travel;
    warp += ((calm ? 0 : Math.min(1, speed / 26)) - warp) * (1 - Math.exp(-dt * 7)); uniforms.uWarp.value = Math.min(1, warp + kick * 0.22);
    onFrame?.({ k: kS, era, warp, crossed: crossed ? crossed.label : null, ...seg });
    uniforms.uVel.value += (vel - uniforms.uVel.value) * 0.14; vel *= 0.9;
    pulse = Math.max(0, pulse - dt * 0.85); uniforms.uPulse.value = pulse;
    uniforms.uMouse.value.lerp(target, 0.12); strength *= 0.985;
    uniforms.uMouseStrength.value += (strength - uniforms.uMouseStrength.value) * 0.1;
    renderer.render(scene, camera);
  };
  const still = () => { apply(kS); renderer.render(scene, camera); onFrame?.({ k: kS, era, warp: 0, crossed: null, ...seg }); };
  apply(0);
  if (reduced) still(); else raf = requestAnimationFrame(frame);

  return {
    get k() { return kT; },
    set k(v) { kT = v; if (reduced) { kS = v; still(); } },
    jump(v) { kT = kS = v; if (reduced) still(); },
    set dim(v) { dim = v; },
    // Zones libres mesurées dans la page, en pixels, par étape : { devis: { x, y, w, h, top }, … }.
    set stages(m) { view.stages = m; placeAll(); if (reduced) still(); },
    // Effets réduits : plus de traversée ni de traînées, le décor reste immobile.
    set calm(v) { calm = !!v; if (reduced) still(); },
    set velocity(v) { vel = Math.max(vel, v); },
    // Un chiffre clé désigne sa partie de la sculpture : highlight('radar', [prmMin, prmMax, tonMin, tonMax]) ; null l'éteint.
    highlight(key, r) {
      if (key && r) { if (hiKey !== key) hiAmt = 0; hiKey = key; uniforms.uHi.value.set(r[0], r[1], r[2] ?? -1, r[3] ?? 2); hiGoal = 1; } else hiGoal = 0;
      if (reduced) { hiAmt = hiGoal; if (!hiGoal) hiKey = null; still(); }
    },
    get level() { return level; },
    play() { running = true; last = performance.now(); },
    pause() { running = false; },
    get era() { return era; },
    // Libère tout : écouteurs, géométries, matériaux, puis le moteur de rendu.
    destroy() {
      alive = false; cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove); window.removeEventListener('pointerdown', onDown); window.removeEventListener('deviceorientation', onTilt); window.removeEventListener('resize', resize);
      scene.traverse((o) => { o.geometry?.dispose(); o.material?.dispose(); });
      for (const k in shapes) delete shapes[k];
      renderer.dispose();
    },
  };
}

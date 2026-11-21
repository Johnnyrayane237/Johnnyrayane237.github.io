// « La Machine » : un seul nuage de particules traverse tout le site.
// Il écrit le nom, devient sphère, puis prend la forme de chaque projet au fil du défilement.
// Chaque forme vit : l'onde sonore bat, le radar balaie, les voyants du serveur clignotent.
import {
  WebGLRenderer, Scene, PerspectiveCamera, BufferGeometry, BufferAttribute, ShaderMaterial,
  Points, AdditiveBlending, Color, Vector3, Vector2, Mesh, PlaneGeometry, Group,
} from 'three';

const TAU = Math.PI * 2;
const lerp = (a, b, t) => a + (b - a) * t;
// Centre de l'orbe vocale du standardiste (repris tel quel dans le shader).
const VOICE_ORB = [-1.3, 0.05, 0];

// Ordre du voyage : la valeur « k » avance le long de cette piste.
export const TRACK = ['cloud', 'name', 'sphere', 'terrain', 'sms', 'voice', 'wave', 'radar', 'switch', 'server', 'invoice', 'film', 'dim', 'caps', 'path', 'end'];
export const K = Object.fromEntries(TRACK.map((n, i) => [n, i]));

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
    return b.done();
  },
  // JobHunter : 74 offres sur le radar, 34 retenues se dressent en colonnes de lumière.
  radar(N) {
    const b = builder(N, 31), ang = (x, z) => (Math.atan2(z, x) / TAU + 1) % 1;
    [[0.5, 0.06], [1, 0.08], [1.5, 0.1], [1.95, 0.14]].forEach(([r, f]) => b.ring(b.n(f), [0, 0, 0], r, 'xz', 0, 0.012));
    for (let k = 0, n = b.n(0.08); k < n; k++) { const t = (b.rnd() * 2 - 1) * 1.95, alongX = b.rnd() < 0.5, x = alongX ? t : b.j(0.012), z = alongX ? b.j(0.012) : t; b.put(x, 0, z, 0, ang(x, z)); }
    for (let k = 0, n = b.n(0.1); k < n; k++) { const r = Math.sqrt(b.rnd()) * 1.95, a = b.rnd() * TAU; b.put(Math.cos(a) * r, b.j(0.01), Math.sin(a) * r, 0, a / TAU); }
    const keep = Math.floor((N * 0.21) / 34), drop = Math.floor((N * 0.05) / 40);
    for (let o = 0; o < 74; o++) {
      const r = 0.3 + b.rnd() * 1.55, a = b.rnd() * TAU, x = Math.cos(a) * r, z = Math.sin(a) * r, kept = o % 2 === 0 && o < 68;
      if (kept) { const h = 0.22 + b.rnd() * 0.6; for (let k = 0; k < keep; k++) { const top = b.rnd() < 0.3; b.put(x + b.j(top ? 0.07 : 0.022), top ? h + b.j(0.05) : b.rnd() * h, z + b.j(top ? 0.07 : 0.022), 1, a / TAU); } }
      else for (let k = 0; k < drop; k++) b.put(x + b.j(0.06), b.j(0.012), z + b.j(0.06), 0.15, a / TAU);
    }
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
    return b.done();
  },
  // VorcheX : la baie du serveur, ses voyants, et trois faisceaux — les trois seuls ports ouverts.
  server(N) {
    const b = builder(N, 51), U = 5, w = 1.7, h = 0.34, d = 1.0, gap = 0.09, total = U * h + (U - 1) * gap;
    for (let u = 0; u < U; u++) {
      const cy = -total / 2 + h / 2 + u * (h + gap);
      b.box(b.n(0.075), [0, cy, 0], [w, h, d]);
      for (let k = 0, n = b.n(0.035); k < n; k++) b.put(-w / 2 + 0.5 + b.rnd() * (w - 0.62), cy + (Math.floor(b.rnd() * 3) - 1) * 0.085 + b.j(0.006), d / 2 + 0.002, 0, 0);
      for (let l = 0; l < 3; l++) { const ph = b.rnd(); for (let k = 0, n = b.n(0.006); k < n; k++) b.put(-w / 2 + 0.12 + l * 0.11 + b.j(0.024), cy + b.j(0.024), d / 2 + 0.01, 1, ph); }
    }
    for (let p = 0; p < 3; p++) b.line(b.n(0.045), [(p - 1) * 0.5, total / 2, 0], [(p - 1) * 0.5, total / 2 + 1.25, 0], 0.6, 0.014, 0, 1);
    b.ring(b.n(0.06), [0, -total / 2 - 0.12, 0], 1.45, 'xz', 0, 0.012, 0);
    b.ring(b.n(0.035), [0, -total / 2 - 0.12, 0], 1.05, 'xz', 0, 0.01, 0);
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
    return b.done();
  },
  // Capacités : six savoir-faire reliés à un même cœur.
  constellation(N) {
    const b = builder(N, 81), nodes = [];
    for (let q = 0; q < 6; q++) { const a = (q / 6) * TAU + 0.3; nodes.push([Math.cos(a) * 1.55, Math.sin(a) * 1.15, q % 2 ? 0.4 : -0.4]); }
    b.shell(b.n(0.12), [0, 0, 0], 0.34, 1, 0);
    nodes.forEach((p, q) => { b.shell(b.n(0.06), p, 0.22, 1, 0); b.line(b.n(0.035), [0, 0, 0], p, 0, 0.012, 0, 1); b.line(b.n(0.02), p, nodes[(q + 1) % 6], 0, 0.01, 0, 1); });
    return b.done();
  },
  // Parcours : une double hélice qui monte, six étapes marquées.
  helix(N) {
    const b = builder(N, 91), H = 4.2, R = 0.78, turns = 2.4;
    const S = (t, ph) => { const a = t * turns * TAU + ph; return [Math.cos(a) * R, (t - 0.5) * H, Math.sin(a) * R]; };
    b.curve(b.n(0.24), (t) => S(t, 0), 0, 0.014); b.curve(b.n(0.24), (t) => S(t, Math.PI), 0, 0.014);
    for (let k = 0, n = b.n(0.18); k < n; k++) { const t = Math.round(b.rnd() * 26) / 26, p = S(t, 0), q = S(t, Math.PI), s = b.rnd(); b.put(lerp(p[0], q[0], s), p[1] + b.j(0.01), lerp(p[2], q[2], s), 0, t); }
    for (let q = 0; q < 6; q++) b.shell(b.n(0.022), S(0.1 + q * 0.16, 0), 0.13, 1, 0.1 + q * 0.16);
    return b.done();
  },
};

// ---------- Les étapes du voyage : forme, effet, couleurs, place à l'écran ----------
// pose(v) → [x, y, z, rotX, rotY, rotZ, échelle] ; v = demi-largeur et demi-hauteur visibles, et « mobile ».
const side = (v, rx, ry, s = 1) => (v.mobile ? [0, v.hh * 0.47, -0.4, rx, ry * 0.6, 0, 0.5 * s] : [v.hw * 0.47, 0.05, 0, rx, ry, 0, s]);
const STOPS = {
  cloud: { shape: 'cloud', fx: 0, col: ['#2F80FF', '#EAF1FF'], fade: 0, halo: 0, sway: 0, pose: () => [0, 0, -1, 0, 0, 0, 1.2] },
  name: { shape: 'name', fx: 0, col: ['#DCE8FF', '#2F80FF'], fade: 0.95, halo: 0.2, sway: 0.05, pose: (v) => [0, v.mobile ? 0.25 : 0.05, 0, 0, 0, 0, v.hw * 0.9] },
  sphere: { shape: 'sphere', fx: 1, col: ['#2F80FF', '#EAF1FF'], fade: 1, halo: 1, sway: 0, pose: (v) => [0, 0, 0, 0, 0, 0.18, v.mobile ? 0.77 : 1] },
  terrain: { shape: 'terrain', fx: 2, col: ['#2F80FF', '#EAF1FF'], fade: 0.42, halo: 0, sway: 0, pose: () => [0, 0, 0, 0.55, 0, 0.18, 1] },
  sms: { shape: 'sms', fx: 12, col: ['#2F80FF', '#FF7AD9'], fade: 1, halo: 0.35, sway: 0.2, pose: (v) => side(v, 0.06, -0.36, 0.92) },
  voice: { shape: 'voice', fx: 11, col: ['#2F80FF', '#C49BFF'], fade: 1, halo: 0.35, sway: 0.18, pose: (v) => side(v, 0.06, -0.42, 0.95) },
  wave: { shape: 'wave', fx: 3, col: ['#2F80FF', '#7CF5D0'], fade: 1, halo: 0.35, sway: 0.22, pose: (v) => side(v, 0.12, -0.5, 0.92) },
  radar: { shape: 'radar', fx: 4, col: ['#2F80FF', '#35E08B'], fade: 1, halo: 0.3, sway: 0.12, pose: (v) => side(v, 0.95, -0.25, 0.95) },
  switch: { shape: 'switch', fx: 5, col: ['#2F80FF', '#FFB347'], fade: 1, halo: 0.3, sway: 0.2, pose: (v) => side(v, 0.1, -0.38, 0.95) },
  server: { shape: 'server', fx: 6, col: ['#2F80FF', '#35E08B'], fade: 1, halo: 0.35, sway: 0.25, pose: (v) => side(v, 0.24, -0.62, 0.95) },
  invoice: { shape: 'invoice', fx: 7, col: ['#5C9BFF', '#FFB347'], fade: 1, halo: 0.3, sway: 0.2, pose: (v) => side(v, 0.08, -0.48, 1) },
  film: { shape: 'film', fx: 8, col: ['#2F80FF', '#FF6B6B'], fade: 1, halo: 0.3, sway: 0.2, pose: (v) => side(v, 0.1, -0.35, 0.95) },
  dim: { shape: 'terrain', fx: 2, col: ['#2F80FF', '#EAF1FF'], fade: 0.3, halo: 0, sway: 0, pose: () => [0, 0, 0, 0.55, 0, 0.18, 1] },
  caps: { shape: 'constellation', fx: 9, col: ['#2F80FF', '#EAF1FF'], fade: 0.36, halo: 0.12, sway: 0.25, pose: (v) => (v.mobile ? [0, 0, -1.4, 0, 0, 0, 0.7] : [0, -0.1, -1.2, 0.1, 0, 0, 1.3]) },
  path: { shape: 'helix', fx: 10, col: ['#2F80FF', '#8AB8FF'], fade: 0.55, halo: 0.15, sway: 0.1, pose: (v) => (v.mobile ? [v.hw * 0.55, 0, -1.2, 0, 0, 0.12, 0.7] : [v.hw * 0.72, 0, -0.4, 0, 0, 0.14, 1]) },
  end: { shape: 'sphere', fx: 1, col: ['#2F80FF', '#EAF1FF'], fade: 0.9, halo: 1, sway: 0, pose: (v) => [0, 0, 0, 0, 0, 0.18, v.mobile ? 0.77 : 1] },
};

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
uniform float uFxA; uniform float uFxB; uniform float uScatter; uniform float uFocus;
uniform vec3 uMouse; uniform float uMouseStrength; uniform vec3 uPulsePos; uniform float uPulse;
attribute vec3 aTo; attribute vec2 aMetaA; attribute vec2 aMetaB; attribute vec3 aRand;
varying float vAlpha; varying float vToneA; varying float vToneB; varying float vM; varying float vStretch;
${NOISE}
mat2 rot(float a){ float c = cos(a), s = sin(a); return mat2(c, -s, s, c); }

// Chaque forme a sa vie propre : déplacement + éclat.
vec3 life(vec3 p, vec2 meta, float id, out float glow){
  glow = 0.;
  float tone = meta.x, prm = meta.y;
  if (prm < -.5) { p.y += sin(uTime * .25 + aRand.x * 6.283) * .14; p.x += cos(uTime * .2 + aRand.y * 6.283) * .12; return p; }
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
    float d = fract(prm - uTime * .14); glow = pow(1. - d, 7.) * 1.7;
    if (tone > .9) { p.y *= .7 + .3 * sin(uTime * 1.6 + prm * 40.); glow += .25; }
  } else if (id < 5.5) {
    glow = pow(.5 + .5 * sin((prm - uTime * .22) * 12.566), 14.) * 1.9;
    if (tone > .9) glow += .2;
  } else if (id < 6.5) {
    if (tone > .9) glow = step(.42, fract(uTime * (.35 + prm * 1.3) + prm * 7.)) * 1.5 - .35;
    else if (tone > .5) glow = pow(fract(prm - uTime * .55), 5.) * 1.7;
    else glow = .12 * sin(uTime + p.y * 6.);
  } else if (id < 7.5) {
    if (prm > 1.5) glow = .5 + .45 * sin(uTime * 2.6);
    else { glow = smoothstep(.07, 0., abs(prm - (1. - fract(uTime * .22)))) * 1.7; p.z += sin(uTime * .9 + prm * 3.) * .035; }
  } else if (id < 8.5) {
    if (tone > .9) glow = .35 + .3 * sin(uTime * 2.4);
    else { p.y += sin(prm * 9.42 + uTime * 1.1) * .07; glow = pow(.5 + .5 * sin((prm - uTime * .18) * 18.85), 10.) * 1.3; }
  } else if (id < 9.5) {
    p.xy = rot(sin(uTime * .2) * .12) * p.xy;
    if (tone > .5) glow = .3 + .35 * sin(uTime * 2. + aRand.x * 30.); else glow = pow(fract(prm - uTime * .35), 6.) * 1.6;
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
    p.xz = rot(uTime * .3) * p.xz;
    glow = pow(fract(prm * 2. - uTime * .25), 6.) * 1.5; if (tone > .9) glow += .35;
  }
  return p;
}

void main(){
  float gA; float gB;
  vec3 a = life(position, aMetaA, uFxA, gA);
  vec3 b = life(aTo, aMetaB, uFxB, gB);
  // Chaque point part à son heure : la forme se défait puis se reforme par vagues.
  float m = clamp(uMix * 1.65 - aRand.x * .65, 0., 1.);
  m = m * m * (3. - 2. * m);
  float mid = sin(m * 3.14159);
  vec3 pos = mix(a, b, m);
  vec3 sw = vec3(sin(pos.y * 1.9 + uTime * .9 + aRand.y * 6.283), cos(pos.z * 1.7 + uTime * .7 + aRand.z * 6.283), sin(pos.x * 2.1 + uTime * .8 + aRand.x * 6.283));
  pos += sw * mid * uScatter * (.3 + aRand.z * .9);
  vec4 world = modelMatrix * vec4(pos, 1.);
  vec3 dm = world.xyz - uMouse; float dist = length(dm);
  world.xyz += normalize(dm + 1e-4) * smoothstep(1.1, 0., dist) * .42 * uMouseStrength;
  // Onde de choc au clic : un anneau part du doigt et bouscule les points.
  vec3 dp = world.xyz - uPulsePos; float pd = length(dp) - (1. - uPulse) * 4.2; float ring = exp(-pd * pd * 6.) * uPulse;
  world.xyz += normalize(dp + 1e-4) * ring * .5;
  vec4 mv = viewMatrix * world;
  gl_Position = projectionMatrix * mv;
  float glow = clamp(mix(gA, gB, m) + ring * 1.6, -.7, 2.4);
  float dust = mix(step(aMetaA.y, -.5), step(aMetaB.y, -.5), m);
  float big = step(.955, aRand.y);
  float coc = abs(-mv.z - uFocus);
  vStretch = 1. + uVel * (2.2 + aRand.x * 2.6);
  float size = uSize * (.55 + aRand.z * .9) * (1. + max(glow, 0.) * .45) * mix(1., 3.4, big) * (1. + coc * .18) * (1. + mid * .5);
  gl_PointSize = size * uPixel / -mv.z * vStretch;
  vAlpha = (.5 + .5 * glow) * mix(1., .16, big) * mix(1., .3, dust) / (1. + coc * .5);
  vToneA = aMetaA.x; vToneB = aMetaB.x; vM = m;
}`;

const fragment = /* glsl */ `
uniform vec3 uBaseA; uniform vec3 uAccA; uniform vec3 uBaseB; uniform vec3 uAccB; uniform float uFade;
varying float vAlpha; varying float vToneA; varying float vToneB; varying float vM; varying float vStretch;
void main(){
  vec2 c = gl_PointCoord - .5; c.x *= vStretch; float d = length(c);
  if (d > .5) discard;
  float a = smoothstep(.5, .05, d) + smoothstep(.16, 0., d) * .5;
  vec3 col = mix(mix(uBaseA, uAccA, vToneA), mix(uBaseB, uAccB, vToneB), vM);
  gl_FragColor = vec4(col, a * vAlpha * uFade / sqrt(vStretch));
}`;

export function initWorld(canvas, { reduced = false, onQuality = null } = {}) {
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
  const rand = new Float32Array(N * 3); for (let i = 0; i < N * 3; i++) rand[i] = Math.random();
  const attr = { a: new BufferAttribute(new Float32Array(N * 3), 3), b: new BufferAttribute(new Float32Array(N * 3), 3), ma: new BufferAttribute(new Float32Array(N * 2), 2), mb: new BufferAttribute(new Float32Array(N * 2), 2) };
  geo.setAttribute('position', attr.a); geo.setAttribute('aTo', attr.b); geo.setAttribute('aMetaA', attr.ma); geo.setAttribute('aMetaB', attr.mb);
  geo.setAttribute('aRand', new BufferAttribute(rand, 3));

  const uniforms = {
    uTime: { value: 0 }, uMix: { value: 0 }, uSize: { value: mobile ? 22 : 25 }, uPixel: { value: pixel }, uVel: { value: 0 },
    uFxA: { value: 0 }, uFxB: { value: 0 }, uScatter: { value: 0.55 }, uFocus: { value: 7.2 },
    uMouse: { value: new Vector3(9, 9, 0) }, uMouseStrength: { value: 0 }, uFade: { value: 1 }, uPulsePos: { value: new Vector3(9, 9, 0) }, uPulse: { value: 0 },
    uBaseA: { value: new Color() }, uAccA: { value: new Color() }, uBaseB: { value: new Color() }, uAccB: { value: new Color() },
  };
  const mat = new ShaderMaterial({ vertexShader: vertex, fragmentShader: fragment, uniforms, transparent: true, depthWrite: false, blending: AdditiveBlending });
  const points = new Points(geo, mat); points.frustumCulled = false;
  const rig = new Group(); rig.add(points); scene.add(rig);

  // Halo lumineux derrière la forme
  const haloMat = new ShaderMaterial({ transparent: true, depthWrite: false, blending: AdditiveBlending, uniforms: { uFade: { value: 0 }, uTime: uniforms.uTime, uTint: { value: new Color('#2F80FF') } },
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }',
    fragmentShader: 'uniform float uFade; uniform float uTime; uniform vec3 uTint; varying vec2 vUv; void main(){ float d = length(vUv - .5) * 2.; float core = pow(max(0., 1. - d), 3.2); float ring = smoothstep(.62, .5, d) * smoothstep(.3, .5, d) * .22; vec3 c = mix(uTint * .75, vec3(.75, .86, 1.), core); gl_FragColor = vec4(c, (core * .55 + ring * (.6 + .4 * sin(uTime * .8))) * uFade); }' });
  const halo = new Mesh(new PlaneGeometry(8.05, 8.05), haloMat); scene.add(halo);

  // Braises qui montent
  const EMB = mobile ? 240 : 560, ePos = new Float32Array(EMB * 3), eSeed = new Float32Array(EMB * 3);
  for (let i = 0; i < EMB; i++) { ePos[i * 3] = (Math.random() - 0.5) * 13; ePos[i * 3 + 1] = (Math.random() - 0.5) * 8; ePos[i * 3 + 2] = (Math.random() - 0.5) * 6 + 1; eSeed[i * 3] = 0.08 + Math.random() * 0.32; eSeed[i * 3 + 1] = Math.random(); eSeed[i * 3 + 2] = 0.4 + Math.random() * 1.6; }
  const eGeo = new BufferGeometry(); eGeo.setAttribute('position', new BufferAttribute(ePos, 3)); eGeo.setAttribute('aSeed', new BufferAttribute(eSeed, 3));
  const eMat = new ShaderMaterial({ transparent: true, depthWrite: false, blending: AdditiveBlending, uniforms: { uTime: uniforms.uTime, uPixel: uniforms.uPixel, uFade: { value: 1 } },
    vertexShader: 'uniform float uTime; uniform float uPixel; attribute vec3 aSeed; varying float vA; varying float vT; void main(){ vec3 p = position; p.y = mod(p.y + uTime * aSeed.x + 4., 8.) - 4.; p.x += sin(uTime * .5 + aSeed.y * 6.283) * .35; p.z += cos(uTime * .4 + aSeed.y * 9.) * .25; vec4 mv = modelViewMatrix * vec4(p, 1.); gl_Position = projectionMatrix * mv; gl_PointSize = aSeed.z * uPixel * 34. / -mv.z; vA = smoothstep(4., 2.4, abs(p.y)) * (.45 + .55 * sin(uTime * 1.7 + aSeed.y * 40.)); vT = aSeed.y; }',
    fragmentShader: 'uniform float uFade; varying float vA; varying float vT; void main(){ float d = length(gl_PointCoord - .5); if (d > .5) discard; float a = pow(1. - d * 2., 2.2); vec3 c = mix(vec3(1., .72, .38), vec3(.35, .62, 1.), step(.42, vT)); gl_FragColor = vec4(c, a * vA * uFade * .9); }' });
  scene.add(new Points(eGeo, eMat));

  // ---------- Mise en place selon la taille de l'écran ----------
  const view = { hw: 3.6, hh: 2.27, mobile };
  const poses = {};
  const resize = () => {
    const w = canvas.clientWidth || window.innerWidth, h = canvas.clientHeight || window.innerHeight;
    renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
    view.hh = Math.tan((35 * Math.PI) / 360) * 7.2; view.hw = view.hh * camera.aspect; view.mobile = w <= 760;
    TRACK.forEach((key) => { poses[key] = STOPS[key].pose(view); });
  };
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
    uniforms.uBaseA.value.set(A.col[0]); uniforms.uAccA.value.set(A.col[1]); uniforms.uBaseB.value.set(B.col[0]); uniforms.uAccB.value.set(B.col[1]);
  };
  // Le nom est redessiné dès que la police du site est chargée.
  document.fonts?.load('800 100px "Inter Tight Variable"').then(() => { delete shapes.name; if (pair >= 0 && pair <= K.name) setPair(pair); }).catch(() => {});

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
  const tint = new Color(), cA = new Color(), cB = new Color();
  const apply = (k) => {
    const i = Math.min(TRACK.length - 2, Math.max(0, Math.floor(k))), f = Math.min(1, Math.max(0, k - i));
    if (i !== pair) setPair(i);
    const A = STOPS[TRACK[i]], B = STOPS[TRACK[i + 1]], pa = poses[TRACK[i]], pb = poses[TRACK[i + 1]], e = f * f * (3 - 2 * f), mid = Math.sin(e * Math.PI);
    uniforms.uMix.value = f;
    const z = lerp(pa[2], pb[2], e) + mid * 0.9;
    rig.position.set(lerp(pa[0], pb[0], e), lerp(pa[1], pb[1], e), z);
    rig.rotation.set(lerp(pa[3], pb[3], e) + ndc.y * -0.1, lerp(pa[4], pb[4], e) + Math.sin(time * 0.32) * lerp(A.sway, B.sway, e) + ndc.x * 0.16, lerp(pa[5], pb[5], e));
    const s = lerp(pa[6], pb[6], e); rig.scale.setScalar(s);
    uniforms.uFade.value = lerp(A.fade, B.fade, e) * dim;
    uniforms.uFocus.value = camera.position.z - z;
    halo.position.set(rig.position.x, rig.position.y, z - 0.7); halo.scale.setScalar(s * (1 + Math.sin(time * 0.6) * 0.04));
    haloMat.uniforms.uFade.value = lerp(A.halo, B.halo, e) * dim * (1 - mid * 0.5);
    cA.set(A.col[0]); cB.set(B.col[0]); haloMat.uniforms.uTint.value.copy(tint.copy(cA).lerp(cB, e));
    eMat.uniforms.uFade.value = 0.35 + uniforms.uFade.value * 0.65;
  };

  // Mesure de la fluidité : si l'appareil peine, on allège tout seul.
  let level = 0, acc = 0, frames = 0, warm = 0;
  const lighten = () => {
    level++;
    if (level === 1) { pixel = Math.min(pixel, 1); renderer.setPixelRatio(pixel); uniforms.uPixel.value = pixel; resize(); geo.setDrawRange(0, Math.floor(N * 0.7)); }
    else if (level === 2) { geo.setDrawRange(0, Math.floor(N * 0.42)); uniforms.uSize.value *= 1.25; }
    onQuality?.(level);
  };

  const frame = (now) => {
    raf = requestAnimationFrame(frame);
    const raw = (now - last) / 1000, dt = Math.min(raw, 0.05); last = now;
    if (!running) return;
    time += dt; uniforms.uTime.value = time;
    warm += dt;
    if (warm > 2.5 && raw < 0.25 && level < 3) { acc += raw; frames++; if (frames >= 80) { if (acc / frames > 1 / 27) lighten(); acc = 0; frames = 0; } }
    kS += (kT - kS) * (1 - Math.exp(-dt * 6.5)); if (Math.abs(kT - kS) < 1e-4) kS = kT;
    camera.position.x += (ndc.x * 0.5 - camera.position.x) * 0.04; camera.position.y += (ndc.y * 0.32 - camera.position.y) * 0.04; camera.lookAt(0, 0, 0);
    apply(kS);
    uniforms.uVel.value += (vel - uniforms.uVel.value) * 0.14; vel *= 0.9;
    pulse = Math.max(0, pulse - dt * 0.85); uniforms.uPulse.value = pulse;
    uniforms.uMouse.value.lerp(target, 0.12); strength *= 0.985;
    uniforms.uMouseStrength.value += (strength - uniforms.uMouseStrength.value) * 0.1;
    renderer.render(scene, camera);
  };
  const still = () => { apply(kS); renderer.render(scene, camera); };
  apply(0);
  if (reduced) still(); else raf = requestAnimationFrame(frame);

  return {
    get k() { return kT; },
    set k(v) { kT = v; if (reduced) { kS = v; still(); } },
    jump(v) { kT = kS = v; if (reduced) still(); },
    set dim(v) { dim = v; },
    set velocity(v) { vel = Math.max(vel, v); },
    get level() { return level; },
    play() { running = true; last = performance.now(); },
    pause() { running = false; },
    destroy() { cancelAnimationFrame(raf); window.removeEventListener('pointermove', onMove); window.removeEventListener('pointerdown', onDown); window.removeEventListener('deviceorientation', onTilt); window.removeEventListener('resize', resize); renderer.dispose(); },
  };
}

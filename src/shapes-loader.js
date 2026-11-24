// Chaîne A : des modèles Blender aux particules.
// Les ancêtres (et les agents) sont exportés par blender/scripts/commun.py dans un petit format binaire, « .chr » :
// des sommets en entiers 16 bits, les arêtes vives et les triangles de chaque pièce, avec son ton et son rôle (prm).
// Ici, on lit ce fichier puis on pose des points le long des arêtes (le trait « dessin au fil » de la Machine)
// et sur les surfaces (le volume), avec le même hasard reproductible que les formes procédurales.

const MAGIC = 0x31524843; // « CHR1 » lu en petit-boutiste

/** Lit un fichier .chr : renvoie la liste des pièces { ton, dens, aretes, prm, v, e, t }. */
export function parseChr(buf) {
  const dv = new DataView(buf);
  if (dv.getUint32(0, true) !== MAGIC) throw new Error('format .chr inconnu');
  const q = dv.getFloat32(4, true) / 32767, n = dv.getUint16(8, true), parts = [];
  let o = 10;
  for (let p = 0; p < n; p++) {
    const ton = dv.getUint8(o) / 255, dens = dv.getUint8(o + 1) / 20, aretes = dv.getUint8(o + 2) / 255, prm = dv.getFloat32(o + 4, true);
    const nv = dv.getUint16(o + 8, true), ne = dv.getUint16(o + 10, true), nt = dv.getUint16(o + 12, true);
    o += 14;
    const v = new Float32Array(nv * 3), e = new Uint16Array(ne * 2), t = new Uint16Array(nt * 3);
    for (let i = 0; i < nv * 3; i++, o += 2) v[i] = dv.getInt16(o, true) * q;
    for (let i = 0; i < ne * 2; i++, o += 2) e[i] = dv.getUint16(o, true);
    for (let i = 0; i < nt * 3; i++, o += 2) t[i] = dv.getUint16(o, true);
    parts.push({ ton, dens, aretes, prm, v, e, t });
  }
  return parts;
}

// Choix pondéré : index dans un tableau de poids cumulés (recherche dichotomique).
const pick = (cum, r) => { let lo = 0, hi = cum.length - 1; while (lo < hi) { const m = (lo + hi) >> 1; if (cum[m] < r) lo = m + 1; else hi = m; } return lo; };

/**
 * Pose « count » points sur les pièces, avec l'outil de sculpture b de la Machine (b.put, b.rnd, b.j).
 * Chaque pièce reçoit des points en proportion de sa longueur d'arêtes et de sa surface, pondérées par sa densité.
 */
export function sampleChr(parts, b, count, { surface = 2.2, jitter = 0.007 } = {}) {
  const info = parts.map((p) => {
    const { v, e, t } = p, eCum = new Float32Array(e.length / 2), tCum = new Float32Array(t.length / 3);
    let L = 0, A = 0;
    for (let i = 0; i < eCum.length; i++) {
      const a = e[i * 2] * 3, c = e[i * 2 + 1] * 3;
      L += Math.hypot(v[c] - v[a], v[c + 1] - v[a + 1], v[c + 2] - v[a + 2]); eCum[i] = L;
    }
    for (let i = 0; i < tCum.length; i++) {
      const a = t[i * 3] * 3, c = t[i * 3 + 1] * 3, d = t[i * 3 + 2] * 3;
      const ux = v[c] - v[a], uy = v[c + 1] - v[a + 1], uz = v[c + 2] - v[a + 2], wx = v[d] - v[a], wy = v[d + 1] - v[a + 1], wz = v[d + 2] - v[a + 2];
      A += 0.5 * Math.hypot(uy * wz - uz * wy, uz * wx - ux * wz, ux * wy - uy * wx); tCum[i] = A;
    }
    const wE = L > 0 ? p.dens * p.aretes * L : 0, wA = A > 0 ? p.dens * (1 - p.aretes) * A * surface : 0;
    return { p, eCum, tCum, L, A, wE, wA };
  });
  const total = info.reduce((s, x) => s + x.wE + x.wA, 0) || 1;
  for (const { p, eCum, tCum, L, A, wE, wA } of info) {
    const { v, e, t, ton, prm } = p;
    for (let k = 0, n = Math.round((count * wE) / total); k < n; k++) {
      const i = pick(eCum, b.rnd() * L), a = e[i * 2] * 3, c = e[i * 2 + 1] * 3, s = b.rnd();
      b.put(v[a] + (v[c] - v[a]) * s + b.j(jitter), v[a + 1] + (v[c + 1] - v[a + 1]) * s + b.j(jitter), v[a + 2] + (v[c + 2] - v[a + 2]) * s + b.j(jitter), ton, prm);
    }
    for (let k = 0, n = Math.round((count * wA) / total); k < n; k++) {
      const i = pick(tCum, b.rnd() * A), a = t[i * 3] * 3, c = t[i * 3 + 1] * 3, d = t[i * 3 + 2] * 3;
      let r1 = b.rnd(), r2 = b.rnd(); if (r1 + r2 > 1) { r1 = 1 - r1; r2 = 1 - r2; }
      b.put(v[a] + (v[c] - v[a]) * r1 + (v[d] - v[a]) * r2, v[a + 1] + (v[c + 1] - v[a + 1]) * r1 + (v[d + 1] - v[a + 1]) * r2, v[a + 2] + (v[c + 2] - v[a + 2]) * r1 + (v[d + 2] - v[a + 2]) * r2, ton, prm);
    }
  }
}

const cache = new Map();
/** Charge un modèle (une seule fois) depuis public/models/. Renvoie une promesse des pièces, ou null en cas d'échec. */
export function loadChr(name) {
  if (!cache.has(name)) {
    cache.set(name, fetch(new URL(`models/${name}.chr`, document.baseURI))
      .then((r) => (r.ok ? r.arrayBuffer() : Promise.reject(new Error(r.status))))
      .then(parseChr)
      .catch(() => null));
  }
  return cache.get(name);
}

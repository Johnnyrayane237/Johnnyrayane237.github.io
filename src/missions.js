// Les trois missions de la salle des agents, décrites en données.
// L'état de la salle est une fonction pure du temps de mission t : on peut avancer, reculer, sauter,
// et la scène (3D, bulles, journal) se redessine toujours à l'identique pour un même t.
//
// t va de 0 à n (n = nombre d'agents). L'agent i travaille entre i et i + 0,7,
// puis un paquet de lumière file vers l'agent suivant entre i + 0,7 et i + 1.
// Le dernier agent est toujours une personne : sans sa validation, le temps s'arrête devant elle.

export const MISSIONS = [
  // JobHunter : pilotée par le défilement (la mission avance quand on descend).
  { id: 'jobhunter', mode: 'scroll', color: '#35E08B', kinds: ['probe', 'prism', 'compass', 'quill', 'lens', 'human'] },
  // Création de site (vision) et lancement de pub : jouées au clic, avec pause, reprise et « Passer ».
  { id: 'site', mode: 'play', color: '#5EC8FF', kinds: ['ring', 'planes', 'ribbon', 'blades', 'lens', 'human'] },
  { id: 'pub', mode: 'play', color: '#FF6B6B', kinds: ['compass', 'quill', 'fork', 'blades', 'lens', 'human'] },
];

export const WORK = 0.7; // part du créneau de chaque agent passée à travailler (le reste : la transmission)
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

/** Où le temps s'arrête tant que la personne n'a pas validé. */
export const gateAt = (m) => m.kinds.length - 1 + 0.32;

/**
 * État de la mission au temps t.
 * agents[i] : { state: 'idle' | 'work' | 'wait' | 'done', w } (w : avancement de son travail, de 0 à 1)
 * packet    : { from, to, f } ou null (le point de lumière en route)
 * logs      : nombre de lignes du journal déjà écrites
 * talking   : l'agent qui parle (bulle), un seul à la fois
 */
export function missionState(m, t, approved) {
  const n = m.kinds.length, gate = n - 1;
  const T = clamp(t, 0, approved ? n : gateAt(m));
  const agents = m.kinds.map((_, i) => {
    const local = T - i, w = clamp(local / WORK);
    let state = local < 0 ? 'idle' : local < WORK ? 'work' : 'done';
    if (i === gate) state = approved ? (local >= 0.4 ? 'done' : local >= 0 ? 'work' : 'idle') : local >= 0 ? 'wait' : 'idle';
    return { state, w };
  });
  let packet = null;
  const i = Math.floor(T), f = T - i;
  if (i < gate && f >= WORK) packet = { from: i, to: i + 1, f: (f - WORK) / (1 - WORK) };
  // Une ligne de journal s'écrit quand l'agent a fait un tiers de son travail ; celle de la personne, à sa validation.
  let logs = 0;
  for (let j = 0; j < gate; j++) if (T - j >= WORK * 0.35) logs = j + 1;
  if (approved && T - gate >= 0) logs = n;
  // Bulle : seulement l'agent qui parle en ce moment (une à la fois, pour qu'elles ne se chevauchent jamais).
  const talking = [];
  agents.forEach((a, j) => { if (a.state === 'work' || a.state === 'wait') talking.push(j); });
  return { T, agents, packet, logs, talking: talking.slice(-1), waiting: !approved && T >= gate, done: approved && T >= n - 0.01 };
}

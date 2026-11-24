// Le moteur du voyage HORIZON, côté interface.
// La Machine (world.js) lui donne à chaque image le passage en cours ; lui en déduit la station,
// le niveau d'autonomie et le statut, tient le tableau de bord à jour (en DOM, pour la netteté et l'accessibilité)
// et prévient le reste du site : saut:depart, saut:seuil, saut:arrivee, station:change.
// Aucune année n'est affichée : seul le niveau d'autonomie monte au fil du voyage.
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { STATIONS, byId, shownStatus } from './stations.js';

gsap.registerPlugin(CustomEase);
// « Élan vers l'avant » : départ retenu, accélération, léger dépassement, puis on se pose.
CustomEase.create('elan', 'M0,0 C0.18,0 0.22,-0.06 0.38,0.32 0.52,0.7 0.6,1.06 0.74,1.04 0.86,1.02 0.92,1 1,1');

const fire = (name, detail) => window.dispatchEvent(new CustomEvent(name, { detail }));
const pad4 = (n) => String(n).padStart(4, '0');

/**
 * mount  : élément où poser le tableau de bord (la scène épinglée du voyage)
 * texts  : textes de la langue en cours (i18n.js → horizon)
 */
export function initChrono({ mount, texts, reduced = false }) {
  const root = document.documentElement;
  const el = document.createElement('div');
  el.className = 'dash mono';
  el.setAttribute('aria-hidden', 'true');
  const col = () => `<span class="dash__col"><span>${[...'0123456789'].map((d) => `<i>${d}</i>`).join('')}</span></span>`;
  el.innerHTML = `<div class="dash__head"><span class="dash__dot"></span><span>${texts.horizon}</span><span class="dash__clock">--:--:--</span></div>
    <div class="dash__big"><span class="dash__num">${col()}</span><span class="dash__of">/6</span><span class="dash__side"><span class="dash__lbl">${texts.autonomy}</span><span class="dash__gauge">${'<i></i>'.repeat(6)}</span></span></div>
    <div class="dash__row"><span class="dash__status"></span><span class="dash__rep"></span></div>`;
  mount.append(el);
  // Pour les lecteurs d'écran : la station est annoncée une seule fois, en clair.
  const sr = document.createElement('p');
  sr.className = 'sr-only'; sr.setAttribute('aria-live', 'polite');
  mount.append(sr);

  const roll = el.querySelector('.dash__col > span'), gauge = [...el.querySelectorAll('.dash__gauge i')];
  const $status = el.querySelector('.dash__status'), $rep = el.querySelector('.dash__rep'), $clock = el.querySelector('.dash__clock');
  const shown = { level: -1, status: '', station: -2, future: null, era: -1 };
  let skew = 0, lastClock = 0, flying = false, repStart = 0, lastFlight = null;

  // Le niveau d'autonomie : un rouleau qui tourne avec l'élan du saut, et la jauge qui s'allume.
  const setLevel = (n, instant = false) => {
    if (n === shown.level) return; shown.level = n;
    gsap.to(roll, { yPercent: -n * 10, duration: instant || reduced ? 0 : 1.1, ease: 'elan', overwrite: true });
    gauge.forEach((g, i) => g.classList.toggle('is-on', i < n));
  };
  const setStatus = (key, label) => {
    if (key === shown.status) return; shown.status = key;
    $status.className = `dash__status badge badge--${key}`; $status.textContent = label;
  };
  setLevel(0, true); setStatus('today', texts.today);

  // L'horloge du tableau de bord : l'heure de Paris, qui s'emballe vers l'avant pendant un saut (et ne recule jamais).
  const fmt = new Intl.DateTimeFormat('fr-FR', { timeZone: 'Europe/Paris', hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const tickClock = (now) => { $clock.textContent = fmt.format(new Date(Date.now() + skew)); lastClock = now; };

  /** Reçoit l'état de la Machine à chaque image. */
  function update(st, dt = 1 / 60) {
    const now = performance.now();
    // Quelle station, et quelle phase ?
    let station = -1, future = false;
    const today = st.a.startsWith('auj_') ? byId[st.a.slice(4)] : null;
    const from = byId[st.a] || null, to = st.b.startsWith('auj_') ? byId[st.b.slice(4)] : null;
    if (today && st.b === today.id) { station = today.index; future = st.f >= 0.5; }
    else if (from && to) { station = st.f < 0.5 ? from.index : to.index; future = st.f < 0.5; }
    else if (from) { station = from.index; future = true; }
    else if (to) station = st.f > 0.5 ? to.index : -1;
    const S = station >= 0 ? STATIONS[station] : null;

    // Niveau atteint : il monte à la bascule vers le futur ; pendant le « aujourd'hui », on garde celui de la station d'avant.
    const prevLevel = station > 0 ? STATIONS[station - 1].level : 0;
    // Après la dernière station (salle des agents, trajectoire, contact), on reste au niveau le plus haut.
    const afterAll = !S && ['dim', 'path', 'end'].includes(st.a) || (st.a === 'server' && st.b === 'dim');
    setLevel(S ? (future ? S.level : prevLevel) : afterAll ? 6 : 0);
    if (S) { const ss = shownStatus(S); setStatus(future ? ss : 'today', future ? texts.status[ss] : texts.today); }

    // Compteur de répétitions : il tourne tant que la tâche est faite à la main.
    if (S && !future) {
      if (shown.future !== false || shown.station !== station) repStart = now;
      $rep.textContent = `↻ ${pad4(Math.floor((now - repStart) / 2600) + 1)} ${texts.repeat}`;
    } else $rep.textContent = '';

    if (station !== shown.station) {
      shown.station = station;
      if (S) {
        const t = texts.stations[S.id];
        sr.textContent = `${texts.station} ${station + 1} / ${STATIONS.length} · ${t.task}. ${texts.level} ${S.level}, ${texts.status[shownStatus(S)]}.`;
      }
      fire('station:change', { index: station, id: S?.id || null });
    }
    shown.future = future;
    el.classList.toggle('is-future', !!future);
    el.style.setProperty('--c', S ? (future ? S.color : '#9DA4AE') : 'var(--accent)');

    // Les sauts : départ, franchissement du seuil, arrivée.
    const fl = st.flight && from && to ? `${from.id}>${to.id}` : null;
    if (fl && st.f > 0.02 && st.f < 0.98) {
      if (!flying || lastFlight !== fl) { flying = true; lastFlight = fl; fire('saut:depart', { from: from.id, to: to.id }); }
    } else if (flying) { flying = false; fire('saut:arrivee', { to: lastFlight?.split('>')[1] }); }
    if (st.crossed) fire('saut:seuil', { label: st.crossed });
    if (flying && !reduced) skew += st.warp * dt * 1000 * 3600 * 1.6;
    if (flying || now - lastClock > 500) tickClock(now);

    // L'étalonnage côté page (lumière plus froide et plus terne pour le manuel), en variable CSS : seulement quand il change vraiment.
    if (Math.abs(st.era - shown.era) > 0.01) { shown.era = st.era; root.style.setProperty('--era', st.era.toFixed(3)); }
  }

  return {
    update,
    /** Décalage de l'horloge (ms) : l'heure du pied de page s'emballe avec celle du tableau de bord. */
    get skew() { return skew; },
    destroy() { el.remove(); sr.remove(); },
  };
}

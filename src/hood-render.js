// Rendu et animations de la section « Sous le capot ».
import gsap from 'gsap';
import { hood, features } from './hood.js';

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const pad = (n) => String(n).padStart(2, '0');

const VIZ = {
  tower: (v) => `<div class="viz tw" aria-hidden="true">
    <div class="tw__head mono"><span><i class="live"></i>${esc(v.head)}</span><span>${esc(v.live)}</span></div>
    <div class="tw__kpis">${v.kpis.map((k, i) => `<div><b data-kpi="${i}">${[128, 3, 0][i]}</b><small>${esc(k)}</small></div>`).join('')}</div>
    <ul class="tw__feed" data-feed></ul>
    <svg class="tw__spark" viewBox="0 0 300 54" preserveAspectRatio="none"><defs><linearGradient id="twg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2f80ff" stop-opacity=".45"/><stop offset="1" stop-color="#2f80ff" stop-opacity="0"/></linearGradient></defs>
      <path class="tw__area" d="M0 44 C25 40 35 30 60 32 S95 18 120 24 S160 36 185 20 S230 8 255 16 S285 10 300 6 V54 H0Z" fill="url(#twg)"/>
      <path class="tw__line" d="M0 44 C25 40 35 30 60 32 S95 18 120 24 S160 36 185 20 S230 8 255 16 S285 10 300 6" fill="none" stroke="#2f80ff" stroke-width="2"/></svg>
  </div>`,
  watchdog: (v) => `<div class="viz wd" aria-hidden="true">
    <svg class="wd__ecg" viewBox="0 0 300 64" preserveAspectRatio="none"><path class="wd__base" d="M0 34 H300"/><path class="wd__line" d="M0 34 H48 L58 34 L66 10 L76 56 L84 34 H140 L150 34 L158 14 L168 52 L176 34 H232 L242 34 L250 10 L260 56 L268 34 H300"/></svg>
    <ul class="wd__checks mono">${v.checks.map((c) => `<li><i></i>${esc(c)}</li>`).join('')}</ul>
    <div class="wd__timer mono">${esc(v.next)} <b data-timer>15:00</b></div>
  </div>`,
  report: (v) => `<div class="viz rp" aria-hidden="true">
    <div class="rp__from mono">${esc(v.from)}</div><div class="rp__subj">${esc(v.subj)}</div>
    ${v.rows.map((r, i) => `<div class="rp__row"><span>${esc(r)}</span><i style="--w:${[86, 64, 92, 34][i]}%"></i></div>`).join('')}
  </div>`,
  relance: (v) => `<div class="viz rl" aria-hidden="true">
    <div class="rl__msg"><span class="mono">${esc(v.app)}</span><p>${esc(v.msg)}</p><span class="rl__btn">${esc(v.btn)}</span></div>
    <div class="rl__clock"><svg viewBox="0 0 80 80"><circle class="bg" cx="40" cy="40" r="34"/><circle class="fg" cx="40" cy="40" r="34"/></svg><span class="mono" data-countdown>30:00</span><em class="mono">${esc(v.tag)}</em></div>
  </div>`,
  learn: (v) => `<div class="viz ln" aria-hidden="true">
    <div class="ln__cards">${v.cards.map((c, i) => `<span class="ln__card mono" style="--i:${i}">${esc(c)}</span>`).join('')}</div>
    <span class="ln__arrow">→</span><span class="ln__claude">Claude</span>
    <span class="ln__badge mono">${esc(v.badge)}</span>
  </div>`,
  deadline: (v) => `<div class="viz dl" aria-hidden="true">
    <div class="dl__days">${v.days.map((d, i) => `<span class="dl__d${i === 5 || i === 6 ? ' is-off' : ''}${i === 8 ? ' is-hol' : ''}${i === 9 ? ' is-due' : ''}" data-day="${i}"><b>${esc(d)}</b>${i === 8 ? `<small>${esc(v.holiday)}</small>` : ''}${i === 9 ? `<small>${esc(v.due)}</small>` : ''}${i === 7 ? `<small class="dl__rem">${esc(v.remind)}</small>` : ''}</span>`).join('')}</div>
    <div class="dl__mem"><i></i><i></i><i></i><i></i><i></i><span class="mono">30 j</span></div>
  </div>`,
  guards: (v) => `<div class="viz gd" aria-hidden="true">
    <ul class="gd__rules">${v.rules.map((r) => `<li><span class="gd__lock">🔒</span><span>${esc(r)}</span><em class="mono">${esc(v.block)}</em></li>`).join('')}</ul>
    <div class="gd__iban mono">IBAN <b data-iban>FR76 3000 6000 0112 3456 7890 189</b></div>
  </div>`,
  bench: (v) => `<div class="viz tm" aria-hidden="true"><div class="tm__bar"><i></i><i></i><i></i></div><div class="tm__body mono" data-term data-lines="${esc(JSON.stringify(v.lines))}"></div></div>`,
  errors: (v) => `<div class="viz er" aria-hidden="true">${v.lines.map((l, i) => `<p class="mono${l.startsWith('✕') ? ' is-err' : ''}${i === 3 ? ' is-mute' : ''}" style="--i:${i}">${esc(l)}</p>`).join('')}</div>`,
  multi: (v) => `<div class="viz mt" aria-hidden="true">
    <div class="mt__col">${v.trades.map((t) => `<span class="mt__chip">${esc(t)}</span>`).join('')}</div>
    <div class="mt__flow"><i></i><i></i><i></i></div>
    <div class="mt__col">${v.files.map((t) => `<span class="mt__file mono">${esc(t)}</span>`).join('')}</div>
    <div class="mt__flow"><i></i><i></i><i></i></div>
    <div class="mt__col">${v.out.map((t) => `<span class="mt__out mono">${esc(t)}</span>`).join('')}</div>
  </div>`,
};

export function hoodTexts(lang) { return hood[lang] || hood.fr; }

export function renderHood(lang) {
  const H = hoodTexts(lang);
  return H.tiles.map((t, i) => `<article class="tile tile--${t.size} tile--${t.id}">
    <div class="tile__viz">${VIZ[t.id](H.viz[t.id])}</div>
    <div class="tile__txt"><span class="tile__n mono">${pad(i + 1)}</span><h3>${esc(t.title)}</h3><p>${esc(t.text)}</p></div>
  </article>`).join('');
}

export function renderFeatures(lang, id) {
  const list = (features[lang] || features.fr)[id];
  if (!list) return '';
  const title = lang === 'fr' ? 'Sous le capot' : 'Under the hood';
  return `<section class="feats"><h4>${title}</h4><div class="feats__grid">${list.map(([t, d], i) => `<div class="feat"><span class="mono">${pad(i + 1)}</span><b>${esc(t)}</b><p>${esc(d)}</p></div>`).join('')}</div></section>`;
}

// ---------- Animations ----------
export function initHood({ reduced, lang }) {
  const root = document.getElementById('hood');
  if (!root) return;
  const tiles = [...root.querySelectorAll('.tile')];
  const H = hoodTexts(lang);
  const live = (el) => el.closest('.tile').classList.contains('is-live') && !document.documentElement.classList.contains('fx-off');

  if (reduced) { tiles.forEach((t) => t.classList.add('is-live', 'is-static')); fillStatic(root, H); return; }

  const io = new IntersectionObserver((es) => es.forEach((e) => e.target.classList.toggle('is-live', e.isIntersecting)), { threshold: 0.2 });
  tiles.forEach((t) => io.observe(t));

  // Apparition en cascade + projecteur sous la souris
  gsap.from(tiles, { y: 70, opacity: 0, clipPath: 'inset(18% 0 0 0 round 22px)', duration: 1.2, ease: 'expo.out', stagger: 0.07, scrollTrigger: { trigger: root, start: 'top 82%' } });
  tiles.forEach((el) => el.addEventListener('pointermove', (e) => { const r = el.getBoundingClientRect(); el.style.setProperty('--mx', `${e.clientX - r.left}px`); el.style.setProperty('--my', `${e.clientY - r.top}px`); }));

  // Tour de contrôle : flux en direct
  const feed = root.querySelector('[data-feed]'), rows = H.viz.tower.feed;
  const kpi = [...root.querySelectorAll('[data-kpi]')];
  const MAX = 7;
  let fi = 0, clock = 9 * 60 + 41;
  const hhmm = (m) => `${pad(Math.floor(m / 60) % 24)}:${pad(m % 60)}`;
  const rowHTML = ([h, c, w, t]) => `<li class="t-${t || 'n'}"><span class="mono">${h}</span><b>${esc(c)}</b><span>${esc(w)}</span></li>`;
  rows.slice(0, MAX).forEach((r) => feed.insertAdjacentHTML('beforeend', rowHTML(r)));
  setInterval(() => {
    if (!live(feed)) return;
    const r = rows[fi++ % rows.length];
    clock += 1 + (fi % 3);
    feed.insertAdjacentHTML('afterbegin', rowHTML([hhmm(clock), r[1], r[2], r[3]]));
    const li = feed.firstElementChild;
    gsap.from(li, { height: 0, opacity: 0, y: -14, duration: 0.6, ease: 'expo.out' });
    gsap.fromTo(li, { backgroundColor: 'rgba(47,128,255,.28)' }, { backgroundColor: 'rgba(47,128,255,0)', duration: 1.6 });
    while (feed.children.length > MAX) feed.lastElementChild.remove();
    kpi[0].textContent = +kpi[0].textContent + 1;
    if (r[3] === 'u') { kpi[1].textContent = +kpi[1].textContent + 1; gsap.fromTo(kpi[1], { color: '#ff6b6b' }, { color: '#eceef2', duration: 1.4 }); }
  }, 2300);

  // Chien de garde : contrôles en séquence + compte à rebours
  const checks = [...root.querySelectorAll('.wd__checks li')], timer = root.querySelector('[data-timer]');
  let ci = 0, secs = 900;
  setInterval(() => {
    if (!live(timer)) return;
    secs = secs <= 1 ? 900 : secs - 1;
    timer.textContent = `${pad(Math.floor(secs / 60))}:${pad(secs % 60)}`;
  }, 1000);
  setInterval(() => {
    if (!live(timer)) return;
    if (ci === checks.length) { checks.forEach((c) => c.classList.remove('is-ok')); ci = 0; return; }
    checks[ci++].classList.add('is-ok');
  }, 700);

  // Relance des urgences : 30 minutes en accéléré
  const cd = root.querySelector('[data-countdown]'), ring = root.querySelector('.rl__clock .fg'), rl = root.querySelector('.rl');
  const C = 2 * Math.PI * 34; ring.style.strokeDasharray = C;
  const rlTl = gsap.timeline({ repeat: -1, paused: true, repeatDelay: 0.6 })
    .fromTo(ring, { strokeDashoffset: 0 }, { strokeDashoffset: C, duration: 6, ease: 'none', onUpdate() { const left = Math.round(1800 * (1 - this.progress())); cd.textContent = `${pad(Math.floor(left / 60))}:${pad(left % 60)}`; } })
    .add(() => rl.classList.add('is-fired'))
    .to({}, { duration: 1.6 })
    .add(() => rl.classList.remove('is-fired'));
  // Échéances : on compte les jours ouvrés
  const days = [...root.querySelectorAll('.dl__d')];
  const dlTl = gsap.timeline({ repeat: -1, paused: true, repeatDelay: 1 });
  days.forEach((d, i) => { if (!d.classList.contains('is-off') && !d.classList.contains('is-hol')) dlTl.add(() => d.classList.add('is-count'), i * 0.45); });
  dlTl.add(() => days.forEach((d) => d.classList.remove('is-count')), '+=1.4');
  // Garde-fous : chaque règle bloque tour à tour, l'IBAN se masque
  const rules = [...root.querySelectorAll('.gd__rules li')], iban = root.querySelector('[data-iban]');
  const fullIban = iban.textContent, masked = fullIban.replace(/^(\S+)(.*)(\s\S+)$/, (m, a, mid, z) => a + mid.replace(/\d/g, '•') + z);
  const gdTl = gsap.timeline({ repeat: -1, paused: true, repeatDelay: 0.8 });
  rules.forEach((r, i) => gdTl.add(() => { rules.forEach((x) => x.classList.remove('is-hit')); r.classList.add('is-hit'); }, i * 0.9));
  gdTl.add(() => { rules.forEach((x) => x.classList.remove('is-hit')); }, '+=0.9');
  gdTl.add(() => { iban.textContent = masked; iban.classList.add('is-masked'); }, 0.5).add(() => { iban.textContent = fullIban; iban.classList.remove('is-masked'); }, '+=0.2');
  // Terminal du banc d'essai : frappe ligne par ligne
  const term = root.querySelector('[data-term]'), lines = JSON.parse(term.dataset.lines);
  const tmTl = gsap.timeline({ repeat: -1, paused: true, repeatDelay: 1.6 });
  tmTl.add(() => { term.innerHTML = ''; });
  lines.forEach((l, i) => {
    const o = { n: 0 };
    tmTl.add(() => term.insertAdjacentHTML('beforeend', `<p class="${l.startsWith('$') ? 'is-cmd' : l.startsWith('●') ? 'is-rec' : 'is-out'}"></p>`));
    tmTl.to(o, { n: l.length, duration: l.startsWith('$') ? l.length * 0.035 : 0.25, ease: 'none', onUpdate: () => { term.children[i].textContent = l.slice(0, Math.round(o.n)); } });
    tmTl.to({}, { duration: 0.35 });
  });

  const loops = [[rl, rlTl], [days[0], dlTl], [iban, gdTl], [term, tmTl]];
  setInterval(() => loops.forEach(([el, tl]) => { if (live(el)) { if (tl.paused()) tl.play(); } else if (!tl.paused()) tl.pause(); }), 300);
}

function fillStatic(root, H) {
  const feed = root.querySelector('[data-feed]');
  feed.innerHTML = H.viz.tower.feed.slice(0, 7).map(([h, c, w, t]) => `<li class="t-${t || 'n'}"><span class="mono">${h}</span><b>${esc(c)}</b><span>${esc(w)}</span></li>`).join('');
  root.querySelectorAll('.wd__checks li').forEach((c) => c.classList.add('is-ok'));
  const term = root.querySelector('[data-term]');
  term.innerHTML = JSON.parse(term.dataset.lines).map((l) => `<p class="${l.startsWith('$') ? 'is-cmd' : l.startsWith('●') ? 'is-rec' : 'is-out'}">${esc(l)}</p>`).join('');
  root.querySelectorAll('.dl__d:not(.is-off):not(.is-hol)').forEach((d) => d.classList.add('is-count'));
}

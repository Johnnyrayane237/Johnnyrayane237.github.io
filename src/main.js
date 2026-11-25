import '@fontsource-variable/inter-tight';
import '@fontsource/instrument-serif/400.css';
import '@fontsource/instrument-serif/400-italic.css';
import '@fontsource-variable/jetbrains-mono';
import './styles.css';
import './machine.css';
import './horizon.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { content, contact } from './i18n.js';
import { initWorld, K, TRACK } from './world.js';
import { initExtras, scramble } from './extras.js';
import { renderFeatures } from './hood-render.js';
import { STATIONS, shownStatus } from './stations.js';
import { initChrono } from './chrono.js';
import { initCinema } from './cinema.js';

gsap.registerPlugin(ScrollTrigger);
// Les sections épinglées (voyage, salle des agents) allongent la page. Pour que chaque animation située
// plus bas se déclenche au bon endroit, les déclencheurs sont recalculés dans l'ordre de la page.
// Un conteneur passe après ce qu'il contient : son étendue dépend des épinglages placés à l'intérieur
// (sinon le repère de section « Voyage » s'arrêterait au début du voyage épinglé).
ScrollTrigger.addEventListener('refreshInit', () => ScrollTrigger.sort((a, b) => {
  const A = a.trigger, B = b.trigger;
  if (!A || !B || A === B) return A === B ? 0 : A ? 1 : -1;
  const pos = A.compareDocumentPosition(B);
  if (pos & Node.DOCUMENT_POSITION_CONTAINED_BY) return 1;
  if (pos & Node.DOCUMENT_POSITION_CONTAINS) return -1;
  return pos & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
}));

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const mobile = window.matchMedia('(max-width: 760px)').matches;
const params = new URLSearchParams(location.search);
const skipIntro = reduced || params.has('og') || params.has('capture');
let menuOpen = false, caseOpen = false;

// ---------- Langue ----------
let stored = null;
try { stored = localStorage.getItem('lang'); } catch { /* stockage indisponible */ }
const lang = params.get('lang') || stored || ((navigator.language || 'fr').startsWith('fr') ? 'fr' : 'en');
const L = content[lang] || content.fr;
const T = L.ui;
document.documentElement.lang = lang;
document.title = L.meta.title;
$('meta[name="description"]').setAttribute('content', L.meta.description);
$$('[data-i18n]').forEach((el) => { const v = T[el.dataset.i18n]; if (v != null) el.innerHTML = v; });
const langBtn = $('#langBtn');
langBtn.setAttribute('aria-label', T['lang.switch']);
$('.lang__on').textContent = lang.toUpperCase();
$('.lang__off').textContent = lang === 'fr' ? 'EN' : 'FR';

// ---------- Contenu ----------
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const pad = (n) => String(n).padStart(2, '0');
const HZ = L.horizon, NS = STATIONS.length;
const projOf = (s) => L.projects.find((p) => p.id === s.project);

// Prologue : la liste des tâches du jour.
$('#loaderList').innerHTML = L.loader.map((t) => `<li><i class="loader__box"></i><span class="loader__t">${esc(t)}</span><em class="mono">${esc(T['loader.done'])}</em></li>`).join('');
$('#loaderCount').textContent = `0/${L.loader.length}`;

// Les trois métiers
$('#trades').innerHTML = L.trades.map(([t, d, href], i) => `<a class="trade" href="${href}"><span class="trade__n mono">${pad(i + 1)}</span><h3>${esc(t)}</h3><p>${esc(d)}</p><span class="trade__go" aria-hidden="true">→</span></a>`).join('');

// Les stations du voyage : chacune a sa phase « aujourd'hui » (la tâche à la main) et sa phase « futur » (le projet).
$('#hzStage').innerHTML = STATIONS.map((s, i) => {
  const p = projOf(s), t = HZ.stations[s.id], ss = shownStatus(s);
  return `<article class="hz-slide" data-i="${i}" style="--c:${s.color}" aria-hidden="true">
  <p class="hz-slide__n mono"><b>${pad(i + 1)}</b> / ${pad(NS)} — ${esc(HZ.level)} ${s.level}/6</p>
  <div class="hz-ph hz-ph--today">
    <p class="hz-ph__tag mono"><i></i>${esc(T['horizon.today'])}</p>
    <h3 class="hz-ph__task">${esc(t.task)}</h3>
    <p class="hz-ph__txt">${esc(t.today)}</p>
  </div>
  <div class="hz-ph hz-ph--future">
    <p class="hz-ph__tag mono"><i></i>${esc(T['horizon.future'])} · <span class="badge badge--${ss}">${esc(HZ.status[ss])}</span></p>
    <h3 class="hz-ph__title">${esc(p.title)}</h3>
    <p class="hz-ph__txt">${esc(t.future)}</p>
    <div class="slide__metrics">${p.metrics.slice(0, 3).map(([b, x]) => `<div><b>${esc(b)}</b><span>${esc(x)}</span></div>`).join('')}</div>
    <div class="slide__foot"><button class="btn btn--primary slide__open" type="button" data-open="${p.id}" data-magnetic><span class="btn__fill"></span><span class="btn__label">${esc(T['horizon.open'])}</span><span class="btn__arrow">→</span></button></div>
  </div></article>`;
}).join('');
$('#hzRail').innerHTML = STATIONS.map((s, i) => `<button type="button" data-go="${i}" style="--c:${s.color}"><i>${pad(i + 1)}</i><span>${esc(projOf(s).short)}</span></button>`).join('') + '<span class="work__bar"><i id="hzBar"></i></span>';

// L'atelier : sites en ligne, films et pubs
$('#atSites').innerHTML = L.atelier.sites.map((s) => `<a class="site" href="${s.url}" target="_blank" rel="noopener" data-cursor="view">
  <span class="site__bar" aria-hidden="true"><i></i><i></i><i></i><span class="mono">${esc(s.url.replace(/^https?:\/\//, '').replace(/\/$/, ''))}</span></span>
  <span class="site__shot"><img src="${s.img}" alt="" loading="lazy" /></span>
  <span class="site__cap"><b>${esc(s.title)}</b><span class="mono">${esc(s.meta)}</span><em class="mono">${esc(T['atelier.visit'])} ↗</em></span></a>`).join('');
$('#reel').innerHTML = L.motion.map((m, i) => `<button class="clip${m.ratio === '9/16' ? ' clip--tall' : ''}" type="button" style="--ratio:${m.ratio}" data-video="${m.src}" data-cursor="view" aria-label="${esc(T['motion.play'])} — ${esc(m.title)}">
  <video muted loop playsinline preload="none" poster="${m.poster}" data-src="${m.src}"></video><span class="clip__n mono">${pad(i + 1)}</span>
  <span class="clip__cap"><strong>${esc(m.title)}</strong><span class="mono">${esc(m.meta)}</span></span></button>`).join('');

$('#path').innerHTML = L.path.map(([y, t, o, d]) => `<li class="step"><span class="step__y mono">${esc(y)}</span><div><h3>${esc(t)}</h3><p class="step__o">${esc(o)}</p></div><p class="step__d">${esc(d)}</p></li>`).join('');
$('#tools').innerHTML = L.tools.map((t) => `<i class="tag">${esc(t)}</i>`).join('');
$('#askInput').setAttribute('placeholder', T['contact.placeholder']);

// ---------- Découpage du texte ----------
function splitWords(el, cls = 'w') {
  const walk = (node) => {
    [...node.childNodes].forEach((n) => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.append(' '); return; }
          const w = document.createElement('span'); w.className = cls;
          if (cls === 'w') { const i = document.createElement('span'); i.textContent = part; w.append(i); } else w.textContent = part;
          frag.append(w);
        });
        n.replaceWith(frag);
      } else if (n.nodeType === 1) walk(n);
    });
  };
  walk(el);
}
$$('[data-split="chars"]').forEach((el) => {
  const html = [...el.childNodes].map((n) => (n.nodeType === 3 ? [...n.textContent].map((c) => `<span class="char">${c}</span>`).join('') : `<span class="char">${n.outerHTML}</span>`)).join('');
  el.innerHTML = html;
});
$$('.title, .contact__title, .hz-ph__title, .hz-ph__task').forEach((el) => splitWords(el));
splitWords($('#manifestoText'), 'mw');

// ---------- Défilement fluide ----------
let lenis = null;
if (!reduced) {
  lenis = new Lenis({ duration: 1.15, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  // Les zones épinglées allongent la page après coup : à chaque recalcul de ScrollTrigger, Lenis remesure la page
  // (sans cela, sa butée pouvait rester sur l'ancienne hauteur et bloquer le défilement en plein voyage).
  ScrollTrigger.addEventListener('refresh', () => lenis.resize());
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  if (!skipIntro) lenis.stop();
}
const scrollToTarget = (hash) => { const el = $(hash); if (!el) return; if (lenis) lenis.scrollTo(el, { duration: 1.6 }); else el.scrollIntoView(); };
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]'); if (!a) return;
  e.preventDefault(); closeMenu(); closeCase(); closeQuick(); scrollToTarget(a.getAttribute('href'));
});

// ---------- Le tableau de bord du voyage (année d'horizon, autonomie, statut) ----------
const chrono = reduced ? null : initChrono({ mount: $('#hzDash'), texts: HZ, reduced });
let lastFrame = performance.now();
const feedChrono = (st) => { const now = performance.now(); chrono?.update(st, Math.min(0.1, (now - lastFrame) / 1000)); lastFrame = now; };

// ---------- Scène 3D ----------
// Un seul monde : le nuage de particules prend la forme de chaque étape du site.
let hero = null, introPlaying = false;
try {
  hero = initWorld($('#gl'), { reduced, seed: params.has('capture') ? 7 : 0, onFrame: feedChrono,
    onQuality: (lvl) => { if (lvl >= 2) window.dispatchEvent(new CustomEvent('world:slow')); } });
} catch { $('#gl').remove(); }

// ---------- Le voyage : chaque portion de page fait avancer le monde d'une étape ----------
const segs = [];
const stopST = {};
const seg = (cfg, map) => { const st = ScrollTrigger.create(cfg); segs.push({ st, map }); return st; };
// Sans 3D, le tableau de bord suit quand même le voyage, d'après la même position sur la route.
const pseudo = (k) => { const i = Math.min(TRACK.length - 2, Math.max(0, Math.floor(k))), f = Math.min(1, k - i), a = TRACK[i], b = TRACK[i + 1];
  const old = (x) => x.startsWith('auj_'); return { k, i, f, a, b, flight: old(a) || i < 2 ? 0 : 1, era: old(a) && old(b) ? 0 : old(a) ? f : old(b) ? 1 - f : 1, warp: 0, crossed: null }; };
function syncWorld() {
  if (introPlaying) return;
  let k = K.sphere;
  segs.forEach(({ st, map }) => { k += map ? map(st.progress) : st.progress; });
  if (hero) hero.k = k; else feedChrono(pseudo(k));
}
// Dans le voyage : la forme « aujourd'hui » reste un temps, bascule dans son futur, s'y pose, puis on saute à la station suivante.
const sm = (a, b, v) => { const t = Math.min(1, Math.max(0, (v - a) / (b - a))); return t * t * (3 - 2 * t); };
const hzMap = (p) => { const x = Math.min(NS - 1e-4, p * NS), i = Math.floor(x), q = x - i; let m = sm(0.2, 0.46, q); if (i < NS - 1) m += sm(0.76, 1, q); return 2 * i + m; };
const hzAt = (p) => { const x = Math.min(NS - 1e-4, Math.max(0, p) * NS), i = Math.floor(x), q = x - i; return q > 0.88 && i < NS - 1 ? [i + 1, false] : [i, q >= 0.33]; };

// ---------- Prologue et introduction ----------
let seen = false;
try { seen = sessionStorage.getItem('seen') === '1'; sessionStorage.setItem('seen', '1'); } catch { /* stockage indisponible */ }
function reveal(at = 0) {
  return gsap.timeline({ defaults: { ease: 'expo.out' } })
    .fromTo('.hero__line .char', { yPercent: 120, rotate: 6, rotateX: -85, transformPerspective: 700 }, { yPercent: 0, rotate: 0, rotateX: 0, duration: 1.5, stagger: 0.035 }, at)
    .fromTo('.hero__top > *, .hero__bottom > *', { y: 26, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, stagger: 0.08 }, at + 0.55)
    .fromTo('.header > *', { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.08 }, at + 0.45)
    .from('.hero__bottom', { '--line': 0, duration: 1 }, at + 0.45);
}
// Le nuage arrive de loin, écrit le nom en points de lumière, puis se referme en sphère.
function intro() {
  document.body.classList.remove('is-loading');
  if (!hero) { lenis?.start(); reveal(); ScrollTrigger.refresh(); return; }
  introPlaying = true;
  const o = { k: K.cloud };
  const set = () => { hero.k = o.k; };
  gsap.timeline()
    .to(o, { k: K.name, duration: 1.7, ease: 'power3.out', onUpdate: set })
    .to(o, { k: K.sphere, duration: 1.7, ease: 'power2.inOut', onUpdate: set }, '+=0.55')
    .add(() => { reveal(); lenis?.start(); }, '-=1.25')
    .add(() => { introPlaying = false; syncWorld(); ScrollTrigger.refresh(); });
}
if (skipIntro || seen) {
  $('#loader').remove(); document.body.classList.remove('is-loading'); lenis?.start();
  hero?.jump(K.sphere);
  if (!skipIntro) reveal(0.1);
} else {
  // Le prologue : les tâches du jour s'inscrivent, puis chacune est confiée à un agent (cochée, barrée, en couleur).
  gsap.set('.hero__line .char', { yPercent: 120 });
  gsap.set('.hero__top > *, .hero__bottom > *, .header > *', { opacity: 0 });
  const items = $$('#loaderList li'), n = items.length, count = { v: 0 };
  gsap.timeline()
    .to(items, { opacity: 1, y: 0, duration: 0.3, stagger: 0.09, ease: 'power2.out' }, 0.05)
    .to(count, { v: n, duration: n * 0.16, ease: 'none', onUpdate: () => {
      const d = Math.floor(count.v); items.forEach((li, i) => li.classList.toggle('is-done', i < d)); $('#loaderCount').textContent = `${d}/${n}`;
    } }, 0.5)
    .to('#loaderBar', { scaleX: 1, duration: n * 0.16, ease: 'none' }, 0.5)
    .to('.loader__todo, .loader__name', { yPercent: -30, opacity: 0, duration: 0.45, ease: 'power3.in', stagger: 0.04 }, '+=0.25')
    .add(intro, '-=0.1')
    .to('#loader', { clipPath: 'inset(0 0 100% 0)', duration: 0.9, ease: 'expo.inOut' }, '-=0.1')
    .set('#loader', { display: 'none' });
}

// ---------- Animations au défilement ----------
if (!reduced) {
  seg({ trigger: '.hero', start: 'top top', end: 'bottom top' });
  stopST.manifeste = segs[0].st;
  seg({ trigger: '#horizon', start: 'top 75%', endTrigger: '#hzPin', end: 'top top' });
  gsap.to('.hero__title', { yPercent: -18, scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
  gsap.to('.hero__line--right', { xPercent: -6, scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });

  // Bandeau : vitesse liée au défilement
  const track = $('#marquee'); track.innerHTML += track.innerHTML;
  let mx = 0, speed = 1;
  // « end: max » doit être écrit en toutes lettres : sinon la fin est calculée avant l'allongement des sections épinglées.
  ScrollTrigger.create({ start: 0, end: 'max', onUpdate: (s) => { const v = s.getVelocity(); speed = 1 + Math.min(Math.abs(v) / 220, 9) * (s.direction || 1); if (hero) hero.velocity = Math.min(Math.abs(v) / 3200, 1); } });
  // Le monde suit le défilement à chaque image, quel que soit l'ordre de mise à jour des sections.
  gsap.ticker.add(syncWorld);
  gsap.ticker.add(() => { mx -= speed * 0.9; speed += (1 - speed) * 0.06; const half = track.scrollWidth / 2; if (mx <= -half) mx += half; if (mx > 0) mx -= half; track.style.transform = `translate3d(${mx}px,0,0)`; });

  gsap.to('#manifestoText .mw', { opacity: 1, stagger: 0.06, ease: 'none', scrollTrigger: { trigger: '#manifestoText', start: 'top 82%', end: 'bottom 45%', scrub: 0.6 } });
  $$('.title, .contact__title').forEach((el) => {
    if (el.closest('.ag')) return;
    gsap.from($$('.w > span', el), { yPercent: 115, rotate: 4, duration: 1.25, ease: 'expo.out', stagger: 0.06, scrollTrigger: { trigger: el, start: 'top 88%' } });
  });
  gsap.from('.trade', { y: 46, opacity: 0, rotateX: -60, transformPerspective: 900, transformOrigin: '50% 0%', duration: 1.15, stagger: 0.09, ease: 'expo.out', scrollTrigger: { trigger: '#trades', start: 'top 88%' } });
  $$('.step').forEach((el) => gsap.from(el, { y: 34, opacity: 0, rotateX: -40, transformPerspective: 900, transformOrigin: '50% 0%', duration: 1.1, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 92%' } }));
  gsap.from('#tools .tag', { y: 16, opacity: 0, duration: 0.6, stagger: 0.025, ease: 'power3.out', scrollTrigger: { trigger: '#tools', start: 'top 92%' } });
  gsap.from('.site', { y: 60, opacity: 0, rotateX: -24, transformPerspective: 1200, transformOrigin: '50% 0%', duration: 1.2, stagger: 0.1, ease: 'expo.out', scrollTrigger: { trigger: '#atSites', start: 'top 85%' } });
  gsap.from('.clip', { y: 50, opacity: 0, duration: 1.1, stagger: 0.08, ease: 'expo.out', scrollTrigger: { trigger: '#reel', start: 'top 88%' } });
  // Les quatre pages se déplient en éventail
  gsap.set('#mdmPages', { perspective: 1500 });
  gsap.from('#mdmPages img', { yPercent: (i) => 20 + i * 12, rotateY: (i) => -58 + i * 9, rotateX: 12, z: (i) => -280 - i * 70, opacity: 0.25, transformOrigin: '0% 50%', ease: 'none', scrollTrigger: { trigger: '#mdmPages', start: 'top bottom', end: 'bottom 72%', scrub: 0.8 } });
  gsap.from('.ask, .contact__text, .contact__actions > *, .contact__list > div', { y: 30, opacity: 0, duration: 1, stagger: 0.06, ease: 'expo.out', scrollTrigger: { trigger: '.ask', start: 'top 92%' } });

  // En-tête : se cache en descendant
  ScrollTrigger.create({ start: 200, end: 'max', onUpdate: (s) => $('#header').classList.toggle('is-hidden', s.direction === 1 && !menuOpen) });
}

// ---------- Le voyage : scène épinglée, une station par écran ----------
const slides = $$('.hz-slide'), railBtns = $$('#hzRail button'), hzBar = $('#hzBar'), hzPin = $('#hzPin');
let curI = -1, curF = null, hzST = null;
function setStation(i, future) {
  if (i === curI && future === curF) return;
  const changed = i !== curI, dir = i > curI ? 1 : -1, prev = slides[curI], next = slides[i];
  curI = i; curF = future;
  railBtns.forEach((b, j) => { b.classList.toggle('is-active', j === i); b.classList.toggle('is-done', j < i); b.setAttribute('aria-current', j === i ? 'true' : 'false'); });
  hzPin.style.setProperty('--c', future ? STATIONS[i].color : '#9DA4AE');
  hzPin.classList.toggle('is-future', future);
  next.classList.toggle('is-future', future);
  if (changed) {
    slides.forEach((s, j) => s.setAttribute('aria-hidden', j === i ? 'false' : 'true'));
    if (prev) {
      gsap.killTweensOf(prev);
      gsap.to(prev, { y: -36 * dir, opacity: 0, filter: 'blur(8px)', duration: 0.34, ease: 'power2.in', onComplete: () => { if (slides[curI] !== prev) prev.classList.remove('is-active'); gsap.set(prev, { clearProps: 'filter' }); } });
    }
    next.classList.add('is-active'); gsap.killTweensOf(next);
    gsap.fromTo(next, { y: 50 * dir, opacity: 0, filter: 'blur(10px)' }, { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.9, ease: 'expo.out', delay: prev ? 0.14 : 0, clearProps: 'filter' });
  }
  // La phase qui apparaît : ses mots montent derrière un masque, ses chiffres se décodent.
  const ph = $(future ? '.hz-ph--future' : '.hz-ph--today', next);
  gsap.fromTo($$('.w > span', ph), { yPercent: 115 }, { yPercent: 0, duration: 1, ease: 'expo.out', stagger: 0.035, delay: changed && prev ? 0.18 : 0.05, overwrite: true });
  if (future) $$('.slide__metrics b', next).forEach((el, j) => gsap.delayedCall(0.3 + j * 0.09, () => scramble(el, 0.7)));
  window.dispatchEvent(new CustomEvent('station:phase', { detail: { index: i, future } }));
}
if (reduced) {
  // Sans animation : toutes les stations s'affichent l'une sous l'autre, avec leurs deux phases.
  $('#horizon').classList.add('hz--static');
  slides.forEach((s) => { s.classList.add('is-active', 'is-future'); s.setAttribute('aria-hidden', 'false'); });
} else {
  setStation(0, false);
  hzST = seg({ trigger: hzPin, start: 'top top', end: () => `+=${Math.round(window.innerHeight * 1.05 * NS)}`, pin: true, scrub: true, invalidateOnRefresh: true,
    onUpdate: (s) => { const [i, f] = hzAt(s.progress); setStation(i, f); hzBar.style.transform = `scaleX(${s.progress})`; } }, hzMap);
}

// La sculpture de chaque station se place dans la zone que son texte laisse libre : à côté sur grand écran,
// au-dessus sur téléphone. Mesuré dans la page : la 3D respire à toutes les tailles, sans toucher le texte ni le tableau de bord.
function measureStages() {
  if (!hero || reduced) return;
  const pr = hzPin.getBoundingClientRect(), stage = $('#hzStage').getBoundingClientRect(), dash = $('#hzDash').getBoundingClientRect();
  const top = Math.max(stage.top, mobile ? stage.top : dash.bottom + 8) - pr.top, bottom = $('#hzRail').getBoundingClientRect().top - pr.top - 12, out = {};
  const fit = (z) => (z.w > 60 && z.h > 60 ? Math.min(z.w / 3.2, z.h / 3.1) : 0);
  slides.forEach((sl, i) => {
    const sr = sl.getBoundingClientRect();
    const t = Math.min(...$$('.hz-ph', sl).map((ph) => ph.offsetTop)) + sr.top - pr.top - 16;
    const r = sr.right + 28;
    const beside = { x: r, y: top, w: stage.right - r, h: bottom - top };
    const above = { x: stage.left, y: dash.bottom - pr.top + 6, w: stage.width, top: true }; above.h = t - above.y;
    const z = fit(beside) >= fit(above) ? beside : above;
    out[STATIONS[i].id] = z; out[`auj_${STATIONS[i].id}`] = z;
  });
  hero.stages = out;
}
if (hero && !reduced) { measureStages(); ScrollTrigger.addEventListener('refresh', measureStages); }
const stationY = (i, f = 0.6) => (hzST ? hzST.start + (hzST.end - hzST.start) * ((i + f) / NS) : slides[i].getBoundingClientRect().top + window.scrollY);
$('#hzRail').addEventListener('click', (e) => {
  const b = e.target.closest('[data-go]'); if (!b) return;
  const y = stationY(+b.dataset.go);
  if (lenis) lenis.scrollTo(y, { duration: 1.4 }); else window.scrollTo(0, y);
});

// ---------- La salle des agents ----------
// Son code et le chargeur de modèles 3D forment un morceau à part, téléchargé seulement à l'approche de la salle
// (deux écrans avant, ou au bout de 9 s) : le démarrage du site s'allège, surtout sur téléphone.
// La zone épinglée ne dépend pas de ce contenu (hauteur fixe) : rien ne bouge dans la page à son arrivée.
const agEl = $('#agents');
let agST = null, agPause = null, room = null, roomP = null, agProgress = 0;
const loadRoom = () => roomP || (roomP = import('./agents.js').then(({ initAgentRoom }) => {
  room = initAgentRoom({
    els: { section: agEl, stage: $('#agStage'), log: $('#agLog'), tabs: $('#agTabs'), ctl: $('#agCtl'), note: $('#agNote') },
    texts: L.agents, reduced, compact: mobile,
    ui: { play: T['agents.play'], pause: T['agents.pause'], skip: T['agents.skip'], replay: T['agents.replay'], scroll: T['agents.scroll'], log: T['agents.log'] },
  });
  if (!reduced) room.scroll(agProgress);
  return room;
}).catch(() => { roomP = null; return null; }));
const agNear = new IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting)) { agNear.disconnect(); loadRoom(); } }, { rootMargin: '0px 0px 200% 0px' });
agNear.observe(agEl);
setTimeout(loadRoom, 9000);
if (!reduced) {
  stopST.agents = seg({ trigger: agEl, start: 'top bottom', end: 'top top' });
  // La mission JobHunter avance avec le défilement ; le monde de fond se met en pause pour laisser la carte graphique à la salle.
  agST = ScrollTrigger.create({ trigger: '#agPin', start: 'top top', end: () => `+=${Math.round(window.innerHeight * (mobile ? 2.4 : 2.8))}`, pin: true, scrub: 0.4, invalidateOnRefresh: true,
    onUpdate: (s) => { agProgress = s.progress; room?.scroll(s.progress); },
    // Pause différée : le monde finit d'abord de se poser (jamais figé en pleine transformation), puis s'arrête.
    onToggle: (s) => { if (!hero) return; agPause?.kill(); if (s.isActive) agPause = gsap.delayedCall(1.6, () => hero.pause()); else hero.play(); } });
  gsap.from('.ag__head .w > span', { yPercent: 115, duration: 1.2, ease: 'expo.out', stagger: 0.05, scrollTrigger: { trigger: agEl, start: 'top 70%' } });
  stopST.path = seg({ trigger: '#trajectoire', start: 'top bottom', end: 'top 25%' });
  stopST.contact = seg({ trigger: '#contact', start: 'top 80%', end: 'bottom bottom' });
}

// ---------- La couche cinéma ----------
// Le metteur en scène lit où se trouve le milieu de l'écran et choisit la scène : le futur de la station en cours
// (l'« aujourd'hui » reste sans plan), la salle des agents, l'épilogue. Lu toutes les 8 images.
// Les dix stations partagent le plan « flux », chacune dans sa couleur. L'accueil n'a pas de plan : la Machine
// de particules y reste seule sur le noir, rien ne défile derrière le nom.
const cineScenes = { epilogue: { plan: 'horizon', tint: '#2F80FF' } };
STATIONS.forEach((s) => { cineScenes[s.id] = { plan: 'flux', tint: s.color }; });
const cine = initCinema({ mount: $('#cine'), scenes: cineScenes, reduced, mobile });
const cineAt = () => {
  const c = window.innerHeight / 2;
  const inside = (el) => { if (!el) return false; const r = el.getBoundingClientRect(); return r.top <= c && r.bottom >= c; };
  if (inside($('#horizon'))) return curF && STATIONS[curI] ? STATIONS[curI].id : null;
  if (inside(agEl)) return 'agents';
  if (inside($('#contact'))) return 'epilogue';
  return null;
};
let cineTick = 0;
gsap.ticker.add(() => { if (++cineTick % 8) return; cine.set(cineAt()); });

// Les étapes du voyage, dans l'ordre de la page : nom, couleur et position de défilement où l'on y arrive.
function routeStops() {
  const max = ScrollTrigger.maxScroll(window);
  const top = (el) => (el ? el.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.3 : 0);
  const list = [
    { label: lang === 'fr' ? 'Accueil' : 'Home', y: 0 },
    { label: lang === 'fr' ? 'Manifeste' : 'Manifesto', y: stopST.manifeste ? stopST.manifeste.end : top($('#manifeste')) },
    ...STATIONS.map((s, i) => ({ label: `${pad(i + 1)} · ${projOf(s).short}`, color: s.color, sub: true, y: stationY(i) })),
    { label: T['nav.agents'], y: agST ? agST.start : top(agEl) },
    { label: T['nav.atelier'], y: top($('#atelier')) },
    { label: T['nav.path'], y: stopST.path ? stopST.path.end : top($('#trajectoire')) },
    { label: T['nav.contact'], y: max, end: true },
  ];
  list.forEach((s) => { s.y = Math.max(0, Math.min(max, s.y)); });
  return list;
}

// ---------- Vidéos : lecture seulement à l'écran ----------
const clips = $$('.clip');
const io = new IntersectionObserver((entries) => entries.forEach((e) => {
  const v = e.target;
  if (e.isIntersecting) { if (!v.src) v.src = v.dataset.src; if (!reduced) v.play().catch(() => {}); } else v.pause();
}), { threshold: 0.25 });
$$('.clip video').forEach((v) => io.observe(v));

const lightbox = $('#lightbox'), lbVideo = $('#lightboxVideo');
let lastFocus = null;
function openVideo(src) {
  lastFocus = document.activeElement; lbVideo.src = src; lightbox.setAttribute('aria-hidden', 'false');
  gsap.set(lightbox, { visibility: 'visible' }); gsap.to(lightbox, { opacity: 1, duration: 0.4 });
  gsap.fromTo(lbVideo, { scale: 0.9, y: 30 }, { scale: 1, y: 0, duration: 0.8, ease: 'expo.out' });
  lenis?.stop(); lbVideo.play().catch(() => {}); $('#lightboxClose').focus();
}
function closeVideo() {
  if (lightbox.getAttribute('aria-hidden') === 'true') return;
  lightbox.setAttribute('aria-hidden', 'true'); lbVideo.pause();
  gsap.to(lightbox, { opacity: 0, duration: 0.3, onComplete: () => { gsap.set(lightbox, { visibility: 'hidden' }); lbVideo.removeAttribute('src'); lbVideo.load(); } });
  lenis?.start(); lastFocus?.focus();
}
$('#reel').addEventListener('click', (e) => { const c = e.target.closest('.clip'); if (c) openVideo(c.dataset.video); });
$('#lightboxClose').addEventListener('click', closeVideo);
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeVideo(); });

// ---------- Fiche projet ----------
const caseEl = $('#case'), caseBody = $('#caseBody');
function renderCase(id) {
  const i = L.projects.findIndex((p) => p.id === id), p = L.projects[i], next = L.projects[(i + 1) % L.projects.length];
  const st = STATIONS.find((s) => s.project === id), ss = st ? shownStatus(st) : null;
  caseBody.innerHTML = `<p class="case__n mono">${pad(i + 1)} / ${pad(L.projects.length)}${st ? ` · <span class="badge badge--${ss}">${esc(HZ.status[ss])}</span>` : ''}</p>
    <h2 class="case__title" id="caseTitle">${esc(p.title)}</h2><p class="case__sub">${esc(p.sub)}</p>
    <div class="case__grid"><div><p class="case__summary">${esc(p.summary)}</p>${p.img ? `<img class="case__img" src="${p.img}" alt="${esc(p.title)}" />` : ''}
      <div class="case__links">${p.links.map(([t, u]) => `<a class="btn btn--primary" href="${u}"${u.startsWith('#') ? '' : ' target="_blank" rel="noopener"'}><span class="btn__fill"></span><span>${esc(t)}</span><span class="btn__arrow">→</span></a>`).join('')}
        <button class="btn" type="button" data-next="${next.id}"><span class="btn__fill"></span><span>${esc(T['case.next'])} — ${esc(next.title)}</span><span class="btn__arrow">→</span></button></div></div>
      <div><h4>${esc(T['case.results'])}</h4><div class="metrics">${p.metrics.map(([b, s]) => `<div class="metric"><b>${esc(b)}</b><span>${esc(s)}</span></div>`).join('')}</div>
        <h4>${esc(T['case.stack'])}</h4><div class="case__stack">${p.stack.map((s) => `<i class="tag">${esc(s)}</i>`).join('')}</div>
        <h4>${esc(T['case.built'])}</h4><ul class="case__built">${p.built.map((b) => `<li>${esc(b)}</li>`).join('')}</ul></div>${renderFeatures(lang, p.id)}</div>`;
  $('.case__scroll').scrollTop = 0;
  if (!reduced) gsap.from('#caseBody .case__n, #caseBody .case__title, #caseBody .case__sub, #caseBody .case__summary, #caseBody .case__img, #caseBody .metric, #caseBody .case__built li, #caseBody .case__links, #caseBody .feat', { y: 40, opacity: 0, duration: 0.9, stagger: 0.04, ease: 'expo.out', delay: 0.15 });
}
function openCase(id) {
  lastFocus = document.activeElement; caseOpen = true; caseEl.setAttribute('aria-hidden', 'false'); lenis?.stop(); hidePreview();
  gsap.set(caseEl, { visibility: 'visible' });
  if (reduced) { gsap.set('.case__scroll', { clipPath: 'inset(0% 0 0 0)' }); renderCase(id); }
  else gsap.timeline()
    .fromTo('.case__curtain', { scaleY: 0, transformOrigin: 'bottom' }, { scaleY: 1, duration: 0.6, ease: 'expo.inOut' })
    .add(() => renderCase(id))
    .fromTo('.case__scroll', { clipPath: 'inset(100% 0 0 0)' }, { clipPath: 'inset(0% 0 0 0)', duration: 0.8, ease: 'expo.inOut' }, '-=0.15');
  $('#caseClose').focus();
}
function closeCase() {
  if (!caseOpen) return; caseOpen = false; caseEl.setAttribute('aria-hidden', 'true');
  gsap.timeline({ onComplete: () => { gsap.set(caseEl, { visibility: 'hidden' }); lenis?.start(); lastFocus?.focus?.(); } })
    .to('.case__scroll', { clipPath: 'inset(0 0 100% 0)', duration: reduced ? 0 : 0.6, ease: 'expo.inOut' })
    .to('.case__curtain', { scaleY: 0, transformOrigin: 'top', duration: reduced ? 0 : 0.5, ease: 'expo.inOut' }, '-=0.3');
}
$('#hzStage').addEventListener('click', (e) => { const b = e.target.closest('[data-open]'); if (b) openCase(b.dataset.open); });

// ---------- L'essentiel en 30 secondes (recruteur pressé) ----------
const quick = $('#quick'), Q = L.quick, dimO = { v: 1 };
let quickOpen = false, quickTl = null;
$('#quickBody').innerHTML = `<p class="label mono">${esc(Q.label)}</p>
  <h2 class="quick__title" id="quickTitle">${Q.title}</h2>
  <p class="quick__lede">${esc(Q.lede)}</p>
  <div class="quick__trades">${L.trades.map(([t, d]) => `<div><b>${esc(t)}</b><span>${esc(d)}</span></div>`).join('')}</div>
  <div class="quick__proofs">${Q.proofs.map(([n, t, src, id]) => `<button class="proof" type="button" data-proof="${id}"><b>${esc(n)}</b><span>${esc(t)}</span><i class="mono">${esc(src)} →</i></button>`).join('')}</div>
  <dl class="quick__facts">${Q.facts.map(([k, v]) => `<div><dt class="mono">${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>
  <div class="quick__stack">${Q.stack.map((t) => `<i class="tag">${esc(t)}</i>`).join('')}</div>
  <div class="quick__actions">
    <a class="btn btn--primary" href="${contact.cv}" download><span class="btn__fill"></span><span class="btn__label">${esc(Q.cv)}</span><span class="btn__arrow">↓</span></a>
    <a class="btn" href="mailto:${contact.email}"><span class="btn__fill"></span><span class="btn__label">${esc(Q.mail)}</span><span class="btn__arrow">→</span></a>
    <a class="btn" href="tel:${contact.phoneIntl}"><span class="btn__fill"></span><span class="btn__label">${contact.phone}</span></a>
    <button class="btn btn--ghost" type="button" id="quickMore"><span class="btn__fill"></span><span class="btn__label">${esc(Q.more)}</span><span class="btn__arrow">↓</span></button>
  </div>
  <div class="quick__timer" aria-hidden="true"><span class="quick__track"><i id="quickTimer"></i></span><span class="mono" id="quickSec">30 s</span></div>`;
const dimWorld = (v) => gsap.to(dimO, { v, duration: 0.6, overwrite: true, onUpdate: () => { if (hero) hero.dim = dimO.v; } });
function openQuick() {
  if (quickOpen) return; quickOpen = true; lastFocus = document.activeElement; closeMenu();
  quick.setAttribute('aria-hidden', 'false'); lenis?.stop(); gsap.set(quick, { visibility: 'visible' }); dimWorld(0.3);
  $('.quick__panel').scrollTop = 0;
  if (reduced) { gsap.set('.quick__veil', { opacity: 1 }); gsap.set('.quick__panel', { clipPath: 'inset(0 0 0% 0)' }); }
  else quickTl = gsap.timeline()
    .fromTo('.quick__veil', { opacity: 0 }, { opacity: 1, duration: 0.4 })
    .fromTo('.quick__panel', { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 0.85, ease: 'expo.inOut' }, 0)
    .fromTo('#quickBody > *', { y: 36, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, stagger: 0.07, ease: 'expo.out' }, 0.35)
    .fromTo('.proof', { rotateX: -60, transformPerspective: 800, transformOrigin: '50% 0%', opacity: 0 }, { rotateX: 0, opacity: 1, duration: 1, stagger: 0.09, ease: 'expo.out' }, 0.5)
    .add(() => $$('.proof b').forEach((el) => scramble(el, 0.8)), 0.6)
    .fromTo('#quickTimer', { scaleX: 0 }, { scaleX: 1, duration: 30, ease: 'none', onUpdate() { $('#quickSec').textContent = `${Math.max(0, Math.ceil(30 - this.time()))} s`; } }, 0.4);
  $('#quickClose').focus();
}
function closeQuick() {
  if (!quickOpen) return; quickOpen = false; quick.setAttribute('aria-hidden', 'true'); quickTl?.kill(); dimWorld(1);
  gsap.timeline({ onComplete: () => { gsap.set(quick, { visibility: 'hidden' }); if (!caseOpen) lenis?.start(); lastFocus?.focus?.(); } })
    .to('.quick__panel', { clipPath: 'inset(0 0 100% 0)', duration: reduced ? 0 : 0.55, ease: 'expo.inOut' })
    .to('.quick__veil', { opacity: 0, duration: reduced ? 0 : 0.3 }, '-=0.2');
}
document.addEventListener('click', (e) => { if (e.target.closest('[data-quick]')) openQuick(); });
$('#quickClose').addEventListener('click', closeQuick);
$('.quick__veil').addEventListener('click', closeQuick);
$('#quickMore').addEventListener('click', closeQuick);
$('#quickBody').addEventListener('click', (e) => { const p = e.target.closest('[data-proof]'); if (p) { closeQuick(); openCase(p.dataset.proof); } });
caseBody.addEventListener('click', (e) => { const n = e.target.closest('[data-next]'); if (n) { renderCase(n.dataset.next); } });
$('#caseClose').addEventListener('click', closeCase);

// ---------- Menu mobile ----------
const menu = $('#menu'), menuBtn = $('#menuBtn');
function closeMenu() { if (!menuOpen) return; menuOpen = false; menuBtn.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-hidden', 'true'); $('span', menuBtn).textContent = T['nav.menu']; gsap.to(menu, { clipPath: 'inset(0 0 100% 0)', duration: 0.6, ease: 'expo.inOut', onComplete: () => gsap.set(menu, { visibility: 'hidden' }) }); lenis?.start(); }
menuBtn.addEventListener('click', () => {
  if (menuOpen) return closeMenu();
  menuOpen = true; menuBtn.setAttribute('aria-expanded', 'true'); menu.setAttribute('aria-hidden', 'false'); $('span', menuBtn).textContent = T['nav.close']; lenis?.stop();
  gsap.set(menu, { visibility: 'visible' });
  gsap.fromTo(menu, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 0.7, ease: 'expo.inOut' });
  gsap.from('.menu__nav a', { yPercent: 100, opacity: 0, duration: 0.8, stagger: 0.06, ease: 'expo.out', delay: 0.25 });
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeVideo(); closeCase(); closeMenu(); closeQuick(); } });

// ---------- Curseur, aimants, inclinaisons ----------
const preview = $('#preview');
function hidePreview() { gsap.to(preview, { opacity: 0, duration: 0.3 }); }
if (fine && !reduced) {
  const cur = $('.cursor'), dot = $('.cursor__dot'), ring = $('.cursor__ring'), label = $('.cursor__label');
  const dx = gsap.quickTo(dot, 'x', { duration: 0.08 }), dy = gsap.quickTo(dot, 'y', { duration: 0.08 });
  const rx = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3' }), ry = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3' });
  window.addEventListener('pointermove', (e) => { dx(e.clientX); dy(e.clientY); rx(e.clientX); ry(e.clientY); }, { passive: true });
  document.addEventListener('pointerover', (e) => {
    const v = e.target.closest('[data-cursor="view"]'), a = e.target.closest('a, button');
    cur.classList.toggle('is-view', !!v); cur.classList.toggle('is-link', !v && !!a);
    label.textContent = v ? (v.classList.contains('clip') ? '▶' : '↗') : '';
  });
  $$('[data-magnetic]').forEach((el) => {
    const mxq = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'elastic.out(1,0.5)' }), myq = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'elastic.out(1,0.5)' });
    el.addEventListener('pointermove', (e) => { const r = el.getBoundingClientRect(); mxq((e.clientX - r.left - r.width / 2) * 0.35); myq((e.clientY - r.top - r.height / 2) * 0.35); });
    el.addEventListener('pointerleave', () => { mxq(0); myq(0); });
  });
  // Cartes qui s'inclinent sous la souris : métiers, sites, films
  $$('.trade, .site, .clip').forEach((el) => {
    gsap.set(el, { transformPerspective: 900 });
    const ty = gsap.quickTo(el, 'rotationY', { duration: 0.6, ease: 'power3' }), tx = gsap.quickTo(el, 'rotationX', { duration: 0.6, ease: 'power3' });
    el.addEventListener('pointermove', (e) => { const r = el.getBoundingClientRect(); ty(((e.clientX - r.left) / r.width - 0.5) * 7); tx(-((e.clientY - r.top) / r.height - 0.5) * 7); el.style.setProperty('--mx', `${e.clientX - r.left}px`); el.style.setProperty('--my', `${e.clientY - r.top}px`); });
    el.addEventListener('pointerleave', () => { ty(0); tx(0); });
  });
  // Le nom s'incline dans l'espace avec la souris
  const heroTitle = $('.hero__title');
  gsap.set(heroTitle, { transformPerspective: 1200 });
  const tiltY = gsap.quickTo(heroTitle, 'rotationY', { duration: 1.1, ease: 'power3' }), tiltX = gsap.quickTo(heroTitle, 'rotationX', { duration: 1.1, ease: 'power3' });
  window.addEventListener('pointermove', (e) => { if (window.scrollY < window.innerHeight) { tiltY((e.clientX / window.innerWidth - 0.5) * 9); tiltX(-(e.clientY / window.innerHeight - 0.5) * 6); } }, { passive: true });
}

// ---------- Couche cinéma ----------
initExtras({ lenis, hero, reduced, fine, lang, routeStops, sections: [['#top', lang === 'fr' ? 'Accueil' : 'Home'], ['#manifeste', lang === 'fr' ? 'Manifeste' : 'Manifesto'], ['#horizon', T['nav.horizon']], ['#agents', T['nav.agents']], ['#atelier', T['nav.atelier']], ['#trajectoire', T['nav.path']], ['#contact', T['nav.contact']]] });

// ---------- Épilogue : la tâche à ne plus jamais faire ----------
// Rien n'est envoyé par le site : la messagerie du visiteur s'ouvre avec le message prêt, il décide d'envoyer.
$('#askForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const task = $('#askInput').value.trim();
  const body = `${T['contact.body']}${task || '…'}\n`;
  window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(T['contact.subject'])}&body=${encodeURIComponent(body)}`;
});

// ---------- Divers ----------
langBtn.addEventListener('click', () => {
  const to = lang === 'fr' ? 'en' : 'fr';
  try { localStorage.setItem('lang', to); } catch { /* ignoré */ }
  const go = () => { const u = new URL(location.href); u.searchParams.delete('lang'); u.hash = ''; location.replace(u); };
  if (reduced) return go();
  const w = document.createElement('div'); w.className = 'wipe'; document.body.append(w);
  gsap.to(w, { scaleY: 1, duration: 0.6, ease: 'expo.inOut', onComplete: go });
});
$('#copyBtn').addEventListener('click', async () => {
  const lbl = $('#copyBtn .btn__label');
  try { await navigator.clipboard.writeText(contact.email); lbl.textContent = T['contact.copied']; } catch { lbl.textContent = contact.email; }
  setTimeout(() => { lbl.textContent = T['contact.copy']; }, 2200);
});
// L'heure du pied de page : celle de Paris, en avance du temps gagné pendant les sauts du voyage.
const clock = $('#clock'), fmt = new Intl.DateTimeFormat('fr-FR', { timeZone: 'Europe/Paris', hour: '2-digit', minute: '2-digit', second: '2-digit' });
const tick = () => { clock.textContent = fmt.format(new Date(Date.now() + (chrono?.skew || 0))); }; tick(); setInterval(tick, 1000);
document.addEventListener('visibilitychange', () => { if (!hero) return; if (document.hidden) hero.pause(); else hero.play(); });
if (import.meta.env.DEV) {
  const go = (y) => (lenis ? lenis.scrollTo(y, { immediate: true, force: true }) : window.scrollTo(0, y));
  window.__dbg = { segs, hero, ScrollTrigger, K, lenis, go,
    // __dbg.goto('radar', 0.6) : se placer dans le futur d'une station (f < 0,3 : son « aujourd'hui »).
    goto: (id, f = 0.6) => go(stationY(STATIONS.findIndex((s) => s.id === id), f)),
    get room() { return room; }, get agST() { return agST; }, cine };
}
window.addEventListener('load', () => ScrollTrigger.refresh());
document.fonts?.ready.then(() => ScrollTrigger.refresh());

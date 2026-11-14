import '@fontsource-variable/inter-tight';
import '@fontsource/instrument-serif/400.css';
import '@fontsource/instrument-serif/400-italic.css';
import '@fontsource-variable/jetbrains-mono';
import './styles.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { content, contact } from './i18n.js';
import { initHero } from './hero-gl.js';
import { initExtras } from './extras.js';
import { renderHood, hoodTexts, renderFeatures, initHood } from './hood-render.js';

gsap.registerPlugin(ScrollTrigger);

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const params = new URLSearchParams(location.search);
const skipIntro = reduced || params.has('og');
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

$('#stats').innerHTML = L.stats.map((s) => `<div class="stat"><div class="stat__n"><span data-count="${s.n}">0</span><small>${esc(s.suffix)}</small></div><p>${esc(s.label)}</p></div>`).join('');

$('#workList').innerHTML = L.projects.map((p, i) => `<li><button class="row" type="button" data-project="${p.id}" data-cursor="view"${p.img ? ` data-img="${p.img}"` : ''}>
  <span class="row__n mono">${pad(i + 1)}</span><span class="row__title">${esc(p.title)}</span><span class="row__sub">${esc(p.sub)}</span>
  <span class="row__tags">${p.tags.map((t) => `<i class="tag">${esc(t)}</i>`).join('')}</span><span class="row__arrow" aria-hidden="true">→</span></button></li>`).join('');

$('#pipelineGraph').innerHTML = L.pipeline.nodes.map(([t, d], i) => `<div class="node"><div class="node__box"><div class="node__i mono"><span>${pad(i + 1)}</span><b></b></div><div class="node__t">${esc(t)}</div><div class="node__d">${esc(d)}</div></div><i class="node__link"></i></div>`).join('');
$('#pipelineLog').innerHTML = L.pipeline.log.map((l) => `<p>${esc(l)}</p>`).join('');

$('#reel').innerHTML = L.motion.map((m, i) => `<button class="clip" type="button" style="aspect-ratio:${m.ratio}" data-video="${m.src}" data-cursor="view" aria-label="${esc(T['motion.play'])} — ${esc(m.title)}">
  <video muted loop playsinline preload="none" poster="${m.poster}" data-src="${m.src}"></video><span class="clip__n mono">${pad(i + 1)}</span>
  <span class="clip__cap"><strong>${esc(m.title)}</strong><span class="mono">${esc(m.meta)}</span></span></button>`).join('');

const HD = hoodTexts(lang);
$('#hoodLabel').textContent = HD.label; $('#hoodTitle').innerHTML = HD.title; $('#hoodIntro').textContent = HD.intro; $('#hoodNote').textContent = HD.note;
$('#hood').innerHTML = renderHood(lang);

$('#caps').innerHTML = L.caps.map(([t, items], i) => `<article class="cap"><span class="cap__n mono">${pad(i + 1)}</span><h3>${esc(t)}</h3><ul>${items.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></article>`).join('');
$('#path').innerHTML = L.path.map(([y, t, o, d]) => `<li class="step"><span class="step__y mono">${esc(y)}</span><div><h3>${esc(t)}</h3><p class="step__o">${esc(o)}</p></div><p class="step__d">${esc(d)}</p></li>`).join('');

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
$$('.title, .contact__title').forEach((el) => splitWords(el));
splitWords($('#manifestoText'), 'mw');

// ---------- Défilement fluide ----------
let lenis = null;
if (!reduced) {
  lenis = new Lenis({ duration: 1.15, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  if (!skipIntro) lenis.stop();
}
const scrollToTarget = (hash) => { const el = $(hash); if (!el) return; if (lenis) lenis.scrollTo(el, { duration: 1.6 }); else el.scrollIntoView(); };
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]'); if (!a) return;
  e.preventDefault(); closeMenu(); closeCase(); scrollToTarget(a.getAttribute('href'));
});

// ---------- Scène 3D ----------
let hero = null;
try { hero = initHero($('#gl'), { reduced }); } catch { $('#gl').remove(); }

// ---------- Introduction ----------
function intro() {
  document.body.classList.remove('is-loading');
  lenis?.start();
  const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
  if (hero) tl.to(hero.uniforms.uIntro, { value: 1, duration: 2.4, ease: 'expo.out' }, 0);
  tl.from('.hero__line .char', { yPercent: 120, rotate: 6, duration: 1.5, stagger: 0.035 }, 0.1)
    .from('.hero__top > *, .hero__bottom > *', { y: 26, opacity: 0, duration: 1.1, stagger: 0.08 }, 0.7)
    .from('.header > *', { y: -30, opacity: 0, duration: 1, stagger: 0.08 }, 0.6)
    .from('.hero__bottom', { '--line': 0, duration: 1 }, 0.6);
  ScrollTrigger.refresh();
}
if (skipIntro) {
  $('#loader').remove(); document.body.classList.remove('is-loading');
  if (hero) hero.uniforms.uIntro.value = 1;
} else {
  const count = { v: 0 };
  const tl = gsap.timeline({ onComplete: intro });
  tl.to('.loader__log li', { opacity: 1, y: 0, duration: 0.4, stagger: 0.32, ease: 'power2.out' }, 0.1)
    .to(count, { v: 100, duration: 1.9, ease: 'power2.inOut', onUpdate: () => { $('#loaderCount').textContent = String(Math.round(count.v)).padStart(3, '0'); } }, 0)
    .to('#loaderBar', { scaleX: 1, duration: 1.9, ease: 'power2.inOut' }, 0)
    .to('.loader__count, .loader__log, .loader__name', { yPercent: -40, opacity: 0, duration: 0.6, ease: 'power3.in', stagger: 0.04 }, '+=0.15')
    .to('#loader', { clipPath: 'inset(0 0 100% 0)', duration: 1, ease: 'expo.inOut' }, '-=0.25')
    .set('#loader', { display: 'none' });
}

// ---------- Animations au défilement ----------
if (!reduced) {
  // Sphère -> réseau, puis retour en sphère au contact
  if (hero) {
    ScrollTrigger.create({ trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true, onUpdate: (s) => { hero.morph = s.progress; hero.tilt = s.progress; hero.fade = 1 - s.progress * 0.55; } });
    ScrollTrigger.create({ trigger: '#manifeste', start: 'top 60%', endTrigger: '#contact', end: 'top 80%', onEnter: () => { hero.fade = 0.3; }, onLeaveBack: () => { hero.fade = 0.45; } });
    ScrollTrigger.create({ trigger: '#contact', start: 'top 75%', end: 'bottom bottom', scrub: true, onUpdate: (s) => { hero.morph = 1 - s.progress; hero.tilt = 1 - s.progress; hero.fade = 0.3 + s.progress * 0.6; } });
  }
  gsap.to('.hero__title', { yPercent: -18, scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
  gsap.to('.hero__line--right', { xPercent: -6, scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });

  // Bandeau : vitesse liée au défilement
  const track = $('#marquee'); track.innerHTML += track.innerHTML;
  let mx = 0, speed = 1;
  ScrollTrigger.create({ onUpdate: (s) => { speed = 1 + Math.min(Math.abs(s.getVelocity()) / 220, 9) * (s.direction || 1); } });
  gsap.ticker.add(() => { mx -= speed * 0.9; speed += (1 - speed) * 0.06; const half = track.scrollWidth / 2; if (mx <= -half) mx += half; if (mx > 0) mx -= half; track.style.transform = `translate3d(${mx}px,0,0)`; });

  // Manifeste : les mots s'allument
  gsap.to('#manifestoText .mw', { opacity: 1, stagger: 0.06, ease: 'none', scrollTrigger: { trigger: '#manifestoText', start: 'top 82%', end: 'bottom 45%', scrub: 0.6 } });

  // Titres : mots qui montent derrière un masque
  $$('.title, .contact__title').forEach((el) => {
    if (el.closest('.pipeline')) return;
    gsap.from($$('.w > span', el), { yPercent: 115, rotate: 4, duration: 1.25, ease: 'expo.out', stagger: 0.06, scrollTrigger: { trigger: el, start: 'top 88%' } });
  });

  // Compteurs
  $$('[data-count]').forEach((el) => {
    const o = { v: 0 }, end = +el.dataset.count;
    gsap.to(o, { v: end, duration: 1.8, ease: 'power3.out', onUpdate: () => { el.textContent = Math.round(o.v); }, scrollTrigger: { trigger: el, start: 'top 90%' } });
  });
  gsap.from('.stat', { y: 40, opacity: 0, duration: 1, stagger: 0.09, ease: 'expo.out', scrollTrigger: { trigger: '#stats', start: 'top 88%' } });

  // Listes
  gsap.from('#workList li', { y: 60, opacity: 0, duration: 1.1, stagger: 0.08, ease: 'expo.out', scrollTrigger: { trigger: '#workList', start: 'top 85%' } });
  gsap.from('.cap', { y: 50, opacity: 0, duration: 1, stagger: 0.07, ease: 'expo.out', scrollTrigger: { trigger: '#caps', start: 'top 85%' } });
  $$('.step').forEach((el) => gsap.from(el, { y: 34, opacity: 0, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 92%' } }));
  gsap.from('#mdmPages img', { yPercent: (i) => 18 + i * 14, rotate: (i) => (i % 2 ? 3 : -3), ease: 'none', scrollTrigger: { trigger: '#mdmPages', start: 'top bottom', end: 'bottom 60%', scrub: 0.8 } });
  gsap.from('.contact__text, .contact__actions > *, .contact__list > div', { y: 30, opacity: 0, duration: 1, stagger: 0.06, ease: 'expo.out', scrollTrigger: { trigger: '.contact__text', start: 'top 92%' } });

  // En-tête : se cache en descendant
  ScrollTrigger.create({ start: 200, onUpdate: (s) => $('#header').classList.toggle('is-hidden', s.direction === 1 && !menuOpen) });
}

// ---------- Pipeline ----------
const nodes = $$('.node'), logs = $$('#pipelineLog p');
function setPipeline(p) {
  const n = nodes.length, f = p * n;
  nodes.forEach((node, i) => { node.classList.toggle('is-on', f >= i + 0.15); $('.node__link', node).style.setProperty('--p', Math.max(0, Math.min(1, f - i - 0.35) * 1.6).toFixed(3)); });
  logs.forEach((l, i) => l.classList.toggle('is-on', f >= i + 0.3));
}
const mm = gsap.matchMedia();
if (reduced) setPipeline(1);
else {
  mm.add('(min-width: 761px)', () => {
    gsap.from('.pipeline .w > span', { yPercent: 115, duration: 1.2, ease: 'expo.out', stagger: 0.05, scrollTrigger: { trigger: '.pipeline', start: 'top 70%' } });
    ScrollTrigger.create({ trigger: '.pipeline__pin', start: 'top top', end: '+=2400', pin: true, scrub: 0.5, onUpdate: (s) => setPipeline(s.progress * 1.08) });
    // Bande de vidéos horizontale
    const reel = $('#reel');
    const dist = () => Math.max(0, reel.scrollWidth - window.innerWidth + parseFloat(getComputedStyle(reel).paddingRight));
    gsap.to(reel, { x: () => -dist(), ease: 'none', scrollTrigger: { trigger: reel, start: 'center center', end: () => `+=${dist()}`, pin: '.motion', scrub: 0.6, invalidateOnRefresh: true } });
  });
  mm.add('(max-width: 760px)', () => {
    ScrollTrigger.create({ trigger: '.pipeline__stage', start: 'top 75%', end: 'bottom 55%', scrub: 0.5, onUpdate: (s) => setPipeline(s.progress * 1.08) });
  });
}

// ---------- Vidéos : lecture seulement à l'écran ----------
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
  caseBody.innerHTML = `<p class="case__n mono">${pad(i + 1)} / ${pad(L.projects.length)} — ${esc(p.year)}</p>
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
$('#workList').addEventListener('click', (e) => { const r = e.target.closest('.row'); if (r) openCase(r.dataset.project); });
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
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeVideo(); closeCase(); closeMenu(); } });

// ---------- Curseur, aimants, aperçus ----------
const preview = $('#preview'), previewImg = $('img', preview);
function hidePreview() { gsap.to(preview, { opacity: 0, duration: 0.3 }); gsap.to('.preview__inner', { clipPath: 'inset(100% 0 0 0)', duration: 0.4, ease: 'power3.in' }); }
if (fine && !reduced) {
  const cur = $('.cursor'), dot = $('.cursor__dot'), ring = $('.cursor__ring'), label = $('.cursor__label');
  const dx = gsap.quickTo(dot, 'x', { duration: 0.08 }), dy = gsap.quickTo(dot, 'y', { duration: 0.08 });
  const rx = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3' }), ry = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3' });
  const px = gsap.quickTo(preview, 'x', { duration: 0.7, ease: 'power3' }), py = gsap.quickTo(preview, 'y', { duration: 0.7, ease: 'power3' });
  const pr = gsap.quickTo(preview, 'rotate', { duration: 0.7, ease: 'power3' });
  let lastX = 0;
  window.addEventListener('pointermove', (e) => { dx(e.clientX); dy(e.clientY); rx(e.clientX); ry(e.clientY); px(e.clientX + 180); py(e.clientY); pr(Math.max(-10, Math.min(10, (e.clientX - lastX) * 0.6))); lastX = e.clientX; }, { passive: true });
  document.addEventListener('pointerover', (e) => {
    const v = e.target.closest('[data-cursor="view"]'), a = e.target.closest('a, button');
    cur.classList.toggle('is-view', !!v); cur.classList.toggle('is-link', !v && !!a);
    label.textContent = v ? (v.classList.contains('clip') ? '▶' : lang === 'fr' ? 'Ouvrir' : 'Open') : '';
    const row = e.target.closest('.row[data-img]');
    if (row && !caseOpen) {
      if (previewImg.getAttribute('src') !== row.dataset.img) previewImg.src = row.dataset.img;
      gsap.to(preview, { opacity: 1, duration: 0.3 });
      gsap.to('.preview__inner', { clipPath: 'inset(0% 0 0 0)', duration: 0.7, ease: 'expo.out', overwrite: true });
      gsap.fromTo(previewImg, { scale: 1.35 }, { scale: 1, duration: 1, ease: 'expo.out', overwrite: true });
    } else if (!e.target.closest('.row')) hidePreview();
  });
  $$('[data-magnetic]').forEach((el) => {
    const mxq = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'elastic.out(1,0.5)' }), myq = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'elastic.out(1,0.5)' });
    el.addEventListener('pointermove', (e) => { const r = el.getBoundingClientRect(); mxq((e.clientX - r.left - r.width / 2) * 0.35); myq((e.clientY - r.top - r.height / 2) * 0.35); });
    el.addEventListener('pointerleave', () => { mxq(0); myq(0); });
  });
  $$('.cap').forEach((el) => el.addEventListener('pointermove', (e) => { const r = el.getBoundingClientRect(); el.style.setProperty('--mx', `${e.clientX - r.left}px`); el.style.setProperty('--my', `${e.clientY - r.top}px`); }));
  $$('.clip').forEach((el) => {
    el.addEventListener('pointermove', (e) => { const r = el.getBoundingClientRect(); gsap.to(el, { rotateY: ((e.clientX - r.left) / r.width - 0.5) * 8, rotateX: -((e.clientY - r.top) / r.height - 0.5) * 8, transformPerspective: 900, duration: 0.5, ease: 'power3' }); });
    el.addEventListener('pointerleave', () => gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.8, ease: 'elastic.out(1,0.6)' }));
  });
}

// ---------- Sous le capot ----------
initHood({ reduced, lang });

// ---------- Couche cinéma ----------
initExtras({ lenis, hero, reduced, fine, lang, sections: [['#top', lang === 'fr' ? 'Accueil' : 'Home'], ['#manifeste', lang === 'fr' ? 'Manifeste' : 'Manifesto'], ['#travaux', T['nav.work']], ['#pipeline', T['nav.pipeline']], ['#sous-le-capot', lang === 'fr' ? 'Sous le capot' : 'Under the hood'], ['#motion', T['nav.motion']], ['#capacites', lang === 'fr' ? 'Capacités' : 'Capabilities'], ['#parcours', T['nav.path']], ['#contact', T['nav.contact']]] });

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
const clock = $('#clock'), fmt = new Intl.DateTimeFormat('fr-FR', { timeZone: 'Europe/Paris', hour: '2-digit', minute: '2-digit', second: '2-digit' });
const tick = () => { clock.textContent = fmt.format(new Date()); }; tick(); setInterval(tick, 1000);
document.addEventListener('visibilitychange', () => { if (!hero) return; if (document.hidden) hero.pause(); else hero.play(); });
window.addEventListener('load', () => ScrollTrigger.refresh());
document.fonts?.ready.then(() => ScrollTrigger.refresh());

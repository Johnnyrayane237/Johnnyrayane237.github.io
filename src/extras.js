// Couche « cinéma » : son d'ambiance, barre de bord, texte qui se décode,
// lettres réactives, e-mail géant, inclinaison selon la vitesse, lueurs de fond.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const STR = {
  fr: { soundOn: 'Son : activé', soundOff: 'Son : coupé', fxOn: 'Réduire les effets', fxOff: 'Rétablir les effets', mail: 'Écrire à', route: 'Itinéraire du voyage', go: 'Aller à', here: 'Vous êtes ici', land: 'Arrivée' },
  en: { soundOn: 'Sound: on', soundOff: 'Sound: off', fxOn: 'Reduce effects', fxOff: 'Restore effects', mail: 'Write to', route: 'Journey route', go: 'Go to', here: 'You are here', land: 'Arrival' },
};
const store = { get: (k) => { try { return localStorage.getItem(k); } catch { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch { /* ignoré */ } } };

// ---------- Son généré en direct (aucun fichier) ----------
function createSound() {
  let ctx = null, master = null, filter = null, on = false;
  const start = () => {
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    master = ctx.createGain(); master.gain.value = 0; master.connect(ctx.destination);
    filter = ctx.createBiquadFilter(); filter.type = 'lowpass'; filter.frequency.value = 320; filter.Q.value = 0.7;
    const pad = ctx.createGain(); pad.gain.value = 0.5; filter.connect(pad); pad.connect(master);
    [[55, 'sine', 0.5], [82.41, 'triangle', 0.22], [110.4, 'sine', 0.18], [164.8, 'sine', 0.07]].forEach(([f, type, g], i) => {
      const o = ctx.createOscillator(), og = ctx.createGain(), lfo = ctx.createOscillator(), lg = ctx.createGain();
      o.type = type; o.frequency.value = f; og.gain.value = g;
      lfo.frequency.value = 0.05 + i * 0.03; lg.gain.value = g * 0.5; lfo.connect(lg); lg.connect(og.gain);
      o.connect(og); og.connect(filter); o.start(); lfo.start();
    });
  };
  const blip = (f0, f1, dur, vol, type = 'sine') => {
    if (!on) return;
    const t = ctx.currentTime, o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type; o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(f1, t + dur);
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(master); o.start(t); o.stop(t + dur + 0.02);
  };
  return {
    get on() { return on; },
    toggle() {
      if (!ctx) start();
      on = !on; ctx.resume();
      master.gain.cancelScheduledValues(ctx.currentTime);
      master.gain.linearRampToValueAtTime(on ? 0.16 : 0, ctx.currentTime + (on ? 1.2 : 0.4));
      return on;
    },
    hover: () => blip(1400, 2100, 0.07, 0.05),
    click: () => { blip(220, 60, 0.28, 0.35, 'triangle'); blip(900, 1800, 0.12, 0.05); },
    open: () => blip(140, 520, 0.5, 0.2, 'sine'),
    // Saut vers la station suivante : une montée douce, puis un léger « posé » à l'arrivée.
    jump: () => { blip(90, 420, 0.9, 0.16, 'sine'); blip(600, 1400, 0.6, 0.03, 'triangle'); },
    land: () => blip(520, 330, 0.35, 0.07, 'sine'),
    // Validation humaine dans la salle des agents : deux notes claires.
    approve: () => { blip(660, 660, 0.18, 0.08, 'sine'); setTimeout(() => blip(990, 990, 0.3, 0.07, 'sine'), 120); },
    velocity(v) { if (on && filter) filter.frequency.setTargetAtTime(320 + Math.min(Math.abs(v), 4000) * 0.35, ctx.currentTime, 0.2); },
  };
}

// ---------- Texte qui se décode ----------
const GLYPHS = 'ABCDEFGHKLMNPRSTUVXYZ0123456789#/<>_';
export function scramble(el, dur = 0.9) {
  const txt = el.dataset.txt || (el.dataset.txt = el.textContent);
  const o = { p: 0 };
  gsap.to(o, { p: 1, duration: dur, ease: 'power2.out', onUpdate: () => {
    const n = Math.floor(o.p * txt.length);
    el.textContent = txt.slice(0, n) + [...txt.slice(n)].map((c) => (c === ' ' ? ' ' : GLYPHS[(Math.random() * GLYPHS.length) | 0])).join('');
  }, onComplete: () => { el.textContent = txt; } });
}

export function initExtras({ lenis, hero, reduced, fine, lang, sections, routeStops }) {
  const S = STR[lang] || STR.fr;
  const root = document.documentElement;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const sound = createSound();

  // Lueurs d'ambiance
  const aurora = document.createElement('div'); aurora.className = 'aurora'; aurora.setAttribute('aria-hidden', 'true');
  aurora.innerHTML = '<i></i><i></i><i></i>'; document.body.prepend(aurora);

  // E-mail géant
  const mail = document.createElement('a'); mail.className = 'bigmail'; mail.href = 'mailto:johannepamegne@gmail.com';
  mail.setAttribute('aria-label', `${S.mail} johannepamegne@gmail.com`);
  mail.innerHTML = [...'johannepamegne@gmail.com'].map((c) => `<span aria-hidden="true">${c}</span>`).join('');
  $('.contact__actions').before(mail);

  // Barre de bord
  const hud = document.createElement('div'); hud.className = 'hud mono';
  hud.innerHTML = `<div class="hud__left"><button type="button" id="soundBtn" aria-pressed="false"><span class="eq"><i></i><i></i><i></i><i></i></span><span>${S.soundOff}</span></button>
    <button type="button" id="fxBtn" aria-pressed="false"><span>${S.fxOn}</span></button></div>
    <div class="hud__right"><span id="hudSection">00 — ${sections[0][1]}</span><span class="hud__bar"><i id="hudBar"></i></span><span id="hudPct">000</span></div>`;
  document.body.append(hud);

  const soundBtn = $('#soundBtn'), fxBtn = $('#fxBtn');
  soundBtn.addEventListener('click', () => { const v = sound.toggle(); soundBtn.setAttribute('aria-pressed', v); soundBtn.classList.toggle('is-on', v); soundBtn.lastElementChild.textContent = v ? S.soundOn : S.soundOff; });
  const setFx = (off, save = true) => { root.classList.toggle('fx-off', off); if (hero) hero.calm = off; fxBtn.setAttribute('aria-pressed', off); fxBtn.lastElementChild.textContent = off ? S.fxOff : S.fxOn; if (save) store.set('fx', off ? 'off' : 'on'); };
  fxBtn.addEventListener('click', () => setFx(!root.classList.contains('fx-off')));
  if (store.get('fx') === 'off') setFx(true);
  // Version légère automatique : si l'appareil peine vraiment, les lueurs s'éteignent (sans rien enregistrer).
  window.addEventListener('world:slow', () => { if (!root.classList.contains('fx-off')) root.classList.add('fx-lite'); });

  // Sons d'interface
  document.addEventListener('pointerover', (e) => { const t = e.target.closest('a, button, .row, .clip'); if (t && t !== document._lastHover) { document._lastHover = t; sound.hover(); } if (!t) document._lastHover = null; });
  document.addEventListener('click', (e) => { if (e.target.closest('.row, .clip')) sound.open(); else if (e.target.closest('a, button')) sound.click(); });
  window.addEventListener('saut:depart', () => sound.jump());
  window.addEventListener('saut:arrivee', () => sound.land());
  window.addEventListener('agents:approve', () => sound.approve());

  // Repère du voyage : la route parcourue, une balise par étape, et le visiteur qui avance avec le défilement.
  if (routeStops) {
    const route = document.createElement('nav'); route.className = 'route mono'; route.setAttribute('aria-label', S.route);
    route.innerHTML = '<span class="route__line"><i></i></span><span class="route__ship" aria-hidden="true"><b></b></span>';
    document.body.append(route);
    const fill = route.querySelector('.route__line i'), ship = route.querySelector('.route__ship'), label = ship.querySelector('b');
    let stops = [], dots = [], here = -1, hush = 0;
    const build = () => {
      stops = routeStops(); dots.forEach((d) => d.remove());
      dots = stops.map((s, i) => {
        const b = document.createElement('button'); b.type = 'button'; b.className = 'route__stop' + (s.sub ? ' is-sub' : '');
        b.style.top = `${(i / (stops.length - 1)) * 100}%`; b.dataset.label = s.label; b.setAttribute('aria-label', `${S.go} : ${s.label}`);
        if (s.color) b.style.setProperty('--c', s.color);
        b.addEventListener('click', () => { if (lenis) lenis.scrollTo(s.y, { duration: 1.8 }); else window.scrollTo({ top: s.y, behavior: reduced ? 'auto' : 'smooth' }); });
        route.append(b); return b;
      });
      here = -1; update();
    };
    // Position entre deux étapes : interpolée sur le défilement, pour que le repère glisse sans à-coups.
    const update = () => {
      if (stops.length < 2) return;
      const y = window.scrollY; let t = stops.length - 1;
      for (let i = 0; i < stops.length - 1; i++) { const a = stops[i].y, b = stops[i + 1].y; if (y < b) { t = i + (b > a ? Math.max(0, (y - a) / (b - a)) : 0); break; } }
      const p = t / (stops.length - 1);
      ship.style.top = `${p * 100}%`; fill.style.transform = `scaleY(${p})`;
      const n = Math.round(t);
      if (n !== here) {
        here = n; const s = stops[n];
        dots.forEach((d, i) => { d.classList.toggle('is-here', i === n); d.classList.toggle('is-done', i < n); d.toggleAttribute('aria-current', i === n); });
        route.style.setProperty('--c', s.color || 'var(--accent)');
        label.dataset.txt = s.end ? `${S.land} — ${s.label}` : s.label;
        route.classList.toggle('is-landed', !!s.end);
        if (reduced) label.textContent = label.dataset.txt; else scramble(label, 0.45);
        // Le nom de l'étape s'affiche à l'arrivée, puis s'efface pour laisser la place à la 3D.
        route.classList.add('is-talking'); clearTimeout(hush); if (!s.end) hush = setTimeout(() => route.classList.remove('is-talking'), 2600);
      }
    };
    ScrollTrigger.addEventListener('refresh', build);
    ScrollTrigger.create({ start: 0, end: 'max', onUpdate: update });
    build();
  }

  // Progression + section en cours
  const bar = $('#hudBar'), pct = $('#hudPct'), sec = $('#hudSection');
  ScrollTrigger.create({ start: 0, end: 'max', onUpdate: (s) => { bar.style.transform = `scaleX(${s.progress})`; pct.textContent = String(Math.round(s.progress * 100)).padStart(3, '0'); sound.velocity(s.getVelocity()); } });
  sections.forEach(([sel, name], i) => ScrollTrigger.create({ trigger: sel, start: 'top 55%', end: 'bottom 55%', onToggle: (s) => { if (s.isActive) { sec.dataset.txt = `${String(i).padStart(2, '0')} — ${name}`; if (reduced) sec.textContent = sec.dataset.txt; else scramble(sec, 0.5); } } }));
  // Pendant le voyage, deux repères suffisent : la jauge d'autonomie (l'histoire) et la frise 01–10 (la navigation).
  // La route du bord droit et la barre de progression s'effacent, puis reviennent à la sortie du voyage.
  if ($('#horizon')) ScrollTrigger.create({ trigger: '#horizon', start: 'top 50%', end: 'bottom 50%', toggleClass: { targets: root, className: 'in-voyage' } });

  if (reduced) return;

  // Étiquettes qui se décodent
  $$('.label').forEach((el) => ScrollTrigger.create({ trigger: el, start: 'top 92%', once: true, onEnter: () => scramble(el, 1.1) }));

  // Inclinaison selon la vitesse de défilement
  const skewTargets = $$('#atSites, #mdmPages, #tools');
  const skew = { v: 0 };
  const apply = gsap.quickSetter(skewTargets, 'skewY', 'deg');
  ScrollTrigger.create({ start: 0, end: 'max', onUpdate: (s) => {
    if (root.classList.contains('fx-off')) return;
    const v = gsap.utils.clamp(-3.5, 3.5, s.getVelocity() / -420);
    if (Math.abs(v) > Math.abs(skew.v)) { skew.v = v; gsap.to(skew, { v: 0, duration: 0.9, ease: 'power3.out', overwrite: true, onUpdate: () => apply(skew.v) }); }
  } });

  // Lueurs : dérive lente + suivi du défilement
  const blobs = $$('.aurora i');
  gsap.ticker.add((t) => { if (root.classList.contains('fx-off')) return; blobs.forEach((b, i) => { b.style.transform = `translate3d(${Math.sin(t * 0.11 + i * 2.1) * 16}vw, ${Math.cos(t * 0.09 + i * 1.3) * 12}vh, 0)`; }); });
  gsap.to('.aurora', { opacity: 1, scrollTrigger: { trigger: '#manifeste', start: 'top 80%', end: 'top 20%', scrub: true } });

  // E-mail géant : apparition + vague
  const letters = $$('.bigmail span');
  gsap.from(letters, { yPercent: 110, opacity: 0, rotate: 8, duration: 1.1, stagger: 0.022, ease: 'expo.out', scrollTrigger: { trigger: mail, start: 'top 92%' } });
  mail.addEventListener('pointerenter', () => gsap.to(letters, { keyframes: [{ y: '-0.22em', color: '#2f80ff', duration: 0.25 }, { y: 0, color: '#eceef2', duration: 0.5, ease: 'elastic.out(1,0.4)' }], stagger: 0.018, overwrite: true }));

  if (!fine) return;

  // Lettres du nom : elles se soulèvent près de la souris
  const chars = $$('.hero__line .char');
  const title = $('.hero__title');
  let rects = [];
  const measure = () => { rects = chars.map((c) => { const r = c.getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2 + window.scrollY]; }); };
  setTimeout(measure, 4200); window.addEventListener('resize', measure);
  title.addEventListener('pointermove', (e) => {
    if (!rects.length) measure();
    chars.forEach((c, i) => {
      const d = Math.hypot(e.clientX - rects[i][0], e.clientY + window.scrollY - rects[i][1]);
      const f = Math.max(0, 1 - d / 320);
      gsap.to(c, { y: `${-0.11 * f}em`, scaleY: 1 + 0.16 * f, skewX: -9 * f, color: f > 0.55 ? '#8ab8ff' : '#eceef2', duration: 0.45, ease: 'power3.out', overwrite: 'auto' });
    });
  });
  title.addEventListener('pointerleave', () => gsap.to(chars, { y: 0, scaleY: 1, skewX: 0, color: '#eceef2', duration: 0.9, ease: 'elastic.out(1,0.5)', stagger: 0.01 }));

  // Parallaxe des médias à l'intérieur de leur cadre
  $$('.case__img, .mdm__pages img').forEach((img) => gsap.fromTo(img, { scale: 1.08 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: img, start: 'top bottom', end: 'bottom top', scrub: true } }));

  void lenis;
}

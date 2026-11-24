// La couche cinéma : des plans vidéo rendus dans Blender (blender/scripts/cinema_plans.py), plein écran,
// derrière la Machine de particules. Un plan par moment du récit : le prologue, le futur de chaque station
// (jamais l'« aujourd'hui », qui reste gris et silencieux) et l'épilogue. Quand une tâche bascule vers son futur,
// le plan s'ouvre en volet depuis le côté de la sculpture, comme si le futur entrait dans la pièce.
//
// Les plans sont rendus en noir et blanc ; la couleur est posée ici, par un calque en mode « couleur ».
// Le même plan sert à plusieurs scènes : d'une station à l'autre, seule sa couleur change.
//
// Deux lecteurs vidéo se relaient pour les fondus ; un seul joue à la fois, et seulement quand la page est visible.
// Mouvement réduit : l'image fixe du plan. « Réduire les effets », allègement automatique, économie de données :
// la couche se retire.
//
// Fichiers (public/cinema/) : <plan>.mp4 (960 × 540), <plan>-m.mp4 (640 × 360, téléphone), <plan>.webp (image fixe).
// Un plan n'est joué que s'il figure dans PLANS : on ajoute un plan ici, et nulle part ailleurs.

export const PLANS = new Set(['cartes', 'flux', 'horizon']);

/**
 * mount   : l'élément fixe qui reçoit les lecteurs (placé avant le canevas de la Machine)
 * scenes  : { <scène> : { plan, tint } } ; tint est la couleur posée sur le plan
 */
export function initCinema({ mount, scenes = {}, reduced = false, mobile = false }) {
  const root = document.documentElement;
  const saveData = navigator.connection?.saveData === true;
  const players = [0, 1].map(() => {
    const v = document.createElement('video');
    v.muted = true; v.loop = true; v.playsInline = true; v.preload = 'none';
    v.setAttribute('muted', ''); v.setAttribute('playsinline', ''); v.setAttribute('aria-hidden', 'true'); v.tabIndex = -1;
    mount.append(v);
    return v;
  });
  const tint = document.createElement('div');
  tint.className = 'cine__tint';
  mount.append(tint);

  let cur = null, active = -1, pending, timer = 0;
  // Effets réduits par le visiteur, ou allègement automatique d'un appareil qui peine : pas de plan.
  const off = () => saveData || root.classList.contains('fx-off') || root.classList.contains('fx-lite');
  const file = (plan, ext) => new URL(`cinema/${plan}${ext}`, document.baseURI).href;
  const planOf = (id) => scenes[id]?.plan;
  // La scène réellement jouable pour ce moment : aucune si son plan n'existe pas ou si les effets sont réduits.
  const playable = (id) => (id && PLANS.has(planOf(id)) && !off() ? id : null);

  // L'ancien lecteur s'efface, et ne s'arrête qu'une fois invisible.
  const retire = (v) => {
    v.classList.remove('is-on');
    setTimeout(() => { if (!v.classList.contains('is-on')) v.pause(); }, 1300);
  };

  function show(id) {
    const next = playable(id);
    if (next === cur) return;
    const prevPlan = planOf(cur), prev = players[active];
    cur = next;
    if (!next) {
      if (prev) retire(prev);
      active = -1; mount.classList.remove('has-scene');
      return;
    }
    tint.style.backgroundColor = scenes[next].tint || '#2F80FF';
    mount.classList.add('has-scene');
    // Même plan, autre scène (d'une station à l'autre) : le plan continue, seule sa couleur glisse.
    if (prev && planOf(next) === prevPlan && prev.classList.contains('is-on')) return;
    const k = active === 0 ? 1 : 0, v = players[k], plan = planOf(next);
    v.poster = file(plan, '.webp');
    if (reduced) { v.removeAttribute('src'); v.load(); }
    else {
      const src = file(plan, mobile ? '-m.mp4' : '.mp4');
      if (v.dataset.src !== src) { v.dataset.src = src; v.src = src; }
      v.play().catch(() => {});
    }
    requestAnimationFrame(() => {
      v.classList.add('is-on');
      if (prev && prev !== v) retire(prev);
    });
    active = k;
  }

  // On attend un court instant avant de changer de plan : un défilement rapide ne charge pas chaque scène traversée.
  // Appelée très souvent : la même demande répétée ne relance pas l'attente. On compare la scène jouable,
  // pas la demande brute : si les effets reviennent, le plan du moment se rouvre de lui-même.
  function set(id) {
    const next = playable(id);
    if (next === pending) return;
    pending = next; clearTimeout(timer); timer = 0;
    if (next === cur) return;
    timer = setTimeout(() => { timer = 0; show(pending); }, cur && next ? 220 : 120);
  }

  // Onglet masqué : rien ne joue. « Réduire les effets » : la couche disparaît.
  const onVis = () => { const v = players[active]; if (!v || reduced) return; if (document.hidden) v.pause(); else v.play().catch(() => {}); };
  document.addEventListener('visibilitychange', onVis);
  const mo = new MutationObserver(() => { if (off() && cur) show(null); });
  mo.observe(root, { attributes: true, attributeFilter: ['class'] });

  return {
    set,
    get scene() { return cur; },
    destroy() { clearTimeout(timer); document.removeEventListener('visibilitychange', onVis); mo.disconnect(); players.forEach((v) => v.remove()); tint.remove(); },
  };
}

// Les stations du voyage HORIZON : une tâche répétitive d'aujourd'hui, et son futur déjà construit.
// Tout ce qui dépend de l'ordre du voyage (la piste de la Machine, la scène épinglée, le tableau de bord)
// se calcule à partir de cette liste : on ajoute ou on déplace une station ici, et nulle part ailleurs.
//
// id      : étape de la Machine (forme « futur ») ; sa forme « aujourd'hui » s'appelle auj_<id>
// project : fiche projet ouverte depuis la station (i18n.js → projects)
// level   : niveau d'autonomie, de 1 (un agent répond) à 6 (le socle de toutes les équipes)
// status  : 'service' (réel et utilisé) · 'prototype' (fonctionne, pas encore en production) · 'vision' (mise en scène)
//           Statuts PROPOSÉS d'après les fichiers des projets : à confirmer par Johanne (docs/horizon/STORYBOARD.md).
// color   : couleur du futur de la station (la même que celle du projet)
// Aucune année n'est affichée : le voyage ne promet aucune date.
export const STATIONS = [
  { id: 'voice', project: 'standardiste', level: 1, status: 'prototype', color: '#C49BFF' },
  { id: 'sms', project: 'accueil-sms', level: 1, status: 'prototype', color: '#FF7AD9' },
  { id: 'devis', project: 'devis', level: 2, status: 'prototype', color: '#D2F65A' },
  { id: 'invoice', project: 'encaisse', level: 2, status: 'prototype', color: '#FFB347' },
  { id: 'switch', project: 'aiguilleur', level: 2, status: 'prototype', color: '#FFC46B' },
  { id: 'radar', project: 'jobhunter', level: 3, status: 'prototype', color: '#35E08B' },
  { id: 'site', project: 'sites', level: 4, status: 'vision', color: '#5EC8FF' },
  { id: 'wave', project: 'doublage', level: 5, status: 'prototype', color: '#7CF5D0' },
  { id: 'film', project: 'motion', level: 5, status: 'prototype', color: '#FF6B6B' },
  { id: 'server', project: 'vorchex', level: 6, status: 'service', color: '#35E08B' },
];

// « En service » ne s'affiche que pour une station dont Johanne a confirmé le statut : ajouter son id ici.
// Tant que ce n'est pas fait, une station proposée « service » s'affiche « prototype » (on ne promet jamais plus que le vrai).
export const CONFIRMED = new Set([]);
export const shownStatus = (s) => (s.status === 'service' && !CONFIRMED.has(s.id) ? 'prototype' : s.status);

export const byId = Object.fromEntries(STATIONS.map((s, i) => [s.id, { ...s, index: i }]));

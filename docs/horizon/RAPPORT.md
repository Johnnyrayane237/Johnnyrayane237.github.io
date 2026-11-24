# Rapport — mission HORIZON

Branche `voyage-futur` (dossier `portfolio-futur`), créée depuis la branche de production.
**Rien n'est publié.** La mise en ligne (`npm run publier`) attend ton « oui, publie ».

---

## 1. Ce que le site raconte maintenant

Un voyage des tâches faites à la main aujourd'hui vers leur futur automatisé.

| Acte | Ce qu'on voit |
|---|---|
| Prologue | La liste des tâches du jour se coche toute seule ; la Machine de particules forme ton nom. Derrière, des cartes de tâches flottent dans la brume (plan Blender). |
| Manifeste | Trois métiers, en une phrase chacun. |
| Dix stations | Chaque tâche apparaît d'abord faite à la main (silhouette Blender, saccadée, grise), puis bascule vers son futur : la Machine se transforme, le tableau de bord monte le niveau d'autonomie (0 à 6), et un plan de cinéma s'ouvre en volet derrière, dans la couleur de la station. |
| Salle des agents | Trois missions jouées par onze agents modélisés dans Blender (verre, métal, lumière), sur un sol miroir. Une seule bulle à la fois. Tu es « Vous », celui qui décide. |
| Atelier | « Ce que j'ai réalisé » : les projets terminés, avec leurs vrais chiffres. |
| Trajectoire | Ton parcours (les dates du CV sont gardées, voir question 6). |
| Épilogue | « Quelle tâche ne voulez-vous plus jamais faire ? » avec le formulaire qui ouvre un e-mail. Derrière, un fin trait d'horizon sur un sol semé de repères (plan Blender). |

Aucune année n'est affichée dans le voyage. Aucun effet ancien : ni cadran, ni rayons, ni grain, ni sépia ; les portes sont de fins anneaux froids.

## 2. La couche cinéma (nouveau)

- Trois plans en boucle parfaite, rendus dans Blender en noir et blanc : `cartes` (prologue), `flux` (le futur des dix stations), `horizon` (épilogue).
- Le site leur pose la couleur : bleu de marque pour le prologue et l'épilogue, couleur de la station pour le flux. D'une station à l'autre, le flux continue et seule sa couleur glisse.
- Le plan s'ouvre en volet depuis le côté de la sculpture ; un voile sombre garde le texte lisible. Aucun flash.
- Pas de plan pendant l'« aujourd'hui » d'une tâche : il reste gris et silencieux.
- Se retire tout seul avec « Réduire les effets », sur un appareil qui peine (allègement automatique) et en mode économie de données. Mouvement réduit : image fixe, en simple fondu.
- Le flux est volontairement épuré : quelques traînées de lumière floues qui passent au loin, sans fils ni anneaux (la première version chargeait trop les stations).
- Poids : 383 Ko pour les trois plans sur ordinateur, 144 Ko sur téléphone (versions plus légères). Un plan ne se charge que quand on arrive à son moment.
- Pas de mention « IA » : ces plans ne sont pas générés par IA, ils viennent de nos scripts Blender.
- Refaire un plan : `blender -b --factory-startup --python blender/scripts/cinema_plans.py -- <plan> boucle <dossier>`, puis `blender/scripts/cinema_encoder.ps1 -Images <dossier>`.

## 3. Ce qui a été vérifié

- Missions 1 à 3 de la salle des agents (porte de validation comprise), atelier, trajectoire, épilogue, mode « Recruteur pressé » 30 s, version anglaise.
- Téléphone : pas de débordement horizontal ; la salle des agents tient dans l'écran avec ses six agents.
- « Réduire les effets » : le sol miroir de la salle et la couche cinéma disparaissent.
- Couche cinéma : bon plan à chaque moment (prologue, futur des stations, épilogue), rien pendant l'« aujourd'hui », couleur qui glisse d'une station à l'autre, version téléphone, version anglaise, boucles sans saut visible.
- Corrigé : le repère de section en bas à droite restait sur « Accueil » pendant tout le voyage et la salle des agents (les zones épinglées étaient mal mesurées).
- Construction du site (`vite build`) sans erreur.
- Non vérifié automatiquement : le mouvement réduit (je ne peux pas l'activer dans mon navigateur de test ; le code affiche l'image fixe).

## 4. Questions pour toi

1. **Statuts « En service »** : aucun projet n'est encore marqué « En service » (liste `CONFIRMED` vide dans `src/stations.js`). Lesquels tournent vraiment chez un client ou chez toi (par exemple le serveur VorcheX) ?
2. **Tes films personnels** : on les insère dans l'atelier quand tu veux, dis-moi lesquels.
3. **Marques** : Endro, Sessile et MCA ne sont pas montrées faute d'accord écrit. Si tu l'obtiens, on les ajoute.
4. **Dossier vide `C:\blender`** : il ne sert à rien (Blender est dans `F:\blender-5.2.2-windows-x64`). Je le supprime ?
5. **Secrets** : des clés d'API figurent en clair dans `aiguilleur.txt` et `SDJB.txt`. Il faut les régénérer chez leurs fournisseurs, puis les retirer de ces fichiers.
6. **Dates de la trajectoire** : les dates réelles du CV sont gardées. Je les retire aussi ?
7. **Capture du portfolio dans l'atelier** : à refaire après la mise en ligne, pour montrer la nouvelle version.
8. **Mini-salle des agents sur l'accueil** : pas faite (idée du storyboard). On la garde pour plus tard ?
9. **Higgsfield** : abandonné. Le renouvellement automatique a été annulé le 24 novembre à ta demande : aucun prélèvement de 75 €, l'essai s'arrête tout seul le 27 novembre à 22 h 04 (heure de Paris).
10. **Publication** : quand tout te va, dis « oui, publie ».

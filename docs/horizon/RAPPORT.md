# Rapport — mission HORIZON

Branche `voyage-futur` (dossier `portfolio-futur`), créée depuis la branche de production.
**En ligne depuis le 25 novembre 2026** (à ta demande) : https://johanne.vorchex.tech/ et https://johnnyrayane237.github.io/.
La branche `voyage-futur` est aussi sur GitHub. La branche `source` pointe encore sur l'ancienne version du code (voir question 11).

---

## 1. Ce que le site raconte maintenant

Un voyage des tâches faites à la main aujourd'hui vers leur futur automatisé.

| Acte | Ce qu'on voit |
|---|---|
| Prologue | La liste des tâches du jour se coche toute seule ; la Machine de particules forme ton nom, seule sur le noir (rien ne défile derrière). |
| Manifeste | Trois métiers, en une phrase chacun. |
| Dix stations | Chaque tâche apparaît d'abord faite à la main (silhouette Blender, grise, au geste lent), puis bascule vers son futur : la Machine se transforme, le tableau de bord monte le niveau d'autonomie (0 à 6), et un plan de cinéma s'ouvre derrière (en volet ou en fondu, une fois sur deux), dans la couleur de la station. Pendant le voyage, deux repères seulement : la jauge d'autonomie et la frise 01 à 10. |
| Salle des agents | Trois missions jouées par onze agents modélisés dans Blender (verre, métal, lumière), sur un sol miroir. Une seule bulle à la fois. Tu es « Vous », celui qui décide. |
| Atelier | « Ce que j'ai réalisé » : les projets terminés, avec leurs vrais chiffres. |
| Trajectoire | Ton parcours (les dates du CV sont gardées, voir question 6). |
| Épilogue | « Quelle tâche ne voulez-vous plus jamais faire ? » avec le formulaire qui ouvre un e-mail. La sphère se range à droite pour laisser l'adresse lisible ; derrière, un fin trait d'horizon sur un sol semé de repères (plan Blender). |

Aucune année n'est affichée dans le voyage. Aucun effet ancien : ni cadran, ni rayons, ni grain, ni sépia. Les sauts entre stations n'ont plus d'anneau-porte, et la sculpture JobHunter n'est plus un radar : c'est une file de fiches d'offres triées en deux piles.

### Retouches du 25 novembre (après ta relecture)

- Accueil : les cartes de tâches qui défilaient derrière le nom sont retirées ; un voile sombre garde le paragraphe lisible sur la sphère.
- JobHunter : plus de cercles ni de croix ; les offres passent devant l'agent, puis rejoignent la pile « retenue » (cochée, en attente d'une personne) ou la pile « écartée ».
- Sauts : plus d'anneau (ni de piste d'arrivée ronde sous la sphère finale).
- « Aujourd'hui » : plus de saccade à 12 images par seconde, qui pouvait faire croire à un ordinateur qui rame ; le geste est fluide mais lent.
- Voyage : la route du bord droit et la barre de progression s'effacent ; restent la jauge d'autonomie et la frise 01 à 10.
- Cinéma : une ouverture sur deux en simple fondu.
- Poids : la salle des agents se charge à l'approche (paquet de départ 830 Ko au lieu de 894, soit 246 Ko compressés au lieu de 266).
- Correctif : la page pouvait rester bloquée en plein voyage au défilement (la mesure de hauteur de Lenis était périmée).

### Animations 2D, 3D et 4D ajoutées le 25 novembre (pas encore en ligne)

- **2D** : les chiffres clés défilent en rouleau jusqu'à leur valeur ; à la bascule, la tâche d'aujourd'hui se barre puis « Demain · automatisé » s'écrit lettre après lettre ; la fiche projet se déplie depuis le bouton cliqué.
- **Chiffres reliés à la sculpture** : survoler (ou toucher) un chiffre éclaire la partie de la sculpture qu'il raconte, le reste s'efface à moitié. Ex. « 74 → 34 » éclaire la pile des offres retenues, « 0,07 $ » la file des offres lues.
- **L'épilogue répond** : pendant que le visiteur écrit sa tâche, la sphère prend la forme du projet le plus proche (factures → Encaisse, e-mails → Aiguilleur…), et une ligne sous le champ le dit. Sur téléphone, la forme monte dans la bande libre du haut, jamais derrière le titre.
- **Hypercube (4D)** : le socle VorcheX est un cube à quatre dimensions qui tourne ; le cube intérieur passe à l'extérieur, les messages filent sur les arêtes, le carré blanc de l'humain reste immobile au centre.
- **Rembobinage (4D)** : remonter la page fait rejouer le geste des sculptures à l'envers ; à l'arrêt, il repart en avant.
- **Heure de Paris** : de 22 h à 6 h, la palette refroidit et la Machine ralentit ; le pied de page l'indique. Pour l'essayer de jour : `?nuit=1` dans l'adresse.
- **Mémoire du site** : les stations déjà vues gardent un petit carré à leur couleur sur la frise 01–10, et à la visite suivante « Reprendre · 06 JobHunter → » apparaît en haut de page. Tout reste dans le navigateur du visiteur.
- **Objets de verre** : un objet modélisé dans Blender par projet (micro, bulle, devis, tampon, aiguillage, loupe, navigateur, onde, clap, hypercube), en tête de sa fiche, à faire tourner du doigt. Je les ai mis dans la fiche plutôt que dans l'atelier : l'atelier montre les sites, les films et l'édition, pas les dix projets ; et dans la fiche, l'objet a sa propre colonne, sans rien derrière le texte. Un seul moteur 3D, chargé à la première fiche ouverte (13 à 88 Ko par objet).

## 2. La couche cinéma (nouveau)

- Deux plans en boucle parfaite, rendus dans Blender en noir et blanc : `flux` (le futur des dix stations) et `horizon` (épilogue).
- L'accueil n'a plus de plan : les cartes de tâches qui défilaient derrière le nom ont été retirées, elles volaient la vedette à la Machine.
- Le site leur pose la couleur : bleu de marque pour l'épilogue, couleur de la station pour le flux. D'une station à l'autre, le flux continue et seule sa couleur glisse.
- Le plan s'ouvre en volet depuis le côté de la sculpture ; un voile sombre garde le texte lisible. Aucun flash.
- Pas de plan pendant l'« aujourd'hui » d'une tâche : il reste gris et silencieux.
- Se retire tout seul avec « Réduire les effets », sur un appareil qui peine (allègement automatique) et en mode économie de données. Mouvement réduit : image fixe, en simple fondu.
- Le flux est volontairement épuré : quelques traînées de lumière floues qui passent au loin, sans fils ni anneaux (la première version chargeait trop les stations).
- Poids : 243 Ko pour les deux plans sur ordinateur, 85 Ko sur téléphone (versions plus légères). Un plan ne se charge que quand on arrive à son moment.
- Pas de mention « IA » : ces plans ne sont pas générés par IA, ils viennent de nos scripts Blender.
- Refaire un plan : `blender -b --factory-startup --python blender/scripts/cinema_plans.py -- <plan> boucle <dossier>`, puis `blender/scripts/cinema_encoder.ps1 -Images <dossier>`.

## 3. Ce qui a été vérifié

- Missions 1 à 3 de la salle des agents (porte de validation comprise), atelier, trajectoire, épilogue, mode « Recruteur pressé » 30 s, version anglaise.
- Téléphone : pas de débordement horizontal ; la salle des agents tient dans l'écran avec ses six agents.
- « Réduire les effets » : le sol miroir de la salle et la couche cinéma disparaissent.
- Couche cinéma : bon plan à chaque moment (futur des stations, épilogue ; rien sur l'accueil), rien pendant l'« aujourd'hui », couleur qui glisse d'une station à l'autre, alternance volet / fondu, version téléphone, version anglaise, boucles sans saut visible.
- Retouches du 25 novembre : sculpture JobHunter (ordinateur et téléphone), repères masqués pendant le voyage et revenus dans la salle des agents, salle des agents chargée à la demande (mission qui avance au défilement), accueil et épilogue lisibles, aucun débordement horizontal sur téléphone.
- Corrigé : le repère de section en bas à droite restait sur « Accueil » pendant tout le voyage et la salle des agents (les zones épinglées étaient mal mesurées).
- Animations du 25 novembre : mise en lumière au survol et au toucher, forme de l'épilogue (14 phrases d'essai en français et en anglais, toutes reconnues ; « ranger le garage » ne déclenche rien), hypercube (ordinateur et téléphone), rembobinage mesuré (l'horloge recule pendant une remontée soutenue), nuit forcée, mémoire et lien « Reprendre », objets de verre (rotation au glisser, téléphone, « Réduire les effets »).
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
10. **Publication** : faite le 25 novembre. Les retouches qui ont suivi ta relecture sont sur la branche `voyage-futur`, **pas encore en ligne** : il faut ton accord pour republier (`npm run publier` dans `portfolio-futur`).
11. **Branche `source`** : elle contient encore l'ancien code. Je peux l'avancer jusqu'à `voyage-futur` (simple avance, sans réécrire l'historique) pour que le dépôt montre le code du site en ligne.

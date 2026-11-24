# Storyboard — mission HORIZON

*Phase 1 · 24 novembre 2026 · branche `voyage-futur` · aucune ligne de code du site modifiée.*
*Johanne a autorisé de retoucher toute l'architecture (consigne du 24/11). Ce document propose donc le plan **avant / après** complet. Ce qui reste à confirmer par Johanne est marqué ❓.*

---

## 0. L'idée en une phrase

> **Le visiteur part de 2026 et avance dans le futur. À chaque station, une tâche pénible bascule dans son avenir automatisé, et c'est toujours la même surprise : ce futur tourne déjà, Johanne l'a construit.**

Le recruteur doit comprendre, dans cet ordre : *3 s* « des agents IA travaillent déjà à l'écran » → *30 s* « automatisation, sites web, publicités » → *2 min* « rigoureux : chaque système a un statut, des garde-fous, un humain qui décide ».

Décision d'expert sur la structure : **l'échelle d'autonomie est la colonne vertébrale** (1 agent → 1 processus → équipe → agence → studio → constellation). Tout le reste (salle des agents, atelier, trajectoire) en découle. Le site devient **plus court** (−30 %) et **plus dense** : on supprime la répétition « 9 projets de 765 px » et on fusionne les sections qui disaient la même chose.

---

## 1. Plan du site : avant / après

### 1.1 Avant (mesuré : 20 786 px)

| Section | Défilement | Verdict |
|---|---:|---|
| Chargeur + Accueil | ~900 | **Transformé** : le chargeur devient la liste de tâches |
| Manifeste | ~1 100 | **Raccourci** (700) |
| (02) Travaux : 9 projets épinglés | 6 120 | **Transformé** en « échelle de l'autonomie » (stations auj → futur) |
| (03) Pipeline 3D | 3 000 | **Fusionné** dans la salle des agents (même idée : un flux, mais vivant) |
| (04) Motion : mur de vidéos | 2 484 | **Fusionné** dans l'atelier (pubs) |
| Le Meilleur des mondes | ~1 000 | **Déplacé** dans l'atelier (film scolaire, co-auteurs cités) |
| (05) Capacités + (06) Parcours | ~2 000 | **Fusionnés** en « trajectoire » (double hélice) |
| (07) Contact | ~900 | **Transformé** en épilogue |

### 1.2 Après (cible ≈ 14 500 px, soit −30 %)

| Acte | Section | Défilement cible | Ce qui change | Raison |
|---|---|---:|---|---|
| Prologue | Chargeur : liste de tâches qui se cochent → JOHANNE PAMEGNE, « 2026 » | 0 (écran de chargement, ≤ 2,5 s) | remplace le compteur 000 % | dit l'idée avant le premier pixel |
| I | **Accueil · 2026, le quai de départ** : nom + salle des agents miniature au fond | 900 | l'identité reste ; les agents apparaissent après le contenu | le « 3 secondes » |
| I | Manifeste (raccourci) + 3 métiers en clair | 700 | 4 chiffres → 3 métiers + 1 phrase | « 30 secondes » |
| II | **L'échelle de l'autonomie** : 9 stations, chacune « aujourd'hui → futur » | **5 000** (≈ 560 px / station) | remplace Travaux (6 120) ; l'aujourd'hui dure ~0,3 écran | l'idée forte, plus court |
| III | **La salle des agents** : 3 missions, épinglée | **2 400** (mission 1 au défilement ; 2 et 3 au clic) | remplace Pipeline (3 000) | le cœur du site |
| IV | **L'atelier** : sites web + publicités + film scolaire | **1 800** | remplace Motion (2 484) + Meilleur des mondes (1 000) | les 2 autres métiers deviennent visibles |
| V | **La trajectoire** : double hélice, du début à 2026, puis pointillés | **1 600** | remplace Capacités + Parcours (2 000) | une seule section pour « qui est Johanne » |
| Épilogue | **Contact** : « La suite s'écrit ensemble. » + question mailto | 900 | transformé | l'appel à l'action |
| | **Total** | **≈ 14 500 px** (≈ 16 écrans, contre 23) | | |

Les fiches projet (`#case`) restent, ouvertes depuis chaque station. **Aucune fonction indispensable n'est supprimée** (voir section 8).

---

## 2. La piste recommandée et ses deux variantes

### 2.1 Recommandation : **Variante A+** (échelle d'autonomie, nav « recruteur »)

L'ordre suit le **niveau d'autonomie croissant**, pas la force des projets. Pour que le recruteur pressé ne rate rien, trois raccourcis : le mode « 30 s » (traverse les 3 métiers + une mission accélérée), un bouton « Voir les agents au travail » dès l'accueil, et la navigation d'en-tête (Agents · Atelier · Trajectoire · Contact).

| | Variante A+ (recommandée) | Variante A (ordre actuel des projets) | Variante B (hub 2026 + 3 portails) |
|---|---|---|---|
| Principe | stations par niveau d'autonomie | projets dans l'ordre « forts d'abord », chacun saute vers son futur | un hub avec Automatisation / Sites / Pubs, 3 voyages courts |
| Défilement | **≈ 14 500** | ≈ 17 500 (les 9 sauts gardent leur ampleur) | ≈ 15 000 + choix à faire |
| Poids ajouté (JS) | ≈ 55–60 Ko gz | ≈ 55 Ko gz | ≈ 65 Ko gz (navigation + 3 scénarios) |
| Complexité | moyenne : la piste se réécrit, mais d'un seul tenant | faible, mais l'idée « plus on avance, plus ils sont nombreux » se perd (l'autonomie monte et descend) | haute : 3 voyages, 3 fins, mode 30 s à refaire |
| Force du récit | **maximale** : l'accélération du temps = la montée en autonomie | moyenne | bonne, mais le recruteur doit *choisir* (risque d'abandon) |
| Risque | un recruteur n'ouvre que le début | les « grands » projets arrivent tard dans le voyage ou tôt, sans raison narrative | friction à l'entrée |

**Pourquoi A+** : la mission dit que « plus on avance, plus les agents sont nombreux et autonomes ». Seul un ordre par niveau peut le montrer sans l'expliquer. Le risque « le recruteur ne voit pas le plus fort » est traité par les trois raccourcis, pas en abîmant le récit.

### 2.2 Tableau définitif des stations

Statuts **proposés d'après les faits des projets** ; chacun est à confirmer par Johanne ❓. Années = mise en scène de la vision, **jamais des prévisions** (aucun chiffre sur le futur sans deux sources dans `docs/horizon/SOURCES.md`).

| Niv. | Station (étape) | Tâche « aujourd'hui » (silhouette Blender) | Futur (forme) | Horizon | Statut proposé ❓ | Couleur | Légende FR (aujourd'hui / futur) |
|---|---|---|---|---|---|---|---|
| 1 | **Décrocher** (`voice`) | téléphone de bureau qui sonne dans le vide | l'orbe vocal + agent | 2027 | Prototype (démo plombier) | `#C49BFF` | « Aujourd'hui · Quelqu'un décroche chaque appel, même à 22 h. » / « Horizon 2027 · Un agent décroche, comprend et prend le rendez-vous. » |
| 1 | **Répondre** (`sms`) | pile de messages non lus | bulle qui se répond seule | 2027 | Prototype | `#FF7AD9` | « Aujourd'hui · Chaque message attend qu'on ait cinq minutes. » / « Horizon 2027 · Le client reçoit trois créneaux libres, dans la minute. » |
| 2 | **Chiffrer** (`devis`) | pile de papiers + calculatrice | devis qui s'assemble et part | 2028 | Prototype | `#D2F65A` | « Aujourd'hui · Un devis, c'est une soirée. » / « Horizon 2028 · Le devis est prêt en moins d'une minute ; l'IA ne fixe jamais un prix. » |
| 2 | **Encaisser** (`invoice`) | carnet de factures + tampon | facture qui se règle seule | 2028 | Prototype (en cours) | `#FFB347` | « Aujourd'hui · Relancer, c'est ce qu'on repousse. » / « Horizon 2028 · Relances journalisées ; aucune action juridique sans validation. » |
| 2 | **Trier** (`switch`) | bac de courrier qui déborde | flux qui se répartit | 2028 | Prototype | `#FFB347` | « Aujourd'hui · Le courrier s'empile avant d'être lu. » / « Horizon 2028 · Chaque e-mail trouve le bon collègue, avec un brouillon. » |
| 3 | **Chercher** (`radar`) | des dizaines d'onglets d'offres ouverts | l'entrée dans la salle (acte III) | 2029 | **En service** (usage personnel) | `#35E08B` | « Aujourd'hui · Trente onglets, une seule candidature. » / « Horizon 2029 · Une équipe d'agents cherche, note, rédige et relit. Rien ne part sans mon clic. » |
| 4 | **Créer un site** (nouvelle étape `site`) | croquis de page au crayon | page qui se construit | 2030 | **Vision** | `#2F80FF` | « Aujourd'hui · Un site, des semaines d'allers-retours. » / « Horizon 2030 · Une agence d'agents le conçoit, le teste, puis un humain le met en ligne. » |
| 5 | **Lancer une pub** (`wave` + `film`) | table de montage + storyboard papier | déclinaisons 9:16 · 1:1 · 16:9 | 2031 | Prototype (doublage réel) / Vision (studio) | `#7CF5D0` / `#FF6B6B` | « Aujourd'hui · Une pub, trois formats, trois fois le travail. » / « Horizon 2031 · Un studio d'agents décline, double et contrôle la marque. » |
| 6 | **Faire tourner tout** (`server`) | armoire de serveurs | constellation de toutes les équipes, l'humain au centre | 2032 | **En service** (VPS, n8n, ce site) | `#35E08B` | « Aujourd'hui · Une armoire à surveiller. » / « Horizon 2032 · Toutes les équipes reliées ; l'humain garde la décision. » |

⚠️ **Cohérence à trancher ❓** : la mission fait finir sur « 2027 → ? » alors que les stations montent jusqu'à 2032. **Proposition : l'épilogue affiche « 2032 → ? »** (on dépasse le dernier horizon). Si Johanne préfère « 2027 → ? », il faut ramener toutes les stations à 2027–2028 : je ne le recommande pas.

Chaque station dure ≈ 560 px : *aujourd'hui* (0,3 écran, geste en boucle à 12 images/s + compteur de répétitions) puis *futur* (saut + bascule). Le niveau d'autonomie (1 à 6) et le statut s'affichent au tableau de bord.

### 2.3 La grammaire du saut (réutilisée à chaque station)

1. **Anticipation** : le nuage recule légèrement (élan).
2. **Action** : traversée de 0,9 à 1,3 s, courbe `CustomEase` « élan vers l'avant », portes-cadrans (graduations + année gravée en JetBrains Mono) qui tournent **dans le sens des aiguilles**, un peu plus vite à chaque niveau.
3. **Retombée** : léger dépassement à l'arrivée, puis stabilisation.
4. **Bascule** : la forme manuelle se défait par vagues, `uEra` passe de 0 à 1 (gris de bureau, froid → palette du projet, halo, netteté), la cadence passe de 12 images/s à fluide, l'odomètre avance. **Jamais de flash** (WCAG 2.3.1) : seuil = 2–3 images d'étirement peu contrastées.
5. **Mouvement réduit / mode calme** : pas de traversée ; image fixe « futur » + légende.

**Ce qui existe déjà et qu'on branche** : la cadence 12 images/s (`uOldA/uOldB`), les portes annulaires, le flou radial (`uWarp`). **Ce qui est à créer** : `uEra` (passe unique, alpha prémultiplié préservé), les `fx` 20+ pour les gestes manuels (téléphone qui vibre, pile qui grossit, onglets qui s'ouvrent), le moteur `chrono.js` (adaptation de celui de CHRONOS, sens avant).

---

## 3. La salle des agents — 3 missions plan par plan

**Une salle, une famille d'agents** (`src/agents.js`), scénarios en données (`src/missions.js`). Rôles fixes : orchestrateur (anneau), contrôleur (anneau-loupe), validation humaine (carré blanc). Rôles variables selon la mission. **Machine à états commune** : repos · écoute · réflexion · parole · travail · terminé · erreur. Jamais plus de 3 bulles. Journal « Voir les messages » (= alternative texte). Mention « Démonstration, données fictives ».

### Mission 1 · « Candidater » (JobHunter) — défaut, jouée au défilement (≈ 20 s)

Rôles vérifiés dans le dépôt : orchestrateur, profileur, chercheur (**outil**, API La bonne alternance), analyste, rédacteur, vérificateur (relecteur indépendant), validation Telegram.

| # | Plan | Image | Donnée réelle |
|---|---|---|---|
| 1 | La demande | un message Telegram arrive ; l'anneau s'éveille | — |
| 2 | La recherche | l'**outil** chercheur envoie une sonde dans un nuage d'offres | « 74 reçues » ✅ |
| 3 | L'analyse | l'analyste note par lots de 20 ; barres de score | « 34 retenues » ✅ |
| 4 | La rédaction | le rédacteur compose la candidature (SplitText / ScrambleText) ; 2 variantes + lettre | — |
| 5 | **La relecture (désaccord)** | le vérificateur souligne en rouge une phrase que le CV ne justifie pas ; le paquet repart ; correction ; validation | « 13/13 vérifiées » ✅ ; *le code décide de la gravité* |
| 6 | La validation humaine | bouton « Valider » (carte Telegram) ; **le visiteur clique** | « 0,07 $ par candidature » ✅ |

⚠️ Deux garde-fous de vérité : (a) le chercheur est montré comme un **outil**, pas comme une IA ; (b) le clic « Valider » affiche « carte validée dans Telegram », **jamais « e-mail envoyé »** (Gmail n'est pas connecté).

### Mission 2 · « Créer un site web » (Fournil Lisière, ≈ 25 s) — statut ❓ (méthode réelle ou démonstration)

Équipe : orchestrateur, stratège, designer, développeur, testeur, validation humaine.

1. **Demande** « Je veux que mes clients commandent leur pain en ligne. »
2. **Cadrage** : stratège → JSON `{"pages": ["Accueil","Commander","Contact"], "objectif": "commandes en ligne"}`.
3. **Maquette** : fil de fer → couleurs, typographies, images.
4. **Code** : bulle de code qui défile ; la page se construit bloc par bloc dans un cadre de navigateur.
5. **Tests + désaccord** : le testeur mesure vitesse / accessibilité / téléphone, trouve un contraste insuffisant, renvoie ; le designer corrige ; tout passe au vert.
6. **Validation humaine** : « Mettre en ligne » → adresse fictive → transition vers l'atelier.

### Mission 3 · « Lancer une pub » (marque cosmétique fictive, ≈ 25 s) — statut ❓

Équipe : orchestrateur, stratège, concepteur-rédacteur, directeur artistique, voix, monteur, contrôleur de marque, validation humaine.

1. **Brief** : nouveau produit à faire connaître.
2. **Stratégie** : `{"cible": "…", "promesse": "…", "ton": "…"}`.
3. **Écriture** : accroche + script de 30 s.
4. **Image** : planche d'ambiance + images clés 9:16.
5. **Voix & montage** : onde de voix, ligne de montage, sous-titres.
6. **Contrôle de marque (désaccord)** : couleur hors charte ou promesse injustifiable → renvoi → correction → validation.
7. **Validation humaine** : « Diffuser » → déclinaisons 9:16 / 1:1 / 16:9 → transition vers l'atelier.

**Contrôles** : lecture/pause/« Passer » (25 s max pour les missions 2 et 3), clavier, toucher, **schéma SVG numéroté** en mouvement réduit, cadrage vertical + moins d'agents sur téléphone, rendu seulement quand la section est à l'écran, `destroy()` propre.

**Modèles 3D** : agents en glTF (Blender, Cycles pour l'occlusion cuite, ≤ 800 Ko pour toute la famille), 8 silhouettes principales, géométrie partagée. L'humain = un carré blanc.

---

## 4. L'atelier (acte IV, ≈ 1 800 px)

Principe : **on montre ce qui est publiable, et on réserve la place du reste.**

| Bloc | Contenu publiable aujourd'hui | Réservé (accord requis ❓) |
|---|---|---|
| **Sites web** (cadre de navigateur, capture pleine page Playwright qui défile au survol, une ligne « tâche automatisée ») | portfolio lui-même, site « Aiguilleur IA », « Fournil Lisière » (fictif, signalé) | sites de clients réels : **aucun trouvé**, à fournir |
| **Publicités** (cadres de téléphone, boucles muettes 6–10 s, 720p, ≤ 2 Mo, WebP d'attente ; au clic, version complète avec son + sous-titres) | « Lucie · Un appel. Une action. » (démo perso), animation Rhonda, maquettes marquées « Démonstration » | **DT DESIGN** (seul client réel : validation finale + droits de la voix + rendus 3D), **Endro, Sessile, MCA** (maquettes de prospection : accord obligatoire) |
| **Doublage vidéo IA** | oui (produit perso, test réel 2 min 10 → 4 min 40, QC 8/10) | — |
| **Film scolaire** « Le Meilleur des mondes » | oui (déjà sur le site, co-auteurs cités) | — |

Chaque réalisation affiche : *ce que les agents ont fait* et *ce que Johanne a décidé*. Chargement différé à l'approche ; hors budget 3D.

---

## 5. La trajectoire (acte V) et l'épilogue

- **Trajectoire** : la double hélice existante monte des premières étapes (parcours déjà dans `i18n.js`) jusqu'à 2026, puis se prolonge en **pointillés lumineux** vers « ce que je veux construire ensuite » (texte à valider par Johanne ❓). Les capacités (anciennes « Capacités ») deviennent les 4 brins.
- **Épilogue** : le compteur dépasse le dernier horizon (**2032 → ?**) ; les particules ouvrent un horizon ; « La suite s'écrit ensemble. » puis « **Quelle tâche ne voulez-vous plus jamais faire ?** » : la réponse pré-remplit un `mailto:` (rien n'est envoyé ailleurs).

---

## 6. Architecture technique cible

| Module | Rôle | Statut |
|---|---|---|
| `src/chrono.js` | moteur du voyage : année, niveau d'autonomie, statut ; événements `saut:depart / seuil / arrivee` | adapté de CHRONOS (copie), sens avant |
| `src/era-pass.js` | une seule passe plein écran, `uEra`, alpha prémultiplié ; simplifiée au niveau 1 d'allègement, coupée au niveau 2 / téléphone modeste | neuf |
| `src/world/` | découpage de `world.js` (1 177 l.) : `track.js`, `shapes.js`, `shaders.js`, `scene.js` ; **piste décrite en données** (plus d'index numérique en dur) | refonte |
| `src/shapes-loader.js` | modèle Blender → `{pos, meta}` ; préchargement des 2 formes à venir ; repli sur forme procédurale | repris de CHRONOS |
| `src/agents.js`, `src/missions.js` | salle et scénarios (modèle : `pipeline-3d.js`) | neufs |
| `src/atelier.js` | galeries sites/pubs, chargement différé | neuf |
| `scripts/capture.mjs` | captures Playwright 1440×900 et 390×844 + vidéo | neuf (dev) |

**Format des silhouettes ❓** : la mission demande du glTF compressé (GLTFLoader + MeshoptDecoder ≈ 20 Ko gz de JS). CHRONOS a un format maison `.chr` (22 Ko pour une silhouette, 0 dépendance). **Recommandation : `.chr` pour les 9 silhouettes statiques « aujourd'hui » (zéro JS ajouté), glTF seulement pour les agents animés** (AnimationMixer). Si Johanne préfère tout en glTF, le budget JS reste sous 70 Ko mais il est plus serré.

**Budget JS estimé (gzip)** : `agents` 14 + `missions` 8 + `chrono` 4 + `era-pass` 3 + `atelier` 4 + GLTFLoader/Meshopt 20 + DrawSVG/SplitText/ScrambleText/CustomEase ≈ 8 = **≈ 61 Ko** (limite 70). Les plugins GSAP déjà dans `node_modules` : rien à acheter.

---

## 7. Plan de travail révisé (consigne : « enchaîne jusqu'à la livraison »)

| Phase | Contenu | Arrêts imposés par la mission qui **restent** |
|---|---|---|
| 2 | Prototype d'**une station** (standardiste) : `chrono`, portes-cadrans, tableau de bord, `uEra`, cadence, silhouette Blender du téléphone | montrer captures + vidéo |
| 3 | Toutes les stations + prologue (liste de tâches) | — |
| 4 | Salle des agents : mission 1, puis 2 et 3 | montrer captures + vidéo après la mission 1 |
| 5 | Atelier, trajectoire, épilogue | — |
| 6 | Finitions : téléphone, mouvement réduit, anglais, performance, accessibilité, teaser 9:16 ; son seulement si Johanne le veut | — |
| 7 | Recette : `RAPPORT.md`, mesures, captures avant/après | **la publication attend un « oui, publie » explicite** (`npm run publier` pousse en force sur GitHub Pages et redéploie Coolify) |

**Ce que je ne peux pas décider seul et qui bloquera le contenu final** : statuts, adresses de sites, accord des clients, textes « prochaines étapes » de la trajectoire. En attendant, tout s'affiche avec les statuts **proposés** ci-dessus et des marques **fictives signalées**.

# Audit de départ — mission HORIZON

*Phase 0 · 24 novembre 2026 · aucune ligne du code du site n'a été modifiée.*
*Branche de travail : `voyage-futur`, créée depuis `source` (la branche de production), dans le dossier `F:\Downloads\RJP\portfolio-futur` (voir section 2).*

Ce document remplace l'audit CHRONOS (`docs/voyage/AUDIT.md`, resté sur la branche `voyage-temps`), dont les faits sont **re-vérifiés** ici et complétés pour la mission HORIZON : voyage vers l'avant, salle des agents, atelier, Blender.

---

## 1. En bref

- **Le site actuel est sain et mesuré.** 52 à 58 images par seconde selon la station (portable Intel HD 620), aucune erreur dans la console, défilement total de **20 786 px** (écran 1440×900).
- **La Machine (`world.js`) est la bonne base** : un seul nuage de particules, des formes décrites en données, un shader qui sait mélanger deux formes, voler et traîner. Elle peut porter les « stations du futur ».
- **Trois choses manquent pour HORIZON** : (1) un moteur du voyage (année, niveau d'autonomie, statut), (2) la salle des agents (`agents.js` + `missions.js`), (3) l'atelier (sites et pubs réels). Rien de tout cela n'existe encore sur `voyage-futur`.
- **Un chantier voisin existe et ne doit pas être perdu** : la branche `voyage-temps` (mission CHRONOS, abandonnée) contient du code non commité dans `world.js` (+261 lignes), plus `chrono.js`, `epoques.js`, `shapes-loader.js`, un modèle Blender `central_1878`. Je n'y touche pas. Section 7 : ce qui est réutilisable.
- **Le vrai système multi-agent (JobHunter) est bien documenté** et ses chiffres sont vérifiés (section 6). Un point de vocabulaire à corriger (« 74 offres »).
- **Outils** : Blender 4.5.10 LTS ✅, ffmpeg 9.0.1 ✅, Node 24 ✅. Playwright ❌, gltf-transform ❌, lil-gui ❌ (à installer en dépendances de développement : aucun poids dans le site).

---

## 2. Git et dossiers

| Élément | Valeur |
|---|---|
| Branche de production | `source` (dernier commit `ba196b3`) ; `origin/main` = site publié (build) |
| Branche HORIZON | `voyage-futur`, créée depuis `source` |
| Dossier de travail | `F:\Downloads\RJP\portfolio-futur` (git worktree) : **un second dossier lié au même dépôt** |
| Pourquoi un second dossier | Le dossier `portfolio` est sur `voyage-temps` avec des modifications non commitées. Changer de branche dedans aurait mélangé ou écrasé ce travail. Le worktree isole tout, sans rien supprimer |
| `node_modules` | jonction Windows vers celui de `portfolio` (aucune réinstallation) |
| Publication | `scripts/publier.mjs` **interdit** sans « oui, publie » explicite de Johanne |
| Branches existantes | `voyage-temps`, `refonte-la-machine`, `source`, `origin/main` : intactes |

---

## 3. Plan du site actuel (ce que le recruteur voit aujourd'hui)

| # | Section | Défilement (1440×900) | Rôle |
|---|---|---:|---|
| 0 | Chargeur + Accueil (`#top`) | ~900 px | Compteur 000 %, nom en particules, sphère |
| — | Bandeau d'outils | court | Marquee |
| 01 | Manifeste | ~1 100 px | Texte qui s'allume, 4 chiffres |
| 02 | Travaux, scène épinglée | **2 662 → 8 782 px (6 120 px)** | 9 projets, 765 px chacun, la sculpture 3D change |
| 03 | Pipeline en direct (3D) | **9 683 → 12 683 px (3 000 px)** | 7 plateformes, paquet qui avance |
| 04 | Motion (mur de vidéos) | **13 969 → 16 453 px (2 484 px)** | mur courbe |
| — | Le Meilleur des mondes | ~1 000 px | éventail de 4 pages |
| 05 | Capacités | ~900 px | grille |
| 06 | Parcours | ~1 100 px | liste |
| 07 | Contact | ~900 px | actions |
| **Total** | | **20 786 px** | ≈ 23 écrans |

Constats :
- **Les 9 projets prennent 30 % de tout le défilement**, et tous sont présentés de la même façon : un recruteur pressé n'a aucun moyen de repérer « le plus important » avant la 5ᵉ station.
- **Rien ne montre les agents travailler.** Le Pipeline 3D montre un flux, pas des agents qui se parlent, se corrigent et attendent un humain.
- **Les sites web et les publicités n'existent pas comme métiers** : seul « Motion » (une vidéo) en parle. Deux des trois métiers à mettre en avant sont donc invisibles.
- **« Sous le capot » n'est plus dans la page** : `renderHood` / `initHood` (dans `hood.js`) sont du code mort ; seul `renderFeatures` sert encore.

---

## 4. Comment fonctionne la Machine (re-vérifié dans le code)

**La piste** (`world.js:18`) :
```
TRACK = cloud · name · sphere · terrain · devis · sms · voice · wave · radar · switch · server · invoice · film · dim · caps · path · end
K     =   0      1      2        3        4      5     6      7      8       9       10       11      12   13    14     15    16
```
- `world.k` (de 0 à 16) avance avec le défilement. `STOPS[étape]` donne forme, effet `fx`, deux couleurs et cadrage `pose`. `LEG` donne la longueur de vol ; `AT[i]` la distance cumulée (`world.js:469-472`).
- `builder(N, seed)` écrit les formes : `put`, `line`, `curve`, `ring`, `box`, `shell`, puis mélange l'ordre des points. Chaque point porte un **ton** (0/1) et un **`prm`** (paramètre d'animation, −1 = poussière).
- Le vertex shader mélange deux formes (`uMix`), gère le vol (`uFlight`), les traînées (`uWarp`, `uVel`) et la souris. **`life()`** anime chaque point selon l'identifiant `fx`, dans une **chaîne de conditions** qu'il faudra étendre avec précaution.
- **La cadence 12 images/s existe déjà** : `t12 = floor(uTime * 12.) / 12.` (`world.js:741`), avec `uOldA` / `uOldB` qui choisissent, par forme, le temps saccadé ou fluide. C'est exactement la grammaire « le manuel saccade, l'automatique coule » demandée : **il suffit de la brancher**, pas de la réinventer. (Ce code est dans les modifications CHRONOS non commitées ; sur `source` il faudra le réécrire, c'est court.)
- Décor : étoiles, fil de route courbé (`bend`), portes annulaires (`GATES`, `gateFragment`), piste d'arrivée (`PAD_AT`). Rendu : `antialias: false`, `alpha: true`, mélange additif, densité de pixels ≤ 1,75 (1,5 sur téléphone).
- Allègement automatique `lighten()` : niveau 1 (densité 1, 70 % des points), niveau 2 (42 % des points, `fx-lite`). Modes : réduit (images fixes), calme (`fx-off`, vols coupés).

**Dépendances à l'ordre de la piste** (à rendre génériques avant d'insérer des étapes) :

| # | Où | Problème |
|---|---|---|
| 1 | `life()` | tout `fx` inconnu ≥ 14 tombe dans la branche « devis » : réserver une plage (20+) testée en premier |
| 2 | `measureStages()` (`main.js:276`) | suppose `TRACK[K.devis + i]` : les projets doivent être contigus. Associer par nom |
| 3 | `LEG` / `AT` / portes / `BN` | tout dépend de l'index ; la scène épinglée vaut `0,85 × hauteur × (nombre de projets − 1)` |
| 4 | `hold()` et `workST` | `main.js:136` / `:253` : le nombre de projets `NP` pilote l'avancée de `k` |
| 5 | `routeStops()` (`main.js:283`) | liste codée en dur dans l'ordre actuel |
| 6 | Mémoire | chaque forme ≈ 520 Ko ; calculer à la demande, pas au démarrage |
| 7 | `aRand` | `Math.random()` : captures non reproductibles → graine fixe avec `mulberry` en mode test |
| 8 | `destroy()` | ne libère pas géométries ni matériaux |
| 9 | Canevas transparent | une passe plein écran (uEra) doit préserver l'alpha prémultiplié |

---

## 5. Mesures de départ (re-prises le 24 novembre)

**Machine** : Intel HD Graphics 620 (ANGLE Direct3D 11), i5-7300U, 7,9 Go. Serveur Vite de développement, navigateur intégré, 1440×900, densité 1. Chaque mesure : 1,8 s d'attente puis 2,5 s d'enregistrement.

| Station | Images/s | p95 | Pire image |
|---|---:|---:|---:|
| Manifeste | 54,8 | 33,3 ms | 67 ms |
| Travaux (projet 4) | 57,9 | 17,1 ms | 67 ms |
| Pipeline | 52,8 | 33,4 ms | 50 ms |
| Contact | 55,0 | 33,3 ms | 34 ms |

(La mesure « Accueil » a donné 0,1 image/s : c'est un **artefact de mon script** — la première image arrive 12 s après le rechargement — pas un vrai chiffre. L'ancien audit mesurait 60 à l'accueil.)

**Longueur de défilement : 20 786 px** (identique à l'audit CHRONOS : le site est stable). Hauteur du document : 21 686 px. Trois sections épinglées (travaux, pipeline, motion). Sept segments `ScrollTrigger` pilotent `world.k`.

**Budget de référence** (audit CHRONOS, vérifié par un build de contrôle) : JS 775 Ko brut / **228 Ko gzip**, CSS 15 Ko gzip, premier chargement utile ≈ **380 Ko** compressés ; dossier publié 9,4 Mo (vidéos 6,6 Mo chargées à l'approche).

**Pas encore mesuré** (nécessite Playwright, voir section 8) : Lighthouse mobile ; images/s téléphone avec processeur ralenti ×4 ; Firefox et Safari.

**Console** : aucune erreur. Avertissements GSAP connus : « rotate not eligible for reset » (53 fois), à corriger par `rotation` dans un petit commit.

---

## 6. JobHunter : faits vérifiés pour la mission « Candidater »

Source : `Multi-agent candidature n8n/` (README, PROGRESS.md, prompts/). Aucun `.env` ouvert.

| Fait demandé par la mission | Verdict | Détail |
|---|---|---|
| **74** offres trouvées | ✅ avec nuance | PROGRESS.md : « 74 **opportunités** reçues, 68 nouvelles ». Le site actuel dit déjà « 74 → 34 offres reçues puis retenues ». À afficher : « 74 reçues → 34 retenues » |
| **34** offres retenues | ✅ | même test réel du 6 novembre 2026 |
| **0,07 $** par candidature | ✅ | « Une carte coûte environ 0,07 $, dont 0,001 $ de relecture » ; noter 68 offres = 0,01 $ |
| **13/13** vérifiées | ✅ | jeu de tests du vérificateur |
| Rôles exacts | ✅ | conversationnel, profileur, chercheur, **analyste** (lots de 20, barème /100), **rédacteur** (2 variantes + lettre), **vérificateur** (relecteur indépendant), validation par **4 boutons Telegram** : envoyer, modifier, ignorer, postuler moi-même |
| Le « chercheur » | ⚠️ à ne pas mal présenter | c'est un **appel à l'API La bonne alternance**, pas un modèle de langue → l'afficher comme un **outil** (sonde), et le garder dans la mission |
| Envoi Gmail | ⚠️ | **pas encore connecté** : la démonstration ne doit pas dire « la candidature part par e-mail ». Bouton « Valider » = la carte Telegram, pas l'envoi |
| Le désaccord (étape 4 de la mission) | ✅ réel | le code, pas l'IA, décide de la gravité (une affirmation inventée avait été classée « mineure ») : c'est précisément ce moment qu'il faut mettre en scène |
| Cible du système | ⚠️ | JobHunter cherche une alternance **front-end**, alors que le portfolio vise « alternance automatisation & IA ». Pas un blocage, à signaler à Johanne |

Les formulations du site actuel qui sont **à confirmer** : la métrique « 3 000 — pas de simulation sans franchir une étape réservée à l'humain » (`i18n.js:128`) est obscure ; Encaisse est marqué « en cours » (donc *Prototype*, pas *En service*).

---

## 7. Réutilisable de CHRONOS (branche `voyage-temps`, non touchée)

| Pièce | État | Réutilisable pour HORIZON ? |
|---|---|---|
| `src/chrono.js` (113 l.) | non commité | **Oui, en gros** : odomètre à rouleaux, événements `saut:depart` / `saut:seuil` / `saut:arrivee`, CustomEase « élan ». À adapter : direction avant, niveau d'autonomie, statut |
| `src/epoques.js` | non commité | Non (années passées). Le principe « un fichier de données par station » reste bon |
| `src/shapes-loader.js` (76 l.) + format `.chr` | non commité | **Oui, l'idée** : charger un modèle Blender et l'échantillonner en `{pos, meta}`. Le format maison `.chr` (22 Ko pour une silhouette) est plus léger qu'un glTF, mais la mission demande du glTF compressé : à trancher au storyboard |
| `blender/scripts/commun.py` + `central_1878.py` | non commité | **Oui** : chaîne Blender en ligne de commande déjà testée (Blender 4.5) ; à renommer en silhouettes « aujourd'hui » |
| Cadence 12 images/s (`uOldA`/`uOldB`) dans `world.js` | non commité | **Oui**, c'est la signature « manuel saccade, auto coule » |
| Portes-cadrans, tableau de bord | partiel | à refaire en sens avant |

Je peux porter ces pièces vers `voyage-futur` **par copie** (jamais en modifiant `voyage-temps`).

---

## 8. Outils

| Outil | État | Suite |
|---|---|---|
| Node 24.19 / npm | ✅ | — |
| **Blender** | ✅ 4.5.10 LTS : `C:\Program Files\Blender Foundation\Blender 4.5\blender.exe` (pas dans le PATH ; variable `BLENDER`). Un installateur 5.3.0 (383 Mo) traîne à la racine de `F:\Downloads\RJP` et une version portable 5.2.2 existe dans `F:\` | **Une seule version** pour la mission : 4.5 (l'API Python change entre 4.x et 5.x) |
| **ffmpeg** | ✅ 9.0.1 | vidéos 720p, WebP, montage du teaser |
| **Playwright** | ❌ | dépendance de développement (~3 Mo de paquet + ~150 Mo de Chromium, hors du site). Nécessaire pour `scripts/capture.mjs` |
| **@gltf-transform/cli** | ❌ | via `npx`, aucun poids dans le site |
| **lil-gui** | ❌ | chargé dynamiquement derrière `?debug`, exclu du build |
| **Lighthouse** | ❌ | en local (dépendance de développement) |
| HyperFrames | ✅ (skill et dossier `hyperframes/`) | pour le teaser 9:16 |

---

## 9. Inventaire des réalisations de Johanne

*Inventaire fait en lecture seule par un sous-agent, sans ouvrir `.acces-vps` ni aucun `.env`. Les durées exactes des MP4 et les dimensions des JPG ne sont pas encore relevées (ffprobe à faire en phase 5).*

### 9.1 Sites web

**Constat important : aucun site livré à un vrai client n'a été trouvé, et aucune adresse de site client n'est écrite dans les projets.** Les deux adresses connues : le portfolio (`https://johanne.vorchex.tech`) et le code du standardiste sur GitHub.

| Dossier | Ce que c'est | Techno | En ligne | Client réel ? |
|---|---|---|---|---|
| `portfolio` | Ce site | Vite, three.js, GSAP, Lenis | johanne.vorchex.tech | Personnel |
| `aiguilleur-site` | Site vitrine du produit « Aiguilleur IA » | HTML/CSS statique | inconnu | Produit à elle |
| `aiguilleur-ia`, `aiguilleur-atelier-nova`, `atelier-nova-demo` | Démos « Lisière Syndic » (syndic fictif) et « Atelier Nova » (mobilier fictif) | n8n, Claude | non | **Fictif** |
| `contrefil` | Boutique « CONTREFIL », catalogue + panier | JS natif, Node | inconnu | inconnu |
| `encaisse` | Recouvrement BTP (spécification de 19 problèmes) | Python | non | inconnu, en cours |
| `Agence doublage` | Doublage vidéo IA (réel : 2 min 10 doublées en 4 min 40, QC 8/10) | n8n, ElevenLabs, FastAPI | non | Produit à elle |
| `nitro-rush`, `south-africa-atlas` | Jeu 3D ; atlas PDF de 28 pages | three.js ; Python | non | Perso / scolaire |
| `testeurs-pilote` | 50 contacts de prospects | CSV | non | **Données personnelles : ne jamais publier** |

→ **Conséquence directe pour « L'atelier » (acte IV)** : tant que Johanne ne fournit pas d'adresses de vrais sites accordés, la galerie de sites utilisera **ses propres sites** (portfolio, site « Aiguilleur IA », boutique « Contrefil » si elle en est l'autrice) et une **marque fictive signalée** (« Fournil Lisière »).

### 9.2 Publicités et vidéos

| Projet | Fichier | Format | Statut / accord |
|---|---|---|---|
| **DT DESIGN SARL**, « Du trait à la clé » (construction, Cameroun) | `videos\dt-design-pub\renders\DT-DESIGN_pub-maquette_v1.mp4` | 16:9, ~140 s | **Seul client réel.** Validation finale du client manquante ; voix ElevenLabs en plan gratuit (non commercial) ; accord des auteurs des rendus 3D |
| DT DESIGN, « Promesses tenues » | `hyperframes\DT-DESIGN_promesses-tenues_9x16_HD.mp4` | 9:16, ~3 min | idem |
| DT DESIGN, versions courtes | `videos\dt-design-pub-9x16\versions-courtes\` | 9:16, 30 s et 15 s | livré ; mêmes réserves |
| DT DESIGN, logo animé | `videos\dt-design-logo-statut\renders\…master.mp4` | inconnu | accord à confirmer |
| Endro « Un pot, c'est tout » | `out\endro\endro_un-pot_30s.mp4` / `_15s.mp4` | 1080×1920 | **Maquette de prospection** : accord d'Endro avant toute publication |
| Sessile « La vie d'une paire » | `out\sessile_30s.mp4` / `_15s.mp4` | 1080×1920 | **Interdit sans accord de Sessile** (le brief le dit) |
| MCA Création | `F:\pub-mca\renders\…` | 30 s / 15 s | prospect, accord requis |
| Lucie « Un appel. Une action. » | `video-portfolio-standardiste\renders\lucie-un-appel-une-action.mp4` | 4:5, 65 s | **Démo perso** (cas fictif « Plomberie Garnier ») : publiable comme tel |
| Rhonda, animation du logo | `videos\rhonda-logo-intro\renders\…slogan.mp4` | 16:9, 15 s | perso |
| Présentation « Agence doublage » | `Agence doublage\presentation-linkedin\livrables\…mp4` | inconnu | perso |
| Kaily, Jospin | — | — | **Privés (famille) : ne pas publier** |
| « Le Meilleur des mondes » | `film_meilleur_des_mondes\…mp4` | ~2:49 | scolaire, co-auteurs à citer (déjà sur le site) |

→ **Pour l'atelier, publiable sans autre accord** : les films personnels (Lucie, Rhonda, présentations) et les maquettes marquées « Démonstration ». Les films DT DESIGN, Endro, Sessile, MCA demandent un accord : le storyboard prévoit des **emplacements prêts** pour eux.

### 9.3 Outils réellement utilisés (pour les « outils » de la salle des agents)

n8n (Docker, déployé par scripts), API Claude, Claude Code, Telegram, Gmail, Google Sheets / Drive, Supabase / PostgreSQL, Retell AI, ElevenLabs, HyperFrames (+ GSAP, three.js), FFmpeg, Blender, Playwright, Firecrawl, Apify, Coolify + VPS Hostinger. Aucun logo de marque en 3D : pictogrammes génériques + étiquettes texte.

### 9.4 ⚠️ Secrets rencontrés (non recopiés)

Deux fichiers à la racine de `F:\Downloads\RJP` contiennent des secrets en clair : **`aiguilleur.txt`** (ressemble à un jeton d'API n8n) et **`SDJB.txt`** (identifiant et code secret d'un client Google). Le sous-agent en a affiché le contenu par erreur dans son propre journal d'outils (il n'est pas dans ce document). **Recommandation : régénérer ces deux secrets et sortir les fichiers du dossier.** Je ne les ouvre ni ne les recopie.

---

## 10. Questions pour Johanne

À trancher avant la mise en scène (aucune ne bloque le storyboard) :

1. **Sites web réels** : quelles adresses publiques, et lesquels sont de **vrais clients** (accord à obtenir) ou des **démos / prospects fictifs** ?
2. **Publicités réelles** : quels fichiers vidéo, pour quelle marque, avec quel accord ? Sinon, marque fictive clairement signalée.
3. **Statut de chaque système** (« En service », « Prototype », « Vision ») : devis IA, accueil SMS, standardiste vocal, doublage, JobHunter, aiguilleur, Encaisse, infrastructure VorcheX, agence web autonome, studio de marque autonome. À ta connaissance, lesquels tournent **vraiment pour un client** ?
4. **Missions « site web » et « pub »** : méthode réelle ou démonstration scénarisée ? (Cela change la mention affichée.)
5. **Chiffres** : OK pour « 74 reçues → 34 retenues », « 0,07 $ par candidature », « 13/13 » ? La métrique « 3 000 » du projet JobHunter doit être reformulée ou retirée.
6. **Playwright, gltf-transform, lil-gui, Lighthouse** : j'installe en dépendances de développement ? (aucun poids dans le site)
7. **Son** (phase 6) : veux-tu un habillage sonore, ou pas du tout ?
8. **JobHunter est « front-end »** et le portfolio vise « automatisation & IA » : on garde la mission telle quelle ?

*Johanne a autorisé de retoucher toute l'architecture : le storyboard (`STORYBOARD.md`) propose le plan avant / après.*

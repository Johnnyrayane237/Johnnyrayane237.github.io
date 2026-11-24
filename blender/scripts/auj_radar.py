# Aujourd'hui · le radar : la recherche d'emploi à la main, onglet après onglet.
# Une fenêtre de navigateur (cadre, barre d'adresse, page d'une offre avec ses lignes de texte et son bouton
# « Postuler »), une rangée de vingt petits onglets qui s'ouvrent les uns après les autres, puis quatre
# fenêtres qui s'empilent en cascade derrière. Le curseur flèche vise le bouton.
#
# Rôles (prm), convention du « geste manuel » (24 éléments) :
#   0 la fenêtre principale et sa page d'offre, le curseur
#   1,00 → 1,79 les 20 onglets, de gauche à droite
#   1,83 → 1,96 les 4 fenêtres en cascade, de la plus proche à la plus lointaine
# Accent (ton 1) : le curseur flèche et le bouton « Postuler ».
import math
import os
import random
import sys

import bmesh

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import commun as c  # noqa: E402

opts = c.arguments()
c.reinit()
random.seed(2412)


def arrondi(w, h, r, k=3):
    """Contour (x, z) d'un rectangle aux coins arrondis, centré."""
    pts = []
    for cx, cz, a0 in ((w / 2 - r, -h / 2 + r, -90), (w / 2 - r, h / 2 - r, 0), (-w / 2 + r, h / 2 - r, 90), (-w / 2 + r, -h / 2 + r, 180)):
        for i in range(k + 1):
            a = math.radians(a0 + 90 * i / k)
            pts.append((cx + r * math.cos(a), cz + r * math.sin(a)))
    return pts


def dalle(nom, contour, ep, centre, rot=(0, 0, 0), **kw):
    """Contour plan (x, z) extrudé sur l'épaisseur ep (axe Y), face avant vers le visiteur."""
    bm = bmesh.new()
    av = [bm.verts.new((x, -ep / 2, z)) for x, z in contour]
    ar = [bm.verts.new((x, ep / 2, z)) for x, z in contour]
    n = len(contour)
    bm.faces.new(av)
    bm.faces.new(ar[::-1])
    for j in range(n):
        bm.faces.new((av[j], av[(j + 1) % n], ar[(j + 1) % n], ar[j]))
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces[:])
    c._placer(bm, centre, rot)
    return c._objet(nom, bm, **kw)


def cadre(nom, x0, z0, x1, z1, y, **kw):
    """Rectangle tracé au fil, dans le plan de la fenêtre."""
    return c.fil(nom, [(x0, y, z0), (x1, y, z0), (x1, y, z1), (x0, y, z1)], ferme=True, **kw)


def ligne(nom, x0, x1, z, y, **kw):
    return c.fil(nom, [(x0, y, z), (x1, y, z)], **kw)


N_ONGLETS, N_FENETRES = 20, 4
TOTAL = N_ONGLETS + N_FENETRES

# ---------- La fenêtre principale ----------
MX, MZ, MW, MH = 0.2, -0.2, 2.45, 1.8
X0, X1, Z0, Z1 = MX - MW / 2, MX + MW / 2, MZ - MH / 2, MZ + MH / 2
F = -0.035  # juste devant la face avant de la fenêtre
dalle('fenetre', arrondi(MW, MH, 0.07), 0.05, (MX, 0, MZ), ton=0.0, dens=0.32, aretes=0.85)
for k in range(3):  # les trois pastilles de la barre de titre
    c.cercle(f'pastille_{k}', (X0 + 0.1 + k * 0.08, F, Z1 - 0.1), 0.025, segments=10, plein=True, ton=0.3, dens=1.0, aretes=0.6)
ligne('sous_onglets', X0, X1, Z1 - 0.2, F, ton=0.2, dens=0.9)

# ---------- Les onglets (séquence, de gauche à droite) ----------
TX0 = X0 + 0.34
pas = (X1 - 0.08 - TX0) / N_ONGLETS
for i in range(N_ONGLETS):
    cx = TX0 + pas * (i + 0.5)
    w = pas - 0.01
    trapeze = [(-w / 2, -0.06), (w / 2, -0.06), (w / 2 - 0.018, 0.06), (-w / 2 + 0.018, 0.06)]
    dalle(f'onglet_{i}', trapeze, 0.03, (cx, F - 0.005, Z1 - 0.135), ton=0.35 if i == N_ONGLETS - 1 else 0.1,
          prm=1 + i / TOTAL, dens=1.2, aretes=0.8)

# ---------- La barre d'adresse ----------
ZA = Z1 - 0.31
c.fil('precedent', [(X0 + 0.14, F, ZA + 0.04), (X0 + 0.1, F, ZA), (X0 + 0.14, F, ZA - 0.04)], ton=0.3, dens=1.2)
c.fil('suivant', [(X0 + 0.2, F, ZA + 0.04), (X0 + 0.24, F, ZA), (X0 + 0.2, F, ZA - 0.04)], ton=0.15, dens=1.0)
c.fil('actualiser', c.courbe(lambda t: (X0 + 0.33 + 0.04 * math.cos(math.radians(40 + 290 * t)), F,
                                         ZA + 0.04 * math.sin(math.radians(40 + 290 * t))), 10), ton=0.3, dens=1.2)
c.fil('adresse_cadre', [(x + MX + 0.12, F, ZA + z) for x, z in arrondi(1.85, 0.13, 0.06)], ferme=True, ton=0.3, dens=1.1)
c.fil('cadenas', [(MX - 0.73, F, ZA - 0.03), (MX - 0.73, F, ZA + 0.02), (MX - 0.68, F, ZA + 0.02), (MX - 0.68, F, ZA - 0.03)],
      ferme=True, ton=0.3, dens=1.3)
ligne('adresse_texte', MX - 0.62, MX + 0.2, ZA, F, ton=0.3, dens=1.0)
ligne('sous_adresse', X0, X1, ZA - 0.1, F, ton=0.2, dens=0.9)

# ---------- La page de l'offre ----------
PX0, PZ1 = X0 + 0.14, ZA - 0.2
cadre('logo', PX0, PZ1 - 0.3, PX0 + 0.3, PZ1, F, ton=0.4, dens=1.2)
c.fil('logo_croix', [(PX0, F, PZ1 - 0.3), (PX0 + 0.3, F, PZ1)], ton=0.25, dens=0.8)
c.boite('titre_offre', (PX0 + 0.42 + 0.5, F - 0.01, PZ1 - 0.06), (1.0, 0.02, 0.07), ton=0.35, dens=1.0, aretes=0.7)
ligne('entreprise', PX0 + 0.42, PX0 + 0.95, PZ1 - 0.17, F, ton=0.3, dens=1.0)
for k, w in enumerate((0.26, 0.2, 0.32)):  # étiquettes : lieu, contrat, télétravail
    x = PX0 + 0.42 + sum((0.26, 0.2, 0.32)[:k]) + k * 0.05
    c.fil(f'etiquette_{k}', [(x + w / 2 + dx, F, PZ1 - 0.26 + dz) for dx, dz in arrondi(w, 0.07, 0.03, k=2)], ferme=True,
          ton=0.3, dens=1.1)
for k in range(6):  # le texte de l'annonce
    z = PZ1 - 0.45 - k * 0.1
    ligne(f'texte_{k}', PX0, PX0 + (1.45 if k % 3 != 2 else random.uniform(0.7, 1.1)), z, F, ton=0.2, dens=0.9)
c.fil('acc_postuler', [(PX0 + 1.15 + dx, F - 0.01, Z0 + 0.17 + dz) for dx, dz in arrondi(0.46, 0.15, 0.07, k=3)],
      ferme=True, ton=1, dens=1.4)
ligne('acc_postuler_mot', PX0 + 1.03, PX0 + 1.27, Z0 + 0.17, F - 0.01, ton=1, dens=1.4)
# Colonne de droite : les offres similaires.
for k in range(3):
    z = PZ1 - 0.08 - k * 0.36
    cadre(f'similaire_{k}', X1 - 0.6, z - 0.28, X1 - 0.14, z, F, ton=0.2, dens=0.8)
    ligne(f'similaire_{k}_titre', X1 - 0.54, X1 - 0.24, z - 0.08, F, ton=0.25, dens=0.8)
    ligne(f'similaire_{k}_ligne', X1 - 0.54, X1 - 0.32, z - 0.17, F, ton=0.15, dens=0.7)
c.boite('ascenseur', (X1 - 0.05, F, (ZA - 0.1 + Z0) / 2 + 0.25), (0.025, 0.02, 0.4), ton=0.2, dens=1.0, aretes=0.8)

# ---------- Les fenêtres en cascade, derrière (fin de la séquence) ----------
for k in range(1, N_FENETRES + 1):
    prm = 1 + (N_ONGLETS + k - 1) / TOTAL
    cx, cy, cz = MX - 0.11 * k, 0.15 * k, MZ + 0.15 * k
    dalle(f'fenetre_cascade_{k}', arrondi(MW, MH, 0.07), 0.04, (cx, cy, cz), ton=0.0, prm=prm, dens=0.22, aretes=0.9)
    yf = cy - 0.03
    ligne(f'fenetre_cascade_{k}_onglets', cx - MW / 2, cx + MW / 2, cz + MH / 2 - 0.2, yf, ton=0.2, prm=prm, dens=0.8)
    for j in range(5):  # quelques onglets esquissés sur leur barre
        x = cx - MW / 2 + 0.34 + j * 0.2
        c.fil(f'fenetre_cascade_{k}_onglet_{j}', [(x, yf, cz + MH / 2 - 0.2), (x + 0.02, yf, cz + MH / 2 - 0.08),
                                                  (x + 0.16, yf, cz + MH / 2 - 0.08), (x + 0.18, yf, cz + MH / 2 - 0.2)],
              ton=0.2, prm=prm, dens=0.8)

# ---------- Le curseur flèche, devant, qui vise « Postuler » ----------
FLECHE = [(0, 0), (0, -0.4), (0.1, -0.3), (0.17, -0.45), (0.23, -0.42), (0.16, -0.28), (0.28, -0.28)]
pointe = (PX0 + 1.2, -0.22, Z0 + 0.14)
dalle('acc_curseur', [(x * 0.95, z * 0.95) for x, z in FLECHE], 0.04, pointe, ton=1, dens=1.3, aretes=0.75)

racine = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
c.exporter(opts['sortie'] or os.path.join(racine, 'public', 'models', 'auj_radar.chr'),
           opts['controle'] or os.path.join(racine, 'blender', 'controle'))

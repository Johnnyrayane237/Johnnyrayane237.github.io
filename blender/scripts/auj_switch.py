# Aujourd'hui · l'aiguillage : le bac à courrier qu'on trie à la main, et qui déborde.
# Une corbeille rectangulaire en fil (échancrure à l'avant pour saisir les lettres), remplie d'enveloppes :
# d'abord à plat au fond, puis de travers au niveau du bord, puis en tas au-dessus, qui dépassent et débordent.
# L'une d'elles, debout au sommet du tas, est marquée « URGENT ».
# Toute la scène est inclinée de 18° vers le visiteur.
#
# Rôles (prm), convention du « geste manuel » :
#   0 la corbeille en fil
#   1,00 → 1,93 les 14 enveloppes, dans l'ordre d'arrivée (de bas en haut)
# Accent (ton 1) : l'enveloppe urgente (corps, rabat, mot « URGENT »).
import math
import os
import random
import sys

import bpy
from mathutils import Euler, Matrix, Vector

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import commun as c  # noqa: E402

opts = c.arguments()
c.reinit()
random.seed(1840)


def poser(points, centre, rot):
    """Même pose (rotation puis translation) que les pièces : pour les traits dessinés sur une enveloppe."""
    R = Euler(rot).to_matrix()
    return [tuple(R @ Vector(p) + Vector(centre)) for p in points]


def incliner_et_centrer(angle):
    """Bascule toute la scène vers le visiteur (rotation autour de X), puis la recentre sur l'origine."""
    R = Matrix.Rotation(angle, 4, 'X')
    obs = [ob for ob in bpy.context.scene.objects if ob.type == 'MESH']
    for ob in obs:
        ob.matrix_world = R @ ob.matrix_world
    pts = [ob.matrix_world @ v.co for ob in obs for v in ob.data.vertices]
    centre = Vector([(min(p[i] for p in pts) + max(p[i] for p in pts)) / 2 for i in range(3)])
    for ob in obs:
        ob.matrix_world = Matrix.Translation(-centre) @ ob.matrix_world


# ---------- La corbeille en fil ----------
W, D, H = 2.0, 1.2, 0.6
ECH_L, ECH_P = 0.6, 0.27  # demi-largeur et profondeur de l'échancrure avant


def bord_avant(x):
    """Hauteur du bord avant : plat aux coins, creusé au milieu pour saisir le courrier."""
    q = 1 - (x / ECH_L) ** 2
    return H - ECH_P * math.sqrt(q) if q > 0 else H


xs = [-W / 2 + W * i / 20 for i in range(21)]
anneau = [(x, -D / 2, bord_avant(x)) for x in xs] + [(W / 2, D / 2, H), (-W / 2, D / 2, H)]
c.fil('bord_haut', anneau, ferme=True, ton=0.2, dens=1.2)
c.fil('bord_bas', [(-W / 2, -D / 2, 0), (W / 2, -D / 2, 0), (W / 2, D / 2, 0), (-W / 2, D / 2, 0)], ferme=True, ton=0.2, dens=1.0)
c.fil('ceinture', [(-W / 2, -D / 2, 0.26), (W / 2, -D / 2, 0.26), (W / 2, D / 2, 0.26), (-W / 2, D / 2, 0.26)], ferme=True,
      ton=0.2, dens=0.8)
for k in range(13):  # barreaux verticaux, devant et derrière
    x = -0.9 + k * 0.15
    c.fil(f'barreau_avant_{k}', [(x, -D / 2, 0), (x, -D / 2, bord_avant(x))], dens=0.6)
    c.fil(f'barreau_arriere_{k}', [(x, D / 2, 0), (x, D / 2, H)], dens=0.5)
for k in range(7):  # barreaux des côtés
    y = -0.45 + k * 0.15
    for sx in (-1, 1):
        c.fil(f'barreau_cote_{sx}_{k}', [(sx * W / 2, y, 0), (sx * W / 2, y, H)], dens=0.5)
for k in range(5):  # le fond
    y = -0.4 + k * 0.2
    c.fil(f'fond_{k}', [(-W / 2, y, 0), (W / 2, y, 0)], dens=0.4)
for sx in (-1, 1):  # quatre montants d'angle, un peu plus épais
    for sy in (-1, 1):
        c.boite(f'montant_{sx}_{sy}', (sx * W / 2, sy * D / 2, H / 2), (0.035, 0.035, H), ton=0.2, dens=0.8, aretes=0.9)

# ---------- Les enveloppes (séquence d'arrivée) ----------
EW, ED, EE = 1.1, 0.68, 0.02  # largeur, hauteur, épaisseur d'une enveloppe (couchée : hauteur le long de Y)
# (x, y, z, rotation X, rotation Y, rotation Z) : à plat au fond, puis de travers au bord, puis en tas qui déborde.
POSES = [
    (-0.4, 0.15, 0.03, 0, 0, 0.1),
    (0.38, -0.08, 0.06, 0, 0, -0.15),
    (-0.3, -0.18, 0.1, 0, 0.03, -0.05),
    (0.42, 0.2, 0.14, 0, -0.04, 0.2),
    (0.0, 0.02, 0.19, 0, 0.05, 0.08),
    (-0.5, 0.05, 0.27, 0.06, -0.12, -0.2),        # elles atteignent le bord
    (0.55, -0.05, 0.33, -0.05, 0.16, 0.14),
    (-0.85, -0.1, 0.45, 0.1, -0.42, 0.3),         # dépasse à gauche, en biais
    (0.88, 0.08, 0.5, 0.0, 0.48, -0.35),          # dépasse à droite
    (0.05, -0.62, 0.42, 0.42, 0.05, 0.06),        # glisse par l'échancrure, vers le visiteur
    (-0.45, 0.22, 0.8, 1.05, -0.16, 0.2),         # le tas : elles se redressent
    (0.5, 0.26, 0.86, 1.15, 0.2, -0.24),
    (0.0, 0.3, 1.18, 1.36, 0.04, 0.05),           # l'urgente, debout au sommet du tas
    (-1.18, -0.12, 0.36, 0.18, -0.72, 0.42),      # une enveloppe glisse par-dessus le bord gauche
]
N = len(POSES)
URGENTE = 12
for i, (x, y, z, rx, ry, rz) in enumerate(POSES):
    prm = 1 + i / N
    centre, rot = (x, y, z), (rx, ry, rz)
    urgente = i == URGENTE
    ton = 1 if urgente else (0.0 if i % 3 else 0.15)
    pre = 'acc_' if urgente else ''
    c.boite(f'{pre}enveloppe_{i}', centre, (EW, ED, EE), rot=rot, ton=ton, prm=prm, dens=0.55 if urgente else 0.6, aretes=0.82)
    h = EE / 2 + 0.005
    rabat = [(-EW / 2 + 0.03, ED / 2 - 0.03, h), (0, -0.04, h), (EW / 2 - 0.03, ED / 2 - 0.03, h)]
    c.fil(f'{pre}enveloppe_{i}_rabat', poser(rabat, centre, rot), ton=ton if urgente else 0.35, prm=prm, dens=1.1)
    if urgente:
        c.texte('acc_urgent', 'URGENT', poser([(0, -0.17, h)], centre, rot)[0], taille=0.17, rot=rot, ton=1, prm=prm, dens=1.3)
    else:  # l'adresse : deux petites lignes
        for k, (yy, ll) in enumerate(((-0.12, 0.42), (-0.2, 0.3))):
            c.fil(f'enveloppe_{i}_adresse_{k}', poser([(-0.1, yy, h), (-0.1 + ll, yy, h)], centre, rot), ton=0.3, prm=prm, dens=0.8)

incliner_et_centrer(math.radians(18))

racine = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
c.exporter(opts['sortie'] or os.path.join(racine, 'public', 'models', 'auj_switch.chr'),
           opts['controle'] or os.path.join(racine, 'blender', 'controle'))

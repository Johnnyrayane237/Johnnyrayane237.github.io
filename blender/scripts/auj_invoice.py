# Aujourd'hui · la facture : le carnet de factures rempli et tamponné à la main.
# Un carnet ouvert (à gauche la souche déjà tamponnée « PAYÉ », à droite la facture en cours : en-tête,
# tableau de lignes, total encadré), un tampon encreur levé au-dessus de la page, le tampon-encreur plat
# à côté, et à droite les lignes de factures qui s'empilent.
# Toute la scène de bureau est inclinée de 32° vers le visiteur, pour qu'on lise les pages.
#
# Rôles (prm), convention du « geste manuel » :
#   0 carnet, encreur
#   1,00 → 1,92 les 12 lignes de facture empilées à droite, de bas en haut
#   4 le tampon (poignée, socle, semelle), modélisé en position HAUTE : il descend frapper la page
# Accent (ton 1) : la semelle encrée du tampon, le feutre de l'encreur, l'empreinte « PAYÉ ».
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
random.seed(1903)


def poser(points, centre, rot):
    """Même pose (rotation puis translation) que les pièces : pour les traits dessinés sur une page."""
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


def rect(x0, y0, x1, y1, h):
    return [(x0, y0, h), (x1, y0, h), (x1, y1, h), (x0, y1, h), (x0, y0, h)]


# ---------- Le carnet ouvert ----------
BX, BY = -0.38, 0.12         # pli central du carnet
PW, PD, EP = 1.0, 1.25, 0.05  # une page : largeur, profondeur, épaisseur du bloc de feuillets
c.boite('couverture', (BX, BY, 0.015), (2 * PW + 0.08, PD + 0.08, 0.03), ton=0.1, dens=0.5, aretes=0.85)
c.cylindre('dos', (BX, BY, 0.05), 0.035, PD + 0.04, rot=(math.pi / 2, 0, 0), segments=10, ton=0.1, dens=0.8, aretes=0.6)
PAGES = {}
for cote, sx in (('gauche', -1), ('droite', 1)):
    centre = (BX + sx * (PW / 2 + 0.01), BY, 0.03 + EP / 2 + 0.01)
    rot = (0, sx * 0.06, 0)  # les pages remontent vers le pli
    c.boite(f'page_{cote}', centre, (PW, PD, EP), rot=rot, dens=0.42, aretes=0.85)
    PAGES[cote] = (centre, rot)
H = EP / 2 + 0.006  # hauteur des traits au-dessus de la page


def trait(nom, pts, cote, **kw):
    centre, rot = PAGES[cote]
    kw.setdefault('dens', 0.9)
    kw.setdefault('ton', 0.35)
    return c.fil(nom, poser(pts, centre, rot), **kw)


def mot(nom, corps, x, y, cote, taille, **kw):
    centre, rot = PAGES[cote]
    return c.texte(nom, corps, poser([(x, y, H)], centre, rot)[0], taille=taille, rot=rot, **kw)


# Page de droite : la facture en cours.
mot('titre_facture', 'FACTURE', -0.12, 0.45, 'droite', 0.15, ton=0.45, dens=1.0)
trait('client_0', [(0.12, 0.47, H), (0.4, 0.47, H)], 'droite')
trait('client_1', [(0.12, 0.39, H), (0.34, 0.39, H)], 'droite')
trait('tableau_entete', rect(-0.4, 0.22, 0.4, 0.3, H), 'droite', ton=0.5)
trait('tableau_colonne', [(0.16, 0.22, H), (0.16, -0.26, H)], 'droite', ton=0.3)
for k in range(5):
    y = 0.14 - k * 0.09
    trait(f'ligne_{k}', [(-0.38, y, H), (-0.38 + random.uniform(0.3, 0.48), y, H)], 'droite')
    trait(f'montant_{k}', [(0.22, y, H), (0.38, y, H)], 'droite')
trait('total_cadre', rect(0.02, -0.46, 0.42, -0.32, H), 'droite', ton=0.7, dens=1.2)
mot('total_mot', 'TOTAL', 0.13, -0.39, 'droite', 0.06, ton=0.7, dens=1.0)
trait('total_montant', [(0.25, -0.39, H), (0.38, -0.39, H)], 'droite', ton=0.7, dens=1.2)

# Page de gauche : la souche de la facture précédente, déjà tamponnée.
for k in range(6):
    y = 0.42 - k * 0.11
    trait(f'souche_{k}', [(-0.38, y, H), (-0.38 + random.uniform(0.35, 0.7), y, H)], 'gauche')
trait('souche_total', rect(0.0, -0.3, 0.4, -0.18, H), 'gauche', ton=0.6)
for k in range(9):  # les pointillés de la perforation, le long du pli
    y = -0.5 + k * 0.125
    trait(f'perforation_{k}', [(0.4, y, H), (0.4, y + 0.06, H)], 'gauche', ton=0.25, dens=0.7)
centre, rot = PAGES['gauche']
c.fil('acc_empreinte_cadre', poser(rect(-0.36, -0.5, 0.02, -0.3, H + 0.002), centre, rot), ton=1, dens=1.1)
mot('acc_empreinte_paye', 'PAYÉ', -0.17, -0.4, 'gauche', 0.12, ton=1, dens=1.1)

# ---------- Le tampon, levé au-dessus de la page de droite (va-et-vient) ----------
# Le geste descend de 0,24 (unités du site, ≈ 0,22 ici) à la verticale ; la scène étant basculée de 32°,
# la semelle est levée de 0,19 le long de l'axe du tampon : au bas de sa course, elle touche juste le papier.
TX, TY = BX + 0.4, BY - 0.14
Z0 = 0.03 + EP + 0.01 + 0.19
c.boite('acc_tampon_semelle', (TX, TY, Z0 + 0.015), (0.5, 0.32, 0.03), ton=1, prm=4, dens=1.3, aretes=0.7)
c.boite('tampon_socle', (TX, TY, Z0 + 0.03 + 0.08), (0.54, 0.36, 0.16), ton=0.2, prm=4, dens=0.9, aretes=0.85)
c.cylindre('tampon_col', (TX, TY, Z0 + 0.19 + 0.21), 0.065, 0.42, segments=12, rayon2=0.05, ton=0.2, prm=4, dens=1.0, aretes=0.6)
c.sphere('tampon_pommeau', (TX, TY, Z0 + 0.61 + 0.13), 0.19, segments=16, anneaux=8, echelle=(1, 1, 0.85), ton=0.2, prm=4,
         dens=1.0, aretes=0.4)

# ---------- Le tampon-encreur plat, à droite devant ----------
EX, EY = 1.12, -0.35
c.boite('encreur_boite', (EX, EY, 0.035), (0.6, 0.38, 0.07), ton=0.15, dens=0.8, aretes=0.85)
c.plaque('acc_encreur_feutre', (EX, EY, 0.073), 0.5, 0.28, rot=(math.pi / 2, 0, 0), ton=1, dens=0.9, aretes=0.5)

# ---------- Les lignes de factures qui s'empilent, à droite au fond ----------
N = 12
for i in range(N):
    prm = 1 + i / N
    centre = (1.12 + random.uniform(-0.04, 0.04), 0.33 + random.uniform(-0.03, 0.03), 0.012 + i * 0.095)
    rot = (0, 0, random.uniform(-0.12, 0.12))
    c.boite(f'ligne_facture_{i}', centre, (0.62, 0.24, 0.016), rot=rot, prm=prm, dens=0.6, aretes=0.85)
    h = 0.012
    c.fil(f'ligne_facture_{i}_libelle', poser([(-0.26, 0.0, h), (random.uniform(-0.05, 0.06), 0.0, h)], centre, rot),
          ton=0.4, prm=prm, dens=1.0)
    c.fil(f'ligne_facture_{i}_montant', poser([(0.13, 0.0, h), (0.27, 0.0, h)], centre, rot), ton=0.6, prm=prm, dens=1.0)

incliner_et_centrer(math.radians(32))

racine = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
c.exporter(opts['sortie'] or os.path.join(racine, 'public', 'models', 'auj_invoice.chr'),
           opts['controle'] or os.path.join(racine, 'blender', 'controle'))

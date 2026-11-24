# Aujourd'hui · les messages : la pile de SMS non lus qu'il faut traiter un par un, à la main.
# Un smartphone posé debout ; devant lui s'empilent des bulles de messages et quelques enveloppes,
# de plus en plus haut ; dans le coin, la pastille de notification « 12 ».
#
# Rôles (prm), convention du « geste manuel » :
#   0 le smartphone (coque, contour d'écran, en-tête de conversation)
#   1,00 → 1,92 les 12 messages, de bas en haut (bulle + ses lignes + son point de non-lu partagent le même rang)
#   3 la pastille « 12 » (ton 1), qui pulse lentement
import math
import os
import random
import sys

import bmesh
from mathutils import Euler, Vector

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import commun as c  # noqa: E402

opts = c.arguments()
c.reinit()
random.seed(1207)


def arrondi(w, h, r, k=4):
    """Contour (x, z) d'un rectangle aux coins arrondis, centré, parcouru dans le sens direct depuis le bas à droite."""
    pts = []
    for cx, cz, a0 in ((w / 2 - r, -h / 2 + r, -90), (w / 2 - r, h / 2 - r, 0), (-w / 2 + r, h / 2 - r, 90), (-w / 2 + r, -h / 2 + r, 180)):
        for i in range(k + 1):
            a = math.radians(a0 + 90 * i / k)
            pts.append((cx + r * math.cos(a), cz + r * math.sin(a)))
    return pts


def dalle(nom, contour, ep, centre, rot=(0, 0, 0), **kw):
    """Contour plan (x, z) extrudé sur l'épaisseur ep (axe Y) : une plaque épaisse, face avant vers le visiteur."""
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


def poser(points, centre, rot):
    """Applique la même pose (rotation puis translation) qu'aux pièces : pour les fils dessinés sur une bulle."""
    R = Euler(rot).to_matrix()
    return [tuple(R @ Vector(p) + Vector(centre)) for p in points]


# ---------- Le smartphone, debout ----------
PX, PY, PZ = 0.15, 0.45, -0.05
PW, PH = 1.42, 2.6
dalle('telephone', arrondi(PW, PH, 0.2), 0.1, (PX, PY, PZ), dens=0.45, aretes=0.85)
FACE = PY - 0.058  # juste devant la vitre
ecran = [(PX + x, FACE, PZ + z) for x, z in arrondi(PW - 0.14, PH - 0.22, 0.13)]
c.fil('ecran_contour', ecran, ferme=True, ton=0.2, dens=1.1)
c.fil('encoche', [(PX - 0.12, FACE, PZ + 1.13), (PX + 0.12, FACE, PZ + 1.13)], dens=1.6)
c.fil('barre_accueil', [(PX - 0.22, FACE, PZ - 1.17), (PX + 0.22, FACE, PZ - 1.17)], dens=1.2)
# Boutons sur les tranches.
c.boite('bouton_marche', (PX + PW / 2 + 0.015, PY, PZ + 0.55), (0.03, 0.06, 0.26), dens=1.0, aretes=0.9)
for k, z in enumerate((0.7, 0.42)):
    c.boite(f'bouton_volume_{k}', (PX - PW / 2 - 0.015, PY, PZ + z), (0.03, 0.06, 0.18), dens=1.0, aretes=0.9)
# Le haut de l'écran, encore visible : barre d'état et en-tête de la conversation.
c.fil('heure', [(PX - 0.48, FACE, PZ + 1.06), (PX - 0.3, FACE, PZ + 1.06)], ton=0.3, dens=1.2)
c.fil('batterie', [(PX + 0.34, FACE, PZ + 1.03), (PX + 0.48, FACE, PZ + 1.03), (PX + 0.48, FACE, PZ + 1.09),
                   (PX + 0.34, FACE, PZ + 1.09)], ferme=True, ton=0.3, dens=1.2)
c.cercle('avatar', (PX - 0.34, FACE, PZ + 0.86), 0.08, segments=14, ton=0.3, dens=1.2)
c.fil('nom_contact', [(PX - 0.2, FACE, PZ + 0.88), (PX + 0.25, FACE, PZ + 0.88)], ton=0.3, dens=1.2)
c.fil('en_tete', [(PX - 0.56, FACE, PZ + 0.74), (PX + 0.56, FACE, PZ + 0.74)], ton=0.15, dens=0.9)

# ---------- La pile de messages, devant le téléphone, de bas en haut ----------
N = 12
ENVELOPPES = {2, 6, 9}
for i in range(N):
    prm = 1 + i / N
    recu = i % 2 == 0
    # La pile monte jusqu'à mi-hauteur du téléphone : le haut de l'écran et la pastille restent dégagés.
    z = -1.1 + i * 0.108
    y = 0.24 - i * 0.05
    x = PX + (-0.3 if recu else 0.3) + random.uniform(-0.06, 0.06)
    rot = (-0.12, random.uniform(-0.1, 0.1), 0)  # appuyée vers le téléphone, un peu de travers
    centre = (x, y, z)
    av = -0.04  # devant la face avant de la plaque (épaisseur 0,06)
    if i in ENVELOPPES:
        w, h = 1.0, 0.56
        dalle(f'enveloppe_{i}', arrondi(w, h, 0.03, k=1), 0.05, centre, rot, ton=0.15, prm=prm, dens=0.7, aretes=0.8)
        rabat = [(-w / 2 + 0.04, av, h / 2 - 0.04), (0, av, -0.04), (w / 2 - 0.04, av, h / 2 - 0.04)]
        fond = [(-w / 2 + 0.04, av, -h / 2 + 0.04), (0, av, 0.02), (w / 2 - 0.04, av, -h / 2 + 0.04)]
        c.fil(f'enveloppe_{i}_rabat', poser(rabat, centre, rot), prm=prm, dens=1.3)
        c.fil(f'enveloppe_{i}_fond', poser(fond, centre, rot), prm=prm, dens=0.9)
        continue
    w, h = random.uniform(0.85, 1.15), random.uniform(0.28, 0.34)
    contour = arrondi(w, h, 0.12)
    if recu:  # la pointe de la bulle part du coin bas gauche (message reçu) ou bas droit (message envoyé)
        contour += [(-w / 2 + 0.02, -h / 2 - 0.13), (-w / 2 + 0.28, -h / 2)]
    else:
        contour = [(w / 2 - 0.28, -h / 2), (w / 2 - 0.02, -h / 2 - 0.13)] + contour
    dalle(f'bulle_{i}', contour, 0.06, centre, rot, ton=0.0 if recu else 0.3, prm=prm, dens=0.6, aretes=0.8)
    for k, (zl, part) in enumerate(((0.06, 0.78), (-0.06, random.uniform(0.35, 0.6)))):
        ligne = [(-w / 2 + 0.13, av, zl), (-w / 2 + 0.13 + (w - 0.36) * part, av, zl)]
        c.fil(f'bulle_{i}_ligne_{k}', poser(ligne, centre, rot), ton=0.25, prm=prm, dens=1.0)
    if recu:  # le point « non lu »
        pt = poser([(w / 2 - 0.12, av - 0.005, 0.0)], centre, rot)[0]
        c.cercle(f'acc_non_lu_{i}', pt, 0.04, rot=rot, segments=10, plein=True, ton=1, prm=prm, dens=1.4, aretes=0.5)

# ---------- La pastille de notification « 12 », à cheval sur le coin haut droit ----------
BX, BY, BZ = PX + PW / 2 - 0.06, PY - 0.12, PZ + PH / 2 - 0.06
c.cylindre('acc_pastille', (BX, BY, BZ), 0.28, 0.07, rot=(math.pi / 2, 0, 0), segments=20, ton=1, prm=3, dens=0.9, aretes=0.85)
c.texte('acc_pastille_12', '12', (BX, BY - 0.045, BZ - 0.005), taille=0.31, ton=1, prm=3, dens=1.6)

racine = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
c.exporter(opts['sortie'] or os.path.join(racine, 'public', 'models', 'auj_sms.chr'),
           opts['controle'] or os.path.join(racine, 'blender', 'controle'))

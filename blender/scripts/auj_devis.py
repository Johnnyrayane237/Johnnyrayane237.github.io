# Aujourd'hui · le devis : la pile de devis tapés et recalculés à la main.
# Une pile de feuilles légèrement décalées (chacune avec ses lignes et son total encadré), une calculatrice
# de bureau (boîtier en pente, écran, 4 × 4 touches) et un stylo posé devant.
# Toute la scène de bureau est inclinée de 20° vers le visiteur, pour qu'on lise le dessus des feuilles.
#
# Rôles (prm), convention du « geste manuel » :
#   0 calculatrice, stylo
#   1,00 → 1,93 les 14 feuilles, de bas en haut (chaque feuille et ses lignes partagent le même rang)
# Accent (ton 1) : le stylo et le résultat affiché par la calculatrice.
import math
import os
import random
import sys

import bmesh
import bpy
from mathutils import Euler, Matrix, Vector

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import commun as c  # noqa: E402

opts = c.arguments()
c.reinit()
random.seed(2604)


def loft(nom, anneaux, ferme=True, **kw):
    """Relie des boucles de même nombre de sommets par des quadrilatères, et bouche les deux bouts."""
    bm = bmesh.new()
    vs = [[bm.verts.new(p) for p in a] for a in anneaux]
    n = len(anneaux[0])
    for A, B in zip(vs, vs[1:]):
        for j in range(n):
            bm.faces.new((A[j], A[(j + 1) % n], B[(j + 1) % n], B[j]))
    if ferme:
        bm.faces.new(vs[0])
        bm.faces.new(vs[-1][::-1])
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces[:])
    return c._objet(nom, bm, **kw)


def poser(points, centre, rot):
    """Même pose (rotation puis translation) que les pièces : pour les lignes tracées sur une feuille."""
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


# ---------- La pile de devis (séquence de bas en haut) ----------
N = 14
FX, FY = -0.62, 0.05  # centre de la pile sur le bureau
FW, FD = 1.5, 1.05    # format de la feuille (paysage vu d'en haut : largeur × profondeur)
for i in range(N):
    prm = 1 + i / N
    derive = 0.3 + 0.7 * i / N  # plus on monte, plus la pile est de travers
    centre = (FX + random.uniform(-0.11, 0.11) * derive, FY + random.uniform(-0.08, 0.08) * derive, 0.02 + i * 0.122)
    rot = (0, 0, random.uniform(-0.15, 0.15) * derive)
    c.boite(f'feuille_{i}', centre, (FW, FD, 0.02), rot=rot, ton=0.0, prm=prm, dens=0.42, aretes=0.82)
    h = 0.015  # les lignes sont gravées juste au-dessus de la feuille
    traits = [
        # en-tête : le bloc de l'entreprise, puis le titre
        [(-0.64, 0.42, h), (-0.3, 0.42, h), (-0.3, 0.3, h), (-0.64, 0.3, h), (-0.64, 0.42, h)],
        [(0.18, 0.38, h), (0.62, 0.38, h)],
    ]
    for k in range(4):  # les lignes de prestation et leur montant
        y = 0.16 - k * 0.12
        traits.append([(-0.64, y, h), (-0.64 + random.uniform(0.55, 0.85), y, h)])
        traits.append([(0.36, y, h), (0.62, y, h)])
    traits.append([(0.22, -0.32, h), (0.64, -0.32, h), (0.64, -0.44, h), (0.22, -0.44, h), (0.22, -0.32, h)])  # total encadré
    for k, t in enumerate(traits):
        c.fil(f'feuille_{i}_trait_{k}', poser(t, centre, rot), ton=0.35 if k != len(traits) - 1 else 0.6, prm=prm, dens=0.9)

# ---------- La calculatrice de bureau : un boîtier en pente, écran au fond, 4 × 4 touches ----------
CX, CY = 0.92, -0.05
PROFIL = [(-0.62, 0.0), (0.62, 0.0), (0.62, 0.46), (-0.62, 0.1)]  # (y, z) : avant bas, arrière bas, arrière haut, avant haut
loft('calculatrice', [[(CX - 0.52, CY + y, z) for y, z in PROFIL], [(CX + 0.52, CY + y, z) for y, z in PROFIL]],
     ton=0.1, dens=0.6, aretes=0.8)
A = math.atan2(0.36, 1.24)  # pente du dessus


def dessus(x, y, h):
    """Point du dessus du boîtier, à l'abscisse x et à la profondeur y (relatives), à h au-dessus de la surface."""
    z = 0.1 + (y + 0.62) * math.tan(A)
    return (CX + x, CY + y - h * math.sin(A), z + h * math.cos(A))


c.boite('ecran', dessus(0, 0.4, 0.02), (0.84, 0.26, 0.04), rot=(A, 0, 0), ton=0.4, dens=0.9, aretes=0.8)
c.texte('acc_resultat', '1 250,00', dessus(0.08, 0.4, 0.045), taille=0.13, rot=(A, 0, 0), ton=1, dens=1.4)
for r in range(4):
    for k in range(4):
        x = -0.3 + k * 0.2
        y = 0.12 - r * 0.17
        c.boite(f'touche_{r}_{k}', dessus(x, y, 0.025), (0.15, 0.12, 0.05), rot=(A, 0, 0),
                ton=0.25 if k == 3 else 0.0, dens=1.0, aretes=0.8)

# ---------- Le stylo, posé en biais devant la pile ----------
SA = math.radians(10)  # orientation du stylo sur le bureau
u = Vector((math.cos(SA), math.sin(SA), 0))
P0 = Vector((-0.55, -0.72, 0.05))  # milieu du corps
rot_stylo = (0, math.pi / 2, SA)   # axe Z du cylindre couché le long de u
c.cylindre('acc_stylo_corps', tuple(P0), 0.045, 1.0, rot=rot_stylo, segments=12, ton=1, dens=1.0, aretes=0.5)
c.cylindre('acc_stylo_cone', tuple(P0 + u * 0.58), 0.045, 0.16, rayon2=0.008, rot=rot_stylo, segments=12, ton=1, dens=1.2, aretes=0.5)
c.cylindre('acc_stylo_capuchon', tuple(P0 - u * 0.42), 0.052, 0.3, rot=rot_stylo, segments=12, ton=1, dens=1.0, aretes=0.6)
c.boite('acc_stylo_agrafe', tuple(P0 - u * 0.4 + Vector((0, 0, 0.06))), (0.26, 0.025, 0.015), rot=(0, 0, SA), ton=1, dens=1.2, aretes=0.8)

incliner_et_centrer(math.radians(20))

racine = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
c.exporter(opts['sortie'] or os.path.join(racine, 'public', 'models', 'auj_devis.chr'),
           opts['controle'] or os.path.join(racine, 'blender', 'controle'))

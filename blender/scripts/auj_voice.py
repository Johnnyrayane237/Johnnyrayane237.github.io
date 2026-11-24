# Aujourd'hui · la voix : le téléphone de bureau qui sonne et qu'il faut décrocher à la main.
# Un socle trapézoïdal (clavier 4 × 3, petit écran, voyant d'appel), le combiné posé sur sa fourche,
# son cordon spiralé, et trois arcs de sonnerie de chaque côté.
#
# Rôles (prm), convention du « geste manuel » :
#   0 socle, clavier, fourche, cordon
#   1,00 → 1,83 arcs de sonnerie, dans l'ordre : du plus proche au plus lointain, gauche puis droite (6 éléments)
#   2 le combiné (il vibre quand ça sonne)
#   3 le voyant d'appel (ton 1)
import math
import os
import sys

import bmesh
from mathutils import Vector

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import commun as c  # noqa: E402

opts = c.arguments()
c.reinit()


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


def ressort(nom, chemin, tours, rayon, par_tour=10, **kw):
    """Cordon spiralé : une hélice qui suit la courbe « chemin » (t ∈ [0, 1]), repère transporté le long du trajet."""
    n = tours * par_tour
    pts = [Vector(chemin(i / n)) for i in range(n + 1)]
    t0 = (pts[1] - pts[0]).normalized()
    nrm = t0.cross(Vector((0, -1, 0))).normalized()
    sortie = []
    for i, p in enumerate(pts):
        t = (pts[min(i + 1, n)] - pts[max(i - 1, 0)]).normalized()
        nrm = (nrm - t * nrm.dot(t)).normalized()  # transport parallèle : pas de vrille brutale
        b = t.cross(nrm)
        a = math.tau * tours * i / n
        sortie.append(tuple(p + rayon * (math.cos(a) * nrm + math.sin(a) * b)))
    return c.fil(nom, sortie, **kw)


# ---------- Le socle : un profil latéral (pente du clavier + bosse de la fourche), en trapèze vu de face ----------
PROFIL = [(-0.66, -1.25), (0.62, -1.25), (0.56, -0.38), (0.10, -0.38), (0.06, -0.66), (-0.50, -0.98)]  # (y, z)


def demi_largeur(z):
    return 1.2 - 0.4 * (z + 1.25) / 0.87


loft('socle', [[(-demi_largeur(z), y, z) for y, z in PROFIL],
               [(demi_largeur(z), y, z) for y, z in PROFIL]], dens=0.5, aretes=0.8)

# ---------- Le clavier 4 × 3, posé sur la pente avant ----------
P6 = Vector((0, -0.50, -0.98))
PENTE = Vector((0, 0.56, 0.32))
A = math.atan2(PENTE.z, PENTE.y)
D = PENTE.normalized()
N = Vector((0, -math.sin(A), math.cos(A)))


def sur_pente(x, s, h):
    """Point de la pente : à s le long de la pente (depuis l'arête avant), à h au-dessus de sa surface."""
    p = P6 + D * s + N * h
    return (x, p.y, p.z)


for r in range(4):  # r = 0 : rangée « 1 2 3 », la plus haute
    s = 0.535 - r * 0.145
    for k, x in enumerate((-0.32, 0.0, 0.32)):
        c.boite(f'touche_{r}_{k}', sur_pente(x, s, 0.025), (0.22, 0.11, 0.05), rot=(A, 0, 0), dens=1.2, aretes=0.75)
# Trois touches de fonction à droite, une grille de haut-parleur à gauche.
for r in range(3):
    c.boite(f'fonction_{r}', sur_pente(0.76, 0.5 - r * 0.17, 0.02), (0.26, 0.08, 0.04), rot=(A, 0, 0), dens=1.0, aretes=0.8)
for r in range(5):
    s = 0.12 + r * 0.1
    c.fil(f'grille_{r}', [sur_pente(-0.92, s, 0.012), sur_pente(-0.56, s, 0.012)], dens=1.0)

# ---------- La bosse de la fourche : petit écran et voyant d'appel sur sa face avant ----------
INCLIN = -math.atan2(0.04, 0.28)  # la face avant de la bosse penche légèrement vers l'arrière
c.plaque('ecran', (-0.14, 0.066, -0.52), 0.72, 0.15, rot=(INCLIN, 0, 0), ton=0.45, dens=1.0, aretes=0.7)
c.fil('ecran_texte', [(-0.42, 0.058, -0.52), (0.02, 0.058, -0.52)], ton=0.6, dens=0.8)
c.sphere('acc_voyant_appel', (0.55, 0.058, -0.52), 0.045, segments=10, anneaux=6, ton=1, prm=3, dens=1.4, aretes=0.3)

# Les deux fourches : deux ergots de chaque côté, sur le dessus de la bosse.
for sx in (-1, 1):
    for y in (0.2, 0.46):
        c.boite(f'fourche_{sx}_{y}', (sx * 0.55, y, -0.32), (0.08, 0.06, 0.12), dens=1.0, aretes=0.9)

# ---------- Le combiné, posé sur la fourche (il vibre) ----------
# Une poignée légèrement cambrée dont les bouts plongent vers deux gros cornets (écouteur, micro) qui débordent du socle.
YC = 0.33
X_SECTIONS = (-1.0, -0.85, -0.55, -0.2, 0.2, 0.55, 0.85, 1.0)


def section(x):
    zc = -0.25 if abs(x) > 0.9 else -0.17 + 0.05 * (1 - (x / 0.85) ** 2)
    return [(x, YC + 0.14 * math.cos(math.tau * j / 12), zc + 0.1 * math.sin(math.tau * j / 12)) for j in range(12)]


loft('combine_poignee', [section(x) for x in X_SECTIONS], prm=2, dens=0.9, aretes=0.45)
for sx in (-1, 1):
    c.cylindre(f'combine_cornet_{sx}', (sx * 1.02, YC, -0.36), 0.25, 0.26, rayon2=0.15, segments=16,
               prm=2, dens=0.9, aretes=0.6)


# ---------- Le cordon spiralé : du bas du micro jusqu'au flanc gauche du socle ----------
def trajet(t):
    a, m, b = Vector((-1.10, 0.28, -0.50)), Vector((-1.45, -0.10, -0.70)), Vector((-1.09, 0.05, -1.02))
    u = 1 - t
    return u * u * a + 2 * u * t * m + t * t * b


ressort('cordon', trajet, 13, 0.045, ton=0.15, dens=1.4)

# ---------- Les arcs de sonnerie, au-dessus du combiné (séquence) ----------
O = (0.0, YC, -0.15)
ARCS = []
for k, r in enumerate((0.6, 0.95, 1.3)):
    for cote, (a0, a1) in enumerate(((112, 158), (22, 68))):  # gauche, puis droite
        ARCS.append((r, a0, a1, f'{k}_{"g" if cote == 0 else "d"}'))
for j, (r, a0, a1, nom) in enumerate(ARCS):
    pts = c.courbe(lambda t: (O[0] + r * math.cos(math.radians(a0 + (a1 - a0) * t)), O[1],
                              O[2] + r * math.sin(math.radians(a0 + (a1 - a0) * t))), 14)
    c.fil(f'acc_arc_{nom}', pts, ton=1, prm=1 + j / len(ARCS), dens=1.3)

racine = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
c.exporter(opts['sortie'] or os.path.join(racine, 'public', 'models', 'auj_voice.chr'),
           opts['controle'] or os.path.join(racine, 'blender', 'controle'))

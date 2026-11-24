# Aujourd'hui · le film : la table de montage, où tout se prépare et se colle à la main.
# Au fond, le tableau de storyboard de 6 cases (2 × 3) qui se dessinent l'une après l'autre ; sur la table,
# deux bobines de film à rayons sur leurs supports, un bout de pellicule qui s'échappe, et la claquette
# dont le bras est levé, prêt à claquer.
#
# Rôles (prm), convention du « geste manuel » :
#   0 table, tableau, bobines, pellicule, corps de la claquette
#   1,00 → 1,92 le storyboard : pour chaque case, son cadre puis son dessin (12 éléments)
#   4 le bras de la claquette, modélisé en position HAUTE (il descend claquer)
# Accent (ton 1) : les bandes de la claquette.
import math
import os
import random
import sys

import bmesh
from mathutils import Vector

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import commun as c  # noqa: E402

opts = c.arguments()
c.reinit()
random.seed(1895)


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


def main_levee(pts, n=4, j=0.006):
    """Trait tremblé, comme tracé au feutre sur le storyboard."""
    sortie = []
    for (x0, z0), (x1, z1) in zip(pts, pts[1:]):
        for s in range(n):
            t = s / n
            sortie.append((x0 + (x1 - x0) * t + random.uniform(-j, j), z0 + (z1 - z0) * t + random.uniform(-j, j)))
    sortie.append(pts[-1])
    return sortie


# ---------- La table ----------
TABLE = -0.91  # dessus de la table
c.boite('table_plateau', (0, 0.0, TABLE - 0.04), (3.0, 1.1, 0.08), ton=0.1, dens=0.45, aretes=0.85)
for sx in (-1, 1):
    for sy in (-1, 1):
        c.boite(f'table_pied_{sx}_{sy}', (sx * 1.38, sy * 0.45, TABLE - 0.08 - 0.22), (0.07, 0.07, 0.44), ton=0.1, dens=0.8, aretes=0.9)

# ---------- Le tableau de storyboard, debout au fond ----------
SY = 0.45
c.boite('tableau', (0, SY, 0.79), (2.7, 0.04, 1.18), ton=0.05, dens=0.3, aretes=0.9)
for sx in (-1, 1):
    c.boite(f'tableau_montant_{sx}', (sx * 1.15, SY + 0.04, (TABLE + 0.2) / 2), (0.06, 0.05, 0.2 - TABLE), ton=0.1, dens=0.8, aretes=0.9)
F = SY - 0.03  # devant la face du tableau
CASES = [(-0.87, 1.06), (0.0, 1.06), (0.87, 1.06), (-0.87, 0.53), (0.0, 0.53), (0.87, 0.53)]
CW, CH = 0.78, 0.46


def croquis(cx, cz, k):
    """Le dessin de la case k : des traits en coordonnées relatives au centre de la case."""
    if k == 0:  # plan d'ensemble : l'horizon, une colline, le soleil
        sol = [[(-0.34, -0.06), (0.34, -0.06)], [(-0.34, -0.06), (-0.1, 0.06), (0.1, -0.06)]]
        soleil = [(0.2 + 0.06 * math.cos(a), 0.11 + 0.06 * math.sin(a)) for a in (math.tau * i / 12 for i in range(13))]
        traits = sol + [soleil]
    elif k == 1:  # un personnage
        tete = [(0.05 * math.cos(a), 0.1 + 0.05 * math.sin(a)) for a in (math.tau * i / 12 for i in range(13))]
        traits = [tete, [(0, 0.05), (0, -0.08)], [(-0.08, 0.0), (0, 0.03), (0.08, 0.0)], [(-0.06, -0.18), (0, -0.08), (0.06, -0.18)]]
    elif k == 2:  # deux personnages face à face
        traits = []
        for s in (-1, 1):
            tete = [(s * 0.15 + 0.045 * math.cos(a), 0.08 + 0.045 * math.sin(a)) for a in (math.tau * i / 12 for i in range(13))]
            traits += [tete, [(s * 0.15, 0.035), (s * 0.15, -0.09)], [(s * 0.21, -0.19), (s * 0.15, -0.09), (s * 0.09, -0.19)]]
    elif k == 3:  # gros plan : un visage
        visage = [(0.13 * math.cos(a), 0.17 * math.sin(a)) for a in (math.tau * i / 16 for i in range(17))]
        traits = [visage, [(-0.06, 0.04), (-0.03, 0.04)], [(0.03, 0.04), (0.06, 0.04)], [(-0.05, -0.07), (0.0, -0.09), (0.05, -0.07)]]
    elif k == 4:  # mouvement de caméra : une flèche courbe
        arc = [(-0.28 + 0.56 * t, -0.08 + 0.18 * math.sin(t * math.pi)) for t in (i / 10 for i in range(11))]
        traits = [arc, [(0.2, 0.02), (0.28, -0.08), (0.16, -0.1)]]
    else:  # le plan final : une maison
        traits = [[(-0.16, -0.16), (-0.16, 0.04), (0.0, 0.16), (0.16, 0.04), (0.16, -0.16), (-0.16, -0.16)],
                  [(-0.04, -0.16), (-0.04, -0.04), (0.04, -0.04), (0.04, -0.16)]]
    return [[(cx + x, F - 0.002, cz + z) for x, z in main_levee(t)] for t in traits]


for k, (cx, cz) in enumerate(CASES):
    prm_cadre, prm_dessin = 1 + (2 * k) / 12, 1 + (2 * k + 1) / 12
    x0, x1, z0, z1 = cx - CW / 2, cx + CW / 2, cz - CH / 2, cz + CH / 2
    cadre = main_levee([(x0 + 0.01, z1 + 0.01), (x1 + 0.015, z1), (x1, z0 - 0.015), (x0 - 0.015, z0), (x0, z1 + 0.015)], n=5)
    c.fil(f'case_{k}_cadre', [(x, F, z) for x, z in cadre], ton=0.45, prm=prm_cadre, dens=1.4)
    c.fil(f'case_{k}_numero', [(x0 + 0.03, F, z0 - 0.04), (x0 + 0.1, F, z0 - 0.04)], ton=0.3, prm=prm_cadre, dens=1.0)
    for j, trait in enumerate(croquis(cx, cz, k)):
        c.fil(f'case_{k}_dessin_{j}', trait, ton=0.35, prm=prm_dessin, dens=1.5)


# ---------- Les deux bobines à rayons, debout sur leurs supports ----------
def bobine(nom, cx, cz, R, cy=-0.05):
    """Deux joues ajourées (jante + six rayons), le moyeu, la galette de film enroulée, le support."""
    for j, dy in enumerate((-0.075, 0.075)):
        y = cy + dy
        c.cercle(f'{nom}_jante_{j}', (cx, y, cz), R, segments=24, ton=0.2, dens=1.2)
        c.cercle(f'{nom}_jante_int_{j}', (cx, y, cz), R * 0.92, segments=24, ton=0.15, dens=0.7)
        for s in range(6):
            a = math.tau * s / 6 + 0.3
            u = Vector((math.cos(a), 0, math.sin(a)))
            c.fil(f'{nom}_rayon_{j}_{s}', [tuple(Vector((cx, y, cz)) + u * 0.08), tuple(Vector((cx, y, cz)) + u * R * 0.92)],
                  ton=0.2, dens=1.1 if j == 0 else 0.6)
    c.cylindre(f'{nom}_galette', (cx, cy, cz), R * 0.62, 0.13, rot=(math.pi / 2, 0, 0), segments=20, ton=0.35, dens=0.55, aretes=0.6)
    c.cylindre(f'{nom}_moyeu', (cx, cy, cz), 0.075, 0.22, rot=(math.pi / 2, 0, 0), segments=12, ton=0.2, dens=1.0, aretes=0.7)
    c.boite(f'{nom}_support', (cx, cy + 0.16, (cz + TABLE) / 2), (0.07, 0.06, cz - TABLE), ton=0.1, dens=0.8, aretes=0.9)
    c.boite(f'{nom}_socle', (cx, cy + 0.1, TABLE + 0.03), (0.34, 0.3, 0.06), ton=0.1, dens=0.8, aretes=0.9)
    c.cylindre(f'{nom}_axe', (cx, cy + 0.04, cz), 0.025, 0.28, rot=(math.pi / 2, 0, 0), segments=8, ton=0.3, dens=0.9, aretes=0.7)


bobine('bobine_a', -1.0, -0.44, 0.42)
bobine('bobine_b', -0.08, -0.5, 0.36)
# La manivelle du rembobineur, sur la bobine de droite.
c.boite('manivelle_bras', (0.02, -0.24, -0.42), (0.24, 0.03, 0.04), rot=(0, -0.6, 0), ton=0.3, dens=1.1, aretes=0.85)
c.cylindre('manivelle_poignee', (0.12, -0.28, -0.35), 0.025, 0.12, rot=(math.pi / 2, 0, 0), segments=8, ton=0.3, dens=1.1, aretes=0.7)


# ---------- Le bout de pellicule : il quitte la bobine de droite et retombe en boucle sur la table ----------
def chemin(t):
    """Trajet du milieu de la bande (x, y, z), de la galette jusqu'à la table, avec une boucle."""
    if t < 0.5:
        s = t / 0.5
        return Vector((-0.08 + 0.22 + 0.45 * s, -0.12 - 0.2 * s, -0.5 - 0.05 * math.sin(s * math.pi) - (TABLE + 0.5 + 0.02) * -s))
    s = (t - 0.5) / 0.5
    a = math.pi * 1.6 * s
    return Vector((0.59 + 0.16 * math.sin(a) + 0.05 * s, -0.32 - 0.12 * s, TABLE + 0.02 + 0.14 * (1 - math.cos(a)) * (1 - s * 0.6)))


NP = 40
milieu = [chemin(i / NP) for i in range(NP + 1)]
bords = ([], [])
for i, p in enumerate(milieu):
    t = (milieu[min(i + 1, NP)] - milieu[max(i - 1, 0)])
    n2 = Vector((-t.z, 0, t.x)).normalized()  # perpendiculaire au trajet, dans le plan du visiteur
    for k, sg in enumerate((-1, 1)):
        bords[k].append(tuple(p + n2 * 0.055 * sg))
c.fil('pellicule_bord_0', bords[0], ton=0.3, dens=1.4)
c.fil('pellicule_bord_1', bords[1], ton=0.3, dens=1.4)
for i in range(4, NP, 4):  # les séparations entre images
    c.fil(f'pellicule_image_{i}', [bords[0][i], bords[1][i]], ton=0.3, dens=1.0)

# ---------- La claquette, debout sur la table à droite ----------
KX, KW, KH = 0.98, 0.86, 0.6
KZ0 = TABLE
c.boite('claquette_ardoise', (KX, -0.2, KZ0 + KH / 2), (KW, 0.06, KH), ton=0.05, dens=0.5, aretes=0.85)
FK = -0.235  # devant l'ardoise
for z in (0.42, 0.28, 0.14):
    c.fil(f'claquette_ligne_{z}', [(KX - KW / 2 + 0.05, FK, KZ0 + z), (KX + KW / 2 - 0.05, FK, KZ0 + z)], ton=0.35, dens=1.0)
c.fil('claquette_colonne', [(KX, FK, KZ0 + 0.42), (KX, FK, KZ0 + 0.14)], ton=0.35, dens=1.0)
c.texte('claquette_prise', 'PRISE 3', (KX + 0.2, FK, KZ0 + 0.21), taille=0.08, ton=0.4, dens=1.0)


def baguette(nom, z_bas, angle, prm):
    """Une baguette rayée (pivot à gauche) : un plat de 0,86 × 0,08, ses bandes en biais sur la face avant."""
    pivot = Vector((KX - KW / 2, -0.2, z_bas))
    d = Vector((math.cos(angle), 0, math.sin(angle)))
    hpt = Vector((-math.sin(angle), 0, math.cos(angle)))
    centre = pivot + d * (KW / 2) + hpt * 0.04
    c.boite(nom, tuple(centre), (KW, 0.065, 0.08), rot=(0, -angle, 0), ton=0.1, prm=prm, dens=0.8, aretes=0.85)
    for s in range(5):  # cinq bandes en parallélogramme
        x0 = 0.04 + s * 0.17
        coins = [(x0, 0.0), (x0 + 0.08, 0.0), (x0 + 0.13, 0.08), (x0 + 0.05, 0.08)]
        pts = [pivot + d * u + hpt * v + Vector((0, -0.036, 0)) for u, v in coins]
        c.fil(f'acc_{nom}_bande_{s}', [tuple(p) for p in pts], ferme=True, ton=1, prm=prm, dens=2.0)


baguette('claquette_baguette_fixe', KZ0 + KH, 0.0, 0)
# Le bras mobile, levé : 0,15 au-dessus du pivot, ouvert de 9° ; sa descente (≈ 0,22) le rabat sur la baguette fixe.
baguette('claquette_bras', KZ0 + KH + 0.08 + 0.15, math.radians(9), 4)
c.cylindre('claquette_charniere', (KX - KW / 2 + 0.01, -0.2, KZ0 + KH + 0.08), 0.035, 0.08, rot=(math.pi / 2, 0, 0), segments=10,
           ton=0.3, dens=1.0, aretes=0.7)

racine = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
c.exporter(opts['sortie'] or os.path.join(racine, 'public', 'models', 'auj_film.chr'),
           opts['controle'] or os.path.join(racine, 'blender', 'controle'))

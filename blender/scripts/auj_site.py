# Aujourd'hui · le site : la maquette d'une page web dessinée au crayon, à main levée.
# Une feuille posée sur une planche inclinée (avec son rebord), le fil de fer de la page qui se dessine trait
# après trait (en-tête, logo, menu, grand bloc image barré d'une croix, titre, lignes de texte, trois cartes,
# bouton), un crayon tenu au-dessus de la feuille et une gomme posée sur le rebord.
#
# Rôles (prm), convention du « geste manuel » :
#   0 planche, feuille, rebord, gomme
#   1,00 → 1,94 les 16 étapes du croquis, dans l'ordre où on les dessine (le bouton en dernier, sous le crayon)
#   4 le crayon, modélisé en position HAUTE (sa mine est 0,22 au-dessus du papier, à la verticale du bouton)
# Accent (ton 1) : la mine du crayon et le bouton qu'il vient de tracer.
import math
import os
import random
import sys

from mathutils import Vector

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import commun as c  # noqa: E402

opts = c.arguments()
c.reinit()
random.seed(1994)

# ---------- La planche inclinée et la feuille ----------
INCL = math.radians(28)                      # la planche penche de 28° vers l'arrière
CENTRE = Vector((-0.2, 0.15, 0.0))  # décalée à gauche : le crayon dépasse à droite
HAUT = Vector((0, math.sin(INCL), math.cos(INCL)))     # direction « haut de la feuille »
NORMALE = Vector((0, -math.cos(INCL), math.sin(INCL)))  # vers le visiteur
ROT = (-INCL, 0, 0)


def feuille(u, v, h=0.0):
    """Point de la feuille : u vers la droite, v vers le haut de la feuille, h au-dessus du papier."""
    return tuple(CENTRE + Vector((u, 0, 0)) + HAUT * v + NORMALE * h)


c.boite('planche', tuple(CENTRE - NORMALE * 0.04), (2.7, 0.05, 2.0), rot=ROT, ton=0.1, dens=0.25, aretes=0.9)
c.boite('feuille', tuple(CENTRE), (2.5, 0.012, 1.85), rot=ROT, ton=0.0, dens=0.4, aretes=0.9)
BAS = CENTRE - HAUT * 1.0
c.boite('rebord', (CENTRE.x, BAS.y - 0.1, BAS.z - 0.02), (2.7, 0.2, 0.04), ton=0.1, dens=0.7, aretes=0.9)
c.boite('gomme', (CENTRE.x - 0.78, BAS.y - 0.12, BAS.z + 0.05), (0.34, 0.15, 0.1), rot=(0, 0, 0.18), ton=0.0, dens=1.0, aretes=0.8)
c.boite('gomme_etui', (CENTRE.x - 0.84, BAS.y - 0.12, BAS.z + 0.05), (0.2, 0.16, 0.11), rot=(0, 0, 0.18), ton=0.35, dens=1.0,
        aretes=0.8)


# ---------- Le croquis à main levée ----------
def main_levee(pts, n=5, j=0.007):
    """Trait tremblé : chaque segment est subdivisé et légèrement décalé, comme tiré à la main."""
    sortie = []
    for (u0, v0), (u1, v1) in zip(pts, pts[1:]):
        for s in range(n):
            t = s / n
            sortie.append((u0 + (u1 - u0) * t + random.uniform(-j, j), v0 + (v1 - v0) * t + random.uniform(-j, j)))
    sortie.append(pts[-1])
    return sortie


def rect_croquis(u0, v0, u1, v1):
    """Rectangle d'un seul trait, qui déborde un peu aux angles."""
    d = 0.025
    return [(u0 + 0.01, v1 + 0.012), (u1 + d, v1), (u1, v0 - d), (u0 - d, v0), (u0, v1 + d)]


def cercle_croquis(u, v, r):
    return [(u + r * (1 + random.uniform(-0.06, 0.06)) * math.cos(a), v + r * math.sin(a))
            for a in (math.tau * 1.1 * k / 16 + 0.6 for k in range(17))]


ETAPES = []  # une étape = une liste de traits (listes de points (u, v)) qui partagent un rang de séquence
ETAPES.append([rect_croquis(-1.05, 0.58, 1.05, 0.76)])                                    # l'en-tête
ETAPES.append([cercle_croquis(-0.9, 0.67, 0.055)])                                        # le logo
ETAPES.append([[(0.35 + k * 0.22, 0.67), (0.5 + k * 0.22, 0.67)] for k in range(3)])      # le menu
ETAPES.append([rect_croquis(-1.05, -0.02, 0.2, 0.48)])                                    # le grand bloc image
ETAPES.append([[(-1.05, -0.02), (0.2, 0.48)], [(-1.05, 0.48), (0.2, -0.02)]])             # sa croix
ETAPES.append([[(0.36, 0.43), (1.02, 0.43)], [(0.36, 0.41), (1.0, 0.41)]])                # le titre (trait doublé)
ETAPES.append([[(0.36, 0.32), (0.86, 0.32)], [(0.36, 0.3), (0.84, 0.3)]])
for k, fin in enumerate((1.02, 0.96, 0.7)):                                               # trois lignes de texte
    ETAPES.append([[(0.36, 0.19 - k * 0.08), (fin, 0.19 - k * 0.08)]])
for k in range(3):                                                                        # les trois cartes
    u0 = -1.05 + k * 0.715
    ETAPES.append([rect_croquis(u0, -0.52, u0 + 0.62, -0.12),
                   [(u0 + 0.06, -0.2), (u0 + 0.5, -0.2)], [(u0 + 0.06, -0.28), (u0 + 0.4, -0.28)],
                   [(u0 + 0.06, -0.36), (u0 + 0.46, -0.36)]])
for k, fin in enumerate((0.3, 0.05)):                                                     # le texte du bas
    ETAPES.append([[(-1.05, -0.64 - k * 0.09), (fin, -0.64 - k * 0.09)]])
BOUTON = (0.58, -0.78, 1.02, -0.6)
ETAPES.append([rect_croquis(*BOUTON), [(0.68, -0.69), (0.92, -0.69)]])                    # le bouton, en dernier

N = len(ETAPES)
for i, traits in enumerate(ETAPES):
    dernier = i == N - 1
    for k, t in enumerate(traits):
        pts = main_levee(t, n=6 if len(t) > 2 else 4)
        c.fil(f'{"acc_" if dernier else ""}croquis_{i}_{k}', [feuille(u, v, 0.012) for u, v in pts],
              ton=1 if dernier else 0.4, prm=1 + i / N, dens=2.2 if dernier else 1.3)

# ---------- Le crayon, tenu au-dessus du bouton (va-et-vient vertical) ----------
# Le geste le descend de 0,24 (unités du site, ≈ 0,22 ici) : sa mine est 0,22 à la verticale au-dessus du papier.
contact = Vector(feuille(BOUTON[2] - 0.04, (BOUTON[1] + BOUTON[3]) / 2, 0.0))
mine = contact + Vector((0, 0, 0.22))
d = Vector((0.55, -0.45, 0.7)).normalized()  # de la mine vers la gomme du crayon : vers la droite, le visiteur et le haut
rot = Vector((0, 0, 1)).rotation_difference(d).to_euler()


def le_long(s):
    return tuple(mine + d * s)


c.cylindre('acc_crayon_mine', le_long(0.035), 0.005, 0.07, rayon2=0.024, rot=rot, segments=6, ton=1, prm=4, dens=1.8, aretes=0.6)
c.cylindre('crayon_bois', le_long(0.16), 0.024, 0.18, rayon2=0.07, rot=rot, segments=6, ton=0.25, prm=4, dens=1.2, aretes=0.6)
c.cylindre('crayon_corps', le_long(0.7), 0.07, 0.9, rot=rot, segments=6, ton=0.1, prm=4, dens=0.9, aretes=0.7)
c.cylindre('crayon_virole', le_long(1.19), 0.074, 0.08, rot=rot, segments=12, ton=0.45, prm=4, dens=1.2, aretes=0.7)
c.cylindre('crayon_gomme', le_long(1.28), 0.07, 0.1, rot=rot, segments=12, ton=0.3, prm=4, dens=1.0, aretes=0.6)

racine = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
c.exporter(opts['sortie'] or os.path.join(racine, 'public', 'models', 'auj_site.chr'),
           opts['controle'] or os.path.join(racine, 'blender', 'controle'))

# Aujourd'hui · l'onde : le studio de doublage où l'on enregistre, prise après prise, à la main.
# Un micro de studio sur pied (suspension à deux anneaux, filtre anti-pop sur col de cygne), un casque accroché
# au pied, un pupitre portant le script papier dont les répliques apparaissent l'une après l'autre,
# et le voyant « REC » au mur.
#
# Rôles (prm), convention du « geste manuel » :
#   0 micro, pied, filtre, casque, pupitre, feuille du script
#   1,00 → 1,92 les 12 lignes du script, dans l'ordre de lecture
#   3 le voyant « REC » (ton 1), qui pulse lentement
import math
import os
import random
import sys

from mathutils import Vector

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import commun as c  # noqa: E402

opts = c.arguments()
c.reinit()
random.seed(1927)


def barre(nom, a, b, r, segments=8, **kw):
    """Cylindre fin tendu entre deux points (pieds, tiges)."""
    a, b = Vector(a), Vector(b)
    d = b - a
    rot = Vector((0, 0, 1)).rotation_difference(d.normalized()).to_euler()
    return c.cylindre(nom, tuple((a + b) / 2), r, d.length, rot=rot, segments=segments, **kw)


def trepied(nom, x, y, z_moyeu, z_sol, ecart, tourne=0.0):
    """Trois pieds partant d'un moyeu, posés au sol en étoile (un pied vers l'arrière)."""
    for k in range(3):
        a = math.radians(90 + 120 * k) + tourne
        barre(f'{nom}_pied_{k}', (x, y, z_moyeu), (x + ecart * math.cos(a), y + ecart * math.sin(a), z_sol), 0.02,
              dens=0.9, aretes=0.6)


SOL = -1.35

# ---------- Le pied du micro ----------
MX, MY = -0.8, 0.1
trepied('pied_micro', MX, MY, -1.05, SOL, 0.48)
barre('pied_micro_mat', (MX, MY, -1.08), (MX, MY, 0.4), 0.028, dens=0.9, aretes=0.6)
c.cylindre('pied_micro_rotule', (MX, MY, 0.4), 0.045, 0.09, rot=(0, math.pi / 2, 0), segments=10, dens=1.0, aretes=0.6)
# La suspension : une fourche en U et deux anneaux autour du micro.
c.fil('suspension_fourche', [(MX - 0.25, MY, 0.78), (MX - 0.25, MY, 0.42), (MX + 0.25, MY, 0.42), (MX + 0.25, MY, 0.78)], dens=1.3)
for k, z in enumerate((0.56, 0.78)):
    c.tore(f'suspension_anneau_{k}', (MX, MY, z), 0.25, 0.014, seg=24, seg2=5, ton=0.2, dens=1.0, aretes=0.4)

# ---------- Le micro de studio : corps cylindrique et tête grillagée ----------
c.cylindre('micro_corps', (MX, MY, 0.62), 0.145, 0.34, segments=16, ton=0.1, dens=0.9, aretes=0.6)
c.cylindre('micro_bague', (MX, MY, 0.8), 0.152, 0.03, segments=16, ton=0.35, dens=1.2, aretes=0.7)
c.sphere('micro_tete', (MX, MY, 0.94), 0.15, segments=16, anneaux=10, echelle=(1, 1, 1.45), ton=0.05, dens=0.8, aretes=0.3)
for k, (z, r) in enumerate(((0.86, 0.146), (0.96, 0.15), (1.06, 0.13), (1.13, 0.09))):  # la grille de la tête
    c.cercle(f'micro_grille_{k}', (MX, MY, z), r, rot=(math.pi / 2, 0, 0), segments=16, ton=0.3, dens=1.0)

# ---------- Le filtre anti-pop : un cercle tendu en avant à gauche de la tête, tourné vers elle ----------
# Décalé de côté (et non pile devant) pour que le micro reste visible de face.
FX, FY, FZ, FR = MX - 0.34, MY - 0.36, 0.94, 0.26
ORIENT = -math.pi / 4  # sa face regarde le micro, en diagonale
c.tore('filtre_cerceau', (FX, FY, FZ), FR, 0.018, rot=(math.pi / 2, 0, ORIENT), seg=28, seg2=5, ton=0.25, dens=1.1, aretes=0.4)
c.cercle('filtre_toile', (FX, FY, FZ), FR - 0.01, rot=(0, 0, ORIENT), segments=24, plein=True, ton=0.05, dens=0.35, aretes=0.2)
A, B = Vector((MX, MY - 0.03, 0.3)), Vector((FX, FY, FZ - FR))
c.fil('filtre_col_de_cygne', c.courbe(lambda t: tuple(A.lerp(B, t) + Vector((-0.12, -0.08, 0.06)) * math.sin(t * math.pi)), 16),
      ton=0.2, dens=1.4)

# ---------- Le casque, accroché à une patère sur le pied ----------
HZ = -0.2
c.boite('patere', (MX, MY - 0.08, HZ), (0.03, 0.16, 0.03), dens=1.0, aretes=0.9)
HY = MY - 0.16
R_ARCEAU = 0.26
c.tore('casque_arceau', (MX, HY, HZ - 0.03 - R_ARCEAU), R_ARCEAU, 0.03, rot=(math.pi / 2, 0, 0), seg=18, seg2=6,
       arc=math.pi, ton=0.15, dens=1.0, aretes=0.4)
for sx in (-1, 1):
    cx = MX + sx * (R_ARCEAU + 0.03)
    c.cylindre(f'casque_ecouteur_{sx}', (cx, HY, HZ - 0.03 - R_ARCEAU - 0.12), 0.13, 0.09, rot=(0, math.pi / 2, sx * 0.35),
               segments=16, ton=0.1, dens=1.0, aretes=0.6)
    c.cylindre(f'casque_coussin_{sx}', (cx - sx * 0.06, HY, HZ - 0.03 - R_ARCEAU - 0.12), 0.11, 0.05,
               rot=(0, math.pi / 2, sx * 0.35), segments=16, ton=0.3, dens=1.0, aretes=0.6)

# ---------- Le pupitre et le script papier ----------
PX, PY = 0.68, 0.2
INCL = math.radians(25)
CENTRE = Vector((PX, PY, 0.32))
HAUT = Vector((0, math.sin(INCL), math.cos(INCL)))
NORMALE = Vector((0, -math.cos(INCL), math.sin(INCL)))
ROT = (-INCL, 0, 0)


def page(u, v, h):
    return tuple(CENTRE + Vector((u, 0, 0)) + HAUT * v + NORMALE * h)


trepied('pupitre', PX, PY, -1.05, SOL, 0.42, tourne=math.radians(60))
barre('pupitre_mat', (PX, PY, -1.08), tuple(CENTRE - HAUT * 0.15 - NORMALE * 0.05), 0.026, dens=0.9, aretes=0.6)
c.boite('pupitre_plateau', tuple(CENTRE), (1.3, 0.03, 0.92), rot=ROT, ton=0.1, dens=0.35, aretes=0.85)
c.boite('pupitre_rebord', page(0, -0.47, 0.05), (1.3, 0.1, 0.03), rot=ROT, ton=0.1, dens=1.0, aretes=0.85)
c.boite('script_feuille', page(0.02, 0.02, 0.025), (0.92, 0.006, 0.84), rot=ROT, ton=0.0, dens=0.45, aretes=0.85)
c.fil('script_titre', [page(-0.16, 0.34, 0.032), page(0.16, 0.34, 0.032)], ton=0.45, dens=1.4)
# Les répliques : le nom du personnage (court, en retrait), puis son texte.
LIGNES = ['nom', 'texte', 'texte', 'nom', 'texte', 'nom', 'texte', 'texte', 'nom', 'texte', 'texte', 'texte']
for i, sorte in enumerate(LIGNES):
    v = 0.24 - i * 0.055
    if sorte == 'nom':
        u0, u1 = -0.1, 0.1
    else:
        u0, u1 = -0.36, -0.36 + random.uniform(0.5, 0.74)
    c.fil(f'script_ligne_{i}', [page(u0, v, 0.032), page(u1, v, 0.032)], ton=0.35 if sorte == 'nom' else 0.25,
          prm=1 + i / len(LIGNES), dens=2.2 if sorte == 'nom' else 1.9)

# ---------- Le voyant « REC », au mur, en haut à droite ----------
RX, RY, RZ = 0.78, 0.45, 1.22
c.boite('acc_rec_boitier', (RX, RY, RZ), (0.62, 0.06, 0.22), ton=1, prm=3, dens=0.5, aretes=0.9)
c.texte('acc_rec_mot', 'REC', (RX + 0.08, RY - 0.04, RZ - 0.005), taille=0.16, ton=1, prm=3, dens=1.6)
c.sphere('acc_rec_point', (RX - 0.19, RY - 0.04, RZ), 0.045, segments=10, anneaux=6, ton=1, prm=3, dens=1.6, aretes=0.3)

racine = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
c.exporter(opts['sortie'] or os.path.join(racine, 'public', 'models', 'auj_wave.chr'),
           opts['controle'] or os.path.join(racine, 'blender', 'controle'))

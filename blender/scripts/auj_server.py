# Aujourd'hui · le serveur : l'armoire informatique qu'on entretient soi-même, à la main.
# Une armoire haute à porte vitrée entrouverte (le verre est suggéré par des reflets en biais), huit unités
# en façade avec leurs grilles d'aération, poignées, baies de disques et voyants, des câbles qui pendent en
# boucles, et au pied une pile de cartons et de manuels qui grandit.
#
# Rôles (prm), convention du « geste manuel » :
#   0 armoire, porte, unités, câbles
#   1,00 → 1,89 les 9 cartons et manuels, empilés de bas en haut
#   3 les 12 voyants des unités (ton 1, très petits), qui pulsent lentement
import math
import os
import random
import sys

from mathutils import Euler, Vector

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import commun as c  # noqa: E402

opts = c.arguments()
c.reinit()
random.seed(1969)


def poser(points, centre, rot):
    """Même pose (rotation puis translation) que les pièces."""
    R = Euler(rot).to_matrix()
    return [tuple(R @ Vector(p) + Vector(centre)) for p in points]


SOL = -1.35

# ---------- L'armoire ----------
AX, AW, AD, AH = 0.36, 1.3, 1.0, 2.7
X0, X1, Y0, Y1 = AX - AW / 2, AX + AW / 2, -AD / 2, AD / 2
ZH = SOL + AH
for sx in (-1, 1):
    for sy in (-1, 1):
        c.boite(f'montant_{sx}_{sy}', (AX + sx * (AW / 2 - 0.03), sy * (AD / 2 - 0.03), SOL + AH / 2), (0.06, 0.06, AH - 0.1),
                ton=0.15, dens=0.8, aretes=0.9)
    c.boite(f'flanc_{sx}', (AX + sx * (AW / 2 - 0.012), 0, SOL + AH / 2), (0.024, AD - 0.1, AH - 0.2), ton=0.05, dens=0.22, aretes=0.92)
c.boite('toit', (AX, 0, ZH - 0.05), (AW, AD, 0.1), ton=0.15, dens=0.7, aretes=0.88)
c.boite('socle', (AX, 0, SOL + 0.07), (AW, AD, 0.1), ton=0.15, dens=0.7, aretes=0.88)
for k in range(6):  # ouïes d'aération sur le flanc droit, visibles de trois quarts
    z = ZH - 0.3 - k * 0.07
    c.fil(f'ouie_{k}', [(X1 + 0.002, -0.3, z), (X1 + 0.002, 0.3, z)], ton=0.2, dens=0.8)
c.boite('fond', (AX, Y1 - 0.02, SOL + AH / 2), (AW - 0.1, 0.02, AH - 0.2), ton=0.0, dens=0.12, aretes=0.95)

# ---------- Les huit unités en façade ----------
FY = Y0 + 0.1           # plan des façades, en retrait derrière la porte
UF = FY - 0.03          # devant les façades
HAUTEURS = [0.26, 0.2, 0.2, 0.3, 0.2, 0.26, 0.2, 0.32]
UX0, UX1 = X0 + 0.1, X1 - 0.1
z = ZH - 0.18
PORTS_D, PORTS_M = [], []  # prises réseau : à droite et au milieu de chaque façade
voyants = 0
for u, h in enumerate(HAUTEURS):
    zc = z - h / 2
    c.boite(f'unite_{u}', (AX, FY, zc), (UX1 - UX0, 0.05, h), ton=0.05, dens=0.5, aretes=0.88)
    for sx in (-1, 1):  # oreilles de fixation et poignées
        c.boite(f'unite_{u}_oreille_{sx}', (AX + sx * (AW / 2 - 0.08), FY - 0.01, zc), (0.05, 0.03, h - 0.02), ton=0.2, dens=1.0, aretes=0.9)
        xp = AX + sx * (AW / 2 - 0.16)
        c.fil(f'unite_{u}_poignee_{sx}', [(xp, UF + 0.005, zc + h * 0.3), (xp, UF - 0.03, zc + h * 0.3), (xp, UF - 0.03, zc - h * 0.3),
                                          (xp, UF + 0.005, zc - h * 0.3)], ton=0.3, dens=1.2)
    # La grille d'aération : un méandre de fentes verticales.
    gx0, nf = UX0 + 0.12, 12
    hz = h * 0.28
    grille = []
    for k in range(nf):
        x = gx0 + k * 0.03
        grille += [(x, UF, zc - hz), (x, UF, zc + hz)] if k % 2 == 0 else [(x, UF, zc + hz), (x, UF, zc - hz)]
    c.fil(f'unite_{u}_grille', grille, ton=0.25, dens=0.9)
    if h >= 0.26:  # les unités de stockage : une rangée de baies de disques
        for k in range(4):
            bx = AX - 0.12 + k * 0.15
            c.fil(f'unite_{u}_baie_{k}', [(bx, UF, zc - h * 0.32), (bx + 0.12, UF, zc - h * 0.32), (bx + 0.12, UF, zc + h * 0.32),
                                          (bx, UF, zc + h * 0.32)], ferme=True, ton=0.3, dens=1.0)
    else:  # les autres : une étiquette et une rangée de ports
        c.fil(f'unite_{u}_etiquette', [(AX - 0.1, UF, zc), (AX + 0.18, UF, zc)], ton=0.3, dens=1.0)
    # Voyants (12 au total) et ports réseau sur la droite.
    for k in range(2 if u in (0, 3, 5, 7) else 1):
        c.sphere(f'acc_voyant_{u}_{k}', (UX1 - 0.12 - k * 0.07, UF - 0.01, zc + h * 0.18), 0.026, segments=8, anneaux=5,
                 ton=1, prm=3, dens=4.0, aretes=0.3)
        voyants += 1
    PORTS_D.append(Vector((UX1 - 0.16, UF - 0.01, zc - h * 0.22)))
    PORTS_M.append(Vector((AX + 0.02, UF - 0.01, zc - h * 0.22)))
    z -= h + 0.04
assert voyants == 12


# ---------- Les câbles qui pendent ----------
def pendant(nom, a, b, fleche, avance, n=18, **kw):
    """Câble lâche entre deux points : il pend vers le bas (fleche) et vers le visiteur (avance)."""
    pts = [a.lerp(b, t) + Vector((0, -avance * math.sin(math.pi * t), -fleche * math.sin(math.pi * t))) for t in (i / n for i in range(n + 1))]
    return c.fil(nom, [tuple(p) for p in pts], **kw)


# Des cordons de brassage d'une unité à l'autre, en biais d'une prise de droite à une prise du milieu : ils pendent en boucles.
pendant('cable_0', PORTS_D[0], PORTS_M[2], 0.32, 0.1, ton=0.3, dens=1.3)
pendant('cable_1', PORTS_M[1], PORTS_D[4], 0.42, 0.14, ton=0.15, dens=1.3)
pendant('cable_2', PORTS_D[3], PORTS_M[6], 0.38, 0.12, ton=0.3, dens=1.3)
pendant('cable_3', PORTS_M[5], PORTS_D[7], 0.36, 0.16, ton=0.15, dens=1.3)
# Deux câbles qui sortent par la porte entrouverte et retombent jusqu'au sol, à droite.
for k, p in enumerate((PORTS_D[2], PORTS_D[5])):
    fin = Vector((X1 + 0.28 + 0.1 * k, -0.75 + 0.1 * k, SOL + 0.02))
    mid = Vector((X1 + 0.05, p.y - 0.25, (p.z + fin.z) / 2 + 0.1))
    pts = [(1 - t) ** 2 * p + 2 * (1 - t) * t * mid + t * t * fin for t in (i / 20 for i in range(21))]
    c.fil(f'cable_sol_{k}', [tuple(q) for q in pts], ton=0.2, dens=1.3)

# ---------- La porte vitrée, entrouverte (charnière à gauche, elle s'ouvre vers la droite) ----------
# Le verre n'est pas une surface pleine : seulement le cadre et quelques reflets courts en biais.
OUV = math.radians(20)
CHARN = (X0, Y0 - 0.02, 0.0)
ROTP = (0, 0, -OUV)
PW, PH = AW, AH - 0.12
zc = SOL + AH / 2
for nom, (x, zz, w, hh) in {'haut': (PW / 2, zc + PH / 2 - 0.04, PW, 0.08), 'bas': (PW / 2, zc - PH / 2 + 0.04, PW, 0.08),
                            'gauche': (0.04, zc, 0.08, PH), 'droite': (PW - 0.04, zc, 0.08, PH)}.items():
    c.boite(f'porte_{nom}', poser([(x, 0, zz)], CHARN, ROTP)[0], (w, 0.04, hh), rot=ROTP, ton=0.15, dens=0.8, aretes=0.88)
for k, (xa, za, xb, zb) in enumerate(((0.16, 0.62, 0.42, 0.98), (0.3, 0.6, 0.5, 0.88), (0.2, -0.5, 0.36, -0.28))):  # reflets
    c.fil(f'porte_reflet_{k}', poser([(xa, -0.025, za), (xb, -0.025, zb)], CHARN, ROTP), ton=0.3, dens=1.1)
c.boite('porte_poignee', poser([(PW - 0.1, -0.05, zc)], CHARN, ROTP)[0], (0.03, 0.04, 0.3), rot=ROTP, ton=0.35, dens=1.2, aretes=0.85)

# ---------- La pile de cartons et de manuels, au pied de l'armoire (séquence de bas en haut) ----------
# (sorte, largeur, profondeur, hauteur)
PILE = [('carton', 0.92, 0.72, 0.44), ('carton', 0.78, 0.62, 0.34), ('manuel', 0.56, 0.42, 0.1), ('manuel', 0.52, 0.38, 0.08),
        ('carton', 0.54, 0.46, 0.3), ('manuel', 0.48, 0.36, 0.12), ('manuel', 0.44, 0.33, 0.07), ('manuel', 0.46, 0.34, 0.09),
        ('carton', 0.4, 0.34, 0.24)]
N = len(PILE)
PX, PY = -0.92, -0.05
zb = SOL
for i, (sorte, w, d, h) in enumerate(PILE):
    prm = 1 + i / N
    centre = (PX + random.uniform(-0.06, 0.06), PY + random.uniform(-0.05, 0.05), zb + h / 2)
    rot = (0, 0, random.uniform(-0.18, 0.18))
    c.boite(f'pile_{i}_{sorte}', centre, (w, d, h), rot=rot, ton=0.1 if sorte == 'carton' else 0.25, prm=prm,
            dens=0.6 if sorte == 'carton' else 0.9, aretes=0.85)
    if sorte == 'carton':  # le ruban adhésif, sur le dessus et la face avant
        ruban = [(0, d / 2, h / 2 + 0.004), (0, -d / 2 - 0.004, h / 2 + 0.004), (0, -d / 2 - 0.004, h / 2 - 0.12)]
        c.fil(f'pile_{i}_ruban', poser(ruban, centre, rot), ton=0.35, prm=prm, dens=1.2)
        etiquette = [(-w / 2 + 0.08, -d / 2 - 0.004, -0.02), (-w / 2 + 0.3, -d / 2 - 0.004, -0.02)]
        c.fil(f'pile_{i}_etiquette', poser(etiquette, centre, rot), ton=0.3, prm=prm, dens=1.0)
    else:  # le manuel : son dos et le titre sur la tranche avant
        c.fil(f'pile_{i}_titre', poser([(-w / 2 + 0.06, -d / 2 - 0.004, 0), (w / 2 - 0.12, -d / 2 - 0.004, 0)], centre, rot),
              ton=0.4, prm=prm, dens=1.2)
    zb += h

racine = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
c.exporter(opts['sortie'] or os.path.join(racine, 'public', 'models', 'auj_server.chr'),
           opts['controle'] or os.path.join(racine, 'blender', 'controle'))

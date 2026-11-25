# Les objets de verre des fiches projet : un objet par projet, modélisé pour de vrai, exporté dans son propre fichier
# public/models/verre/<projet>.glb (chargé seulement quand la fiche s'ouvre).
# Chaque objet est un vide racine « verre_<projet> », avec ses pièces en enfants ; environ 1 de haut, face au visiteur
# (−Y dans Blender, +Z une fois dans three.js). Le site le recentre et le met à l'échelle.
#
# Deux surfaces, repérées par le nom de leur matériau ; le site les remplace par les siennes :
#   verre    le corps, en verre clair (reflets et bords lumineux calculés par le site)
#   lumiere  le cœur lumineux, à la couleur de la station
# Des objets nets et froids : aucun cadran, aucune graduation, aucun effet rétro.
#
# Lancement (sans interface) :
#   blender -b --factory-startup --python blender/scripts/objets_verre.py
# Produit aussi un rendu de contrôle dans blender/controle/objets_verre.png.
import math
import os

import bmesh
import bpy
from mathutils import Euler, Vector

TAU = math.tau
RACINE = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
DOSSIER = os.path.join(RACINE, 'public', 'models', 'verre')
CONTROLE = os.path.join(RACINE, 'blender', 'controle', 'objets_verre.png')

bpy.ops.wm.read_factory_settings(use_empty=True)
SCENE = bpy.context.scene


def materiau(nom, base, rugo=0.1, emission=None, force=0.0, alpha=1.0):
    m = bpy.data.materials.new(nom)
    if m.node_tree is None:
        m.use_nodes = True
    p = next(n for n in m.node_tree.nodes if n.type == 'BSDF_PRINCIPLED')
    p.inputs['Base Color'].default_value = (*base, 1)
    p.inputs['Roughness'].default_value = rugo
    if 'Transmission Weight' in p.inputs:
        p.inputs['Transmission Weight'].default_value = 1.0 - alpha
    if emission:
        p.inputs['Emission Color'].default_value = (*emission, 1)
        p.inputs['Emission Strength'].default_value = force
    return m


VERRE = materiau('verre', (0.85, 0.9, 1.0), rugo=0.04, alpha=0.1)
LUMIERE = materiau('lumiere', (0, 0, 0), emission=(0.45, 0.7, 1.0), force=6.0)


# ---------- Fabrication des pièces ----------
def poser(bm, centre=(0, 0, 0), rot=(0, 0, 0), echelle=None):
    if echelle is not None:
        bmesh.ops.scale(bm, vec=echelle, verts=bm.verts)
    if any(rot):
        bmesh.ops.rotate(bm, cent=(0, 0, 0), matrix=Euler(rot, 'XYZ').to_matrix(), verts=bm.verts)
    bmesh.ops.translate(bm, vec=Vector(centre), verts=bm.verts)
    return bm


def piece(nom, bm, mat, parent, lisse=True, biseau=0.0, seg=3):
    for f in bm.faces:
        f.smooth = lisse
    me = bpy.data.meshes.new(nom)
    bm.to_mesh(me)
    bm.free()
    me.materials.append(mat)
    ob = bpy.data.objects.new(nom, me)
    SCENE.collection.objects.link(ob)
    ob.parent = parent
    if biseau:
        b = ob.modifiers.new('biseau', 'BEVEL')
        b.width = biseau
        b.segments = seg
        b.limit_method = 'ANGLE'
        b.angle_limit = math.radians(30)
        b.harden_normals = True
    return ob


def boite(taille, centre=(0, 0, 0), rot=(0, 0, 0)):
    bm = bmesh.new()
    bmesh.ops.create_cube(bm, size=1.0)
    return poser(bm, centre, rot, taille)


def cyl(r, h, centre=(0, 0, 0), rot=(0, 0, 0), seg=32, r2=None):
    bm = bmesh.new()
    bmesh.ops.create_cone(bm, cap_ends=True, cap_tris=False, segments=seg, radius1=r, radius2=r if r2 is None else r2, depth=h)
    return poser(bm, centre, rot)


def boule(r, centre=(0, 0, 0), echelle=None, seg=32, ann=16):
    bm = bmesh.new()
    bmesh.ops.create_uvsphere(bm, u_segments=seg, v_segments=ann, radius=r)
    return poser(bm, centre, (0, 0, 0), echelle)


def tore(R, r, centre=(0, 0, 0), rot=(0, 0, 0), seg=56, seg2=12, arc=TAU, a0=0.0):
    bm = bmesh.new()
    ferme = arc >= TAU - 1e-6
    n = seg if ferme else seg + 1
    anneaux = []
    for i in range(n):
        a = a0 + arc * i / seg
        anneaux.append([bm.verts.new(((R + r * math.cos(b)) * math.cos(a), (R + r * math.cos(b)) * math.sin(a), r * math.sin(b)))
                        for b in (TAU * j / seg2 for j in range(seg2))])
    for i in range(seg if ferme else n - 1):
        A, B = anneaux[i], anneaux[(i + 1) % n]
        for j in range(seg2):
            bm.faces.new((A[j], A[(j + 1) % seg2], B[(j + 1) % seg2], B[j]))
    if not ferme:
        bm.faces.new(anneaux[0][::-1])
        bm.faces.new(anneaux[-1])
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces[:])
    return poser(bm, centre, rot)


def tube(points, r, seg=12):
    bm = bmesh.new()
    pts = [Vector(p) for p in points]
    anneaux = []
    for i, p in enumerate(pts):
        t = (pts[min(i + 1, len(pts) - 1)] - pts[max(i - 1, 0)]).normalized()
        ref = Vector((0, 0, 1)) if abs(t.z) < 0.9 else Vector((1, 0, 0))
        n = t.cross(ref).normalized()
        b = t.cross(n).normalized()
        anneaux.append([bm.verts.new(p + (n * math.cos(TAU * k / seg) + b * math.sin(TAU * k / seg)) * r) for k in range(seg)])
    for A, B in zip(anneaux, anneaux[1:]):
        for k in range(seg):
            bm.faces.new((A[k], A[(k + 1) % seg], B[(k + 1) % seg], B[k]))
    bm.faces.new(anneaux[0][::-1])
    bm.faces.new(anneaux[-1])
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces[:])
    return bm


def plaque(contour, ep, y=0.0):
    """Une plaque d'épaisseur ep (selon Y), dont le contour est donné dans le plan XZ (face au visiteur)."""
    bm = bmesh.new()
    av = [bm.verts.new((x, y - ep / 2, z)) for x, z in contour]
    ar = [bm.verts.new((x, y + ep / 2, z)) for x, z in contour]
    bm.faces.new(av)
    bm.faces.new(ar[::-1])
    n = len(contour)
    for k in range(n):
        bm.faces.new((av[k], ar[k], ar[(k + 1) % n], av[(k + 1) % n]))
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces[:])
    return bm


def objet(nom):
    root = bpy.data.objects.new(f'verre_{nom}', None)
    root.empty_display_size = 0.3
    SCENE.collection.objects.link(root)
    return root


def lisse_t(t):
    return t * t * (3 - 2 * t)


# ---------- Les dix objets ----------
def standardiste():
    # Le micro du standard : la capsule, sa fourche, le pied ; un filet lumineux autour de la capsule.
    A = objet('standardiste')
    piece('capsule', boule(0.26, (0, 0, 0.3), (1, 1, 1.3)), VERRE, A)
    piece('fourche', tore(0.31, 0.024, (0, 0, 0.26), (math.pi / 2, 0, 0), arc=math.pi, a0=math.pi), VERRE, A)
    piece('tige', cyl(0.045, 0.4, (0, 0, -0.1)), VERRE, A)
    piece('pied', cyl(0.26, 0.05, (0, 0, -0.32)), VERRE, A, biseau=0.018)
    piece('voix', tore(0.264, 0.012, (0, 0, 0.3)), LUMIERE, A)
    piece('coeur', boule(0.09, (0, 0, 0.3), (1, 1, 1.3), seg=20, ann=10), LUMIERE, A)


def accueil_sms():
    # La bulle de conversation, et les trois points de la réponse en train de s'écrire, à l'intérieur du verre.
    A = objet('accueil-sms')
    piece('bulle', boite((1.0, 0.22, 0.66), (0, 0, 0.1)), VERRE, A, biseau=0.12, seg=4)
    piece('queue', plaque([(-0.3, -0.18), (-0.06, -0.18), (-0.4, -0.44)], 0.18), VERRE, A, biseau=0.03)
    for k, x in enumerate((-0.2, 0, 0.2)):
        piece(f'point{k}', boule(0.06, (x, 0, 0.1), seg=20, ann=10), LUMIERE, A)


def devis():
    # La feuille de devis au coin plié : ses lignes, et le total, plus épais.
    A = objet('devis')
    piece('feuille', plaque([(-0.36, -0.5), (0.36, -0.5), (0.36, 0.3), (0.16, 0.5), (-0.36, 0.5)], 0.06), VERRE, A, biseau=0.012)
    piece('pli', plaque([(0.16, 0.5), (0.16, 0.3), (0.36, 0.3)], 0.02, y=-0.045), VERRE, A, biseau=0.006)
    for k, (w, z) in enumerate(((0.44, 0.3), (0.56, 0.18), (0.5, 0.06), (0.56, -0.06), (0.38, -0.18))):
        piece(f'ligne{k}', boite((w, 0.016, 0.03), (-0.26 + w / 2, -0.04, z)), LUMIERE, A)
    piece('total', boite((0.3, 0.02, 0.07), (0.14, -0.042, -0.36)), LUMIERE, A)


def encaisse():
    # Le tampon qui valide, posé sur une facture ; l'encre et la coche s'allument.
    A = objet('encaisse')
    piece('bouton', boule(0.13, (0, 0, 0.56), (1, 1, 0.9)), VERRE, A)
    piece('col', cyl(0.06, 0.3, (0, 0, 0.32), r2=0.045), VERRE, A)
    piece('semelle', boite((0.5, 0.34, 0.13), (0, 0, 0.11)), VERRE, A, biseau=0.035)
    piece('encre', boite((0.46, 0.3, 0.025), (0, 0, 0.03)), LUMIERE, A)
    piece('facture', boite((0.95, 0.72, 0.02), (0.08, 0.02, -0.01), (0, 0, 0.12)), VERRE, A, biseau=0.008)
    piece('coche', tube([(0.3, -0.24, 0.01), (0.37, -0.3, 0.01), (0.5, -0.16, 0.01)], 0.018), LUMIERE, A)


def aiguilleur():
    # L'aiguillage : un message entre par un tube, qui se divise en trois vers trois boîtes.
    A = objet('aiguilleur')
    piece('entree', tube([(-0.62, 0, 0), (-0.18, 0, 0)], 0.05, seg=16), VERRE, A)
    for k, z in enumerate((0.4, 0.0, -0.4)):
        pts = [(-0.2 + 0.66 * (i / 14), 0, z * lisse_t(i / 14)) for i in range(15)]
        piece(f'branche{k}', tube(pts, 0.045, seg=16), VERRE, A)
        piece(f'boite{k}', boite((0.2, 0.2, 0.2), (0.56, 0, z)), VERRE, A, biseau=0.04)
        piece(f'tri{k}', boite((0.08, 0.08, 0.08), (0.56, 0, z)), LUMIERE, A, biseau=0.015)
    piece('message', boule(0.075, (-0.22, 0, 0), seg=20, ann=10), LUMIERE, A)


def jobhunter():
    # La loupe qui lit les offres : la lentille, sa monture, le manche ; une coche lumineuse sous le verre.
    A = objet('jobhunter')
    piece('lentille', boule(0.3, (0, 0, 0.15), (1, 0.16, 1)), VERRE, A)
    piece('monture', tore(0.31, 0.035, (0, 0, 0.15), (math.pi / 2, 0, 0)), VERRE, A)
    piece('manche', cyl(0.05, 0.44, (0.4, 0, -0.25), (0, 2.356, 0)), VERRE, A)
    piece('coche', tube([(-0.13, 0, 0.16), (-0.03, 0, 0.06), (0.15, 0, 0.27)], 0.024), LUMIERE, A)


def sites():
    # La fenêtre de navigateur, et la page qui s'y construit bloc par bloc.
    A = objet('sites')
    piece('fenetre', boite((1.1, 0.08, 0.76)), VERRE, A, biseau=0.04)
    for k in range(3):
        piece(f'pastille{k}', boule(0.022, (-0.47 + k * 0.06, -0.045, 0.31), seg=12, ann=6), LUMIERE, A)
    blocs = [((0.96, 0.06), (0, 0.2)), ((0.5, 0.24), (-0.21, -0.01)), ((0.38, 0.24), (0.27, -0.01)),
             ((0.28, 0.12), (-0.33, -0.25)), ((0.28, 0.12), (0, -0.25)), ((0.28, 0.12), (0.33, -0.25))]
    for k, ((w, h), (x, z)) in enumerate(blocs):
        piece(f'bloc{k}', boite((w, 0.012, h), (x, -0.048, z)), LUMIERE, A)


def doublage():
    # La voix doublée : treize barres d'onde en verre, et la tête de lecture qui les traverse.
    A = objet('doublage')
    for k in range(13):
        x = -0.6 + k * 0.1
        env = math.sin(math.pi * (k + 0.5) / 13)
        h = 0.14 + 0.8 * env * (0.45 + 0.55 * abs(math.sin(k * 1.7 + 0.4)))
        piece(f'barre{k}', boite((0.056, 0.1, h), (x, 0, 0)), VERRE, A, biseau=0.026, seg=3)
    piece('lecture', tube([(0.15, -0.07, -0.5), (0.15, -0.07, 0.5)], 0.012), LUMIERE, A)


def motion():
    # Le clap : l'ardoise, sa barre rayée, le clapet ouvert ; le bouton lecture s'allume au centre.
    A = objet('motion')
    piece('ardoise', boite((0.9, 0.08, 0.6), (0, 0, -0.14)), VERRE, A, biseau=0.03)
    piece('barre', boite((0.9, 0.08, 0.11), (0, 0, 0.23)), VERRE, A, biseau=0.02)
    bm = boite((0.9, 0.08, 0.11))
    bmesh.ops.translate(bm, vec=Vector((0.45, 0, 0.055)), verts=bm.verts)
    bmesh.ops.rotate(bm, cent=(0, 0, 0), matrix=Euler((0, -0.32, 0), 'XYZ').to_matrix(), verts=bm.verts)
    bmesh.ops.translate(bm, vec=Vector((-0.45, 0, 0.3)), verts=bm.verts)
    piece('clapet', bm, VERRE, A, biseau=0.02)
    for k, x in enumerate((-0.33, -0.11, 0.11, 0.33)):
        piece(f'raie{k}', boite((0.05, 0.012, 0.12), (x, -0.045, 0.23), (0, 0.6, 0)), LUMIERE, A)
    piece('lecture', plaque([(-0.08, -0.24), (-0.08, -0.04), (0.1, -0.14)], 0.014, y=-0.048), LUMIERE, A)


def vorchex():
    # Le socle : un hypercube figé dans l'une de ses poses — le cube extérieur en verre, le cube intérieur allumé,
    # reliés coin à coin.
    A = objet('vorchex')
    coins = lambda s: [(x * s, y * s, z * s) for x in (-1, 1) for y in (-1, 1) for z in (-1, 1)]
    def aretes(s):
        c = coins(s)
        return [(c[i], c[j]) for i in range(8) for j in range(i + 1, 8) if sum(a != b for a, b in zip(c[i], c[j])) == 1]
    for k, (p, q) in enumerate(aretes(0.45)):
        piece(f'ext{k}', tube([p, q], 0.022), VERRE, A)
    for k, (p, q) in enumerate(aretes(0.19)):
        piece(f'int{k}', tube([p, q], 0.016), LUMIERE, A)
    for k, (p, q) in enumerate(zip(coins(0.19), coins(0.45))):
        piece(f'lien{k}', tube([p, q], 0.013), VERRE, A)
        piece(f'noeud{k}', boule(0.04, q, seg=16, ann=8), VERRE, A)


FABRIQUES = [('standardiste', standardiste), ('accueil-sms', accueil_sms), ('devis', devis), ('encaisse', encaisse),
             ('aiguilleur', aiguilleur), ('jobhunter', jobhunter), ('sites', sites), ('doublage', doublage),
             ('motion', motion), ('vorchex', vorchex)]
for _, f in FABRIQUES:
    f()

# ---------- Export : un fichier par objet ----------
os.makedirs(DOSSIER, exist_ok=True)
dg = bpy.context.evaluated_depsgraph_get()
for nom, _ in FABRIQUES:
    racine = bpy.data.objects[f'verre_{nom}']
    for ob in SCENE.objects:
        ob.select_set(False)
    racine.select_set(True)
    for c in racine.children_recursive:
        c.select_set(True)
    chemin = os.path.join(DOSSIER, f'{nom}.glb')
    bpy.ops.export_scene.gltf(filepath=chemin, export_format='GLB', use_selection=True, export_apply=True, export_yup=True,
                              export_texcoords=False, export_normals=True, export_animations=False)
    tris = 0
    for c in racine.children_recursive:
        me = c.evaluated_get(dg).to_mesh()
        tris += sum(len(p.vertices) - 2 for p in me.polygons)
        c.evaluated_get(dg).to_mesh_clear()
    print(f'[horizon] verre/{nom}.glb : {tris} triangles, {os.path.getsize(chemin) / 1024:.0f} Ko')


# ---------- Rendu de contrôle (les objets rangés en deux lignes) ----------
def rendu():
    for k, (nom, _) in enumerate(FABRIQUES):
        ligne, col = divmod(k, 5)
        bpy.data.objects[f'verre_{nom}'].location = ((col - 2) * 1.35, 0, 0.7 - ligne * 1.45)
    os.makedirs(os.path.dirname(CONTROLE), exist_ok=True)
    monde = bpy.data.worlds.new('fond')
    SCENE.world = monde
    if monde.node_tree is None:
        monde.use_nodes = True
    fond = next(n for n in monde.node_tree.nodes if n.type == 'BACKGROUND')
    fond.inputs['Color'].default_value = (0.012, 0.014, 0.02, 1)
    for nom, loc, rot, force, taille, coul in (
        ('cle', (-4, -6, 5), (math.radians(55), 0, math.radians(-35)), 900, 5, (0.85, 0.9, 1.0)),
        ('contre', (3, 6, 3), (math.radians(-60), 0, math.radians(150)), 700, 4, (0.35, 0.55, 1.0)),
    ):
        L = bpy.data.lights.new(nom, 'AREA')
        L.energy, L.size, L.color = force, taille, coul
        o = bpy.data.objects.new(nom, L)
        o.location, o.rotation_euler = loc, rot
        SCENE.collection.objects.link(o)
    cam = bpy.data.objects.new('camera', bpy.data.cameras.new('camera'))
    cam.data.lens = 50
    cam.location = (0, -11, 1.6)
    cam.rotation_euler = (math.radians(82), 0, 0)
    SCENE.collection.objects.link(cam)
    SCENE.camera = cam
    for moteur in ('BLENDER_EEVEE_NEXT', 'BLENDER_EEVEE', 'CYCLES'):
        try:
            SCENE.render.engine = moteur
            break
        except TypeError:
            continue
    if SCENE.render.engine == 'CYCLES':
        SCENE.cycles.samples = 32
    SCENE.render.resolution_x, SCENE.render.resolution_y = 1500, 760
    SCENE.render.filepath = CONTROLE
    bpy.ops.render.render(write_still=True)
    print(f'[horizon] contrôle : {CONTROLE} ({SCENE.render.engine})')


rendu()

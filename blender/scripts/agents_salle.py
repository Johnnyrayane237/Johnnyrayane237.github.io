# La salle des agents : les onze agents modélisés pour de vrai, exportés dans un seul fichier public/models/agents.glb.
# Chaque agent est un objet racine « agent_<type> » (un vide), avec ses pièces en enfants.
# Taille : environ 0,9 de haut, centré sur sa racine, face au visiteur (−Y dans Blender, +Z une fois dans three.js).
#
# Quatre surfaces, repérées par le nom de leur matériau ; le site les remplace par les siennes au chargement :
#   metal     graphite poli (le corps)
#   verre     verre fumé, vernis brillant (les écrans, les plaques)
#   lumiere   filets lumineux, à la couleur de la mission ; ils s'allument quand l'agent travaille
#   ceramique blanc mat (la personne, toujours la même)
# Aucun rayon, aucune graduation, aucun cadran : des objets nets et froids.
#
# Lancement (sans interface) :
#   blender -b --factory-startup --python blender/scripts/agents_salle.py
# Produit aussi un rendu de contrôle dans blender/controle/agents_salle.png.
import math
import os

import bmesh
import bpy
from mathutils import Euler, Vector

TAU = math.tau
RACINE = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SORTIE = os.path.join(RACINE, 'public', 'models', 'agents.glb')
CONTROLE = os.path.join(RACINE, 'blender', 'controle', 'agents_salle.png')

bpy.ops.wm.read_factory_settings(use_empty=True)
SCENE = bpy.context.scene


# ---------- Matériaux (ils servent surtout à nommer les surfaces) ----------
def materiau(nom, base, metal=0.0, rugo=0.5, emission=None, force=0.0):
    m = bpy.data.materials.new(nom)
    if m.node_tree is None:
        m.use_nodes = True
    p = next(n for n in m.node_tree.nodes if n.type == 'BSDF_PRINCIPLED')
    p.inputs['Base Color'].default_value = (*base, 1)
    p.inputs['Metallic'].default_value = metal
    p.inputs['Roughness'].default_value = rugo
    if emission:
        p.inputs['Emission Color'].default_value = (*emission, 1)
        p.inputs['Emission Strength'].default_value = force
    return m


METAL = materiau('metal', (0.06, 0.07, 0.09), metal=1.0, rugo=0.3)
VERRE = materiau('verre', (0.01, 0.015, 0.02), metal=0.1, rugo=0.06)
LUMIERE = materiau('lumiere', (0, 0, 0), emission=(0.45, 0.7, 1.0), force=6.0)
CERAMIQUE = materiau('ceramique', (0.86, 0.88, 0.92), rugo=0.45)


# ---------- Fabrication des pièces ----------
def poser(bm, centre=(0, 0, 0), rot=(0, 0, 0), echelle=None):
    if echelle is not None:
        bmesh.ops.scale(bm, vec=echelle, verts=bm.verts)
    if any(rot):
        bmesh.ops.rotate(bm, cent=(0, 0, 0), matrix=Euler(rot, 'XYZ').to_matrix(), verts=bm.verts)
    bmesh.ops.translate(bm, vec=Vector(centre), verts=bm.verts)
    return bm


def piece(nom, bm, mat, parent, lisse=True, biseau=0.0):
    """Transforme un bmesh en objet enfant de l'agent, avec son matériau et, au besoin, un biseau arrondi."""
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
        b.segments = 3
        b.limit_method = 'ANGLE'
        b.angle_limit = math.radians(30)
        b.harden_normals = True
    return ob


def boite(taille, centre=(0, 0, 0), rot=(0, 0, 0)):
    bm = bmesh.new()
    bmesh.ops.create_cube(bm, size=1.0)
    return poser(bm, centre, rot, taille)


def cyl(r, h, centre=(0, 0, 0), rot=(0, 0, 0), seg=40, r2=None):
    """Cylindre (ou cône si r2) d'axe Z avant rotation."""
    bm = bmesh.new()
    bmesh.ops.create_cone(bm, cap_ends=True, cap_tris=False, segments=seg, radius1=r, radius2=r if r2 is None else r2, depth=h)
    return poser(bm, centre, rot)


def boule(r, centre=(0, 0, 0), echelle=None, seg=40, ann=20):
    bm = bmesh.new()
    bmesh.ops.create_uvsphere(bm, u_segments=seg, v_segments=ann, radius=r)
    return poser(bm, centre, (0, 0, 0), echelle)


def tore(R, r, centre=(0, 0, 0), rot=(0, 0, 0), seg=72, seg2=14, arc=TAU, a0=0.0):
    """Tore d'axe Z avant rotation (dans le plan XY) ; arc < 2π donne une portion fermée par ses deux bouts."""
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


def tube(points, r, seg=10):
    """Un tube fin le long d'une ligne brisée (cordons, lignes d'encre, filets lumineux)."""
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


def solide(verts, faces):
    bm = bmesh.new()
    vs = [bm.verts.new(v) for v in verts]
    for f in faces:
        bm.faces.new([vs[i] for i in f])
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces[:])
    return bm


def agent(nom):
    root = bpy.data.objects.new(f'agent_{nom}', None)
    root.empty_display_size = 0.3
    SCENE.collection.objects.link(root)
    return root


FACE = (math.pi / 2, 0, 0)  # un objet d'axe Z, tourné pour faire face au visiteur (axe −Y)


# ---------- Les agents ----------
def sonde():
    """Chercher : une sonde taillée comme une gemme, une ceinture de lumière, une antenne."""
    A = agent('probe')
    r, h = 0.3, 0.38
    V = [(r, 0, 0), (-r, 0, 0), (0, r, 0), (0, -r, 0), (0, 0, h), (0, 0, -h)]
    F = [(0, 2, 4), (2, 1, 4), (1, 3, 4), (3, 0, 4), (2, 0, 5), (1, 2, 5), (3, 1, 5), (0, 3, 5)]
    piece('corps', poser(solide(V, F), (0, 0, -0.08), (0, 0, math.radians(20))), METAL, A, lisse=False, biseau=0.014)
    piece('ceinture', tore(0.33, 0.011, (0, 0, -0.08), (0, 0, 0)), LUMIERE, A)
    piece('antenne', cyl(0.011, 0.2, (0, 0, 0.38)), METAL, A)
    piece('pointe', boule(0.034, (0, 0, 0.5)), LUMIERE, A)


def prisme():
    """Analyser : un prisme de verre fumé, un filet qui entre, trois voies parallèles qui sortent (le tri)."""
    A = agent('prism')
    # Trois faces : tourné face au visiteur, puis d'un quart de tour pour que la pointe soit en haut.
    piece('prisme', cyl(0.34, 0.36, (0, 0, 0), (math.pi / 2, -math.pi / 2, 0), seg=3), VERRE, A, lisse=False, biseau=0.018)
    tri = [(math.cos(a) * 0.2, -0.19, math.sin(a) * 0.2) for a in (math.pi / 2 + i * TAU / 3 for i in range(3))]
    piece('contour', tube(tri + [tri[0]], 0.008, 8), LUMIERE, A)
    piece('entree', tube([(-0.7, 0, 0.02), (-0.2, 0, 0.02)], 0.009), LUMIERE, A)
    for k, z in enumerate((0.13, 0, -0.13)):
        piece(f'voie_{k}', tube([(0.2, 0, z), (0.66, 0, z)], 0.008), LUMIERE, A)


def boussole():
    """Orienter : une boussole d'instrument, couchée comme posée sur un pupitre. Pas de graduation, pas de face d'icône."""
    A = agent('compass')
    sub = bpy.data.objects.new('instrument', None)
    SCENE.collection.objects.link(sub)
    sub.parent = A
    sub.rotation_euler = (math.radians(-58), 0, math.radians(-14))  # la face regarde vers le haut et l'avant
    piece('disque', cyl(0.4, 0.09, (0, 0, 0), FACE, seg=64), METAL, sub, biseau=0.02)
    piece('face', cyl(0.34, 0.012, (0, -0.05, 0), FACE, seg=64), VERRE, sub)
    piece('lisere', tore(0.355, 0.006, (0, -0.048, 0), FACE, seg=72, seg2=8), LUMIERE, sub)
    L, W, e = 0.28, 0.05, 0.012
    aig = [(0, -e, L), (W, -e, 0), (0, -e, -L), (-W, -e, 0), (0, -e - 0.025, 0)]
    piece('aiguille', poser(solide(aig, [(0, 4, 1), (1, 4, 2), (2, 4, 3), (3, 4, 0), (0, 1, 2, 3)]), (0, -0.055, 0), (0, math.radians(-25), 0)),
          METAL, sub, lisse=False)
    piece('pointe', boule(0.022, (math.sin(math.radians(25)) * -0.27, -0.075, math.cos(math.radians(25)) * 0.27)), LUMIERE, sub)
    piece('axe', boule(0.03, (0, -0.08, 0)), METAL, sub)
    piece('pied', cyl(0.05, 0.22, (0, 0.12, -0.36), (math.radians(-30), 0, 0), seg=24), METAL, A, biseau=0.008)


def stylet():
    """Rédiger : un stylet de métal, une plume de lumière, et la ligne d'encre qu'il laisse."""
    A = agent('quill')
    ang = math.radians(42)  # incliné vers la droite : la plume en bas à gauche, le capuchon en haut à droite
    d = Vector((math.sin(ang), 0, math.cos(ang)))  # l'axe Z du cylindre, une fois tourné autour de Y
    c = Vector((0.04, 0, 0.06))
    rot = (0, ang, 0)
    piece('corps', cyl(0.048, 0.62, tuple(c), rot, seg=32), METAL, A, biseau=0.01)
    piece('bague', tore(0.052, 0.009, tuple(c - d * 0.2), rot), LUMIERE, A)
    piece('cone', cyl(0.006, 0.14, tuple(c - d * 0.38), rot, seg=32, r2=0.048), METAL, A)
    piece('plume', boule(0.016, tuple(c - d * 0.455)), LUMIERE, A)
    piece('capuchon', cyl(0.05, 0.08, tuple(c + d * 0.34), rot, seg=32), VERRE, A, biseau=0.01)
    encre = [(-0.56 + i * 0.06, 0, -0.46 + math.sin(i * 1.1) * 0.02) for i in range(15)]
    piece('encre', tube(encre, 0.007), LUMIERE, A)


def loupe():
    """Vérifier : une loupe, son verre, son liseré de lumière et son manche."""
    A = agent('lens')
    c = (-0.07, 0, 0.08)
    piece('cerclage', tore(0.27, 0.035, c, FACE, seg=72, seg2=16), METAL, A)
    piece('verre', cyl(0.245, 0.02, c, FACE, seg=64), VERRE, A)
    piece('lisere', tore(0.232, 0.006, (c[0], -0.016, c[2]), FACE, seg=72, seg2=8), LUMIERE, A)
    a = math.radians(-45)
    u = Vector((math.cos(a), 0, math.sin(a)))
    p0 = Vector(c) + u * 0.3
    piece('manche', tube([tuple(p0), tuple(p0 + u * 0.34)], 0.038, 20), METAL, A)
    piece('embout', boule(0.03, tuple(p0 + u * 0.36)), LUMIERE, A)


def humain():
    """Décider : la personne. Un buste de céramique blanche sur un socle, sans aucun effet."""
    A = agent('human')
    piece('tete', boule(0.15, (0, 0, 0.25), echelle=(0.92, 0.95, 1.12)), CERAMIQUE, A)
    piece('cou', cyl(0.055, 0.12, (0, 0, 0.06), seg=24), CERAMIQUE, A)
    buste = boule(0.34, (0, 0, -0.14), echelle=(1, 0.52, 0.5))
    bmesh.ops.delete(buste, geom=[v for v in buste.verts if v.co.z < -0.2], context='VERTS')
    bmesh.ops.contextual_create(buste, geom=[e for e in buste.edges if e.is_boundary])
    piece('buste', buste, CERAMIQUE, A)
    piece('socle', cyl(0.3, 0.06, (0, 0, -0.24), seg=64), METAL, A, biseau=0.015)


def anneau():
    """Écouter : un gyroscope vu de trois quarts. Deux anneaux de métal croisés, un liseré de lumière, un cœur de métal."""
    A = agent('ring')
    rot = (math.pi / 2, 0, math.radians(58))
    piece('anneau', tore(0.38, 0.05, (0, 0, 0), rot, seg=96, seg2=18), METAL, A)
    piece('lisere', tore(0.38, 0.008, (0, 0, 0.052), (0, 0, 0), seg=96, seg2=8), LUMIERE, A)
    piece('croise', tore(0.3, 0.03, (0, 0, 0), (math.pi / 2, 0, math.radians(-40)), seg=72, seg2=12), METAL, A)
    piece('coeur', boule(0.075, (0, 0, 0)), METAL, A)
    piece('axe', cyl(0.012, 0.86, (0, 0, 0), seg=12), METAL, A)


def plans():
    """Structurer : trois plaques de verre empilées, un filet de lumière sur leur tranche, quatre piliers."""
    A = agent('planes')
    for i, z in enumerate((-0.28, 0, 0.28)):
        r = (0, 0, (i - 1) * 0.12)
        piece(f'plaque_{i}', boite((0.72, 0.5, 0.035), (0, 0, z), r), VERRE, A, lisse=False, biseau=0.012)
        R = Euler(r).to_matrix()
        a, b = R @ Vector((-0.34, -0.252, 0)), R @ Vector((0.34, -0.252, 0))
        piece(f'filet_{i}', tube([(a.x, a.y, z), (b.x, b.y, z)], 0.006), LUMIERE, A)
    for k, (x, y) in enumerate(((-0.33, -0.22), (0.33, -0.22), (0.33, 0.22), (-0.33, 0.22))):
        piece(f'pilier_{k}', cyl(0.012, 0.56, (x, y, 0), seg=12), METAL, A)


def lames():
    """Assembler : quatre plans de montage (des images du film), alignés en profondeur comme sur une table de montage."""
    A = agent('blades')
    for i in range(4):
        x, y, z = -0.27 + i * 0.16, 0.24 - i * 0.16, 0.04 - i * 0.03
        r = (0, 0, math.radians(-28))
        piece(f'cadre_{i}', boite((0.42, 0.02, 0.3), (x, y, z), r), VERRE, A, lisse=False, biseau=0.008)
        R = Euler(r).to_matrix()
        a, b = R @ Vector((-0.19, -0.014, -0.13)), R @ Vector((0.19, -0.014, -0.13))
        piece(f'trait_{i}', tube([(x + a.x, y + a.y, z + a.z), (x + b.x, y + b.y, z + b.z)], 0.006), LUMIERE, A)
    piece('rail', boite((0.92, 0.1, 0.03), (0, 0, -0.27), (0, 0, math.radians(-28))), METAL, A, lisse=False, biseau=0.008)


def diapason():
    """Donner de la voix : un diapason de métal, deux pointes de lumière, une bague."""
    A = agent('fork')
    for s in (-1, 1):
        piece(f'branche_{s}', cyl(0.032, 0.44, (s * 0.12, 0, 0.27), seg=24), METAL, A)
        piece(f'pointe_{s}', boule(0.034, (s * 0.12, 0, 0.5)), LUMIERE, A)
    piece('coude', tore(0.12, 0.032, (0, 0, 0.05), FACE, seg=36, seg2=14, arc=math.pi, a0=math.pi), METAL, A)
    piece('tige', cyl(0.028, 0.36, (0, 0, -0.25), seg=24), METAL, A)
    piece('bague', tore(0.034, 0.008, (0, 0, -0.16)), LUMIERE, A)
    piece('pied', boule(0.05, (0, 0, -0.45)), METAL, A)


def ruban():
    """Mettre en forme : un ruban de métal qui se tord, et le filet de lumière qui suit son bord."""
    A = agent('ribbon')
    n, w = 64, 0.15
    bm = bmesh.new()
    bord = []
    rangs = []
    for i in range(n + 1):
        t = i / n
        c = Vector(((t - 0.5) * 1.0, 0.08 * math.sin(t * TAU), 0.16 * math.sin(t * TAU * 0.75)))
        th = (t - 0.5) * math.pi * 1.3
        d = Vector((0, math.sin(th), math.cos(th)))
        rangs.append((bm.verts.new(c - d * w), bm.verts.new(c + d * w)))
        bord.append(tuple(c + d * (w + 0.004)))
    for (a, b), (c2, d2) in zip(rangs, rangs[1:]):
        bm.faces.new((a, c2, d2, b))
    ob = piece('ruban', bm, METAL, A)
    s = ob.modifiers.new('epaisseur', 'SOLIDIFY')
    s.thickness = 0.014
    s.offset = 0
    piece('filet', tube(bord, 0.006), LUMIERE, A)


for f in (sonde, prisme, boussole, stylet, loupe, humain, anneau, plans, lames, diapason, ruban):
    f()
racines = [bpy.data.objects[f'agent_{k}'] for k in ('probe', 'prism', 'compass', 'quill', 'lens', 'human', 'ring', 'planes', 'blades', 'fork', 'ribbon')]

# Rangés en deux lignes, pour le rendu de contrôle (le site remet chaque agent à l'origine).
for k, r in enumerate(racines):
    ligne, col = divmod(k, 6)
    r.location = ((col - 2.5) * 1.25 + ligne * 0.62, 0, 0.62 - ligne * 1.3)

os.makedirs(os.path.dirname(SORTIE), exist_ok=True)
bpy.ops.export_scene.gltf(filepath=SORTIE, export_format='GLB', export_apply=True, export_yup=True)
tris = 0
dg = bpy.context.evaluated_depsgraph_get()
for ob in SCENE.objects:
    if ob.type == 'MESH':
        me = ob.evaluated_get(dg).to_mesh()
        tris += sum(len(p.vertices) - 2 for p in me.polygons)
        ob.evaluated_get(dg).to_mesh_clear()
print(f'[horizon] agents.glb : {len(racines)} agents, {tris} triangles, {os.path.getsize(SORTIE) / 1024:.0f} Ko')


# ---------- Rendu de contrôle ----------
def rendu():
    os.makedirs(os.path.dirname(CONTROLE), exist_ok=True)
    monde = bpy.data.worlds.new('fond')
    SCENE.world = monde
    if monde.node_tree is None:
        monde.use_nodes = True
    fond = next(n for n in monde.node_tree.nodes if n.type == 'BACKGROUND')
    fond.inputs['Color'].default_value = (0.012, 0.014, 0.02, 1)
    fond.inputs['Strength'].default_value = 1.0
    for nom, loc, rot, force, taille, coul in (
        ('cle', (-4, -6, 5), (math.radians(55), 0, math.radians(-35)), 900, 5, (0.85, 0.9, 1.0)),
        ('contre', (3, 6, 3), (math.radians(-60), 0, math.radians(150)), 700, 4, (0.35, 0.55, 1.0)),
        ('sol', (0, -3, -4), (math.radians(150), 0, 0), 120, 8, (0.6, 0.7, 1.0)),
    ):
        L = bpy.data.lights.new(nom, 'AREA')
        L.energy, L.size, L.color = force, taille, coul
        o = bpy.data.objects.new(nom, L)
        o.location, o.rotation_euler = loc, rot
        SCENE.collection.objects.link(o)
    cam = bpy.data.objects.new('camera', bpy.data.cameras.new('camera'))
    cam.data.lens = 50
    cam.location = (0, -15.5, 0.25)
    cam.rotation_euler = (math.radians(89), 0, 0)
    SCENE.collection.objects.link(cam)
    SCENE.camera = cam
    for moteur in ('BLENDER_EEVEE_NEXT', 'BLENDER_EEVEE', 'CYCLES'):
        try:
            SCENE.render.engine = moteur
            break
        except TypeError:
            continue
    if SCENE.render.engine == 'CYCLES':
        SCENE.cycles.samples = 48
    SCENE.render.resolution_x, SCENE.render.resolution_y = 1600, 760
    SCENE.render.filepath = CONTROLE
    bpy.ops.render.render(write_still=True)
    print(f'[horizon] contrôle : {CONTROLE} ({SCENE.render.engine})')


rendu()

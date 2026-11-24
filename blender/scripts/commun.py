# Outils communs aux modèles de la mission HORIZON.
# Chaque script d'ancêtre ou d'agent importe ce module, construit ses pièces, puis appelle exporter().
#
# Lancement (sans interface) :
#   blender -b --factory-startup --python blender/scripts/central_1878.py -- --sortie public/models/central_1878.chr
#
# Unités : celles de la Machine (une sculpture tient dans environ 3,2 × 3,1). Repère Blender (Z en haut,
# face avant vers −Y) ; l'export convertit vers three.js (Y en haut, face avant vers +Z).
#
# Format .chr (petit-boutiste), lu par src/shapes-loader.js :
#   'CHR1' · float32 échelle · uint16 nombre de pièces
#   par pièce : uint8 ton×255 · uint8 densité×20 · uint8 part d'arêtes×255 · uint8 réservé · float32 prm
#               uint16 sommets · uint16 arêtes · uint16 triangles
#               int16 [sommets×3] (quantifiés sur l'échelle) · uint16 [arêtes×2] · uint16 [triangles×3]

import math
import os
import struct
import sys

import bmesh
import bpy
from mathutils import Euler, Matrix, Vector

SEUIL_ARETE = math.radians(30)  # au-delà de cet angle entre deux faces, l'arête est « vive » et dessinée


def arguments():
    """Lit les options placées après « -- » : --sortie <fichier.chr> et --controle <dossier>."""
    argv = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else []
    opts = {'sortie': None, 'controle': None}
    for i, a in enumerate(argv):
        if a in ('--sortie', '--controle') and i + 1 < len(argv):
            opts[a[2:]] = argv[i + 1]
    return opts


def reinit():
    """Scène vide : on retire le cube, la caméra et la lampe du fichier de démarrage."""
    for ob in list(bpy.data.objects):
        bpy.data.objects.remove(ob, do_unlink=True)
    for me in list(bpy.data.meshes):
        bpy.data.meshes.remove(me)


def _objet(nom, bm, ton=0.0, prm=0.0, dens=1.0, aretes=0.7):
    me = bpy.data.meshes.new(nom)
    bm.to_mesh(me)
    bm.free()
    ob = bpy.data.objects.new(nom, me)
    bpy.context.scene.collection.objects.link(ob)
    # Convention de la mission : le préfixe acc_ marque le ton d'accent, prm_<valeur>_ le paramètre d'animation.
    ob['ton'] = float(ton)
    ob['prm'] = float(prm)
    ob['dens'] = float(dens)
    ob['aretes'] = float(aretes)
    return ob


def _placer(bm, centre=(0, 0, 0), rot=(0, 0, 0), echelle=None):
    if echelle is not None:
        bmesh.ops.scale(bm, vec=echelle, verts=bm.verts)
    if any(rot):
        bmesh.ops.rotate(bm, cent=(0, 0, 0), matrix=Euler(rot).to_matrix(), verts=bm.verts)
    bmesh.ops.translate(bm, vec=Vector(centre), verts=bm.verts)


def boite(nom, centre, taille, rot=(0, 0, 0), **kw):
    """Pavé de dimensions « taille » (x, y, z), centré."""
    bm = bmesh.new()
    bmesh.ops.create_cube(bm, size=1.0)
    _placer(bm, centre, rot, taille)
    return _objet(nom, bm, **kw)


def cylindre(nom, centre, rayon, hauteur, rot=(0, 0, 0), segments=24, rayon2=None, ferme=True, **kw):
    """Cylindre (ou cône si rayon2) d'axe Z avant rotation."""
    bm = bmesh.new()
    bmesh.ops.create_cone(bm, cap_ends=ferme, cap_tris=False, segments=segments, radius1=rayon,
                          radius2=rayon if rayon2 is None else rayon2, depth=hauteur)
    _placer(bm, centre, rot)
    return _objet(nom, bm, **kw)


def sphere(nom, centre, rayon, segments=16, anneaux=10, echelle=None, **kw):
    bm = bmesh.new()
    bmesh.ops.create_uvsphere(bm, u_segments=segments, v_segments=anneaux, radius=rayon)
    _placer(bm, centre, (0, 0, 0), echelle)
    return _objet(nom, bm, **kw)


def tore(nom, centre, R, r, rot=(0, 0, 0), seg=32, seg2=8, arc=math.tau, **kw):
    """Tore (ou portion de tore si arc < 2π), d'axe Z avant rotation."""
    bm = bmesh.new()
    ferme = arc >= math.tau - 1e-6
    n = seg if ferme else seg + 1
    anneaux = []
    for i in range(n):
        a = arc * i / seg
        ca, sa = math.cos(a), math.sin(a)
        anneau = []
        for j in range(seg2):
            b = math.tau * j / seg2
            d = R + r * math.cos(b)
            anneau.append(bm.verts.new((d * ca, d * sa, r * math.sin(b))))
        anneaux.append(anneau)
    for i in range(seg if ferme else seg):
        A, B = anneaux[i], anneaux[(i + 1) % n]
        for j in range(seg2):
            bm.faces.new((A[j], A[(j + 1) % seg2], B[(j + 1) % seg2], B[j]))
    _placer(bm, centre, rot)
    return _objet(nom, bm, **kw)


def plaque(nom, centre, w, h, rot=(0, 0, 0), **kw):
    """Rectangle plat (une face), dans le plan XZ avant rotation : face vers −Y, c'est-à-dire vers le visiteur."""
    bm = bmesh.new()
    v = [bm.verts.new((x * w / 2, 0, z * h / 2)) for x, z in ((-1, -1), (1, -1), (1, 1), (-1, 1))]
    bm.faces.new(v)
    _placer(bm, centre, rot)
    return _objet(nom, bm, **kw)


def fil(nom, points, ferme=False, **kw):
    """Ligne brisée sans face : seules ses arêtes portent des points (cordons, ondes, bandes)."""
    bm = bmesh.new()
    vs = [bm.verts.new(p) for p in points]
    for a, b in zip(vs, vs[1:]):
        bm.edges.new((a, b))
    if ferme and len(vs) > 2:
        bm.edges.new((vs[-1], vs[0]))
    kw.setdefault('aretes', 1.0)
    return _objet(nom, bm, **kw)


def cercle(nom, centre, rayon, rot=(0, 0, 0), segments=24, plein=False, **kw):
    """Cercle dans le plan XZ (face vers le visiteur) ; plein = disque."""
    bm = bmesh.new()
    vs = [bm.verts.new((math.cos(math.tau * i / segments) * rayon, 0, math.sin(math.tau * i / segments) * rayon)) for i in range(segments)]
    if plein:
        bm.faces.new(vs)
    else:
        for i in range(segments):
            bm.edges.new((vs[i], vs[(i + 1) % segments]))
        kw.setdefault('aretes', 1.0)
    _placer(bm, centre, rot)
    return _objet(nom, bm, **kw)


def courbe(fn, n):
    """Échantillonne une fonction t ∈ [0, 1] → (x, y, z) en n + 1 points."""
    return [fn(i / n) for i in range(n + 1)]


def texte(nom, corps, centre, taille=0.2, rot=(math.pi / 2, 0, 0), **kw):
    """Texte converti en maillage (police intégrée de Blender), lisible de face."""
    cu = bpy.data.curves.new(nom, type='FONT')
    cu.body = corps
    cu.size = taille
    cu.align_x = 'CENTER'
    cu.align_y = 'CENTER'
    tmp = bpy.data.objects.new(nom + '_tmp', cu)
    bpy.context.scene.collection.objects.link(tmp)
    dg = bpy.context.evaluated_depsgraph_get()
    me = bpy.data.meshes.new_from_object(tmp.evaluated_get(dg))
    bpy.data.objects.remove(tmp, do_unlink=True)
    bm = bmesh.new()
    bm.from_mesh(me)
    bpy.data.meshes.remove(me)
    _placer(bm, centre, rot)
    kw.setdefault('aretes', 0.85)
    return _objet(nom, bm, **kw)


def repeter(fabrique, n):
    """Appelle fabrique(i) pour i de 0 à n − 1 et renvoie la liste des objets."""
    return [fabrique(i) for i in range(n)]


# ---------- Export ----------
def _vers_three(v):
    return (v.x, v.z, -v.y)


def _piece(ob):
    """Sommets, arêtes vives et triangles d'un objet, dans le repère de three.js."""
    dg = bpy.context.evaluated_depsgraph_get()
    me = bpy.data.meshes.new_from_object(ob.evaluated_get(dg))
    me.transform(ob.matrix_world)
    bm = bmesh.new()
    bm.from_mesh(me)
    bpy.data.meshes.remove(me)
    bmesh.ops.remove_doubles(bm, verts=bm.verts, dist=1e-5)
    bm.normal_update()
    vives = []
    for e in bm.edges:
        f = e.link_faces
        if len(f) < 2 or (len(f) == 2 and f[0].normal.angle(f[1].normal, 0) > SEUIL_ARETE):
            vives.append((e.verts[0].index, e.verts[1].index))
    tris = []
    if bm.faces:
        res = bmesh.ops.triangulate(bm, faces=bm.faces[:])
        tris = [tuple(v.index for v in f.verts) for f in bm.faces]
        del res
    bm.verts.index_update()
    verts = [_vers_three(v.co) for v in bm.verts]
    bm.free()
    return verts, vives, tris


def exporter(chemin, controle=None):
    """Écrit toutes les pièces de la scène dans un fichier .chr, puis un rendu de contrôle si demandé."""
    pieces = []
    for ob in bpy.context.scene.objects:
        if ob.type != 'MESH':
            continue
        verts, aretes, tris = _piece(ob)
        if len(verts) > 65535:
            raise RuntimeError(f'{ob.name} : trop de sommets ({len(verts)})')
        pieces.append((ob, verts, aretes, tris))
    m = max(max(abs(c) for v in p[1] for c in v) for p in pieces) or 1.0
    q = 32767 / m
    out = bytearray(b'CHR1')
    out += struct.pack('<fH', m, len(pieces))
    nv = ne = nt = 0
    for ob, verts, aretes, tris in pieces:
        out += struct.pack('<BBBBfHHH', int(round(min(1, ob['ton']) * 255)), int(round(min(12.75, ob['dens']) * 20)),
                           int(round(min(1, ob['aretes']) * 255)), 0, ob['prm'], len(verts), len(aretes), len(tris))
        for v in verts:
            out += struct.pack('<hhh', *(int(round(c * q)) for c in v))
        for a in aretes:
            out += struct.pack('<HH', *a)
        for t in tris:
            out += struct.pack('<HHH', *t)
        nv += len(verts); ne += len(aretes); nt += len(tris)
    os.makedirs(os.path.dirname(os.path.abspath(chemin)), exist_ok=True)
    with open(chemin, 'wb') as f:
        f.write(out)
    xs = [v for p in pieces for v in p[1]]
    bornes = [(min(v[i] for v in xs), max(v[i] for v in xs)) for i in range(3)]
    print(f'[horizon] {os.path.basename(chemin)} : {len(pieces)} pièces, {nv} sommets, {ne} arêtes, {nt} triangles, '
          f'{len(out) / 1024:.1f} Ko · x {bornes[0][0]:.2f}..{bornes[0][1]:.2f} · y {bornes[1][0]:.2f}..{bornes[1][1]:.2f} · z {bornes[2][0]:.2f}..{bornes[2][1]:.2f}')
    if controle:
        rendu_controle(controle, os.path.splitext(os.path.basename(chemin))[0])


# ---------- Rendu de contrôle ----------
def rendu_controle(dossier, nom):
    """Deux images dans blender/controle/ : une vue éclairée, et la silhouette noire sur blanc à 64 px de haut."""
    # Chemin absolu : sinon Blender résout un chemin relatif depuis son propre dossier, pas depuis le projet.
    dossier = os.path.abspath(dossier)
    os.makedirs(dossier, exist_ok=True)
    sc = bpy.context.scene
    # Les fils (sans face) reçoivent une fine gaine, le temps du rendu, pour être visibles.
    for ob in list(sc.objects):
        if ob.type == 'MESH' and not ob.data.polygons:
            mod = ob.modifiers.new('gaine', 'SKIN')
            for sv in ob.data.skin_vertices[0].data:
                sv.radius = (0.012, 0.012)
            ob.data.skin_vertices[0].data[0].use_root = True
            del mod
    sc.render.engine = 'BLENDER_WORKBENCH'
    sc.display.shading.light = 'STUDIO'
    sc.display.shading.color_type = 'SINGLE'
    sc.display.shading.single_color = (0.78, 0.6, 0.35)
    sc.display.shading.show_cavity = True
    if sc.world is None:
        sc.world = bpy.data.worlds.new('fond')
    sc.world.color = (1, 1, 1)
    cam_data = bpy.data.cameras.new('controle')
    cam_data.lens = 50
    cam = bpy.data.objects.new('controle', cam_data)
    sc.collection.objects.link(cam)
    sc.camera = cam
    # Même angle que la Machine : de face, légèrement de trois quarts.
    cam.location = (2.2, -9.0, 0.9)
    cam.rotation_euler = (math.radians(84), 0, math.radians(13.5))
    sc.render.resolution_x, sc.render.resolution_y = 720, 720
    sc.render.film_transparent = False
    sc.render.filepath = os.path.join(dossier, nom + '.png')
    bpy.ops.render.render(write_still=True)
    # Silhouette : tout en noir, 64 px de haut.
    sc.display.shading.light = 'FLAT'
    sc.display.shading.single_color = (0, 0, 0)
    sc.display.shading.show_cavity = False
    sc.render.resolution_x, sc.render.resolution_y = 64, 64
    sc.render.filepath = os.path.join(dossier, nom + '-64.png')
    bpy.ops.render.render(write_still=True)

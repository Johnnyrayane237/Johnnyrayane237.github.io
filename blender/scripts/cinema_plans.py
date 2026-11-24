# Les plans de la couche cinéma : trois boucles parfaites rendues avec EEVEE, en noir et blanc.
# Le site pose la couleur lui-même (la couleur de chaque station, ou le bleu froid de la marque).
#
#   cartes   le prologue : des cartes de verre flottent dans la brume, chacune porte quelques lignes de tâche
#   flux     le futur des stations : quelques traînées de lumière floues qui passent au loin
#   horizon  l'épilogue : un sol miroir semé de repères, une bande de lumière plate tout au fond
#
# La caméra glisse de côté, jamais vers un point de fuite : aucune ligne ne rayonne depuis le centre.
# Boucle parfaite : la scène se répète tous les P mètres et la caméra avance d'exactement P pendant la boucle ;
# les paquets avancent d'un nombre entier de P ; les cartes oscillent sur une période égale à la boucle.
#
# Lancement (sans interface) :
#   blender -b --factory-startup --python blender/scripts/cinema_plans.py -- <plan> <essai|boucle> <dossier de sortie>
# « essai » rend deux images (début et milieu) ; « boucle » rend toutes les images de la boucle.
import math
import os
import random
import sys
import time

import bpy

argv = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else []
PLAN = argv[0] if len(argv) > 0 else 'flux'
MODE = argv[1] if len(argv) > 1 else 'essai'
SORTIE = argv[2] if len(argv) > 2 else os.path.join(os.getcwd(), 'cinema_rendu')
L = 144          # images par boucle (6 s à 24 images par seconde)
P = 4.0          # période de la scène en mètres, le long de X
TAU = math.tau

bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.context.preferences.filepaths.use_scripts_auto_execute = True
S = bpy.context.scene
S.frame_start, S.frame_end = 1, L
S.render.fps = 24
# 960 × 540 : le plan est assombri et voilé derrière la Machine, un rendu plus fin ne se verrait pas.
S.render.resolution_x, S.render.resolution_y = 960, 540
S.render.image_settings.file_format = 'PNG'
S.render.image_settings.color_depth = '8'
for moteur in ('BLENDER_EEVEE', 'BLENDER_EEVEE_NEXT'):
    try:
        S.render.engine = moteur
        break
    except TypeError:
        continue
E = S.eevee


def regler(obj, **valeurs):
    """Pose les réglages qui existent dans cette version de Blender, ignore les autres."""
    for k, v in valeurs.items():
        if hasattr(obj, k):
            try:
                setattr(obj, k, v)
            except (TypeError, ValueError):
                pass


regler(E, taa_render_samples=16, use_raytracing=True, volumetric_tile_size='8', volumetric_samples=48,
       volumetric_start=0.5, volumetric_end=90.0, use_volumetric_shadows=False, use_shadows=True)
regler(E.ray_tracing_options, resolution_scale='2', use_denoise=True) if hasattr(E, 'ray_tracing_options') else None
regler(S.view_settings, view_transform='AgX')

rnd = random.Random(7)


# ---------- Matériaux ----------
def principled(nom, base=(0.02, 0.02, 0.02), rugo=0.4, metal=0.0, emission=None, force=0.0, transmission=0.0, alpha=1.0):
    m = bpy.data.materials.new(nom)
    if m.node_tree is None:
        m.use_nodes = True
    p = next(n for n in m.node_tree.nodes if n.type == 'BSDF_PRINCIPLED')
    p.inputs['Base Color'].default_value = (*base, 1)
    p.inputs['Roughness'].default_value = rugo
    p.inputs['Metallic'].default_value = metal
    if emission:
        p.inputs['Emission Color'].default_value = (*emission, 1)
        p.inputs['Emission Strength'].default_value = force
    if transmission:
        p.inputs['Transmission Weight'].default_value = transmission
        p.inputs['IOR'].default_value = 1.45
        regler(m, use_raytrace_refraction=True, surface_render_method='DITHERED')
    if alpha < 1:
        p.inputs['Alpha'].default_value = alpha
        regler(m, surface_render_method='BLENDED')
    return m


def lumiere(nom, force):
    return principled(nom, base=(0, 0, 0), rugo=1.0, emission=(1, 1, 1), force=force)


SOL = principled('sol', base=(0.012, 0.012, 0.014), rugo=0.2)


# ---------- Monde : presque noir, une brume légère ----------
def monde(densite):
    w = bpy.data.worlds.new('monde')
    S.world = w
    if w.node_tree is None:
        w.use_nodes = True
    nt = w.node_tree
    fond = next(n for n in nt.nodes if n.type == 'BACKGROUND')
    fond.inputs['Color'].default_value = (0.003, 0.0035, 0.005, 1)
    fond.inputs['Strength'].default_value = 1.0
    sortie = next(n for n in nt.nodes if n.type == 'OUTPUT_WORLD')
    vol = nt.nodes.new('ShaderNodeVolumePrincipled')
    vol.inputs['Density'].default_value = densite
    vol.inputs['Anisotropy'].default_value = 0.35
    vol.inputs['Color'].default_value = (1, 1, 1, 1)
    nt.links.new(vol.outputs['Volume'], sortie.inputs['Volume'])


def lampe(nom, loc, rot, force, taille):
    d = bpy.data.lights.new(nom, 'AREA')
    d.energy, d.size, d.color = force, taille, (1, 1, 1)
    regler(d, use_shadow=True)
    o = bpy.data.objects.new(nom, d)
    o.location, o.rotation_euler = loc, rot
    S.collection.objects.link(o)
    return o


# ---------- Géométrie ----------
def maillage(fabrique, nom, mat, **kw):
    """Fabrique une forme avec les primitives de Blender, la retire de la scène et garde son maillage."""
    fabrique(**kw)
    o = bpy.context.active_object
    o.data.materials.append(mat)
    me = o.data
    me.name = nom
    bpy.data.objects.remove(o)
    return me


def poser(me, loc, rot=(0, 0, 0), echelle=(1, 1, 1), parent=None):
    o = bpy.data.objects.new(me.name, me)
    o.location, o.rotation_euler, o.scale = loc, rot, echelle
    S.collection.objects.link(o)
    if parent:
        o.parent = parent
    return o


def vide(nom):
    o = bpy.data.objects.new(nom, None)
    S.collection.objects.link(o)
    return o


def piloter(o, chemin, index, expression):
    fc = o.driver_add(chemin, index)
    fc.driver.type = 'SCRIPTED'
    fc.driver.expression = expression
    return fc


def sol(z=0.0):
    me = maillage(bpy.ops.mesh.primitive_plane_add, 'sol', SOL, size=1)
    poser(me, (0, 20, z), echelle=(400, 120, 1))


def camera(loc, rot_deg, focale, mise_au_point, ouverture):
    cam = bpy.data.objects.new('camera', bpy.data.cameras.new('camera'))
    cam.data.lens = focale
    cam.data.dof.use_dof = True
    cam.data.dof.focus_distance = mise_au_point
    cam.data.dof.aperture_fstop = ouverture
    cam.data.clip_end = 400
    cam.location = loc
    cam.rotation_euler = tuple(math.radians(a) for a in rot_deg)
    S.collection.objects.link(cam)
    S.camera = cam
    # Elle glisse de P mètres sur la boucle : l'image L+1 est exactement l'image 1.
    piloter(cam, 'location', 0, f'{loc[0]} + (frame - 1) * {P} / {L}')
    return cam


TUILES = range(-12, 24)   # copies de la tuile de P mètres, de quoi couvrir le champ pendant toute la boucle


# ---------- Plan « flux » : le futur des stations ----------
def plan_flux():
    # Version épurée : ni fils ni anneaux (trop chargé derrière la sculpture et le tableau de bord).
    # Seulement quelques traînées de lumière qui passent au loin, floues, bien espacées.
    monde(0.006)
    sol()
    lampe('haut', (6, 6, 9), (0, 0, 0), 260, 30)
    paquet = lumiere('paquet', 22.0)
    me_paquet = maillage(bpy.ops.mesh.primitive_uv_sphere_add, 'paquet', paquet, radius=1, segments=24, ring_count=12)
    # Couloirs invisibles : profondeur, hauteur, P parcourus pendant la boucle, motif répété tous les q × P.
    # Une seule traînée par motif ; (avance − 1) est un multiple de q, donc l'image L+1 retombe sur l'image 1.
    couloirs = [(2.0, 0.6, 4, 3), (4.5, 1.5, 5, 2), (7.0, 0.4, 7, 3), (10.0, 2.0, 3, 2), (14.0, 1.0, 5, 2), (19.0, 2.6, 4, 3)]
    for y, z, avance, q in couloirs:
        porteur = vide(f'porteur_{y}')
        piloter(porteur, 'location', 0, f'(frame - 1) * {avance * P} / {L}')
        x0, long = rnd.uniform(0, q * P), rnd.uniform(0.3, 0.55)
        for j in range((min(TUILES) - avance - 2) // q - 1, max(TUILES) // q + 2):
            poser(me_paquet, (j * q * P + x0, y, z), echelle=(long, 0.03, 0.03), parent=porteur)
    S.render.use_motion_blur = True
    regler(S.render, motion_blur_shutter=1.0)
    regler(E, motion_blur_steps=1, motion_blur_shutter=1.0)
    # Mise au point tout près : au loin, les traînées deviennent de douces lueurs.
    camera((0, -4.6, 1.0), (85, 0, -30), 32, 2.6, 1.2)


# ---------- Plan « cartes » : le prologue ----------
def plan_cartes():
    monde(0.007)
    sol(-0.2)
    lampe('haut', (4, 4, 9), (0, 0, 0), 300, 26)
    lampe('cote', (-14, 4, 3), (0, math.radians(-75), 0), 260, 10)
    # Un verre sombre d'écran : brillant, à peine lumineux, pour que chaque carte se lise sur le noir.
    verre = principled('verre', base=(0.03, 0.03, 0.035), rugo=0.14, emission=(1, 1, 1), force=0.045)
    trait = lumiere('trait', 5.0)
    case = lumiere('case', 2.0)
    me_carte = maillage(bpy.ops.mesh.primitive_cube_add, 'carte', verre, size=1)
    me_trait = maillage(bpy.ops.mesh.primitive_cube_add, 'trait', trait, size=1)
    me_case = maillage(bpy.ops.mesh.primitive_cube_add, 'case', case, size=1)
    # Une tuile de P mètres : six cartes, chacune avec une case et une à trois lignes de tâche.
    cartes = []
    for _ in range(6):
        cartes.append(dict(x=rnd.uniform(0, P), y=rnd.uniform(-1.0, 12.0), z=rnd.uniform(0.5, 2.6),
                           rz=rnd.uniform(-28, 28), rx=rnd.uniform(-8, 8), lignes=rnd.randint(1, 3),
                           phase=rnd.uniform(0, TAU), amp=rnd.uniform(0.03, 0.07)))
    for k in TUILES:
        for c in cartes:
            pivot = vide('carte')
            pivot.location = (k * P + c['x'], c['y'], c['z'])
            pivot.rotation_euler = (math.radians(c['rx']), 0, math.radians(c['rz']))
            # Une respiration lente, sur une période égale à la boucle.
            piloter(pivot, 'location', 2, f"{c['z']} + {c['amp']} * sin(2 * pi * (frame - 1) / {L} + {c['phase']})")
            poser(me_carte, (0, 0, 0), echelle=(0.95, 0.014, 0.6), parent=pivot)
            poser(me_case, (-0.36, -0.012, 0.17), echelle=(0.07, 0.004, 0.07), parent=pivot)
            for j in range(c['lignes']):
                long = rnd.uniform(0.32, 0.6)
                poser(me_trait, (-0.27 + long / 2, -0.012, 0.17 - j * 0.12), echelle=(long, 0.004, 0.014), parent=pivot)
    camera((0, -5.2, 1.45), (88, 0, 4), 34, 5.6, 1.3)


# ---------- Plan « horizon » : l'épilogue ----------
def plan_horizon():
    monde(0.005)
    # Un sol presque miroir : il renvoie la bande de l'horizon.
    SOL.node_tree.nodes['Principled BSDF'].inputs['Roughness'].default_value = 0.07
    sol()
    lampe('haut', (0, 10, 10), (0, 0, 0), 160, 40)
    repere = lumiere('repere', 6.0)
    me_repere = maillage(bpy.ops.mesh.primitive_uv_sphere_add, 'repere', repere, radius=1, segments=12, ring_count=6)
    # Des repères posés au hasard (pas en rangées : aucune ligne ne file vers le fond).
    points = [(rnd.uniform(0, P), rnd.uniform(2.0, 70.0)) for _ in range(22)]
    for k in TUILES:
        for x, y in points:
            r = 0.022 + 0.0005 * max(0.0, y)
            poser(me_repere, (k * P + x, y, r), echelle=(r, r, r))
    # La bande de l'horizon : une lumière plate et très large, plus vive à sa base, qui s'efface vers le haut.
    bande = bpy.data.materials.new('bande')
    if bande.node_tree is None:
        bande.use_nodes = True
    nt = bande.node_tree
    for n in list(nt.nodes):
        nt.nodes.remove(n)
    sortie = nt.nodes.new('ShaderNodeOutputMaterial')
    em = nt.nodes.new('ShaderNodeEmission')
    coord = nt.nodes.new('ShaderNodeTexCoord')
    sep = nt.nodes.new('ShaderNodeSeparateXYZ')
    rampe = nt.nodes.new('ShaderNodeValToRGB')
    rampe.color_ramp.elements[0].position, rampe.color_ramp.elements[0].color = 0.0, (1, 1, 1, 1)
    rampe.color_ramp.elements[1].position, rampe.color_ramp.elements[1].color = 0.035, (0, 0, 0, 1)
    rampe.color_ramp.interpolation = 'EASE'
    nt.links.new(coord.outputs['Generated'], sep.inputs['Vector'])
    nt.links.new(sep.outputs['Y'], rampe.inputs['Fac'])
    nt.links.new(rampe.outputs['Color'], em.inputs['Color'])
    em.inputs['Strength'].default_value = 3.5
    nt.links.new(em.outputs['Emission'], sortie.inputs['Surface'])
    me_bande = maillage(bpy.ops.mesh.primitive_plane_add, 'bande', bande, size=1)
    # Debout au fond, sa base posée sur le sol : le bas de la bande est la ligne d'horizon.
    poser(me_bande, (0, 85, 15), rot=(math.radians(90), 0, 0), echelle=(900, 30, 1))
    camera((0, -4.0, 0.55), (90.5, 0, 0), 30, 9.0, 2.8)


{'flux': plan_flux, 'cartes': plan_cartes, 'horizon': plan_horizon}[PLAN]()

# ---------- Rendu ----------
os.makedirs(SORTIE, exist_ok=True)
images = [1, L // 2] if MODE == 'essai' else range(1, L + 1)
t0 = time.time()
for f in images:
    S.frame_set(f)
    S.render.filepath = os.path.join(SORTIE, f'{PLAN}_{f:04d}.png')
    bpy.ops.render.render(write_still=True)
    print(f'[cinema] {PLAN} image {f}/{L} ({time.time() - t0:.0f} s)', flush=True)
print(f'[cinema] {PLAN} terminé : {len(images)} images en {time.time() - t0:.0f} s ({S.render.engine})', flush=True)

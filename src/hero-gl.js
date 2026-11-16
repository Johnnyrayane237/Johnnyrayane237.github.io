// Sphère de particules (WebGL) qui se déplie en réseau quand on fait défiler.
// Les particules fuient la souris ; le rendu s'arrête quand la scène est invisible.
import {
  WebGLRenderer, Scene, PerspectiveCamera, BufferGeometry, BufferAttribute,
  ShaderMaterial, Points, AdditiveBlending, Color, Vector3, Vector2, Mesh, PlaneGeometry,
} from 'three';

const NOISE = /* glsl */ `
vec3 mod289(vec3 x){return x-floor(x*(1./289.))*289.;}
vec4 mod289(vec4 x){return x-floor(x*(1./289.))*289.;}
vec4 permute(vec4 x){return mod289(((x*34.)+1.)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1./6.,1./3.);const vec4 D=vec4(0.,.5,1.,2.);
  vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.,i1.z,i2.z,1.))+i.y+vec4(0.,i1.y,i2.y,1.))+i.x+vec4(0.,i1.x,i2.x,1.));
  float n_=.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.+1.;vec4 s1=floor(b1)*2.+1.;vec4 sh=-step(h,vec4(0.));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);m=m*m;
  return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}`;

const vertex = /* glsl */ `
uniform float uTime; uniform float uMorph; uniform float uSize; uniform float uPixel;
uniform vec3 uMouse; uniform float uMouseStrength; uniform float uIntro; uniform float uVel;
attribute vec3 aPlane; attribute float aRand;
varying float vAlpha; varying float vTone; varying float vStretch;
${NOISE}
void main(){
  vec3 s = position * uIntro;
  float n = snoise(s * 1.25 + vec3(0., 0., uTime * .12));
  s += normalize(position) * n * .22;
  vec3 p = aPlane;
  p.y += sin(p.x * 1.4 + uTime * .55) * .16 + cos(p.z * 1.7 + uTime * .4) * .14;
  float m = smoothstep(0., 1., clamp(uMorph * 1.5 - aRand * .5, 0., 1.));
  vec3 pos = mix(s, p, m);
  vec4 world = modelMatrix * vec4(pos, 1.);
  vec3 d = world.xyz - uMouse; float dist = length(d);
  world.xyz += normalize(d + 1e-4) * smoothstep(1.1, 0., dist) * .42 * uMouseStrength;
  vec4 mv = viewMatrix * world;
  gl_Position = projectionMatrix * mv;
  // Défilement rapide : chaque point s'étire en traînée verticale, comme un flou de vitesse.
  vStretch = 1. + uVel * (2.2 + aRand * 2.6);
  gl_PointSize = uSize * uPixel * (.55 + aRand * .9) / -mv.z * vStretch;
  vAlpha = (.28 + .72 * (.5 + .5 * n)) * (1. - m * .35);
  vTone = aRand;
}`;

const fragment = /* glsl */ `
uniform vec3 uColorA; uniform vec3 uColorB; uniform float uFade;
varying float vAlpha; varying float vTone; varying float vStretch;
void main(){
  vec2 c = gl_PointCoord - .5; c.x *= vStretch; float d = length(c);
  if (d > .5) discard;
  float a = smoothstep(.5, .05, d);
  vec3 col = mix(uColorA, uColorB, step(.86, vTone));
  gl_FragColor = vec4(col, a * vAlpha * uFade / sqrt(vStretch));
}`;

export function initHero(canvas, { reduced = false } = {}) {
  const renderer = new WebGLRenderer({ canvas, antialias: false, alpha: true, powerPreference: 'high-performance' });
  const pixel = Math.min(window.devicePixelRatio || 1, 1.75);
  renderer.setPixelRatio(pixel);
  const scene = new Scene();
  const camera = new PerspectiveCamera(35, 1, 0.1, 100);
  camera.position.set(0, 0, 7.2);

  const mobile = window.matchMedia('(max-width: 760px)').matches;
  const COUNT = mobile ? 9000 : 20000;
  const pos = new Float32Array(COUNT * 3);
  const plane = new Float32Array(COUNT * 3);
  const rand = new Float32Array(COUNT);
  const golden = Math.PI * (3 - Math.sqrt(5));
  const R = mobile ? 1.35 : 1.75;
  const cols = Math.round(Math.sqrt(COUNT * 2.2));
  for (let i = 0; i < COUNT; i++) {
    const y = 1 - (i / (COUNT - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const t = golden * i;
    pos[i * 3] = Math.cos(t) * r * R;
    pos[i * 3 + 1] = y * R;
    pos[i * 3 + 2] = Math.sin(t) * r * R;
    const cx = i % cols, cz = Math.floor(i / cols);
    plane[i * 3] = (cx / cols - 0.5) * 9.5;
    plane[i * 3 + 1] = -1.15;
    plane[i * 3 + 2] = (cz / (COUNT / cols) - 0.5) * 6.5;
    rand[i] = Math.random();
  }
  const geo = new BufferGeometry();
  geo.setAttribute('position', new BufferAttribute(pos, 3));
  geo.setAttribute('aPlane', new BufferAttribute(plane, 3));
  geo.setAttribute('aRand', new BufferAttribute(rand, 1));

  const uniforms = {
    uTime: { value: 0 }, uMorph: { value: 0 }, uSize: { value: mobile ? 26 : 30 }, uPixel: { value: pixel },
    uMouse: { value: new Vector3(9, 9, 0) }, uMouseStrength: { value: 0 }, uIntro: { value: reduced ? 1 : 0.001 }, uVel: { value: 0 },
    uColorA: { value: new Color('#2F80FF') }, uColorB: { value: new Color('#EAF1FF') }, uFade: { value: 1 },
  };
  const mat = new ShaderMaterial({ vertexShader: vertex, fragmentShader: fragment, uniforms, transparent: true, depthWrite: false, blending: AdditiveBlending });
  const points = new Points(geo, mat);
  points.rotation.z = 0.18;
  scene.add(points);

  // Halo lumineux derrière la sphère
  const glowMat = new ShaderMaterial({ transparent: true, depthWrite: false, blending: AdditiveBlending, uniforms: { uFade: { value: 1 }, uTime: { value: 0 } },
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }',
    fragmentShader: 'uniform float uFade; uniform float uTime; varying vec2 vUv; void main(){ float d = length(vUv - .5) * 2.; float core = pow(max(0., 1. - d), 3.2); float ring = smoothstep(.62, .5, d) * smoothstep(.3, .5, d) * .22; vec3 c = mix(vec3(.18, .5, 1.), vec3(.75, .86, 1.), core); gl_FragColor = vec4(c, (core * .55 + ring * (.6 + .4 * sin(uTime * .8))) * uFade); }' });
  const glow = new Mesh(new PlaneGeometry(R * 4.6, R * 4.6), glowMat); glow.position.z = -0.6; scene.add(glow);

  // Braises qui montent
  const EMB = mobile ? 260 : 620; const ePos = new Float32Array(EMB * 3), eSeed = new Float32Array(EMB * 3);
  for (let i = 0; i < EMB; i++) { ePos[i * 3] = (Math.random() - 0.5) * 13; ePos[i * 3 + 1] = (Math.random() - 0.5) * 8; ePos[i * 3 + 2] = (Math.random() - 0.5) * 6 + 1; eSeed[i * 3] = 0.08 + Math.random() * 0.32; eSeed[i * 3 + 1] = Math.random(); eSeed[i * 3 + 2] = 0.4 + Math.random() * 1.6; }
  const eGeo = new BufferGeometry(); eGeo.setAttribute('position', new BufferAttribute(ePos, 3)); eGeo.setAttribute('aSeed', new BufferAttribute(eSeed, 3));
  const eMat = new ShaderMaterial({ transparent: true, depthWrite: false, blending: AdditiveBlending, uniforms: { uTime: uniforms.uTime, uPixel: uniforms.uPixel, uFade: { value: 1 } },
    vertexShader: 'uniform float uTime; uniform float uPixel; attribute vec3 aSeed; varying float vA; varying float vT; void main(){ vec3 p = position; p.y = mod(p.y + uTime * aSeed.x + 4., 8.) - 4.; p.x += sin(uTime * .5 + aSeed.y * 6.283) * .35; p.z += cos(uTime * .4 + aSeed.y * 9.) * .25; vec4 mv = modelViewMatrix * vec4(p, 1.); gl_Position = projectionMatrix * mv; gl_PointSize = aSeed.z * uPixel * 34. / -mv.z; vA = smoothstep(4., 2.4, abs(p.y)) * (.45 + .55 * sin(uTime * 1.7 + aSeed.y * 40.)); vT = aSeed.y; }',
    fragmentShader: 'uniform float uFade; varying float vA; varying float vT; void main(){ float d = length(gl_PointCoord - .5); if (d > .5) discard; float a = pow(1. - d * 2., 2.2); vec3 c = mix(vec3(1., .72, .38), vec3(.35, .62, 1.), step(.42, vT)); gl_FragColor = vec4(c, a * vA * uFade * .9); }' });
  const embers = new Points(eGeo, eMat); scene.add(embers);

  // Souris -> point du plan z = 0
  const ndc = new Vector2(9, 9);
  const target = new Vector3(9, 9, 0);
  const tmp = new Vector3();
  let strength = 0;
  const onMove = (e) => {
    ndc.x = (e.clientX / window.innerWidth) * 2 - 1;
    ndc.y = -(e.clientY / window.innerHeight) * 2 + 1;
    tmp.set(ndc.x, ndc.y, 0.5).unproject(camera).sub(camera.position).normalize();
    const k = -camera.position.z / tmp.z;
    target.copy(camera.position).add(tmp.multiplyScalar(k));
    strength = 1;
  };
  window.addEventListener('pointermove', onMove, { passive: true });
  // Sur téléphone, pas de souris : c'est l'inclinaison de l'appareil qui déplace la caméra.
  const onTilt = (e) => {
    if (e.gamma == null || e.beta == null) return;
    ndc.x = Math.max(-1, Math.min(1, e.gamma / 28));
    ndc.y = Math.max(-1, Math.min(1, (e.beta - 50) / 28));
  };
  const touchOnly = !window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (touchOnly && !reduced) window.addEventListener('deviceorientation', onTilt, { passive: true });

  const resize = () => {
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  resize();
  window.addEventListener('resize', resize);

  let running = true, raf = 0, last = performance.now(), time = 0, rotY = 0;
  const state = { morph: 0, fade: 1, scrollTilt: 0, vel: 0 };

  const frame = (now) => {
    raf = requestAnimationFrame(frame);
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    if (!running) return;
    time += dt;
    rotY += dt * 0.07;
    points.rotation.y = rotY;
    points.rotation.x = state.scrollTilt * 0.55;
    uniforms.uTime.value = time;
    uniforms.uMorph.value += (state.morph - uniforms.uMorph.value) * 0.08;
    uniforms.uFade.value = state.fade;
    uniforms.uVel.value += (state.vel - uniforms.uVel.value) * 0.14; state.vel *= 0.9;
    glowMat.uniforms.uTime.value = time; glowMat.uniforms.uFade.value = state.fade * (1 - uniforms.uMorph.value * 0.85); eMat.uniforms.uFade.value = 0.35 + state.fade * 0.65;
    glow.scale.setScalar(1 + Math.sin(time * 0.6) * 0.04);
    camera.position.x += (ndc.x * 0.55 * (Math.abs(ndc.x) < 2 ? 1 : 0) - camera.position.x) * 0.04; camera.position.y += (ndc.y * 0.35 * (Math.abs(ndc.y) < 2 ? 1 : 0) - camera.position.y) * 0.04; camera.lookAt(0, 0, 0);
    uniforms.uMouse.value.lerp(target, 0.12);
    strength *= 0.985;
    uniforms.uMouseStrength.value += (strength - uniforms.uMouseStrength.value) * 0.1;
    renderer.render(scene, camera);
  };

  if (reduced) {
    renderer.render(scene, camera);
  } else {
    raf = requestAnimationFrame(frame);
  }

  return {
    uniforms,
    set morph(v) { state.morph = v; if (reduced) { uniforms.uMorph.value = v; renderer.render(scene, camera); } },
    set fade(v) { state.fade = v; },
    set tilt(v) { state.scrollTilt = v; },
    set velocity(v) { state.vel = Math.max(state.vel, v); },
    play() { running = true; },
    pause() { running = false; },
    destroy() { cancelAnimationFrame(raf); window.removeEventListener('pointermove', onMove); window.removeEventListener('deviceorientation', onTilt); window.removeEventListener('resize', resize); renderer.dispose(); },
  };
}

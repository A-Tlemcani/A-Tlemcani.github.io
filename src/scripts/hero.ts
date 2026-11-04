import * as THREE from 'three';
import { createStage, pointerTracker } from './lib/stage';

const noise = /* glsl */ `
// Simplex 3D noise, Ashima Arts / Stefan Gustavson (MIT)
vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x,289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+2.0*C.xxx;vec3 x3=x0-1.0+3.0*C.xxx;
  i=mod(i,289.0);
  vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=1.0/7.0;vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);
  vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;
  return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}`;

/** A field of GPU-displaced particles that breathes, follows the pointer and morphs on scroll. */
export function initHero(canvas: HTMLCanvasElement) {
  const stage = createStage(canvas, { fov: 35 });
  if (!stage) return;
  const { scene, camera, reducedMotion } = stage;
  camera.position.set(0, 0, 9);

  const count = window.innerWidth < 700 ? 9000 : 22000;
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(count * 3);
  const seed = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    // Fibonacci sphere: even distribution without clumping at the poles.
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const phi = i * Math.PI * (3 - Math.sqrt(5));
    pos.set([Math.cos(phi) * r, y, Math.sin(phi) * r], i * 3);
    seed[i] = Math.random();
  }
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));

  const uniforms = {
    uTime: { value: 0 },
    uScroll: { value: 0 },
    uPointer: { value: new THREE.Vector2() },
    uPixelRatio: { value: stage.renderer.getPixelRatio() },
    uColorA: { value: new THREE.Color('#7cf3d0') },
    uColorB: { value: new THREE.Color('#7a5cff') },
  };

  const mat = new THREE.ShaderMaterial({
    uniforms,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexShader: /* glsl */ `
      uniform float uTime, uScroll, uPixelRatio; uniform vec2 uPointer;
      attribute float aSeed; varying float vMix; varying float vAlpha;
      ${noise}
      void main(){
        vec3 p = position;
        float n = snoise(p * 1.4 + vec3(uTime * 0.18, uPointer * 0.6));
        float radius = 2.35 + n * (0.45 + uScroll * 0.9);
        // On scroll the sphere unravels into a ring: a hint of "structure" emerging.
        vec3 ring = vec3(cos(aSeed * 6.2831), (aSeed - 0.5) * 0.25, sin(aSeed * 6.2831)) * (3.2 + n * 0.3);
        vec3 target = mix(p * radius, ring, smoothstep(0.15, 0.9, uScroll));
        vec4 mv = modelViewMatrix * vec4(target, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = (1.2 + aSeed * 2.4) * uPixelRatio * (8.0 / -mv.z);
        vMix = n * 0.5 + 0.5; vAlpha = 0.35 + aSeed * 0.55;
      }`,
    fragmentShader: /* glsl */ `
      uniform vec3 uColorA, uColorB; varying float vMix; varying float vAlpha;
      void main(){
        float d = length(gl_PointCoord - 0.5);
        if (d > 0.5) discard;
        float a = smoothstep(0.5, 0.0, d) * vAlpha;
        gl_FragColor = vec4(mix(uColorB, uColorA, vMix), a);
      }`,
  });
  const points = new THREE.Points(geo, mat);
  points.position.x = window.innerWidth > 900 ? 2.2 : 0;
  scene.add(points);

  const pointer = pointerTracker();
  let scroll = 0;
  addEventListener('scroll', () => { scroll = Math.min(scrollY / innerHeight, 1); }, { passive: true });

  stage.onFrame((t, dt) => {
    const p = pointer.update(dt);
    uniforms.uTime.value = reducedMotion ? 0 : t;
    uniforms.uPointer.value.set(p.x, p.y);
    uniforms.uScroll.value += (scroll - uniforms.uScroll.value) * (1 - Math.exp(-5 * dt));
    points.rotation.y = (reducedMotion ? 0 : t * 0.06) + p.x * 0.35;
    points.rotation.x = p.y * 0.2 + uniforms.uScroll.value * 0.6;
  });
  addEventListener('resize', () => { points.position.x = innerWidth > 900 ? 2.2 : 0; });
}

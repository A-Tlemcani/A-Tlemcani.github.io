import * as THREE from 'three';
import { HDRLoader } from 'three/examples/jsm/loaders/HDRLoader.js';
import { createStage, pointerTracker } from '../lib/stage';

/** CC0 studio light from Poly Haven (Studio Small 09, Sergej Majboroda), halved to 512×256. */
const HDRI = '/hdri/studio_small_09.hdr';

/** Extruded shape with a soft bevel, centred on its own origin. */
function extrude(shape: THREE.Shape, depth: number, bevel: number) {
  const g = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 8, curveSegments: 24 });
  g.center();
  return g;
}
const poly = (pts: number[][]) => new THREE.Shape(pts.map(([x, y]) => new THREE.Vector2(x, y)));

function roundedRect(w: number, h: number, r: number) {
  const s = new THREE.Shape();
  s.moveTo(-w / 2 + r, -h / 2);
  s.lineTo(w / 2 - r, -h / 2); s.quadraticCurveTo(w / 2, -h / 2, w / 2, -h / 2 + r);
  s.lineTo(w / 2, h / 2 - r); s.quadraticCurveTo(w / 2, h / 2, w / 2 - r, h / 2);
  s.lineTo(-w / 2 + r, h / 2); s.quadraticCurveTo(-w / 2, h / 2, -w / 2, h / 2 - r);
  s.lineTo(-w / 2, -h / 2 + r); s.quadraticCurveTo(-w / 2, -h / 2, -w / 2 + r, -h / 2);
  return s;
}

const glass = (o: THREE.MeshPhysicalMaterialParameters = {}) => new THREE.MeshPhysicalMaterial({
  transmission: 1, roughness: 0.04, thickness: 0.8, ior: 1.5, dispersion: 4, specularIntensity: 1, envMapIntensity: 1.3, ...o,
});
const metal = (color: string, roughness: number) => new THREE.MeshPhysicalMaterial({ color, metalness: 1, roughness, clearcoat: 0.6, clearcoatRoughness: 0.08 });

/** A: an "AT" monogram, the A in clear glass refracting a polished steel T. */
function monogram() {
  const g = new THREE.Group();
  const a = poly([[-1, -1.2], [-0.15, 1.2], [0.15, 1.2], [1, -1.2], [0.62, -1.2], [0.4, -0.55], [-0.4, -0.55], [-0.62, -1.2]]);
  a.holes.push(new THREE.Path([[-0.27, -0.22], [0, 0.58], [0.27, -0.22]].map(([x, y]) => new THREE.Vector2(x, y))));
  const t = poly([[-0.85, 1.2], [0.85, 1.2], [0.85, 0.86], [0.17, 0.86], [0.17, -1.2], [-0.17, -1.2], [-0.17, 0.86], [-0.85, 0.86]]);
  const am = new THREE.Mesh(extrude(a, 0.5, 0.08), glass({ attenuationColor: new THREE.Color('#dfe8ff'), attenuationDistance: 2 }));
  const tm = new THREE.Mesh(extrude(t, 0.32, 0.05), metal('#c9ccd2', 0.18));
  am.position.set(-0.42, 0, 0.18); tm.position.set(0.55, 0, -0.32);
  g.add(tm, am);
  return g;
}

/** B: a polished warm-steel knot, a single continuous line. */
function knot() {
  return new THREE.Mesh(new THREE.TorusKnotGeometry(0.95, 0.3, 360, 64, 2, 3), metal('#e4dccd', 0.1));
}

/** C: three stacked slabs (ServiceNow · AI · Web): graphite, frosted glass, aluminium. */
function layers() {
  const g = new THREE.Group();
  const slab = extrude(roundedRect(2.3, 1.5, 0.28), 0.1, 0.05);
  const mats = [metal('#2b3038', 0.35), glass({ roughness: 0.32, thickness: 0.3, dispersion: 1, attenuationColor: new THREE.Color('#b9d4ff'), attenuationDistance: 1.2 }), metal('#cfd6df', 0.16)];
  mats.forEach((m, i) => {
    const mesh = new THREE.Mesh(slab, m);
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.set((i - 1) * 0.18, (i - 1) * 0.5, (i - 1) * -0.12);
    g.add(mesh);
  });
  g.rotation.set(0.55, -0.6, 0.12);
  const wrap = new THREE.Group(); wrap.add(g);
  return wrap;
}

/** Per direction: build, exposure, and where the object sits (desktop / phone). */
const looks = {
  a: { build: monogram, exposure: 1.0, desk: [0, 1.15, 0.62], phone: [0, 1.25, 0.62] },
  b: { build: knot, exposure: 1.1, desk: [1.75, 0, 1.0], phone: [0, 1.15, 0.7] },
  c: { build: layers, exposure: 1.0, desk: [1.9, -0.1, 1.15], phone: [0.2, 1.1, 0.75] },
} as const;

/** Signature hero object: PBR materials lit by a studio HDRI, turning with scroll. */
export function initObject(canvas: HTMLCanvasElement, dir: string) {
  const look = looks[dir as keyof typeof looks];
  const stage = look && createStage(canvas, { fov: 30, stillWhenReduced: true });
  if (!stage) return;
  const { scene, camera, renderer, reducedMotion } = stage;
  renderer.toneMappingExposure = look.exposure;
  camera.position.set(0, 0, 9);

  const obj = look.build();
  const yaw = -0.45; // three-quarter view at rest
  obj.rotation.y = yaw;
  const place = () => {
    const [x, y, s] = innerWidth > 900 ? look.desk : look.phone;
    obj.position.set(x, y, 0); obj.scale.setScalar(s);
  };
  place(); addEventListener('resize', () => { place(); stage.renderOnce(); });

  const pmrem = new THREE.PMREMGenerator(renderer);
  new HDRLoader().load(HDRI, (tex) => {
    scene.environment = pmrem.fromEquirectangular(tex).texture;
    tex.dispose(); pmrem.dispose();
    scene.add(obj);
    stage.renderOnce();
  });

  const pointer = pointerTracker();
  let target = 0; let turn = 0;
  const onScroll = () => { target = Math.min(scrollY / innerHeight, 1.5); };
  if (!reducedMotion) addEventListener('scroll', onScroll, { passive: true });

  stage.onFrame((t, dt) => {
    const p = pointer.update(dt, 3);
    turn += (target - turn) * (1 - Math.exp(-4 * dt));
    obj.rotation.y = yaw + turn * Math.PI * 0.9 + Math.sin(t * 0.25) * 0.12 + p.x * 0.25;
    obj.rotation.x = p.y * -0.15 + turn * 0.25;
  });
}

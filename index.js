import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 90, 1, 0.1, 1000 );
const width = 700;
const height = 700;

const renderer = new THREE.WebGLRenderer();
renderer.setSize( width, height );
document.body.appendChild( renderer.domElement );


const redMaterial = new THREE.MeshLambertMaterial({ color: 0xFF0000 });
const greenMaterial = new THREE.MeshLambertMaterial({ color: 0x00FF00 });
const whiteMaterial = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });
const grayMaterial = new THREE.MeshLambertMaterial({ color: 0xCCCCCC });

const box = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.5, 1.5), greenMaterial);
box.position.set(0, 0, 0);
box.rotation.set(10, 10, 10);
scene.add(box);

camera.position.z = 5;

const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);
ambientLight.position.set(0, 0, 0);


const WALL_DEPTH = 20;
const WALL_DISTANCE_FROM_CENTER = 6;

const lWall = new THREE.Mesh(new THREE.BoxGeometry(1, 10, WALL_DEPTH), redMaterial);
lWall.position.set(WALL_DISTANCE_FROM_CENTER * -1, 0, -5)
scene.add(lWall);

const rWall = new THREE.Mesh(new THREE.BoxGeometry(1, 10, WALL_DEPTH), greenMaterial);
rWall.position.set(WALL_DISTANCE_FROM_CENTER, 0, -5)
scene.add(rWall);

const roof = new THREE.Mesh(new THREE.BoxGeometry(15, 1, WALL_DEPTH), grayMaterial);
roof.position.set(0, 6, -WALL_DISTANCE_FROM_CENTER)
scene.add(roof);

const floor = new THREE.Mesh(new THREE.BoxGeometry(15, 1, WALL_DEPTH), grayMaterial);
floor.position.set(0, -6, -WALL_DISTANCE_FROM_CENTER)
scene.add(floor);

const backWall = new THREE.Mesh(new THREE.BoxGeometry(15, WALL_DEPTH + 5, 1), whiteMaterial);
backWall.position.set(0, 1, (-WALL_DISTANCE_FROM_CENTER))
scene.add(backWall);

const frontWall = new THREE.Mesh(new THREE.BoxGeometry(15, WALL_DEPTH, 1), whiteMaterial);
frontWall.position.set(0, -0, WALL_DISTANCE_FROM_CENTER)
scene.add(frontWall);

const lightSource = new THREE.Mesh(new THREE.BoxGeometry(2, 0.1, 1), whiteMaterial);
lightSource.position.set(0, 5, -WALL_DISTANCE_FROM_CENTER / 2);
scene.add(lightSource);

const raycaster = new THREE.Raycaster();

const tick = () => {
    requestAnimationFrame(tick);
    renderer.render(scene, camera);
};

tick();
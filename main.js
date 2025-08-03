import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color('#f0f0f0');

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Yorug'lik
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(2, 2, 5);
scene.add(light);

// Material
const material = new THREE.MeshLambertMaterial({ color: 0x0077ff })
const headMaterial = new THREE.MeshLambertMaterial({ color: 0xffd700 });
const handMaterial = new THREE.MeshLambertMaterial({ color: 0xffa500 });
// Bosh (head)
const head = new THREE.Mesh(new THREE.SphereGeometry(0.3, 32, 20), headMaterial);
head.position.y = 2.4;
scene.add(head);

// Tana (body)
const body = new THREE.Mesh(new THREE.ConeGeometry(0.5,2,30), material);
body.position.y = 1;
scene.add(body);

// Qo‘llar (arms)
const leftArm = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.7, 0.2), handMaterial);
leftArm.position.set(-0.5, 1.1, 0);
scene.add(leftArm);

const rightArm = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.7, 0.2), handMaterial);
rightArm.position.set(0.5, 1.1, 0);
scene.add(rightArm);

// Oyoqlar (legs)
const leftLeg = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.8, 0.2), material);
leftLeg.position.set(-0.2, -0.5, 0);
scene.add(leftLeg);

const rightLeg = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.8, 0.2), material);
rightLeg.position.set(0.2, -0.5, 0);
scene.add(rightLeg);

// Animatsiya
function animate() {
    requestAnimationFrame(animate);
    head.rotation.y += 0.01;
    rightArm.rotation.x += 0.01;
    rightArm.rotation.y += 0.01;
    leftArm.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

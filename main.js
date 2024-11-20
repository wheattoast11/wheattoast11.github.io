import * as THREE from 'three';
import { createNoise4D } from 'simplex-noise';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
    antialias: true,
    alpha: true
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

// Enhanced flow field
const noise4D = createNoise4D();
const flowField = new THREE.Group();

const geometry = new THREE.BufferGeometry();
const material = new THREE.LineBasicMaterial({
    color: 0x7A9E9F,
    transparent: true,
    opacity: 0.3
});

const points = [];
const numLines = 100;
const segments = 75;

for (let i = 0; i < numLines; i++) {
    let x = (Math.random() - 0.5) * 100;
    let y = (Math.random() - 0.5) * 100;
    let z = (Math.random() - 0.5) * 100;

    for (let j = 0; j < segments; j++) {
        points.push(new THREE.Vector3(x, y, z));
        
        const scale = 0.015;
        const noise = noise4D(x * scale, y * scale, z * scale, Date.now() * 0.00003); // Slowed down time factor
        
        x += Math.cos(noise * Math.PI * 2) * 0.4;
        y += Math.sin(noise * Math.PI * 2) * 0.4;
        z += (Math.cos(noise * Math.PI) + Math.sin(noise * Math.PI)) * 0.2;
    }
}

geometry.setFromPoints(points);
const flowLines = new THREE.LineSegments(geometry, material);
flowField.add(flowLines);
scene.add(flowField);

// Enhanced glass spheres
const sphereGeometry = new THREE.IcosahedronGeometry(1, 3);
const sphereMaterial = new THREE.MeshPhongMaterial({
    color: 0x506C7F,
    transparent: true,
    opacity: 0.2,
    shininess: 100,
    specular: 0x7A9E9F
});

const spheres = [];
for (let i = 0; i < 15; i++) {
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 60
    );
    sphere.scale.setScalar(Math.random() * 2 + 1);
    spheres.push(sphere);
    scene.add(sphere);
}

// Enhanced lighting
const ambientLight = new THREE.AmbientLight(0x404040, 0.8);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0x7A9E9F, 1.0);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

// Animation
let time = 0;
function animate() {
    requestAnimationFrame(animate);
    time += 0.0003; // Reduced time increment by 40%

    flowField.rotation.x += 0.0001; // Reduced rotation speed by 50%
    flowField.rotation.y += 0.0001; // Reduced rotation speed by 50%

    spheres.forEach((sphere, i) => {
        sphere.position.y += Math.sin(time + i) * 0.004; // Reduced movement by 50%
        sphere.rotation.x += 0.001; // Reduced rotation speed by 50%
        sphere.rotation.y += 0.001; // Reduced rotation speed by 50%
    });

    const positions = geometry.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const y = positions[i + 1];
        const z = positions[i + 2];
        
        const scale = 0.015;
        const noise = noise4D(x * scale, y * scale, z * scale, time);
        
        positions[i] += Math.cos(noise * Math.PI * 2) * 0.015; // Reduced movement by 50%
        positions[i + 1] += Math.sin(noise * Math.PI * 2) * 0.015; // Reduced movement by 50%
        positions[i + 2] += Math.cos(noise * Math.PI) * 0.015; // Reduced movement by 50%
    }
    geometry.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
}

// Mouse interaction
let mouseX = 0;
let mouseY = 0;
document.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX - window.innerWidth / 2) * 0.00004; // Reduced sensitivity by 50%
    mouseY = (event.clientY - window.innerHeight / 2) * 0.00004; // Reduced sensitivity by 50%
    
    flowField.rotation.y += mouseX;
    flowField.rotation.x += mouseY;
});

// Responsive design
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Intersection Observer
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

animate();
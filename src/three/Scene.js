import * as THREE from 'three';
import { FlowField } from './FlowField';
import { Spheres } from './Spheres';

export class Scene {
  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#bg'),
      antialias: true,
      alpha: true
    });

    this.flowField = new FlowField();
    this.spheres = new Spheres();
    this.time = 0;

    this.init();
    this.setupLights();
    this.setupEventListeners();
  }

  init() {
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.camera.position.setZ(30);

    this.scene.add(this.flowField.group);
    this.spheres.spheres.forEach(sphere => this.scene.add(sphere));
  }

  setupLights() {
    const ambientLight = new THREE.AmbientLight(0x404040, 0.8);
    const pointLight = new THREE.PointLight(0x7A9E9F, 1.0);
    pointLight.position.set(10, 10, 10);
    
    this.scene.add(ambientLight);
    this.scene.add(pointLight);
  }

  setupEventListeners() {
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });

    document.addEventListener('mousemove', (event) => {
      const mouseX = (event.clientX - window.innerWidth / 2) * 0.00004;
      const mouseY = (event.clientY - window.innerHeight / 2) * 0.00004;
      
      this.flowField.group.rotation.y += mouseX;
      this.flowField.group.rotation.x += mouseY;
    });
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    
    this.time += 0.0003;
    this.flowField.update(this.time);
    this.spheres.update(this.time);
    
    this.renderer.render(this.scene, this.camera);
  }

  dispose() {
    // Remove event listeners
    window.removeEventListener('resize', this.handleResize);
    document.removeEventListener('mousemove', this.handleMouseMove);
    
    // Dispose of Three.js resources
    this.scene.traverse((object) => {
      if (object.geometry) object.geometry.dispose();
      if (object.material) {
        if (Array.isArray(object.material)) {
          object.material.forEach(material => material.dispose());
        } else {
          object.material.dispose();
        }
      }
    });
    
    this.renderer.dispose();
  }
}
import * as THREE from 'three';
import { FlowField } from './FlowField';
import { Spheres } from './Spheres';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

export class Scene {
  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#bg'),
      antialias: true,
      alpha: true
    });

    this.composer = null;
    this.flowField = new FlowField();
    this.spheres = new Spheres();
    this.time = 0;
    this.mouse = new THREE.Vector2();
    this.targetRotation = new THREE.Vector2();

    this.init();
    this.setupLights();
    this.setupPostProcessing();
    this.setupEventListeners();
  }

  init() {
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1;
    
    this.camera.position.setZ(30);
    this.camera.position.setY(5);

    this.scene.fog = new THREE.FogExp2(0x000000, 0.01);
    this.scene.add(this.flowField.group);
    this.spheres.spheres.forEach(sphere => this.scene.add(sphere));
  }

  setupPostProcessing() {
    this.composer = new EffectComposer(this.renderer);
    const renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(renderPass);

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.5,  // strength
      0.4,  // radius
      0.85  // threshold
    );
    this.composer.addPass(bloomPass);
  }

  setupLights() {
    const ambientLight = new THREE.AmbientLight(0x404040, 0.8);
    const pointLight = new THREE.PointLight(0x7A9E9F, 2.0);
    pointLight.position.set(10, 10, 10);
    
    const pointLight2 = new THREE.PointLight(0x506C7F, 1.5);
    pointLight2.position.set(-10, -10, -10);
    
    this.scene.add(ambientLight, pointLight, pointLight2);
  }

  setupEventListeners() {
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.composer.setSize(window.innerWidth, window.innerHeight);
    });

    document.addEventListener('mousemove', (event) => {
      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      
      this.targetRotation.x = this.mouse.y * 0.1;
      this.targetRotation.y = this.mouse.x * 0.1;
    });
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));
    this.time += 0.001;

    // Smooth camera rotation
    this.camera.rotation.x += (this.targetRotation.x - this.camera.rotation.x) * 0.05;
    this.camera.rotation.y += (this.targetRotation.y - this.camera.rotation.y) * 0.05;

    // Update components
    this.flowField.update(this.time);
    this.spheres.update(this.time);

    // Render with post-processing
    this.composer.render();
  }

  dispose() {
    this.renderer.dispose();
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
  }
}
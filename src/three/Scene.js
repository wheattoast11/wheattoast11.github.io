import * as THREE from 'three';
import { FlowField } from './FlowField';
import { Spheres } from './Spheres';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { BokehPass } from 'three/examples/jsm/postprocessing/BokehPass';

export class Scene {
  constructor(canvas) {
    if (!canvas) {
      throw new Error('Canvas is required for Scene initialization');
    }

    this.initialized = false;
    this.isDestroyed = false;
    this.animationFrameId = null;
    this.canvas = canvas;
    this.mouse = new THREE.Vector2();
    this.targetRotation = new THREE.Vector2();
    this.time = 0;
    this.currentSection = 'hero';
    this.targetCameraPosition = new THREE.Vector3(0, 0, 100);
    this.targetLookAt = new THREE.Vector3(0, 0, 0);

    try {
      this.initScene();
      this.initRenderer();
      this.initCamera();
      this.setupPostProcessing();
      this.setupLights();
      this.initSceneObjects();
      this.setupEventListeners();
      this.initialized = true;
      this.startAnimation();
    } catch (error) {
      console.error('Failed to initialize scene:', error);
      this.dispose();
      throw error;
    }
  }

  initScene() {
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x000000, 0.0005);
  }

  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.2;
  }

  initCamera() {
    const fov = 60;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.1;
    const far = 10000;

    this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    this.camera.position.set(0, 0, 100);
    this.camera.lookAt(0, 0, 0);
  }

  setupPostProcessing() {
    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));

    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      2.5,  // strength
      0.5,  // radius
      0.7   // threshold
    );
    this.composer.addPass(this.bloomPass);

    this.bokehPass = new BokehPass(this.scene, this.camera, {
      focus: 1.0,
      aperture: 0.025,
      maxblur: 0.015,
    });
    this.composer.addPass(this.bokehPass);
  }

  setupLights() {
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    this.scene.add(ambientLight);

    this.primaryLight = new THREE.PointLight(0x7A9E9F, 4);
    this.primaryLight.position.set(50, 50, 50);
    this.scene.add(this.primaryLight);

    this.secondaryLight = new THREE.PointLight(0x506C7F, 3);
    this.secondaryLight.position.set(-50, -50, -50);
    this.scene.add(this.secondaryLight);

    const hemiLight = new THREE.HemisphereLight(0x7A9E9F, 0x000000, 2);
    this.scene.add(hemiLight);
  }

  initSceneObjects() {
    this.flowField = new FlowField(this.scene);
    this.spheres = new Spheres(this.scene);
  }

  setupEventListeners() {
    window.addEventListener('resize', this.handleResize.bind(this));
    document.addEventListener('mousemove', this.handleMouseMove.bind(this));
  }

  handleResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
    this.composer.setSize(width, height);
  }

  handleMouseMove(event) {
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
    this.targetRotation.x = this.mouse.y * 0.3;
    this.targetRotation.y = this.mouse.x * 0.3;
  }

  startAnimation() {
    const animate = () => {
      if (this.isDestroyed) return;
      
      this.animate(performance.now());
      this.animationFrameId = requestAnimationFrame(animate);
    };
    
    this.animationFrameId = requestAnimationFrame(animate);
  }

  animate(time) {
    if (!this.initialized || this.isDestroyed) return;

    this.time = time * 0.001;

    // Update camera
    this.camera.position.lerp(this.targetCameraPosition, 0.05);
    const currentLookAt = new THREE.Vector3();
    this.camera.getWorldDirection(currentLookAt);
    const targetDirection = this.targetLookAt.clone().sub(this.camera.position).normalize();
    const newDirection = currentLookAt.lerp(targetDirection, 0.05);
    this.camera.lookAt(this.camera.position.clone().add(newDirection));

    // Rotate based on mouse
    this.camera.rotation.x += (this.targetRotation.x - this.camera.rotation.x) * 0.05;
    this.camera.rotation.y += (this.targetRotation.y - this.camera.rotation.y) * 0.05;

    // Update lights
    if (this.primaryLight) {
      this.primaryLight.position.x = Math.sin(this.time) * 50;
      this.primaryLight.position.y = Math.cos(this.time * 0.5) * 30;
      this.primaryLight.position.z = Math.cos(this.time) * 50;
      this.primaryLight.intensity = 3 + Math.sin(this.time * 2) * 1;
    }
    if (this.secondaryLight) {
      this.secondaryLight.position.x = Math.sin(this.time + Math.PI) * 50;
      this.secondaryLight.position.y = Math.cos(this.time * 0.5 + Math.PI) * 30;
      this.secondaryLight.position.z = Math.cos(this.time + Math.PI) * 50;
      this.secondaryLight.intensity = 2 + Math.sin(this.time * 2 + Math.PI) * 1;
    }

    // Update objects
    if (this.flowField) this.flowField.update(this.time);
    if (this.spheres) this.spheres.update(this.time);

    this.composer.render();
  }

  updateSection(section) {
    this.currentSection = section;
    
    switch (section) {
      case 'hero':
        this.targetCameraPosition.set(0, 0, 100);
        this.targetLookAt.set(0, 0, 0);
        if (this.bloomPass) {
          this.bloomPass.strength = 2.5;
          this.bloomPass.radius = 0.5;
        }
        break;
      case 'vision-solutions':
        this.targetCameraPosition.set(50, 20, 80);
        this.targetLookAt.set(0, 0, -20);
        if (this.bloomPass) {
          this.bloomPass.strength = 3;
          this.bloomPass.radius = 0.6;
        }
        break;
      case 'manifesto':
        this.targetCameraPosition.set(-50, 30, 60);
        this.targetLookAt.set(0, 0, -40);
        if (this.bloomPass) {
          this.bloomPass.strength = 2;
          this.bloomPass.radius = 0.7;
        }
        break;
    }

    if (this.flowField) this.flowField.updateSection(section);
    if (this.spheres) this.spheres.updateSection(section);
  }

  dispose() {
    this.isDestroyed = true;
    
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }

    window.removeEventListener('resize', this.handleResize);
    document.removeEventListener('mousemove', this.handleMouseMove);

    if (this.renderer) {
      this.renderer.dispose();
    }
    if (this.composer) {
      this.composer.dispose();
    }
    if (this.flowField) {
      this.flowField.dispose();
    }
    if (this.spheres) {
      this.spheres.dispose();
    }
    if (this.scene) {
      this.scene.clear();
    }

    this.initialized = false;
  }
}
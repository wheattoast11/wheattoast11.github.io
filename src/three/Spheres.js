import * as THREE from 'three';
import { createNoise4D } from 'simplex-noise';

export class Spheres {
  constructor() {
    this.noise4D = createNoise4D();
    this.spheres = [];
    this.materials = [];
    this.baseGeometry = new THREE.IcosahedronGeometry(1, 3);
    
    // Create multiple materials for variety
    this.createMaterials();
    this.init();
  }

  createMaterials() {
    const colors = [0x506C7F, 0x7A9E9F, 0x405C6F];
    colors.forEach(color => {
      this.materials.push(
        new THREE.MeshPhongMaterial({
          color,
          transparent: true,
          opacity: 0.2,
          shininess: 100,
          specular: 0x7A9E9F,
          side: THREE.DoubleSide,
          wireframe: Math.random() > 0.7
        })
      );
    });
  }

  init() {
    for (let i = 0; i < 20; i++) {
      const sphere = new THREE.Mesh(
        this.baseGeometry,
        this.materials[Math.floor(Math.random() * this.materials.length)]
      );

      // Position spheres in a more interesting pattern
      const radius = 30 + Math.random() * 30;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      sphere.position.set(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      );

      sphere.scale.setScalar(Math.random() * 2 + 0.5);
      sphere.userData = {
        originalPosition: sphere.position.clone(),
        rotationSpeed: (Math.random() - 0.5) * 0.002,
        pulseSpeed: Math.random() * 0.002 + 0.001,
        pulseOffset: Math.random() * Math.PI * 2
      };

      this.spheres.push(sphere);
    }
  }

  update(time) {
    this.spheres.forEach((sphere, i) => {
      // Smooth floating motion
      const noise = this.noise4D(
        sphere.position.x * 0.02,
        sphere.position.y * 0.02,
        sphere.position.z * 0.02,
        time
      );

      const originalPos = sphere.userData.originalPosition;
      sphere.position.x = originalPos.x + Math.cos(time + i) * 2 * noise;
      sphere.position.y = originalPos.y + Math.sin(time + i) * 2 * noise;
      sphere.position.z = originalPos.z + Math.cos(time * 0.5 + i) * 2 * noise;

      // Rotation
      sphere.rotation.x += sphere.userData.rotationSpeed;
      sphere.rotation.y += sphere.userData.rotationSpeed * 1.2;

      // Pulsing scale effect
      const pulse = Math.sin(time * sphere.userData.pulseSpeed + sphere.userData.pulseOffset) * 0.1 + 1;
      const baseScale = sphere.userData.originalScale || 1;
      sphere.scale.setScalar(baseScale * pulse);

      // Update material opacity
      if (sphere.material.transparent) {
        sphere.material.opacity = 0.2 + Math.sin(time * 2 + i) * 0.1;
      }
    });
  }

  dispose() {
    this.baseGeometry.dispose();
    this.materials.forEach(material => material.dispose());
  }
}
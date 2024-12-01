import * as THREE from 'three';
import { createNoise4D } from 'simplex-noise';

export class Spheres {
  constructor() {
    this.noise4D = createNoise4D();
    this.spheres = [];
    this.materials = [];
    this.baseGeometry = new THREE.IcosahedronGeometry(1, 3);
    this.currentSection = 'hero';
    
    this.createMaterials();
    this.init();
  }

  createMaterials() {
    const colors = [
      { color: 0x506C7F, emissive: 0x203040 },
      { color: 0x7A9E9F, emissive: 0x304550 },
      { color: 0x9ECFD0, emissive: 0x405C60 }
    ];

    colors.forEach(({ color, emissive }) => {
      this.materials.push(
        new THREE.MeshPhongMaterial({
          color,
          emissive,
          emissiveIntensity: 0.2,
          transparent: true,
          opacity: 0.3,
          shininess: 100,
          specular: 0x7A9E9F,
          side: THREE.DoubleSide,
          wireframe: Math.random() > 0.7,
          flatShading: true
        })
      );
    });
  }

  init() {
    for (let i = 0; i < 25; i++) {
      const sphere = new THREE.Mesh(
        this.baseGeometry,
        this.materials[Math.floor(Math.random() * this.materials.length)]
      );

      // Position spheres in a more organic pattern
      const radius = 25 + Math.random() * 35;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      sphere.position.set(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      );

      sphere.scale.setScalar(Math.random() * 2.5 + 0.5);
      sphere.userData = {
        originalPosition: sphere.position.clone(),
        originalScale: sphere.scale.x,
        rotationSpeed: (Math.random() - 0.5) * 0.003,
        pulseSpeed: Math.random() * 0.003 + 0.001,
        pulseOffset: Math.random() * Math.PI * 2,
        orbitRadius: radius,
        orbitSpeed: (Math.random() - 0.5) * 0.001,
        orbitPhase: Math.random() * Math.PI * 2,
        distortionFreq: Math.random() * 2 + 1,
        distortionAmp: Math.random() * 0.3 + 0.1
      };

      this.spheres.push(sphere);
    }
  }

  updateSection(section) {
    this.currentSection = section;
    
    this.spheres.forEach((sphere, i) => {
      const material = sphere.material;
      
      switch (section) {
        case 'hero':
          material.opacity = 0.4;
          material.emissiveIntensity = 0.3;
          sphere.userData.distortionAmp = 0.15;
          sphere.userData.orbitMultiplier = 1.2;
          break;
          
        case 'vision-solutions':
          material.opacity = 0.5;
          material.emissiveIntensity = 0.4;
          sphere.userData.distortionAmp = 0.25;
          sphere.userData.orbitMultiplier = 1.5;
          break;
          
        case 'manifesto':
          material.opacity = 0.35;
          material.emissiveIntensity = 0.25;
          sphere.userData.distortionAmp = 0.2;
          sphere.userData.orbitMultiplier = 1.0;
          break;
      }
    });
  }

  update(time) {
    this.spheres.forEach((sphere, i) => {
      const {
        originalPosition,
        originalScale,
        rotationSpeed,
        pulseSpeed,
        pulseOffset,
        orbitRadius,
        orbitSpeed,
        orbitPhase,
        distortionFreq,
        distortionAmp,
        orbitMultiplier = 1
      } = sphere.userData;

      // Enhanced noise-based movement
      const noise = this.noise4D(
        sphere.position.x * 0.02,
        sphere.position.y * 0.02,
        sphere.position.z * 0.02,
        time
      ) * 1.5;

      // Orbital motion with enhanced radius
      const orbitTime = time * orbitSpeed * orbitMultiplier + orbitPhase;
      const orbitX = Math.cos(orbitTime) * orbitRadius * 1.2;
      const orbitZ = Math.sin(orbitTime) * orbitRadius * 1.2;

      // Combine movements with enhanced amplitudes
      sphere.position.x = originalPosition.x + orbitX * 0.3 + Math.cos(time + i) * 3 * noise;
      sphere.position.y = originalPosition.y + Math.sin(time + i) * 3 * noise;
      sphere.position.z = originalPosition.z + orbitZ * 0.3 + Math.cos(time * 0.5 + i) * 3 * noise;

      // Enhanced rotation with noise influence
      sphere.rotation.x += rotationSpeed * (1 + noise * 0.7);
      sphere.rotation.y += rotationSpeed * 1.3 * (1 + noise * 0.7);
      sphere.rotation.z += rotationSpeed * 0.9 * (1 + noise * 0.7);

      // Dynamic scale pulsing with enhanced amplitude
      const pulseBase = Math.sin(time * pulseSpeed * 1.2 + pulseOffset);
      const pulseNoise = this.noise4D(time * 0.15, i, 0, 0) * 0.7;
      const pulse = (pulseBase + pulseNoise) * 0.2 + 1;
      sphere.scale.setScalar(originalScale * pulse);

      // Enhanced geometry distortion
      if (!sphere.geometry.userData.originalPositions) {
        sphere.geometry.userData.originalPositions = Array.from(sphere.geometry.attributes.position.array);
      }

      const positions = sphere.geometry.attributes.position.array;
      const originalPositions = sphere.geometry.userData.originalPositions;

      for (let j = 0; j < positions.length; j += 3) {
        const vertex = new THREE.Vector3(
          originalPositions[j],
          originalPositions[j + 1],
          originalPositions[j + 2]
        );

        const distortionNoise = this.noise4D(
          vertex.x * distortionFreq + time * 1.2,
          vertex.y * distortionFreq + time * 1.2,
          vertex.z * distortionFreq + time * 1.2,
          i
        );

        vertex.multiplyScalar(1 + distortionNoise * distortionAmp * 1.5);

        positions[j] = vertex.x;
        positions[j + 1] = vertex.y;
        positions[j + 2] = vertex.z;
      }

      sphere.geometry.attributes.position.needsUpdate = true;

      // Enhanced material opacity with noise
      if (sphere.material.transparent) {
        const opacityNoise = this.noise4D(time * 0.7, i, 0, 0) * 0.15;
        sphere.material.opacity = Math.max(0.2, Math.min(0.6, 
          sphere.material.opacity + opacityNoise
        ));
        
        // Enhance emissive intensity based on section
        sphere.material.emissiveIntensity = Math.max(0.2, Math.min(0.5,
          sphere.material.emissiveIntensity + opacityNoise * 0.5
        ));
      }
    });
  }

  dispose() {
    this.baseGeometry.dispose();
    this.materials.forEach(material => material.dispose());
    this.spheres.forEach(sphere => {
      if (sphere.geometry !== this.baseGeometry) {
        sphere.geometry.dispose();
      }
    });
  }
}
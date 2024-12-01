import * as THREE from 'three';
import { createNoise4D } from 'simplex-noise';

export class FlowField {
  constructor() {
    this.noise4D = createNoise4D();
    this.group = new THREE.Group();
    this.particles = [];
    this.numParticles = 2000;
    this.bounds = {
      minX: -50,
      maxX: 50,
      minY: -50,
      maxY: 50,
      minZ: -50,
      maxZ: 50
    };
    this.currentSection = 'hero';
    this.init();
  }

  init() {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(this.numParticles * 3);
    const velocities = new Float32Array(this.numParticles * 3);
    const colors = new Float32Array(this.numParticles * 3);
    const sizes = new Float32Array(this.numParticles);

    for (let i = 0; i < this.numParticles; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 100;
      positions[i3 + 1] = (Math.random() - 0.5) * 100;
      positions[i3 + 2] = (Math.random() - 0.5) * 100;

      velocities[i3] = 0;
      velocities[i3 + 1] = 0;
      velocities[i3 + 2] = 0;

      const color = new THREE.Color();
      color.setHSL(0.5 + Math.random() * 0.2, 0.75, 0.6);
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      sizes[i] = Math.random() * 0.5 + 0.5;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
      size: 0.4,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
      depthWrite: false
    });

    this.points = new THREE.Points(geometry, material);
    this.group.add(this.points);
  }

  updateSection(section) {
    this.currentSection = section;
    
    switch (section) {
      case 'hero':
        this.points.material.size = 0.4;
        this.points.material.opacity = 0.8;
        this.bounds = {
          minX: -75, maxX: 75,
          minY: -75, maxY: 75,
          minZ: -75, maxZ: 75
        };
        break;
        
      case 'vision-solutions':
        this.points.material.size = 0.6;
        this.points.material.opacity = 0.9;
        this.bounds = {
          minX: -100, maxX: 100,
          minY: -100, maxY: 100,
          minZ: -100, maxZ: 100
        };
        break;
        
      case 'manifesto':
        this.points.material.size = 0.3;
        this.points.material.opacity = 0.7;
        this.bounds = {
          minX: -150, maxX: 150,
          minY: -150, maxY: 150,
          minZ: -150, maxZ: 150
        };
        break;
    }
  }

  update(time) {
    const positions = this.points.geometry.attributes.position;
    const velocities = this.points.geometry.attributes.velocity;
    const colors = this.points.geometry.attributes.color;
    const sizes = this.points.geometry.attributes.size;

    for (let i = 0; i < this.numParticles; i++) {
      const i3 = i * 3;
      const x = positions.array[i3];
      const y = positions.array[i3 + 1];
      const z = positions.array[i3 + 2];

      // Dynamic noise scale based on section
      let scale = 0.02;
      switch (this.currentSection) {
        case 'hero':
          scale = 0.025;
          break;
        case 'vision-solutions':
          scale = 0.015;
          break;
        case 'manifesto':
          scale = 0.03;
          break;
      }

      const noiseX = this.noise4D(x * scale, y * scale, z * scale, time * 0.5) * 2;
      const noiseY = this.noise4D(x * scale + 100, y * scale + 100, z * scale + 100, time * 0.5) * 2;
      const noiseZ = this.noise4D(x * scale + 200, y * scale + 200, z * scale + 200, time * 0.5) * 2;

      // Dynamic speed and inertia based on section
      let speed = 0.15;
      let inertia = 0.95;
      
      switch (this.currentSection) {
        case 'hero':
          speed = 0.15;
          inertia = 0.95;
          break;
        case 'vision-solutions':
          speed = 0.2;
          inertia = 0.9;
          break;
        case 'manifesto':
          speed = 0.12;
          inertia = 0.98;
          break;
      }

      velocities.array[i3] = velocities.array[i3] * inertia + noiseX * speed;
      velocities.array[i3 + 1] = velocities.array[i3 + 1] * inertia + noiseY * speed;
      velocities.array[i3 + 2] = velocities.array[i3 + 2] * inertia + noiseZ * speed;

      // Update positions with velocity clamping
      const maxVelocity = 2.0;
      velocities.array[i3] = THREE.MathUtils.clamp(velocities.array[i3], -maxVelocity, maxVelocity);
      velocities.array[i3 + 1] = THREE.MathUtils.clamp(velocities.array[i3 + 1], -maxVelocity, maxVelocity);
      velocities.array[i3 + 2] = THREE.MathUtils.clamp(velocities.array[i3 + 2], -maxVelocity, maxVelocity);

      positions.array[i3] += velocities.array[i3];
      positions.array[i3 + 1] += velocities.array[i3 + 1];
      positions.array[i3 + 2] += velocities.array[i3 + 2];

      // Pulse size based on noise
      const sizePulse = (Math.sin(time * 2 + i * 0.1) + 1) * 0.25 + 0.5;
      sizes.array[i] = sizes.array[i] * 0.95 + sizePulse * 0.05;

      // Check bounds and reset if needed
      if (positions.array[i3] < this.bounds.minX || positions.array[i3] > this.bounds.maxX ||
          positions.array[i3 + 1] < this.bounds.minY || positions.array[i3 + 1] > this.bounds.maxY ||
          positions.array[i3 + 2] < this.bounds.minZ || positions.array[i3 + 2] > this.bounds.maxZ) {
        
        positions.array[i3] = (Math.random() - 0.5) * (this.bounds.maxX - this.bounds.minX);
        positions.array[i3 + 1] = (Math.random() - 0.5) * (this.bounds.maxY - this.bounds.minY);
        positions.array[i3 + 2] = (Math.random() - 0.5) * (this.bounds.maxZ - this.bounds.minZ);
        
        velocities.array[i3] = 0;
        velocities.array[i3 + 1] = 0;
        velocities.array[i3 + 2] = 0;

        // Enhanced color based on section
        const color = new THREE.Color();
        switch (this.currentSection) {
          case 'hero':
            color.setHSL(0.5 + Math.random() * 0.2, 0.8, 0.6);
            break;
          case 'vision-solutions':
            color.setHSL(0.6 + Math.random() * 0.2, 0.85, 0.7);
            break;
          case 'manifesto':
            color.setHSL(0.4 + Math.random() * 0.2, 0.75, 0.5);
            break;
        }
        
        colors.array[i3] = color.r;
        colors.array[i3 + 1] = color.g;
        colors.array[i3 + 2] = color.b;
      }
    }

    positions.needsUpdate = true;
    velocities.needsUpdate = true;
    colors.needsUpdate = true;
    sizes.needsUpdate = true;
  }

  dispose() {
    if (this.points) {
      this.points.geometry.dispose();
      this.points.material.dispose();
    }
    this.group.clear();
  }
}
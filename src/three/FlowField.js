import * as THREE from 'three';
import { createNoise4D } from 'simplex-noise';

export class FlowField {
  constructor() {
    this.noise4D = createNoise4D();
    this.group = new THREE.Group();
    this.geometry = new THREE.BufferGeometry();
    this.material = new THREE.LineBasicMaterial({
      color: 0x7A9E9F,
      transparent: true,
      opacity: 0.3
    });

    this.init();
  }

  init() {
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
        const noise = this.noise4D(x * scale, y * scale, z * scale, Date.now() * 0.00003);
        
        x += Math.cos(noise * Math.PI * 2) * 0.4;
        y += Math.sin(noise * Math.PI * 2) * 0.4;
        z += (Math.cos(noise * Math.PI) + Math.sin(noise * Math.PI)) * 0.2;
      }
    }

    this.geometry.setFromPoints(points);
    const flowLines = new THREE.LineSegments(this.geometry, this.material);
    this.group.add(flowLines);
  }

  update(time) {
    this.group.rotation.x += 0.0001;
    this.group.rotation.y += 0.0001;

    const positions = this.geometry.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      const z = positions[i + 2];
      
      const scale = 0.015;
      const noise = this.noise4D(x * scale, y * scale, z * scale, time);
      
      positions[i] += Math.cos(noise * Math.PI * 2) * 0.015;
      positions[i + 1] += Math.sin(noise * Math.PI * 2) * 0.015;
      positions[i + 2] += Math.cos(noise * Math.PI) * 0.015;
    }
    this.geometry.attributes.position.needsUpdate = true;
  }
}
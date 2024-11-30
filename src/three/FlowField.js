import * as THREE from 'three';
import { createNoise4D } from 'simplex-noise';

export class FlowField {
  constructor() {
    this.noise4D = createNoise4D();
    this.group = new THREE.Group();
    this.lines = [];
    this.particleCount = 150;
    this.segmentCount = 100;
    
    this.material = new THREE.LineBasicMaterial({
      color: 0x7A9E9F,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending
    });

    this.init();
  }

  createFlowLine() {
    const points = [];
    const geometry = new THREE.BufferGeometry();
    
    // Random starting position
    const startPos = new THREE.Vector3(
      (Math.random() - 0.5) * 100,
      (Math.random() - 0.5) * 100,
      (Math.random() - 0.5) * 100
    );
    
    points.push(startPos.clone());
    
    // Generate flow line points
    for (let i = 1; i < this.segmentCount; i++) {
      const prevPoint = points[i - 1].clone();
      const noise = this.noise4D(
        prevPoint.x * 0.02,
        prevPoint.y * 0.02,
        prevPoint.z * 0.02,
        i * 0.1
      );
      
      const angle = noise * Math.PI * 2;
      const dx = Math.cos(angle) * 0.5;
      const dy = Math.sin(angle) * 0.5;
      const dz = (Math.cos(angle) + Math.sin(angle)) * 0.25;
      
      points.push(new THREE.Vector3(
        prevPoint.x + dx,
        prevPoint.y + dy,
        prevPoint.z + dz
      ));
    }
    
    geometry.setFromPoints(points);
    const line = new THREE.Line(geometry, this.material);
    return { line, points: points.map(p => p.clone()) };
  }

  init() {
    for (let i = 0; i < this.particleCount; i++) {
      const flowLine = this.createFlowLine();
      this.lines.push(flowLine);
      this.group.add(flowLine.line);
    }
  }

  update(time) {
    this.lines.forEach((flowLine, lineIndex) => {
      const points = flowLine.points.map((point, i) => {
        const noise = this.noise4D(
          point.x * 0.02,
          point.y * 0.02,
          point.z * 0.02,
          time + lineIndex * 0.1
        );
        
        return new THREE.Vector3(
          point.x + Math.cos(noise * Math.PI * 2) * 0.1,
          point.y + Math.sin(noise * Math.PI * 2) * 0.1,
          point.z + (Math.cos(noise * Math.PI) + Math.sin(noise * Math.PI)) * 0.05
        );
      });
      
      flowLine.line.geometry.setFromPoints(points);
      flowLine.line.geometry.computeBoundingSphere();
    });

    this.group.rotation.x += 0.0001;
    this.group.rotation.y += 0.0001;
  }
}
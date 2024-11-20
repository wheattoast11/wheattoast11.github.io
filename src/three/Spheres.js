import * as THREE from 'three';

export class Spheres {
  constructor() {
    this.spheres = [];
    this.geometry = new THREE.IcosahedronGeometry(1, 3);
    this.material = new THREE.MeshPhongMaterial({
      color: 0x506C7F,
      transparent: true,
      opacity: 0.2,
      shininess: 100,
      specular: 0x7A9E9F
    });

    this.init();
  }

  init() {
    for (let i = 0; i < 15; i++) {
      const sphere = new THREE.Mesh(this.geometry, this.material);
      sphere.position.set(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 60
      );
      sphere.scale.setScalar(Math.random() * 2 + 1);
      this.spheres.push(sphere);
    }
  }

  update(time) {
    this.spheres.forEach((sphere, i) => {
      sphere.position.y += Math.sin(time + i) * 0.004;
      sphere.rotation.x += 0.001;
      sphere.rotation.y += 0.001;
    });
  }
}
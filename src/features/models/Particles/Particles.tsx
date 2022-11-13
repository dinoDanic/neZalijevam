import { useFrame } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import * as THREE from "three";

export const Particles = () => {
  const light = useRef();
  const mesh = useRef();
  const count = 500;

  const dummy = useMemo(() => new THREE.Object3D(), []);

  const range = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const Random = { range };

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const time = Random.range(90, 100);
      const factor = Random.range(20, 120);
      const speed = 0.001;
      const x = Random.range(-10, 10);
      const y = Random.range(4, 50);
      const z = Random.range(-50, -50);

      temp.push({ time, factor, speed, x, y, z });
    }
    return temp;
  }, [count]);

  useFrame(() => {
    // Run through the list of particles calculate some movement
    particles.forEach((particle, index) => {
      let { factor, speed, x, y, z } = particle;

      // Update the particle time
      const t = (particle.time += speed);

      // Update the particle position based on the time
      dummy.position.set(
        x + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        y + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        z + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );

      // Derive an oscillating value for size and rotation
      const s = Math.cos(t);
      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 15, s * 15, s * 105);
      dummy.updateMatrix();

      // And apply the matrix to the instanced item
      mesh.current.setMatrixAt(index, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <>
      <pointLight ref={light} distance={540} position={[0,0,0]} intensity={2} color="lightblue" />
      <instancedMesh ref={mesh} args={[null, null, count]}>
        <dodecahedronBufferGeometry args={[0.2, 0]} />
        <meshPhongMaterial color="green" />
      </instancedMesh>
    </>
  );
};

import {
  ContactShadows,
  PresentationControls,
  useGLTF,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { Group } from "three";

export const PlantModel = ({ ...props }) => {
  const group = useRef<Group | null>(null);
  const model = useGLTF("/plant.gltf");

  const three = useThree();

  useFrame(() => {
    group.current?.rotateY(0.004);
    // three.camera.translateY(2);
    three.camera.lookAt(0, 2, 0);
  });


  useEffect(() => {
    group.current?.rotateX(0.1);
  }, []);

  return (
    <PresentationControls
      global
      rotation={[0.13, 0.1, 0]}
      polar={[-0.4, 0.2]}
      azimuth={[-1, 0.75]}
      config={{ mass: 2, tension: 400 }}
      snap={{ mass: 4, tension: 400 }}
    >
      <group ref={group} {...props} dispose={null}>
        <primitive scale={0.6} object={model.scene} />
      </group>
      <ContactShadows position-y={-0.7} opacity={0.4} scale={5} blur={1.8} />
    </PresentationControls>
  );
};

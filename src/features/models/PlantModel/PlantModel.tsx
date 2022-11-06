import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { Group } from "three";

export const PlantModel = ({ ...props }) => {
  const group = useRef<Group | null>(null);
  const model = useGLTF("/plant.gltf");

  useFrame((frame) => {
    group.current?.rotateY(0.004);
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive scale={0.6} object={model.scene} />
    </group>
  );
};

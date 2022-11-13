import { Sparkles } from "@react-three/drei";
import React from "react";

export const ParticlesTwo = () => {
  return (
    <>
      <Sparkles
        position={[0, 1, 4]}
        count={100}
        size={10}
        opacity={0.1}
        color={"white"}
        speed={0.1}
      />
      <Sparkles
        position={[0, 1, 4]}
        count={50}
        size={10}
        opacity={0.2}
        color={"white"}
        speed={0.2}
      />
      <Sparkles
        position={[0, 0.5, 1]}
        count={50}
        size={20}
        opacity={0.1}
        color={"white"}
        speed={0.05}
      />
    </>
  );
};

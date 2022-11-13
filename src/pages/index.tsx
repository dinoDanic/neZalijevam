import React, { Suspense, useEffect, useState } from "react";
import {
  Container,
  FlexMods,
  PositionModFn,
  PositionMods,
  SizeMods,
  ZIndex,
} from "@kodiui/kodiui";
import {
  Environment,
  FirstPersonControls,
  Plane,
  ScreenQuad,
  Sky,
  Sparkles,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ParticlesTwo, PlantModel } from "features/models";
import { Particles } from "features/models/Particles";

import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { theme } from "styles";
import { NextSchedule } from "features/schedule";

const Dashboard = () => {
  const ref = React.useRef(null!);
  const [color, setcolor] = useState("white");
  const [speed, setspeed] = useState(0.1);

  return (
    <>
      <Container modifiers={[ZIndex(100)]}>
        <NextSchedule />
      </Container>
      <Container
        modifiers={[
          FlexMods.Parent({
            direction: "column",
            alignItems: "center",
            justifyContent: "center",
          }),
          SizeMods.FillScreen,
          PositionMods.Fixed,
          PositionModFn({ right: 0, top: 0 }),
          ZIndex(0),
        ]}
      >
        <Canvas style={{ width: "100%", height: "100%" }}>
          <Suspense fallback={<>loading...</>}>
            <ParticlesTwo />
            {/* <Environment preset={"forest"} /> */}
            {/* <PlantModel /> */}
          </Suspense>
        </Canvas>
      </Container>
    </>
  );
};

export default Dashboard;

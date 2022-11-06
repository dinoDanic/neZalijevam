import {
  Center,
  ColorMods,
  Container,
  FlexMods,
  SizeMods,
} from "@kodiui/kodiui";
import { CameraShake, Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { BaseBox } from "components";
import { MainCalendar } from "features/dashboard";
import { PlantModel } from "features/models";
import React, { Suspense, useRef } from "react";
import { BigTitle, theme } from "styles";

const Dashboard = () => {
  return (
    <Container
      modifiers={[
        FlexMods.Parent({
          direction: "column",
          alignItems: "center",
          justifyContent: "center",
        }),
        SizeMods.FillScreen,
      ]}
    >
      <Canvas style={{ width: "100%", height: "100%" }}>
        <Suspense fallback={<>loading...</>}>
          <Environment preset={"sunset"} />
          <PlantModel />
        </Suspense>
      </Canvas>
    </Container>
  );
};

export default Dashboard;

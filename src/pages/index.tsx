import { Center, ColorMods, Container, FlexMods, SizeMods } from "@kodiui/kodiui";
import { BaseBox } from "components";
import { MainCalendar } from "features/dashboard";
import React from "react";
import { BigTitle, theme } from "styles";

const Dashboard = () => {
  return (
    <Container
      modifiers={[
        FlexMods.Parent({
          direction: "column",
          alignItems: "center",
          justifyContent: "space-between",
        }),
        SizeMods.FullHeight,
      ]}
    >
      <BigTitle color={theme.color.black}>Dashboard</BigTitle>
      <BaseBox boxShadow maxWidth={"400px"}>
        <MainCalendar />
      </BaseBox>
    </Container>
  );
};

export default Dashboard;

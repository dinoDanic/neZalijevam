import { Stack } from "@kodiui/kodiui";
import { ColorfullLink } from "components";
import React from "react";
import { theme } from "styles";

export const OpenMenu = () => {
  return (
    <Stack gap={5}>
      <ColorfullLink background={theme.color.pink}>Dashboard</ColorfullLink>
      <ColorfullLink background={theme.color.yellow}>Account</ColorfullLink>
      <ColorfullLink background={theme.color.green}>Calendar</ColorfullLink>
      <ColorfullLink background={theme.color.red}>Logout</ColorfullLink>
    </Stack>
  );
};

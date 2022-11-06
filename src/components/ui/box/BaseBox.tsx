import { BorderMods, Box, CornerMods, Mods, Props } from "@kodiui/kodiui";
import React, { FC, ReactNode } from "react";
import { theme } from "styles";

export interface BoxProps extends Mods, Props {
  children: ReactNode;
  boxShadow?: boolean;
}

export const BaseBox: FC<BoxProps> = ({
  children,
  space = 8,
  boxShadow,
  ...props
}) => {
  return (
    <Box
      space={space}
      background={theme.color.white}
      modifiers={[
        BorderMods({ border: "thick" }),
        CornerMods({ corners: theme.corners.base }),
        `box-shadow: ${boxShadow && theme.boxShadow[0]} `,
        props.modifiers,
      ]}
      {...props}
    >
      {children}
    </Box>
  );
};

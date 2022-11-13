import { BorderMods, Box, CornerMods, Mods, Props } from "@kodiui/kodiui";
import React, { FC, ReactNode } from "react";
import { theme } from "styles";

export interface BoxProps extends Mods, Props {
  children: ReactNode;
  boxShadow?: boolean;
  onClick?: () => void
}

export const BaseBox: FC<BoxProps> = ({
  children,
  space = 8,
  boxShadow,
  modifiers,
  onClick,
  ...props
}) => {
  return (
    <Box
      space={space}
      onClick={onClick}
      background={theme.color.white}
      modifiers={[
        BorderMods({ border: "thick", borderColor:  theme.color.black }),
        CornerMods({ corners: theme.corners.base }),
        `box-shadow: ${boxShadow && theme.boxShadow[0]} `,
        modifiers,
      ]}
      {...props}
    >
      {children}
    </Box>
  );
};

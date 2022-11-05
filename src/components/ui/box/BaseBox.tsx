import {
  BorderMods,
  Box,
  ColorMods,
  CornerMods,
  Mods,
  Props,
} from '@kodiui/kodiui'
import React, { FC, ReactNode } from 'react'
import { theme } from 'styles'

export interface BoxProps extends Mods, Props {
  children: ReactNode
}

export const BaseBox: FC<BoxProps> = ({ children, space = 4, ...props }) => {
  return (
    <Box
      space={space}
      modifiers={[
        CornerMods({ corners: theme.corners.base }),
        BorderMods({
          border: 'thin',
          borderColor: theme.color.primary.ElementStroke,
        }),
        ColorMods({ background: theme.color.primary.White }),
        `box-shadow: ${theme.boxShadow[1]}`,
        props.modifiers,
      ]}
    >
      {children}
    </Box>
  )
}

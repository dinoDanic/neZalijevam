import styled from '@emotion/styled'
import { ColorMods, CursorMods, ifHovered, TransitionMods } from '@kodiui/kodiui'
import NextLink, { LinkProps } from 'next/link'
import { FC, ReactNode } from 'react'
import { theme } from 'styles'

interface Props extends LinkProps {
  color?: string
  children: ReactNode
}

interface LinkTagProps {
  color?: Props['color']
}

export const Link: FC<Props> = ({
  color = theme.color.primary.Blue,
  children,
  ...props
}) => {
  return (
    <NextLink {...props}>
      <LinkTag color={color}>{children}</LinkTag>
    </NextLink>
  )
}

const LinkTag = styled.a<LinkTagProps>`
  ${CursorMods.Pointer}
  ${TransitionMods.Base}
  ${ifHovered(`filter: brightness(120%)`)}
  ${({ color }) => ColorMods({ color: color })}
`

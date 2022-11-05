import styled from '@emotion/styled'
import {
  Box,
  Cluster,
  Container,
  FlexMods,
  MarginMods,
  Overflow,
  SizeMods,
} from '@kodiui/kodiui'
import { routes } from 'data'
import { useRouter } from 'next/router'
import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const EMPTY_LAYOUT = [routes.login]

export const ContentLayout: FC<Props> = ({ children }) => {
  const { asPath } = useRouter()

  const emptyLayout = EMPTY_LAYOUT.includes(asPath)

  if (emptyLayout) {
    return <>{children}</>
  }

  return (
    <Body>
      <Cont>
        <Box space={8} modifiers={[SizeMods.FullWidth]}>
          <Content>{children}</Content>
        </Box>
      </Cont>
    </Body>
  )
}

const Body = styled(Container)`
  ${SizeMods.FillScreen};
  ${FlexMods.Parent({ direction: 'column' })}
`

const Cont = styled(Container)`
  ${FlexMods.Parent({ direction: 'row' })}
  ${FlexMods.Child({ grow: 1 })} 
  ${Overflow.Hidden}
`

const Content = styled(Cluster)`
  ${SizeMods({ maxWidth: '1600px' })}
  ${MarginMods.HAuto}
`

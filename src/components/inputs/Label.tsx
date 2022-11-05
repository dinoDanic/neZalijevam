import { FC, ReactNode } from 'react'
import { Bold } from 'styles'

interface Props {
  children: ReactNode
  color?: string
}

export const Label: FC<Props> = ({ children, color }) => {
  return <Bold color={color}>{children}</Bold>
}

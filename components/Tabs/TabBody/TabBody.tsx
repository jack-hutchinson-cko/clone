import React, { FC, ReactElement } from 'react'
import { StyledTabBody } from './TabBody.styles'

type Props = {
  children: ReactElement | ReactElement[]
  activeTab?: number
}

const TabBody: FC<Props> = ({ activeTab = 0, children }) => {
  if (!children) {
    return <StyledTabBody>Empty</StyledTabBody>
  }

  const childrenArray = React.Children.toArray(children)
  const contentTabBody = React.Children.count(children) > 1 ? childrenArray[activeTab] : children

  return <StyledTabBody>{contentTabBody}</StyledTabBody>
}

export default TabBody

import { FC, ReactNode } from 'react'

import { StyledListItem } from './ListItem.styles'

type Props = {
  link: ReactNode
  icon?: ReactNode
  isRoot?: boolean
}

const ListItem: FC<Props> = ({ link, icon, isRoot }) => (
  <StyledListItem isRoot={isRoot}>
    {icon} {link}
  </StyledListItem>
)

export default ListItem;

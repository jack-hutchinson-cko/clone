import { FC } from 'react'
import Link from 'next/link'

import { StyledLink } from './ListItem.styles'

type Props = {
  href: string
  active?: boolean
}

const ListItemLink: FC<Props> = ({ children, href, active }) => (
  <Link href={href} passHref>
    <StyledLink isActive={active}>{children}</StyledLink>
  </Link>
)

export default ListItemLink

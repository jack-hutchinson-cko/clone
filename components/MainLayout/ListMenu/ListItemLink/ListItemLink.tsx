import { FC } from 'react';
import Link from 'next/link';

import { NavigationLinkProps } from 'components/NavigationTreeMenu';
import { StyledLink } from './ListItem.styles';

const ListItemLink: FC<NavigationLinkProps> = ({ children, href, isActive }) => (
  <Link href={href} passHref>
    <StyledLink isActive={isActive}>{children}</StyledLink>
  </Link>
);

export default ListItemLink;

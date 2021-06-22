import { FC, ReactNode } from 'react';

import { NavigationItemProps } from 'components/NavigationTreeMenu';
import { StyledListItem } from './ListItem.styles';

type Props = {
  icon?: ReactNode;
};

const ListItem: FC<NavigationItemProps<Props>> = ({ link, icon, isRoot }) => (
  <StyledListItem isRoot={isRoot}>
    {icon} {link}
  </StyledListItem>
);

export default ListItem;

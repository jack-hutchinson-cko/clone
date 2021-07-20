import { FC, ReactNode } from 'react';

import { NavigationItemProps } from 'components/NavigationTreeMenu';
import { StyledListItem } from './ListItem.styles';

type Props = {
  icon?: ReactNode;
  bottomPadding?: number;
};

const ListItem: FC<NavigationItemProps<Props>> = ({ link, icon, isRoot, bottomPadding }) => (
  <StyledListItem isRoot={isRoot} bottomPadding={bottomPadding}>
    {icon} {link}
  </StyledListItem>
);

export default ListItem;

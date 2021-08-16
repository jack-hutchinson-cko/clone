import { FC, ReactNode } from 'react';

import { NavigationItemProps } from 'components/NavigationTreeMenu';
import { StyledListItem } from './ListItem.styles';

type Props = {
  icon?: ReactNode;
  bottomMargin?: number;
};

const ListItem: FC<NavigationItemProps<Props>> = ({ link, icon, isRoot, bottomMargin }) => (
  <StyledListItem isRoot={isRoot} bottomMargin={bottomMargin}>
    {icon} {link}
  </StyledListItem>
);

export default ListItem;

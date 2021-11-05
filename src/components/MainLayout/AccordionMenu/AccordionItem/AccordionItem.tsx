import React, { FC, ReactNode } from 'react';

import { NavigationItemProps } from 'src/components/NavigationTreeMenu';
import { MenuItem } from './AccordionItem.styles';

type Props = {
  icon?: ReactNode;
};

const AccordionItem: FC<NavigationItemProps<Props>> = ({ link, isRoot }) => (
  <MenuItem isRoot={isRoot}>{link}</MenuItem>
);

export default AccordionItem;

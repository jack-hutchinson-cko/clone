import React, { FC } from 'react';

import { IconListCheck } from 'src/components/Icons';
import { ListIconItem as Wrapper } from './ListIconItem.styles';

const ListIconItem: FC = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      <IconListCheck />
      {children}
    </Wrapper>
  );
};

export default ListIconItem;

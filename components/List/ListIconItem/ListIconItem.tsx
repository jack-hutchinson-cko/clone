import { FC } from 'react';

import Tic from 'components/Tic';
import { ListIconItemType } from '../types';
import { ListIconItem as Wrapper } from './ListIconItem.styles';

type Props = {
  type?: ListIconItemType;
};

const ListIconItem: FC<Props> = ({ type = 'check', children, ...props }) => {
  return (
    <Wrapper type={type} {...props}>
      <Tic type={type} />
      {children}
    </Wrapper>
  );
};

export default ListIconItem;

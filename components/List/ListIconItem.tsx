import { FC } from 'react';

import Tic from 'components/Tic';
import { ListIconItem } from './List.styles';

type Props = {
  type?: 'check' | 'error' | 'decimal';
  number?: number;
};

const ListIconItemWrapper: FC<Props> = ({ type = 'check', number = 0, children }) => {
  return (
    <ListIconItem type={type}>
      <Tic type={type} number={number} />
      {children}
    </ListIconItem>
  );
};

export default ListIconItemWrapper;

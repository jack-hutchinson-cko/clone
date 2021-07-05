import { FC } from 'react';

import Tic from 'components/Tic';
import { ListIconItem } from './List.styles';

type Props = {
  type?: 'check' | 'error';
};

const ListIconItemWrapper: FC<Props> = ({ type = 'check', children }) => {
  return (
    <ListIconItem>
      <Tic type={type} />
      {children}
    </ListIconItem>
  );
};

export default ListIconItemWrapper;

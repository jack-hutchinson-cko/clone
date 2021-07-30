import { FC } from 'react';

import ListIconItemWrapper from './ListIconItem';

type Props = {
  number?: number;
};

const decimal = 'decimal';

const ListNumberItem: FC<Props> = ({ ...props }) => {
  return <ListIconItemWrapper type={decimal} {...props} />;
};

export default ListNumberItem;

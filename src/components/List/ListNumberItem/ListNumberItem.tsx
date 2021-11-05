import { FC } from 'react';

import { ListNumberItem as Wrapper, Decimal } from './ListNumberItem.styles';

type Props = {
  number: string | number;
};

const ListNumberItem: FC<Props> = ({ number, children, ...props }) => {
  return (
    <Wrapper {...props}>
      <Decimal data-number={number}>{number}</Decimal>
      {children}
    </Wrapper>
  );
};

export default ListNumberItem;

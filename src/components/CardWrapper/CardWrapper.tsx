import React, { FC } from 'react';
import { getDefaultSizeParams } from 'src/lib/layout';
import { CardsWrapper, CardContainer } from './CardWrapper.styles';
import { CardsInRow } from './types';

type Props = {
  cardsInRow: CardsInRow;
  gap?: number | number[];
};

const CardWrapper: FC<Props> = ({ children, cardsInRow: cardsInRowFromProps, gap = 24 }) => {
  const childrenArray = React.Children.toArray(children);

  const cardsInRow = getDefaultSizeParams({
    dataBySize: cardsInRowFromProps,
    defaultValue: 1,
  });

  const [rowGap, columnGap] = Array.isArray(gap) ? gap : [gap, gap];

  return (
    <CardsWrapper rowGap={rowGap} columnGap={columnGap}>
      {childrenArray.map((childItem, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <CardContainer cardsInRow={cardsInRow} key={index} columnGap={columnGap}>
          {childItem}
        </CardContainer>
      ))}
    </CardsWrapper>
  );
};

export default CardWrapper;

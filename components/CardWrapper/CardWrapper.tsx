import React, { FC } from 'react';
import { useMatchMedia } from '@cko/primitives';
import { Breakpoints } from 'constants/screen';
import { getDataBySize } from 'lib/layout';
import { CardsWrapper, CardContainer } from './CardWrapper.styles';

type CardsInRow = {
  desktop?: number;
  tablet?: number;
  mobile?: number;
};

type Props = {
  cardsInRow: CardsInRow;
  gap?: number;
};

const CardWrapper: FC<Props> = ({ children, cardsInRow, gap }) => {
  const childrenArray = React.Children.toArray(children);
  const isMobile = useMatchMedia(Breakpoints.MOBILE);
  const isTablet = useMatchMedia(Breakpoints.TABLET);

  const resultCardsInRow = getDataBySize({
    dataBySize: cardsInRow,
    isMobile,
    isTablet,
    defaultValue: 1,
  });

  return (
    <CardsWrapper gap={gap}>
      {childrenArray.map((childItem, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <CardContainer cardsInRow={resultCardsInRow} key={index} gap={gap}>
          {childItem}
        </CardContainer>
      ))}
    </CardsWrapper>
  );
};

export default CardWrapper;

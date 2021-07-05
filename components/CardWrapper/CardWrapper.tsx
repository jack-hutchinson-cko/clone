import React, { FC } from 'react';
import { useMatchMedia } from '@cko/primitives';
import { Breakpoints } from 'constants/screen';
import { CardsWrapper, CardContainer } from './CardWrapper.styles';

type CardsInRow = {
  desktop?: number;
  tablet?: number;
  mobile?: number;
};

type Props = {
  cardsInRow?: CardsInRow;
};

const getBoxSize = ({
  cardsInRow = {},
  isMobile,
  isTablet,
  defaultValue = 1,
}: {
  cardsInRow?: CardsInRow;
  isMobile: boolean;
  isTablet: boolean;
  defaultValue?: number;
}) => {
  const { desktop, tablet, mobile } = cardsInRow;
  if (isMobile) {
    return mobile || tablet || desktop || defaultValue;
  }

  if (isTablet) {
    return tablet || desktop || defaultValue;
  }

  return desktop || defaultValue;
};

const CardWrapper: FC<Props> = ({ children, cardsInRow }) => {
  const childrenArray = React.Children.toArray(children);
  const isMobile = useMatchMedia(Breakpoints.MOBILE);
  const isTablet = useMatchMedia(Breakpoints.TABLET);

  const resultCardsInRow = getBoxSize({ cardsInRow, isMobile, isTablet });

  return (
    <CardsWrapper>
      {childrenArray.map((childItem, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <CardContainer cardsInRow={resultCardsInRow} key={index}>
          {childItem}
        </CardContainer>
      ))}
    </CardsWrapper>
  );
};

export default CardWrapper;

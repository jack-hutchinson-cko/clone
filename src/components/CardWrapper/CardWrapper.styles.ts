import styled from 'styled-components';
import { Breakpoints } from 'src/constants/screen';
import { FullCardsInRow } from './types';

export const CardsWrapper = styled.div<{ gap?: number; rowGap: number; columnGap: number }>`
  display: flex;
  row-gap: ${({ rowGap }) => `${rowGap}px`};
  column-gap: ${({ columnGap }) => `${columnGap}px`};
  flex-wrap: wrap;
`;

const getCardWidth = ({ cardsInRow, columnGap }: { cardsInRow: number; columnGap: number }) =>
  `calc(${(1 / cardsInRow) * 100}% - ${((cardsInRow - 1) * columnGap) / cardsInRow}px)`;

export const CardContainer = styled.div<{ cardsInRow: FullCardsInRow; columnGap: number }>`
  @media ${Breakpoints.DESKTOP} {
    width: ${({ cardsInRow, columnGap }) =>
      getCardWidth({ cardsInRow: cardsInRow.desktop, columnGap })};
  }

  @media ${Breakpoints.TABLET} {
    width: ${({ cardsInRow, columnGap }) =>
      getCardWidth({ cardsInRow: cardsInRow.tablet, columnGap })};
  }

  @media ${Breakpoints.MOBILE} {
    width: ${({ cardsInRow, columnGap }) =>
      getCardWidth({ cardsInRow: cardsInRow.mobile, columnGap })};
  }

  & > div {
    margin: 0;
    height: 100%;
  }
`;

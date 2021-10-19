import styled from 'styled-components';

export const CardsWrapper = styled.div<{ gap?: number; rowGap: number; columnGap: number }>`
  display: flex;
  row-gap: ${({ rowGap }) => `${rowGap}px`};
  column-gap: ${({ columnGap }) => `${columnGap}px`};
  flex-wrap: wrap;
`;

export const CardContainer = styled.div<{ cardsInRow: number; columnGap: number }>`
  width: ${({ cardsInRow, columnGap }) =>
    `calc(${(1 / cardsInRow) * 100}% - ${((cardsInRow - 1) * columnGap) / cardsInRow}px)`};

  & > div {
    margin: 0;
    height: 100%;
  }
`;

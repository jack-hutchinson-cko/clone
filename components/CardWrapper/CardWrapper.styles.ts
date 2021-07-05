import styled from 'styled-components';

export const CardsWrapper = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`;

export const CardContainer = styled.div<{ cardsInRow: number }>`
  width: ${({ cardsInRow }) =>
    `calc(${(1 / cardsInRow) * 100}% - ${((cardsInRow - 1) * 24) / cardsInRow}px)`};
`;

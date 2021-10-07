import styled from 'styled-components';

export const CardsWrapper = styled.div<{ gap?: number }>`
  display: flex;
  gap: ${({ gap = 24 }) => `${gap}px`};
  flex-wrap: wrap;
  padding-top: 32px;
  padding-bottom: 60px;
`;

export const CardContainer = styled.div<{ cardsInRow: number; gap?: number }>`
  width: ${({ cardsInRow, gap = 24 }) =>
    `calc(${(1 / cardsInRow) * 100}% - ${((cardsInRow - 1) * gap) / cardsInRow}px)`};
`;

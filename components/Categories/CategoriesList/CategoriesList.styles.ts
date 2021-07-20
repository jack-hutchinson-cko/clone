import styled from 'styled-components';

export const List = styled.div<{ maxCardSize: number }>`
  display: grid;
  grid-template-columns: ${({ maxCardSize }) => `repeat(auto-fill, minmax(${maxCardSize}px, 1fr))`};
  grid-gap: 24px;
`;

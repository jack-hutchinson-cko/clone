import styled from 'styled-components';

export const Layout = styled.div<{ gap: number }>`
  display: flex;
  gap: ${({ gap }) => `${gap}px`};
  flex-wrap: wrap;
`;

export const Col = styled.div<{ width: number; horizontalGap: number }>`
  width: ${({ width, horizontalGap }) => `calc(${width}% - ${horizontalGap / 2}px)`};
`;

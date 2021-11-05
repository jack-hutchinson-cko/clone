import styled from 'styled-components';

export const Wrapper = styled.div<{ spacing: number }>`
  margin: ${({ spacing }) => `0px 0px ${spacing}px 0px`};
`;

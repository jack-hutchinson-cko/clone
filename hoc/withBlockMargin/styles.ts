import styled from 'styled-components';

export const Wrapper = styled.div<{ margin?: { top: number; bottom: number } }>`
  margin: ${({ margin: { top = 0, bottom = 0 } = {} }) => `${top}px 0px ${bottom}px 0px`};
`;

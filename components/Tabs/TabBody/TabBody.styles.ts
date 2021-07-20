import styled from 'styled-components';

export const StyledTabBody = styled.div<{ isVisible: boolean }>`
  color: ${({ theme }) => theme.colors.base};
  ${({ isVisible }) => (!isVisible ? 'height: 0; overflow: hidden;' : '')}
`;

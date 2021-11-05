import styled from 'styled-components';

export const StyledSelectBody = styled.div<{ isVisible: boolean }>`
  ${({ isVisible }) => (!isVisible ? 'height: 0; overflow: hidden;' : '')}
`;

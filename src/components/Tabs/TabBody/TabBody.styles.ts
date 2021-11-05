import styled from 'styled-components';
import { spacing } from 'src/constants/spacingSize';

export const StyledTabBody = styled.div<{ isVisible: boolean }>`
  color: ${({ theme }) => theme.colors.base};
  ${({ isVisible }) => (!isVisible ? 'height: 0; overflow: hidden;' : '')}
  margin-top: ${spacing.s50}px;
  > *:last-child {
    margin-bottom: 0;
  }
`;

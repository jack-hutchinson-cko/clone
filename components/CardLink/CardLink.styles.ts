import styled from 'styled-components';
import { Flex } from '@cko/primitives';

export const CardWrapper = styled(Flex)<{ isMobile: boolean }>`
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 278px;
  ${({ isMobile }) => (isMobile ? 'width: 236px; margin: auto;' : '')}
  padding: 32px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: box-shadow 0.3s, border-color 1s;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.light};
    border-color: ${({ theme }) => theme.colors.borderHighlight};
  }

  & img {
    max-height: 116px !important;
  }
`;
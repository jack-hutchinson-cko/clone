import styled from 'styled-components';
import { Flex } from '@cko/primitives';
import { spacing } from 'constants/spacingSize';

export const CardWrapper = styled(Flex)<{ isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${spacing.s40}px;
  align-items: flex-start;
  ${({ isMobile }) => (isMobile ? 'width: 236px; margin: auto;' : '')}
  padding: ${spacing.s50}px;
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

  & h4 {
    margin: ${spacing.s00};
  }
`;

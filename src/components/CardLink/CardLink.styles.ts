import styled from 'styled-components';
import { Flex } from '@cko/primitives';
import { spacing } from 'src/constants/spacingSize';
import { Breakpoints } from 'src/constants/screen';

export const CardWrapper = styled(Flex)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${spacing.s40}px;
  align-items: flex-start;
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

  @media ${Breakpoints.MOBILE} {
    width: 236px;
    margin: auto;
  }
`;

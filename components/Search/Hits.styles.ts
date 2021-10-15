import styled, { css } from 'styled-components';

import { createBreakpointFrom, SIZE, Breakpoints } from 'constants/screen';
import { spacing } from 'constants/spacingSize';

export const HeadSection = styled.section<{ isFAQSection?: boolean }>`
  padding: ${spacing.s20}px;
  cursor: pointer;
  border-radius: 8px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundSearch};
  }

  @media ${Breakpoints.MOBILE} {
    padding: ${spacing.s20}px ${spacing.s00}px;

    &:not(HeadSection):hover {
      background-color: transparent;
    }
  }

  ${({ isFAQSection }) =>
    isFAQSection &&
    css`
      padding-left: 50px;
      font-weight: 500;

      &:before {
        content: 'Q:';
        float: left;
        display: block;
        margin-left: -32px;
        font-size: 16px;
        font-weight: 500;
        line-height: 32px;
      }
    `}
`;

export const PageSection = styled.section<{ isFAQSection?: boolean }>`
  padding: 8px 0;
  cursor: pointer;

  ${({ isFAQSection }) =>
    !isFAQSection &&
    css`
      &:not(:last-child) {
        margin-bottom: 8px;
      }
      @media ${createBreakpointFrom(SIZE.L)} {
        padding: 8px 16px;
        border-radius: 8px;
        margin: 0 -16px;

        &:hover {
          background-color: ${({ theme }) => theme.colors.backgroundSearch};
        }
      }
    `}
`;

export const HitsContainer = styled.div<{ maxHeight?: number }>`
  max-height: ${({ maxHeight }) => (maxHeight ? `${maxHeight}px` : '100%')};
`;

export const NoDataWrapper = styled.div<{ mode: 'header' | 'page' }>`
  color: ${({ theme }) => theme.colors.base};
  font-size: ${({ mode }) => (mode === 'header' ? '16px' : '24px')};
  font-weight: 500;
  padding: ${spacing.s40}px ${spacing.s00};
`;

export const HitSection = styled.div`
  margin-top: 32px;
  padding: 0 16px;
  color: ${({ theme }) => theme.colors.grayFaded};
  font-size: 11px;
  text-transform: uppercase;
  line-height: 24px;
  letter-spacing: 0.1em;
`;

import styled, { css } from 'styled-components';

import { createBreakpointBetween, createBreakpointFrom, SIZE } from 'constants/screen';

export const HeadSection = styled.section<{ isFAQSection?: boolean }>`
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 8px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundSearch};
  }

  @media ${createBreakpointBetween(SIZE.SM, SIZE.M)} {
    padding: 16px;
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
  padding: 16px;
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

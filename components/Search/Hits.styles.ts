import styled, { css } from 'styled-components';

import { MobileBreakPoints } from 'constants/screen';

export const HeadSection = styled.section<{ isFAQSection?: boolean }>`
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 8px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundSearch};
  }

  @media ${MobileBreakPoints.MOBILE_L} {
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
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 8px;

  ${({ isFAQSection }) =>
    !isFAQSection &&
    css`
      &:hover {
        background-color: ${({ theme }) => theme.colors.backgroundSearch};
      }
    `}
`;

export const HitsContainer = styled.div<{ maxHeight?: number }>`
  max-height: ${({ maxHeight }) => (maxHeight ? `${maxHeight}px` : '100%')};
  overflow: auto;
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

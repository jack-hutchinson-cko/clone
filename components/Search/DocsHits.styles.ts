import styled from 'styled-components';
import { MobileBreakPoints } from 'constants/screen';

export const HeadSection = styled.section`
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 8px;
  &:hover {
    background: ${({ theme }) => theme.colors.modalHoverBackground};
  }

  @media ${MobileBreakPoints.MOBILE_L} {
    padding: 16px;
  }
`;

export const PageSection = styled.section`
  padding: 16px;
  cursor: pointer;
  border-radius: 8px;
  &:hover {
    background: ${({ theme }) => theme.colors.modalHoverBackground};
  }
`;

export const HitsContainer = styled.div<{ maxHeight?: number }>`
  max-height: ${({ maxHeight }) => (maxHeight ? `${maxHeight}px` : '100%')};
  overflow: auto;
`;

export const NoDataWrapper = styled.div<{ mode: 'header' | 'page' }>`
  color: ${({ theme }) => theme.colors.successDark};
  font-size: ${({ mode }) => (mode === 'header' ? '16px' : '24px')};
  font-weight: 500;
  padding: 16px;
`;

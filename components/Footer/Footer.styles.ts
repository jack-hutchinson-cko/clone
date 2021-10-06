import styled from 'styled-components';

import { createBreakpointBetween, createBreakpointTo, SIZE } from 'constants/screen';

export const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.footerBackground};
`;

export const FooterContainer = styled.main<{ isMobile: boolean }>`
  max-width: 1360px;
  margin: 0 auto;
  padding: 64px;

  @media ${createBreakpointBetween(SIZE.L, SIZE.M)} {
    padding: 60px 64px 80px;
  }

  @media ${createBreakpointBetween(SIZE.SM, SIZE.M)} {
    padding: 80px 40px;
  }

  @media ${createBreakpointBetween(SIZE.XS, SIZE.SM)} {
    padding: 80px 40px;
  }

  @media ${createBreakpointTo(SIZE.XS)} {
    padding: 48px 24px;
  }
`;

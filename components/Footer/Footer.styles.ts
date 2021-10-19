import styled from 'styled-components';

import { createBreakpointTo, Breakpoints, SIZE } from 'constants/screen';
import { spacing } from 'constants/spacingSize';

export const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.footerBackground};
`;

export const FooterContainer = styled.main<{ isMobile: boolean }>`
  max-width: 1360px;
  margin: 0 auto;
  padding: ${spacing.s90}px;

  @media ${Breakpoints.TABLET} {
    padding: ${spacing.s80}px ${spacing.s60}px;
  }

  @media ${Breakpoints.MOBILE} {
    padding: ${spacing.s80}px ${spacing.s50}px ${spacing.s100}px;
  }

  @media ${createBreakpointTo(SIZE.XS)} {
    padding: ${spacing.s80}px ${spacing.s50}px;
  }
`;

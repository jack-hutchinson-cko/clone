import styled from 'styled-components';

import { createBreakpointTo, SIZE } from 'src/constants/screen';
import { spacing } from 'src/constants/spacingSize';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding: ${spacing.s50}px ${spacing.s00};
  color: ${({ theme }) => theme.colors.nasBannerText};
  background-color: ${({ theme }) => theme.colors.nasBannerBG};
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  transition-property: all;
  transition-duration: 0.4s;
  transition-timing-function: cubic-bezier(0.4, 0.55, 0.6, 0.99);

  @media ${createBreakpointTo(SIZE.L)} {
    padding: ${spacing.s50}px 56px ${spacing.s50}px ${spacing.s50}px;
  }
`;

export const BannerClose = styled.button`
  cursor: pointer;
  position: absolute;
  top: 24px;
  right: 24px;
  background: inherit;
  border: none;

  svg {
    color: ${({ theme }) => theme.colors.nasBannerText};
  }
`;

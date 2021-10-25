import styled, { css } from 'styled-components';

import { Breakpoints } from 'constants/screen';

export const Container = styled.div<{ withMobileSize?: boolean }>`
  position: relative;
  z-index: 1;

  ${({ withMobileSize }) =>
    withMobileSize &&
    css`
      @media ${Breakpoints.MOBILE} {
        display: flex;
        justify-content: center;
        flex: 1;
      }
    `}
`;

export const Content = styled.div<{
  align: 'left' | 'right';
  isShown?: boolean;
  offset?: number;
  withMobileSize?: boolean;
}>`
  position: absolute;
  display: ${({ isShown }) => (isShown ? 'block' : 'none')};
  top: 100%;
  ${({ withMobileSize, align, offset }) =>
    withMobileSize
      ? css`
          @media ${Breakpoints.MOBILE} {
            width: 100%;
            left: 0;
          }
        `
      : `
          ${align}: -${offset}px
        `}
`;

export const Trigger = styled.div`
  display: inline-flex;
  align-items: center;

  @media ${Breakpoints.MOBILE} {
    > div {
      height: 45px;
    }
  }
`;

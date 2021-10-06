import styled, { css } from 'styled-components';

import { Breakpoints, MobileBreakPoints } from 'constants/screen';

export const Divider = styled.span`
  font-size: inherit;
  font-style: normal;
  font-weight: normal;
`;

export const Container = styled.span<{ gap?: number; isMobile?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ gap }) => gap ?? 6}px;

  @media ${Breakpoints.MOBILE} {
    gap: 32px;
  }

  @media ${Breakpoints.TABLET}, ${MobileBreakPoints.MOBILE_S} {
    gap: 16px;
  }

  ${({ isMobile }) =>
    isMobile &&
    css`
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      padding-top: 0;

      ${Divider} {
        display: none;
      }
    `}
`;

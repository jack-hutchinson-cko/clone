import styled from 'styled-components';

import { Breakpoints, createBreakpointTo, SIZE } from 'constants/screen';

export const Divider = styled.span`
  font-size: inherit;
  font-style: normal;
  font-weight: normal;
`;

export const Container = styled.span<{ gap?: number }>`
  display: inline-flex;
  align-items: center;
  gap: ${({ gap }) => gap ?? 6}px;

  @media ${Breakpoints.MOBILE} {
    gap: 16px;
  }

  @media ${createBreakpointTo(SIZE.L)} {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding-top: 0;

    ${Divider} {
      display: none;
    }
  }
`;

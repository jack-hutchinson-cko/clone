import styled from 'styled-components';
import { createBreakpointTo, MobileBreakPoints, SIZE } from 'constants/screen';

export const Button = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media ${createBreakpointTo(SIZE.M)} {
    min-width: 48px;
  }

  @media ${MobileBreakPoints.MOBILE_S} {
    line-height: 16px;
  }

  svg {
    width: 27px;
    height: 27px;
    color: ${({ theme }) => theme.colors.base} !important;

    @media ${MobileBreakPoints.MOBILE_S} {
      width: 22px;
      height: 22px;
    }
  }
`;

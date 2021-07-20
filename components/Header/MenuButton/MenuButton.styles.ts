import styled, { css } from 'styled-components';
import { MobileBreakPoints, Breakpoints } from 'constants/screen';

export const Button = styled.span<{ isActive?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  width: 32px;
  height: 26px;
  cursor: pointer;

  @media ${Breakpoints.MOBILE} {
    width: 40px;
    height: 23px;
  }

  @media ${MobileBreakPoints.MOBILE_S} {
    height: 17px;
    width: 25px;
  }

  > span,
  > span::before,
  > span::after {
    display: block;
    position: absolute;
    width: 32px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.base};
    transition-duration: 0.25s;

    @media ${Breakpoints.MOBILE} {
      width: 40px;
    }

    @media ${MobileBreakPoints.MOBILE_S} {
      width: 25px;
    }
  }
  > span::before {
    content: '';
    top: -10px;

    @media ${MobileBreakPoints.MOBILE_S} {
      top: -8.5px;
    }
  }
  > span::after {
    content: '';
    top: 10px;

    @media ${MobileBreakPoints.MOBILE_S} {
      top: 8.5px;
    }
  }

  ${({ isActive }) =>
    isActive &&
    css`
      > span {
        transform: rotate(45deg);
      }
      > span::before {
        top: 0;
        transform: rotate(0);
      }
      > span::after {
        top: 0;
        transform: rotate(90deg);
      }
    `}
`;

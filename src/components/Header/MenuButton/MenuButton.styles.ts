import styled, { css } from 'styled-components';

import { createBreakpointTo, SIZE } from 'src/constants/screen';

export const Button = styled.span<{ isActive?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  width: 32px;
  height: 22px;
  cursor: pointer;

  @media ${createBreakpointTo(SIZE.XS)} {
    width: 18px;
    height: 18px;
  }

  > span,
  > span::before,
  > span::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.base};
    transition-duration: 0.25s;

    @media ${createBreakpointTo(SIZE.M)} {
      width: 25px;
      height: 1px;
    }
  }
  > span::before {
    content: '';
    top: -10px;

    @media ${createBreakpointTo(SIZE.M)} {
      top: -8.5px;
    }
  }
  > span::after {
    content: '';
    top: 10px;

    @media ${createBreakpointTo(SIZE.M)} {
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

export const Wrapper = styled.div`
  @media ${createBreakpointTo(SIZE.M)} {
    min-width: 48px;
  }
`;

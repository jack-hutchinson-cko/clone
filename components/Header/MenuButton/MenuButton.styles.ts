import styled, { css } from 'styled-components';

export const Button = styled.span<{ isActive?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  width: 26px;
  height: 26px;
  cursor: pointer;
  > span,
  > span::before,
  > span::after {
    display: block;
    position: absolute;
    width: 40px;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.base};
    transition-duration: 0.25s;
  }
  > span::before {
    content: '';
    top: -10px;
  }
  > span::after {
    content: '';
    top: 10px;
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

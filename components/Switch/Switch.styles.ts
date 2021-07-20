import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 48px;
  height: 24px;
  padding: 0 5px;
  border-radius: 28px;
  background-color: ${({ theme }) => theme.colors.switchBackground};
  cursor: pointer;
  overflow: hidden;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  text-align: center;
  vertical-align: middle;
  user-select: none;
`;

export const Toggle = styled.div<{ checked: boolean }>`
  position: absolute;
  left: 2px;
  display: flex;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.background};
  transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);

  ${({ checked }) =>
    checked &&
    css`
      transform: translateX(24px);
    `};

  & input[type='checkbox'] {
    position: absolute;
    left: -25px;
    display: block;
    width: 400%;
    height: 100%;
    margin: 0;
    padding: 0;
    cursor: inherit;
    opacity: 0;
  }
`;

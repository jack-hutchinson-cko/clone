import styled, { css } from 'styled-components';

export const Container = styled.div<{ isMobile?: boolean }>`
  position: relative;
  z-index: 1;

  ${({ isMobile }) =>
    isMobile &&
    css`
      display: flex;
      justify-content: center;
      flex: 1;
    `}
`;

export const Content = styled.div<{
  align: 'left' | 'right';
  isOpen?: boolean;
  offset?: number;
  isMobile?: boolean;
}>`
  position: absolute;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  top: 100%;
  ${({ isMobile, align, offset }) =>
    isMobile
      ? css`
          width: 100%;
          left: 0;
        `
      : css`
          ${align}: -${offset}px
        `}
`;

export const Trigger = styled.div`
  display: inline-flex;
  align-items: center;
`;

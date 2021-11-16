import styled, { css } from 'styled-components';
import Image from 'next/image';

interface ContainerProps {
  defaultWidth?: number;
  defaultHeight?: number;
  isShown?: boolean;
}

export const ContainerImage = styled.div<ContainerProps>`
  ${({ defaultWidth, defaultHeight }) =>
    defaultWidth && defaultHeight
      ? css`
          position: relative;
          padding-top: ${(defaultHeight / defaultWidth) * 100}% !important;
        `
      : css`
          & > div {
            position: relative !important;
          }
        `}

  span {
    position: relative !important;
  }
`;

// TODO implement response for img
export const StyledImage = styled(Image)`
  object-fit: contain;
  width: 100% !important;
  min-width: 100% !important;
  position: relative !important;
  height: unset !important;
`;

interface WrapperProps {
  maxWidth?: number;
}

export const ImgWrapper = styled.div<WrapperProps>`
  position: relative;
  ${({ maxWidth }) => (maxWidth ? `max-width: ${maxWidth}px; margin: auto;` : '')}
  width: 100%;
  overflow: hidden;
`;

export const ImgPlaceholder = styled.div<ContainerProps>`
  opacity: ${({ isShown }) => (isShown ? '1' : '0')};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  background: ${({ theme }) => theme.colors.placeholderBackground};
  padding-top: ${({ defaultWidth, defaultHeight }) =>
    defaultWidth && defaultHeight ? (defaultHeight / defaultWidth) * 100 : 0}%;
  border-radius: 8px;
  transition: opacity 1s ease-in-out;
  overflow: hidden;

  ::after {
    animation: loading 1.5s infinite;
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(-100%);
    background: linear-gradient(
      90deg,
      ${({ theme }) => {
        const { placeholderBackground, placeholderLine } = theme.colors;
        return `${placeholderBackground},${placeholderBackground},${placeholderLine},${placeholderBackground},${placeholderBackground}`;
      }}
    );
  }
  @keyframes loading {
    to {
      transform: translateX(100%);
    }
  }
`;

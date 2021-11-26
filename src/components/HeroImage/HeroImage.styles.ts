import styled, { css } from 'styled-components';

type HeroPart = {
  width?: number;
};

export const HeroWrapper = styled.div<HeroPart>`
  position: relative;
  display: block;
  max-width: 466px;
  height: 378px;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-position: center center;
  transform: translate3d(0px, 0px, 0px);
  ${({ width }) =>
    width &&
    width < 440 &&
    css`
     height: ${(width - 50) * 0.95}px;
    `}
`;

export const HeroParts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  will-change: transform;
  transform-style: preserve-3d;
  transform: translate3d(0px, 0px, 55px);
  animation: fadeInFromNone 1.5s ease-out;
  transition: all 1000ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s;
  @keyframes fadeInFromNone {
    0% {
      display: none;
      opacity: 0;
    }
    1% {
      display: block;
      opacity: 0;
    }
    100% {
      display: block;
      opacity: 1;
    }
  }
`;

export const HeroPart01 = styled.div<HeroPart>`
  position: absolute;
  z-index: 1;
  top: -4px;
  left: 0;
  width: auto;
  transform-origin: center;
  transform: translate3d(0px, 0px, 0px);
  ${({ width }) =>
    width &&
    width < 440 &&
    css`
      width: ${width * 0.85}px;
    `}
`;

export const HeroPart02 = styled.div<HeroPart>`
  position: absolute;
  z-index: 2;
  top: 42px;
  right: -14px;
  width: auto;
  transform: translate3d(0px, 0px, 60px);
  transform-style: preserve-3d;
  transform-origin: center;
  ${({ width }) =>
    width &&
    width < 440 &&
    css`
      width: ${width / 2}px;
    `}
`;

export const HeroPart03 = styled.div<HeroPart>`
  position: absolute;
  z-index: 4;
  top: 198px;
  left: -40px;
  width: auto;
  transform: translate3d(0px, 0px, 55px);
  transform-style: preserve-3d;
  transform-origin: center;
  ${({ width }) =>
    width &&
    width < 440 &&
    css`
      width: ${width / 2}px;
      top: ${width / 2}px;
      left: -20px;
    `}
`;

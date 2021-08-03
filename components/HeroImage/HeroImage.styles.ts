import styled from 'styled-components';

export const HeroWrapper = styled.div`
  position: relative;
  display: block;
  height: 378px;
  width: 466px;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-position: center center;
  transform: translate3d(0px, 0px, 0px);

  @media (min-width: 1023px) and (max-width: 1220px), (min-width: 768px) and (max-width: 950px) {
    height: 285px;
    width: 310px;
  }
`;

export const HeroParts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  will-change: transform;
  transform-style: preserve-3d;
  transition: all 1000ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s;
`;

export const HeroPart01 = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: auto;
  transform-origin: center;

  @media (min-width: 1023px) and (max-width: 1220px), (min-width: 768px) and (max-width: 950px) {
    width: 90%;
  }
`;

export const HeroPart02 = styled.div`
  position: absolute;
  z-index: 2;
  top: 19px;
  right: -24px;
  width: auto;
  transform: translate3d(0px, 0px, 75px);
  transform-style: preserve-3d;
  transform-origin: center;

  @media (min-width: 1023px) and (max-width: 1220px), (min-width: 768px) and (max-width: 950px) {
    width: 45%;
    right: -30px;
    transform: translate3d(0px, 0px, 30px);
  }
`;

export const HeroPart03 = styled.div`
  position: absolute;
  z-index: 4;
  top: 219px;
  left: 62px;
  width: auto;
  transform: translate3d(0px, 0px, 55px);
  transform-style: preserve-3d;
  transform-origin: center;

  @media (min-width: 1023px) and (max-width: 1220px), (min-width: 768px) and (max-width: 950px) {
    width: 50%;
    top: 158px;
    left: 43px;
  }
`;

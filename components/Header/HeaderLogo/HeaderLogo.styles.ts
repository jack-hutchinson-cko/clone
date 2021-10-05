import styled from 'styled-components';
import { ReactSVG } from 'react-svg';

import { MobileBreakPoints, SIZE } from 'constants/screen';

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: ${({ theme }) => theme.colors.base};

  svg {
    color: ${({ theme }) => theme.colors.base} !important;
  }

  div {
    display: inline-block;
    letter-spacing: -0.2px;
    line-height: 32px;
  }

  @media (max-width: ${SIZE.SM}px) {
    font-size: 30px;
    line-height: 40px;
  }

  @media ${MobileBreakPoints.MOBILE_L} {
    font-size: 30px;
    line-height: 40px;
  }

  @media ${MobileBreakPoints.MOBILE_S} {
    gap: 4px;

    div {
      width: 135px;
      font-size: 18px;
      line-height: 24px;
    }

    svg {
      transform: scale(0.74);
    }
  }
`;

export const Logo = styled(ReactSVG)`
  color: ${({ theme }) => theme.colors.success};

  div,
  div > svg {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 360px) {
    width: 21px !important;
    height: 24px;
  }

  @media (min-width: ${SIZE.SM}px) {
    width: 30px;
    height: 34px;
  }

  @media (min-width: ${SIZE.M}px) {
    width: 24px;
    height: 28px;
  }
`;

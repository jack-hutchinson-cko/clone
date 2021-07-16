import styled from 'styled-components';

import { Breakpoints, MobileBreakPoints } from 'constants/screen';

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-weight: 500;
  font-size: 24px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.base};

  svg {
    color: ${({ theme }) => theme.colors.base} !important;
  }

  div {
    width: 180px;
  }

  @media ${Breakpoints.MOBILE} {
    div {
      width: 225px;
      font-size: 30px;
      line-height: 40px;
    }
  }

  @media ${MobileBreakPoints.MOBILE_S} {
    gap: 4px;

    div {
      width: 135px;
      font-size: 18px;
      line-height: 24px;
    }

    svg {
      transform: scale(0.6);
    }
`;

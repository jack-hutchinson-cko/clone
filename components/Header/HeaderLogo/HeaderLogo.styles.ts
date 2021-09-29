import styled from 'styled-components';

import { Breakpoints, MobileBreakPoints, SIZE } from 'constants/screen';

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
    display: inline-block;
  }

  @media ${Breakpoints.MOBILE} {
    div {
      font-size: 24px;
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
      transform: scale(0.74);
    }
  }
`;

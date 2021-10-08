import styled from 'styled-components';
import { MobileBreakPoints } from 'constants/screen';

export const TextHeadingOne = styled.h1`
  color: ${({ theme }) => theme.colors.base};
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
  margin: 32px 0 16px 0;

  @media ${MobileBreakPoints.MOBILE_M} {
    font-size: 56px;
    line-height: 56px;
  }
  @media ${MobileBreakPoints.MOBILE_S} {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const TextHeadingTwo = styled.h2`
  color: ${({ theme }) => theme.colors.base};
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
  margin: 32px 0 16px 0;

  @media ${MobileBreakPoints.MOBILE_M} {
    font-size: 56px;
    line-height: 56px;
  }
  @media ${MobileBreakPoints.MOBILE_S} {
    font-size: 32px;
    line-height: 40px;
  }
`;

export const TextHeadingThree = styled.h3`
  color: ${({ theme }) => theme.colors.base};
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  margin: 32px 0 16px 0;

  @media ${MobileBreakPoints.MOBILE_M} {
    font-size: 40px;
    line-height: 48px;
  }
  @media ${MobileBreakPoints.MOBILE_S} {
    font-size: 24px;
    line-height: 32px;
  }
`;

export const TextHeadingFour = styled.h4`
  color: ${({ theme }) => theme.colors.base};
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
  margin: 32px 0 16px 0;

  @media ${MobileBreakPoints.MOBILE_M} {
    font-size: 24px;
    line-height: 32px;
  }
  @media ${MobileBreakPoints.MOBILE_S} {
    font-size: 18px;
    line-height: 24px;
  }
`;

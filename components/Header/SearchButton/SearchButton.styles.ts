import styled from 'styled-components';
import { MobileBreakPoints } from 'constants/screen';

export const Button = styled.div`
  display: inline-block;

  svg {
    width: 27px;
    height: 27px;
    color: ${({ theme }) => theme.colors.base} !important;

    @media ${MobileBreakPoints.MOBILE_S} {
      width: 17px;
      height: 17px;
    }
  }
`;

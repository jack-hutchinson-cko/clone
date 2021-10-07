import styled from 'styled-components';
import { MobileBreakPoints } from 'constants/screen';

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.baseLight};
  font-size: 16px;
  margin: 16px 0;
  line-height: 24px;
  font-weight: 300;

  @media ${MobileBreakPoints.MOBILE_M} {
    font-size: 24px;
    line-height: 32px;
  }
`;

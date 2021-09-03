import styled from 'styled-components';
import { MobileBreakPoints } from 'constants/screen';

export const Wrapper = styled.div`
  margin: 16px 0;
`;

export const LabelWrapper = styled.span`
  color: ${({ theme }) => theme.colors.grayFaded};
  font-size: 12px;
  font-weight: 500;
  line-height: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;

  @media ${MobileBreakPoints.MOBILE_L} {
    font-size: 18px;
  }
`;

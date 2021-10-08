import styled from 'styled-components';
import { MobileBreakPoints } from 'constants/screen';

export const ListItem = styled.li`
  margin: 5px 0;
  color: ${({ theme }) => theme.colors.baseLight};
  line-height: 24px;
  list-style-type: inherit;
  font-size: 16px;

  @media ${MobileBreakPoints.MOBILE_M} {
    font-size: 24px;
    line-height: 32px;
  }
`;

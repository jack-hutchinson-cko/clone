import styled from 'styled-components';
import { spacing } from 'constants/spacingSize';

export const ListItem = styled.li`
  margin: 0 0 ${spacing.s40}px 0;
  color: ${({ theme }) => theme.colors.baseLight};
  line-height: 24px;
  list-style-type: inherit;
  font-size: 16px;
`;

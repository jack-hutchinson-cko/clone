import styled from 'styled-components';
import { spacing } from 'constants/spacingSize';

const LastChange = styled.div`
  margin-bottom: ${spacing.s60}px;
  color: ${({ theme }) => theme.colors.base};
  font-size: 14px;
  font-weight: 300;
  line-height: 16px;
`;

export default LastChange;

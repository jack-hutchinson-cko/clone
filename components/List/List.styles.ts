import styled from 'styled-components';
import { spacing } from 'constants/spacingSize';

export const UnorderedList = styled.ul`
  display: block;
  margin: 0;
  padding: 0;
  padding-inline-start: ${spacing.s50}px;
  color: ${({ theme }) => theme.colors.baseLight};
  list-style-type: disc;
  > *:last-child {
    margin-bottom: 0;
  }
`;

export const OrderedList = styled.ol`
  display: block;
  margin: 0;
  padding: 0;
  padding-inline-start: ${spacing.s50}px;
  color: ${({ theme }) => theme.colors.baseLight};
  list-style-type: decimal;
  > *:last-child {
    margin-bottom: 0;
  }
`;

export const List = styled.div`
  display: block;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.baseLight};
  list-style-type: none;
  > *:last-child {
    margin-bottom: 0;
  }
`;

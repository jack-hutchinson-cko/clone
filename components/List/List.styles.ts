import styled from 'styled-components';

export const UnorderedList = styled.ul`
  display: block;
  margin: 0;
  padding: 0;
  padding-inline-start: 28px;
  color: ${({ theme }) => theme.colors.baseLight};
  list-style-type: disc;
`;

export const OrderedList = styled.ol`
  display: block;
  margin: 0;
  padding: 0;
  padding-inline-start: 28px;
  color: ${({ theme }) => theme.colors.baseLight};
  list-style-type: decimal;
`;

export const List = styled.div`
  display: block;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.baseLight};
  list-style-type: none;
`;

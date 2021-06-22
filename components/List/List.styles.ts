import styled from 'styled-components';

export const List = styled.ul`
  display: block;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.base};
  list-style-type: none;
`;

export const UnorderedList = styled(List)`
  padding-inline-start: 28px;
  list-style-type: disc;
`;

export const OrderedList = styled.ol`
  display: block;
  margin: 0;
  padding: 0;
  padding-inline-start: 28px;
  color: ${({ theme }) => theme.colors.base};
  list-style-type: decimal;
`;

export const ListItem = styled.li`
  color: ${({ theme }) => theme.colors.base};
  margin: 5px 0;
  list-style-type: inherit;
`;

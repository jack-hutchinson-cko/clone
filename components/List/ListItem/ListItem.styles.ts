import styled from 'styled-components';

export const ListItem = styled.li`
  margin: 5px 0;
  color: ${({ theme }) => theme.colors.baseLight};
  line-height: 24px;
  list-style-type: inherit;
  font-size: 16px;
`;

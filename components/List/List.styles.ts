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

export const ListItem = styled.li`
  color: ${({ theme }) => theme.colors.baseLight};
  margin: 5px 0;
  line-height: 24px;
  list-style-type: inherit;
`;

export const List = styled.div`
  display: block;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.baseLight};
`;

export const ListIconItem = styled.p`
  position: relative;
  margin: 0 0 26px 30px;
  padding-left: 22px;
  line-height: 24px;
  list-style-type: none;

  p {
    display: inline;
    margin: 0;
    padding: 0;
  }

  svg {
    position: absolute;
    top: calc(50% - 8px);
    left: 0px;
  }
`;

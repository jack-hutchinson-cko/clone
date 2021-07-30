import styled, { css } from 'styled-components';

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
  list-style-type: none;
  color: ${({ theme }) => theme.colors.baseLight};
`;

export const ListIconItem = styled.p<{ type?: string }>`
  position: relative;
  margin: 0 0 26px 30px;
  padding-left: 22px;
  line-height: 24px;
  list-style-type: none;
  ${({ type }) =>
    type === 'decimal' &&
    css`
      padding-left: 0;
      margin-left: 0;

      > div {
        display: inline-flex;
        align-items: center;
        position: absolute;
        top: calc(50% - 15px);
        left: 0;
      }

      div + p {
        padding-left: 45px;
      }
    `}

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

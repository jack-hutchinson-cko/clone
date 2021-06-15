import styled from 'styled-components';

export const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  color: ${({ theme }) => theme.colors.success};
  border-radius: 8px;
  font-size: 16px;
  text-align: left;
  vertical-align: top;
  line-height: 24px;
  border-spacing: 1px;
  background-color: ${({ theme }) => theme.colors.greyLight};
`;

export const TableBody = styled.tbody`
  & > tr:last-child > td:first-child {
    border-radius: 0 0 0 8px;
  }

  & > tr:last-child > td:last-child {
    border-radius: 0 0 8px 0;
  }
`;

export const TableCell = styled.td`
  padding: 0 16px;
  vertical-align: top;

  & > div,
  & > p {
    margin: 14px 0;
  }
`;

export const TableRow = styled.tr`
  min-width: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  font-weight: 500;

  & > th:first-child {
    border-radius: 8px 0 0 0;
  }

  & > th:last-child {
    border-radius: 0 8px 0 0;
  }
`;

export const StyledTR = styled.th`
  padding: 10px 16px;
  border: none;
  background: ${({ theme }) => theme.colors.greyLight};
`;

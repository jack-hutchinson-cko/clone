import styled from 'styled-components';
import { ThemeType } from 'constants/theme';

import { SubheadBackgroundColor } from './types';

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

  & tr th p {
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colors.success};
    font-size: 16px;
    line-height: 24px;
  }
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
  font-size: 14px;

  ${({ align = 'left' }) => `text-align: ${align};`}

  & > div,
  & > p {
    margin: 14px 0;
    font-size: 14px;
  }
`;

export const TableRow = styled.tr`
  min-width: 8px;
  background-color: ${({ theme }) => theme.colors.white};

  & > th:first-child {
    border-radius: 8px 0 0 0;
  }

  & > th:last-child {
    border-radius: 0 8px 0 0;
  }
`;

export const StyledTH = styled.th`
  padding: 10px 16px;
  border: none;
  background: ${({ theme }) => theme.colors.greyLight};
  font-weight: 500;
`;

export const StyledTableTicCell = styled(TableCell)`
  padding: 14px 16px;
  text-align: center;
  vertical-align: middle;
`;

const getBackgroundColorForSubhead = ({
  color,
  theme,
}: {
  color: SubheadBackgroundColor;
  theme: ThemeType;
}) => {
  switch (color) {
    case 'blue':
      return theme.colors.information;

    default:
      return 'transparent';
  }
};

export const StyledTableCell = styled(TableCell)<{ color: SubheadBackgroundColor }>`
  background-color: ${getBackgroundColorForSubhead};
`;

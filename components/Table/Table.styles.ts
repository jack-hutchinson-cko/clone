import styled, { css } from 'styled-components';
import { ThemeType } from 'constants/themes';
import { Breakpoints } from 'constants/screen';

import { SubheadBackgroundColor } from './types';

export const Table = styled.table<{ withTopBorder?: boolean }>`
  table-layout: fixed;
  color: ${({ theme }) => theme.colors.baseLight};
  border-radius: 8px;
  border-spacing: 1px;
  font-size: 16px;
  text-align: left;
  vertical-align: top;
  line-height: 24px;
  background-color: ${({ theme }) => theme.colors.border};

  & tr th p {
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colors.base};
    font-size: 16px;
    line-height: 24px;
  }

  ${({ withTopBorder = true }) =>
    withTopBorder
      ? css`
          tr > th:first-child {
            border-radius: 8px 0 0 0;
          }

          tr > th:last-child {
            border-radius: 0 8px 0 0;
          }
        `
      : css`
          border-top-left-radius: 0;
          border-top-right-radius: 0;
        `}
`;

export const TableBody = styled.tbody`
  & > tr:last-child > td:first-child {
    border-radius: 0 0 0 8px;
  }

  & > tr:last-child > td:last-child {
    border-radius: 0 0 8px 0;
  }
`;

export const TableCell = styled.td<{ isNoWrap?: boolean; withBackground?: boolean }>`
  white-space: ${({ isNoWrap }) => (isNoWrap ? `nowrap` : 'normal')};
  width: 1%;
  padding: 0 16px;
  vertical-align: top;
  font-size: 14px;
  background-color: ${({ withBackground, theme }) =>
    withBackground ? `${theme.colors.tableCellBackground}` : 'transparent'};

  ${({ align = 'left' }) => `text-align: ${align};`}

  & > div,
  & > p {
    margin: 14px 0;
    font-size: 14px;
  }
  @media ${Breakpoints.TABLET}, ${Breakpoints.MOBILE} {
    white-space: normal;
  }
`;

export const TableRow = styled.tr`
  min-width: 8px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const StyledTH = styled.th`
  padding: 10px 16px;
  border: none;
  color: ${({ theme }) => theme.colors.base};
  background: ${({ theme }) => theme.colors.border};
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
  p > strong {
    color: ${({ theme }) => theme.colors.success};
  }
`;

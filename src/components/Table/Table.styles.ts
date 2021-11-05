import styled, { css } from 'styled-components';
import { ThemeType } from 'src/types/theme';
import { Breakpoints } from 'src/constants/screen';
import { spacing } from 'src/constants/spacingSize';

import { SubheadBackgroundColor } from './types';

export const Table = styled.table<{ withTopBorder?: boolean; type?: 'auto' | 'fixed' }>`
  table-layout: ${({ type = 'fixed' }) => type};
  width: 100%;
  color: ${({ theme }) => theme.colors.baseLight};
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
          border-radius: 8px;

          *:first-child > tr:first-child > *:first-child {
            border-top-left-radius: 8px;
          }

          *:first-child > tr:first-child > *:last-child {
            border-top-right-radius: 8px;
          }
        `
      : css`
          border-radius: 0 0 8px 8px;
        `}

  @media ${Breakpoints.MOBILE} {
    table-layout: auto;

    td {
      max-width: 120px;
      min-width: 60px;
    }
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

export const TableCell = styled.td<{ isNoWrap?: boolean; withBackground?: boolean }>`
  white-space: ${({ isNoWrap }) => (isNoWrap ? `nowrap` : 'normal')};
  padding: ${spacing.s40}px;
  vertical-align: top;
  font-size: 14px;
  background-color: ${({ withBackground, theme }) =>
    withBackground ? `${theme.colors.tableCellBackground}` : 'transparent'};

  ${({ align = 'left' }) => `text-align: ${align};`}

  & > div,
  & > p,
  & > h2,
  & > h3,
  & > h4,
  & > h5,
  li {
    margin-bottom: ${spacing.s20}px;
    font-size: 14px;
  }

  > *:last-child {
    margin-bottom: 0;
    > *:last-child {
      margin-bottom: 0;
    }
  }

  @media ${Breakpoints.TABLET}, ${Breakpoints.MOBILE} {
    white-space: normal;
  }

  @media ${Breakpoints.MOBILE} {
    word-break: break-all;
  }
`;

export const TableRow = styled.tr`
  min-width: 8px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const StyledTH = styled.th<{ width?: string }>`
  width: ${({ width = 'auto' }) => width};
  padding: ${spacing.s30}px ${spacing.s40}px;
  border: none;
  color: ${({ theme }) => theme.colors.base};
  background: ${({ theme }) => theme.colors.border};
  font-weight: 500;
`;

export const StyledTableTicCell = styled(TableCell)`
  padding: 14px 16px;
  text-align: left;
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
    case 'grey':
      return theme.colors.tableCellSecondaryBackground;

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
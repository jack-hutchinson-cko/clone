// export { Table, TableHead, TableHeadSticky, TableBody, TableCell, TableRow } from '@cko/primitives';

import { FC } from 'react';
import Tic from 'src/components/Tic';
import {
  Table,
  TableRow,
  TableCell,
  TableBody,
  StyledTH,
  StyledTableTicCell,
  StyledTableCell,
} from './Table.styles';
import { TableSubheadProps, TableTicCellProps, TableHeadProps } from './types';

const TableHead: FC<TableHeadProps> = ({ headers, sizes = [] }) => {
  return (
    <thead>
      <TableRow>
        {headers.map((title, index) => {
          let widthColumn = '';

          if (sizes.length > 0) {
            widthColumn = sizes[index];
          }

          return (
            <StyledTH key={title} width={widthColumn}>
              {title}
            </StyledTH>
          );
        })}
      </TableRow>
    </thead>
  );
};

const TableSubhead: FC<TableSubheadProps> = ({
  colspan = 1,
  color = 'transparent',
  children,
  isNoWrap,
}) => {
  const isWithNoWrap = typeof isNoWrap === 'boolean' ? isNoWrap : isNoWrap === 'true';

  return (
    <TableRow>
      <StyledTableCell colSpan={colspan} color={color} isNoWrap={isWithNoWrap}>
        {children}
      </StyledTableCell>
    </TableRow>
  );
};

const TableTicCell: FC<TableTicCellProps> = ({ type = 'check', children, ...props }) => {
  return (
    <StyledTableTicCell {...props}>
      <Tic type={type} />
      {children}
    </StyledTableTicCell>
  );
};

const TableHeadSticky = TableHead;

export {
  Table,
  TableHead,
  TableHeadSticky,
  TableSubhead,
  TableBody,
  TableRow,
  TableCell,
  TableTicCell,
};

// export { Table, TableHead, TableHeadSticky, TableBody, TableCell, TableRow } from '@cko/primitives';

import { FC } from 'react';
import Tic from 'components/Tic';
import {
  Table,
  TableRow,
  TableCell,
  TableBody,
  StyledTH,
  StyledTableTicCell,
  StyledTableCell,
} from './Table.styles';
import { TableSubheadProps, TableTicCellProps } from './types';

const TableHead: FC<{ headers: string[] }> = ({ headers }) => {
  return (
    <thead>
      <TableRow role="row">
        {headers.map((title) => (
          <StyledTH key={title}>{title}</StyledTH>
        ))}
      </TableRow>
    </thead>
  );
};

const TableSubhead: FC<TableSubheadProps> = ({ colspan = 1, color = 'transparent', children }) => {
  return (
    <TableRow>
      <StyledTableCell colSpan={colspan} color={color}>
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

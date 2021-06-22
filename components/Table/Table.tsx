// export { Table, TableHead, TableHeadSticky, TableBody, TableCell, TableRow } from '@cko/primitives';

import { FC } from 'react';
import { Table, TableRow, TableCell, TableBody, StyledTH } from './Table.styles';

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

const TableHeadSticky = TableHead;

export { Table, TableHead, TableHeadSticky, TableBody, TableRow, TableCell };

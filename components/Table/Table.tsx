// export { Table, TableHead, TableHeadSticky, TableBody, TableCell, TableRow } from '@cko/primitives';

import { FC } from 'react';
import { Table, TableRow, TableCell, TableBody, StyledTR } from './Table.styles';

const TableHead: FC<{ headers: string[] }> = ({ headers }) => {
  return (
    <thead>
      <TableRow role="row">
        {headers.map((title) => (
          <StyledTR key={title}>{title}</StyledTR>
        ))}
      </TableRow>
    </thead>
  );
};

const TableHeadSticky = TableHead;

export { Table, TableHead, TableHeadSticky, TableBody, TableRow, TableCell };

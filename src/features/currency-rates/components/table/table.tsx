import React from 'react';

import {
  TableBody,
  TableDataCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from './table.components';
import { StyledTable } from './table.styled';

type Props = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLTableElement>;

export const Table = ({ children, ...rest }: Props) => {
  return <StyledTable {...rest}>{children}</StyledTable>;
};

Table.THead = TableHead;
Table.TBody = TableBody;
Table.Tr = TableRow;
Table.Th = TableHeaderCell;
Table.Td = TableDataCell;

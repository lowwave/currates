import React from "react";
import { StyledTable } from "./table.styled";
import {
  TableBody,
  TableDataCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "./table.components";

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

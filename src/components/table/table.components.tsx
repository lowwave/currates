import React from "react";
import { TBody, THead, Td, Th, Tr } from "./table.styled";

type Props = {
  children: React.ReactNode;
};

export const TableHead = ({ children }: Props) => <THead>{children}</THead>;
export const TableBody = ({ children }: Props) => <TBody>{children}</TBody>;
export const TableRow = ({ children }: Props) => <Tr>{children}</Tr>;
export const TableHeaderCell = ({ children }: Props) => <Th>{children}</Th>;
export const TableDataCell = ({ children }: Props) => <Td>{children}</Td>;

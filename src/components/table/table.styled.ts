import styled from "styled-components";

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const THead = styled.thead`
  background-color: transparent;
`;

export const TBody = styled.tbody``;

export const Tr = styled.tr`
  border-bottom: 0.0625rem solid ${({ theme }) => theme.colors.border};
  tbody > &:last-child {
    border-bottom: none;
  }
`;

export const Th = styled.th`
  border-right: none;
  border-left: none;
  padding: 0.475rem;
  text-align: left;
  font-weight: 700;
`;

export const Td = styled.td`
  border-right: none;
  border-left: none;
  padding: 0.475rem;
`;

import styled from "styled-components";

export const StyledBox = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundElevated};
  color: ${({ theme }) => theme.colors.text};
  padding: 0.625rem;
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadius};
`;

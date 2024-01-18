import styled from 'styled-components';

export const DateCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.backgroundElevated};
  width: 100%;
  margin: 1.5rem auto;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

export const DateCardText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.md};
  line-height: ${({ theme }) => theme.lineHeights.md};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

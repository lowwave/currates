import styled from 'styled-components';

export const ConverterContainer = styled.div<{ hasError?: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 3rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 2px solid
    ${({ theme, hasError }) =>
      hasError ? theme.color.error : theme.colors.primary};
  height: ${({ theme }) => theme.inputHeight};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 90vw;
    flex-direction: row;
    justify-content: space-between;
    height: auto;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  gap: 0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    width: 45%;
`;

export const ConverterError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-top: 0.5rem;
`;

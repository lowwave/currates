import styled from 'styled-components';

export const StyledNumberInput = styled.input`
  -moz-appearance: textfield;
  appearance: textfield;
  flex: 1;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  resize: none;
  padding: 0 0.625rem;
  background-color: ${({ theme }) => theme.colors.input};
  color: ${({ theme }) => theme.colors.text};
  height: ${({ theme }) => theme.inputHeight};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.sm};
  line-height: ${({ theme }) => theme.lineHeights.sm};
  display: inline-block;
  padding-bottom: 0.625rem;
`;

export const StyledNumberInput = styled.input`
  -moz-appearance: textfield;
  appearance: textfield;
  flex: 0 1 auto;
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

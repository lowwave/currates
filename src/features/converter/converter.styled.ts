import styled from 'styled-components';

export const ConverterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 3rem;
  padding: 3rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 2px solid ${({ theme }) => theme.colors.backgroundElevated};
  height: ${({ theme }) => theme.inputHeight};
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
`;

import styled from 'styled-components';

export const SelectContainer = styled.div`
  width: 100%;
  position: relative;
  display: block;
`;

export const SelectInput = styled.select`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.input};
  color: ${({ theme }) => theme.colors.text};
  padding-left: 0.625rem;
  padding-right: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  appearance: none;
  cursor: pointer;
  height: ${({ theme }) => theme.inputHeight};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1rem;
  position: absolute;
  right: 0.625rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;

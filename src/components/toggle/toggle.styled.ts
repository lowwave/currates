import styled from 'styled-components';

export const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 2rem;
  right: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    right: 2rem;
  }
`;

export const ToggleButton = styled.button`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  outline: none;
  transition: all 0.2s ease-in-out;
  width: 2rem;
  height: 2rem;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

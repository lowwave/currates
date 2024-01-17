import styled from 'styled-components';

export const StyledLayout = styled.div`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  line-height: ${({ theme }) => theme.lineHeights.md};
  display: flex;
  justify-content: center;
  height: 100%;
  padding: 1rem;
`;

export const ContentContainer = styled.div`
  flex: 1;
  max-width: 1000px;
  padding-left: 4%;
  padding-right: 4%;
`;

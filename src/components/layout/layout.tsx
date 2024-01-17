import React from 'react';

import { ContentContainer, StyledLayout } from './layout.styled';

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <StyledLayout>
      <ContentContainer>{children}</ContentContainer>
    </StyledLayout>
  );
};

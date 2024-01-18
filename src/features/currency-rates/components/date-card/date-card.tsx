import React from 'react';

import { LastUpdatedT } from '@/utils/get-last-updated-date';

import { DateCardContainer, DateCardText } from './date-card.styled';

type Props = {
  lastUpdated: LastUpdatedT | null;
} & React.HTMLAttributes<HTMLDivElement>;

export const DateCard = ({ lastUpdated, ...rest }: Props) => {
  let infoText = 'Cannot get last updated date';

  if (lastUpdated) {
    const { lastUpdatedDate, order } = lastUpdated;
    infoText = `Valid for: ${lastUpdatedDate}, order: ${order}`;
  }

  return (
    <DateCardContainer {...rest}>
      <DateCardText>{infoText}</DateCardText>
    </DateCardContainer>
  );
};

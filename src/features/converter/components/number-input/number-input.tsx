import React from 'react';

import { StyledNumberInput } from './number-input.styled';

type Props = {
  defaultValue?: number;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const NumberInput = ({ ...rest }: Props) => {
  return <StyledNumberInput type="text" inputMode="numeric" {...rest} />;
};

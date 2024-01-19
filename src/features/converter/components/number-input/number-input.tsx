import React from 'react';

import {
  InputContainer,
  Label,
  StyledNumberInput,
} from './number-input.styled';

type Props = {
  defaultValue?: number;
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const NumberInput = ({ id, label, name, ...rest }: Props) => {
  return (
    <InputContainer>
      <Label htmlFor={name}>{label}</Label>
      <StyledNumberInput
        {...rest}
        id={id}
        inputMode="numeric"
        name={name}
        role="textbox"
        type="text"
      />
    </InputContainer>
  );
};

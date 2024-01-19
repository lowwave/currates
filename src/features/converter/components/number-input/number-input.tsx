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

export const NumberInput = ({ name, label, id, ...rest }: Props) => {
  return (
    <InputContainer>
      <Label htmlFor={name}>{label}</Label>
      <StyledNumberInput
        {...rest}
        role="textbox"
        type="text"
        inputMode="numeric"
        name={name}
        id={id}
      />
    </InputContainer>
  );
};

import React from 'react';

import { IconWrapper, SelectContainer, SelectInput } from './select.styled';

const SelectIcon = () => (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 10 6"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.2"
      d="m1 1 4 4 4-4"
    />
  </svg>
);

type Props = {
  value?: string;
  options?: string[];
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export const Select = ({
  options,
  value,
  defaultValue,
  disabled,
  ...rest
}: Props) => {
  return (
    <SelectContainer>
      <SelectInput
        {...rest}
        role='combobox'
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </SelectInput>
      {!disabled && (
        <IconWrapper>
          <SelectIcon />
        </IconWrapper>
      )}
    </SelectContainer>
  );
};

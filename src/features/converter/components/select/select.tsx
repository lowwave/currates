import React from 'react';

import { IconWrapper, SelectContainer, SelectInput } from './select.styled';

const SelectIcon = () => (
  <svg
    aria-hidden="true"
    fill="none"
    viewBox="0 0 10 6"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m1 1 4 4 4-4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.2"
    />
  </svg>
);

type Props = {
  options?: string[];
  value?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export const Select = ({
  defaultValue,
  disabled,
  options,
  value,
  ...rest
}: Props) => {
  return (
    <SelectContainer>
      <SelectInput
        {...rest}
        defaultValue={defaultValue}
        disabled={disabled}
        role="combobox"
        value={value}
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

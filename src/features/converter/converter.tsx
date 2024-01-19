import { useState } from 'react';

import { useCurrencyRates } from '@/api';

import { NumberInput } from './components/number-input';
import { Select } from './components/select';
import {
  ConverterContainer,
  ConverterError,
  InputWrapper,
} from './converter.styled';
import { CurrencyType, currencyTypeMap } from './types';
import {
  calculateConvertedAmount,
  getForeignCurrencyRate,
  sanitizeInputValue,
} from './utils';

export const Converter = () => {
  const { data, isError, isLoading } = useCurrencyRates();
  const [domesticCurrencyValue, setDomesticCurrencyValue] =
    useState<string>('');
  const [foreignCurrencyValue, setForeignCurrencyValue] = useState<string>('');
  const [selectedCurrency, setSelectedCurrency] = useState<string>('EUR');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return (
      <ConverterContainer hasError>
        <ConverterError>Error loading converter</ConverterError>
      </ConverterContainer>
    );
  }

  if (!data) {
    return null;
  }

  const updateInputValues = (
    from: CurrencyType,
    value: string,
    convertedAmount: string,
  ) => {
    const inputValue = sanitizeInputValue(value);

    if (from === currencyTypeMap.domesticCurrency) {
      setDomesticCurrencyValue(inputValue);
      setForeignCurrencyValue(convertedAmount);
    } else if (from === currencyTypeMap.foreignCurrency) {
      setForeignCurrencyValue(inputValue);
      setDomesticCurrencyValue(convertedAmount);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const rate = getForeignCurrencyRate(data, selectedCurrency);
    const convertedAmount = calculateConvertedAmount(
      name as CurrencyType,
      value,
      rate,
    );
    updateInputValues(name as CurrencyType, value, convertedAmount);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value: currencyCode } = e.target;
    setSelectedCurrency(currencyCode);
    const rate = getForeignCurrencyRate(data, currencyCode);
    const convertedAmount = calculateConvertedAmount(
      currencyTypeMap.domesticCurrency,
      domesticCurrencyValue,
      rate,
    );
    updateInputValues(
      currencyTypeMap.domesticCurrency,
      domesticCurrencyValue,
      convertedAmount,
    );
  };

  return (
    <ConverterContainer>
      <InputWrapper>
        <NumberInput
          id={currencyTypeMap.domesticCurrency}
          label="For"
          name={currencyTypeMap.domesticCurrency}
          onChange={handleInputChange}
          placeholder="0.00"
          value={domesticCurrencyValue}
        />
        <Select defaultValue="CZK" disabled options={['CZK']} />
      </InputWrapper>
      <InputWrapper>
        <NumberInput
          id={currencyTypeMap.foreignCurrency}
          label="You get"
          name={currencyTypeMap.foreignCurrency}
          onChange={handleInputChange}
          placeholder="0.00"
          value={foreignCurrencyValue}
        />
        <Select
          onChange={handleSelectChange}
          options={data.currencyCodes}
          value={selectedCurrency}
        />
      </InputWrapper>
    </ConverterContainer>
  );
};

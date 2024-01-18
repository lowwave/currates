import { useState } from 'react';

import { useCurrencyRates } from '@/api';

import { NumberInput } from './components/number-input';
import { Select } from './components/select';
import { ConverterContainer, InputWrapper } from './converter.styled';
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
    return <div>Error</div>;
  }

  if (!data) {
    return null;
  }

  const calculateAndSetValues = (
    from: CurrencyType,
    value: string,
    rate: number,
  ) => {
    const inputValue = sanitizeInputValue(value);

    if (from === currencyTypeMap.domesticCurrency) {
      setDomesticCurrencyValue(inputValue);
      const convertedAmount = calculateConvertedAmount(from, value, rate);
      setForeignCurrencyValue(convertedAmount);
    } else if (from === currencyTypeMap.foreignCurrency) {
      setForeignCurrencyValue(inputValue);
      const convertedAmount = calculateConvertedAmount(from, value, rate);
      setDomesticCurrencyValue(convertedAmount);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const rate = getForeignCurrencyRate(data, selectedCurrency);
    calculateAndSetValues(name as CurrencyType, value, rate || 1);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSelectedCurrency(value);
    const rate = getForeignCurrencyRate(data, value);
    calculateAndSetValues(
      currencyTypeMap.domesticCurrency,
      domesticCurrencyValue,
      rate || 1,
    );
  };

  return (
    <ConverterContainer>
      <InputWrapper>
        <NumberInput
          label="For"
          value={domesticCurrencyValue}
          onChange={handleInputChange}
          name={currencyTypeMap.domesticCurrency}
          placeholder="0.00"
        />
        <Select defaultValue="CZK" disabled options={['CZK']} />
      </InputWrapper>
      <InputWrapper>
        <NumberInput
          label="You get"
          value={foreignCurrencyValue}
          onChange={handleInputChange}
          name={currencyTypeMap.foreignCurrency}
          placeholder="0.00"
        />
        <Select
          value={selectedCurrency}
          options={data.currencyCodes}
          onChange={handleSelectChange}
        />
      </InputWrapper>
    </ConverterContainer>
  );
};

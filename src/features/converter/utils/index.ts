import { RatesDataT } from '@/api';
import { CurrencyCodeT } from '@/types';

import { CurrencyType, currencyTypeMap } from '../types';

export const getForeignCurrencyRate = (
  data: RatesDataT | undefined,
  code: CurrencyCodeT,
) => {
  if (!data) return undefined;
  console.log('calculating rate for: ', code);
  return data.rates.find((rate) => rate.code === code)?.rate;
};

export const calculateConvertedAmount = (
  from: CurrencyType,
  value: string,
  rate: number,
) => {
  const valueAsNumber = Number(value);

  switch (from) {
    case currencyTypeMap.domesticCurrency:
      return (valueAsNumber / rate).toFixed(2);
    case currencyTypeMap.foreignCurrency:
      return (valueAsNumber * rate).toFixed(2);
    default:
      return '0.00';
  }
};

export const sanitizeInputValue = (value: string) => {
  // don't allow negative numbers
  if (value.startsWith('-')) {
    return '';
  }
  // don't allow leading zeros except for zero itself
  if (value.startsWith('0') && !value.startsWith('0.')) {
    return '0';
  }
  // remove everything except digits and dot
  // remove all leading zeros
  // allow two digits after dot
  const match = value.match(/^(\d*\.{0,1}\d{0,2})/);
  const parsedValue = match ? match[0] : '';

  return parsedValue;
};

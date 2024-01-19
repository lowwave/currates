import { RatesDataT } from '@/api';
import { CurrencyCodeT } from '@/types';

import { CurrencyType, currencyTypeMap, ForeignCurrencyRateT } from '../types';

export const getForeignCurrencyRate = (
  data: RatesDataT | undefined,
  code: CurrencyCodeT,
): ForeignCurrencyRateT => {
  const rateItem = data && data.rates.find((rate) => rate.code === code);
  if (!rateItem) return { rate: 0, amount: 0 };

  return { rate: rateItem.rate, amount: rateItem.amount };
};

export const calculateConvertedAmount = (
  from: CurrencyType,
  value: string,
  foreignCurrencyRate: ForeignCurrencyRateT,
) => {
  const valueAsNumber = Number(value);
  const { rate, amount } = foreignCurrencyRate;

  switch (from) {
    case currencyTypeMap.domesticCurrency:
      return ((valueAsNumber / rate) * amount).toFixed(2);
    case currencyTypeMap.foreignCurrency:
      return ((valueAsNumber / amount) * rate).toFixed(2);
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

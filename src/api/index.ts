import { useQuery } from '@tanstack/react-query';

import type { RateItemT } from '@/types';
import { getCurrencyCodes } from '@/utils/get-currency-codes';
import {
  getLastUpdatedDate,
  LastUpdatedT,
} from '@/utils/get-last-updated-date';
import { parseRates } from '@/utils/get-rates';

export const API_URL =
  '/api/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt';

export type RatesDataT = {
  rates: Array<RateItemT>;
  currencyCodes: Array<RateItemT['code']>;
  lastUpdated: LastUpdatedT | null;
};

const getExchangeRates = async (): Promise<RatesDataT> => {
  const response = await fetch(API_URL, {
    method: 'GET',
  });
  if (!response.ok) {
    throw new Error('Something went wrong fetching the exchange rates.');
  }
  const rawData = await response.text();

  console.log(rawData);

  const rates = parseRates(rawData);
  const currencyCodes = getCurrencyCodes(rates);
  const lastUpdated = getLastUpdatedDate(rawData);

  console.log({ rates, currencyCodes, lastUpdated });

  return { rates, currencyCodes, lastUpdated };
};

export const useCurrencyRates = () => {
  return useQuery({
    queryFn: getExchangeRates,
    queryKey: ['exchangeRates'],
    refetchOnWindowFocus: false,
  });
};

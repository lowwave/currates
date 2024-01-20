import { useQuery } from '@tanstack/react-query';

import type { RateItemT } from '@/types';
import { getCurrencyCodes } from '@/utils/get-currency-codes';
import {
  getLastUpdatedDate,
  LastUpdatedT,
} from '@/utils/get-last-updated-date';
import { getRates } from '@/utils/get-rates';

export const API_URL =
  'https://corsproxy.io/?' +
  encodeURIComponent(
    'https://www.cnb.cz/en/financial_markets/foreign_exchange_market/exchange_rate_fixing/daily.txt',
  );

export type RatesDataT = {
  currencyCodes: Array<RateItemT['code']>;
  lastUpdated: LastUpdatedT | null;
  rates: Array<RateItemT>;
};

const getExchangeRates = async (): Promise<RatesDataT> => {
  const response = await fetch(API_URL, {
    method: 'GET',
  });
  if (!response.ok) {
    throw new Error('Something went wrong fetching the exchange rates.');
  }
  const rawData = await response.text();

  const rates = getRates(rawData);
  const currencyCodes = getCurrencyCodes(rates);
  const lastUpdated = getLastUpdatedDate(rawData);

  return { currencyCodes, lastUpdated, rates };
};

export const useCurrencyRates = () => {
  return useQuery({
    queryFn: getExchangeRates,
    queryKey: ['exchangeRates'],
    refetchOnWindowFocus: false,
  });
};

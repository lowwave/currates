import { useQuery } from '@tanstack/react-query';

import type { RateItemT } from '@/types';
import { getCurrencyCodes } from '@/utils/get-currency-codes';
import {
  getLastUpdatedDate,
  LastUpdatedT,
} from '@/utils/get-last-updated-date';
import { getRates } from '@/utils/get-rates';


const apiBaseUrl = (import.meta.env.PROD || import.meta.env.MODE === 'test') ? 'https://www.cnb.cz' : '/api';
export const API_URL = `${apiBaseUrl}/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt`;

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

  const rates = getRates(rawData);
  const currencyCodes = getCurrencyCodes(rates);
  const lastUpdated = getLastUpdatedDate(rawData);

  return { rates, currencyCodes, lastUpdated };
};

export const useCurrencyRates = () => {
  return useQuery({
    queryFn: getExchangeRates,
    queryKey: ['exchangeRates'],
    refetchOnWindowFocus: false,
  });
};

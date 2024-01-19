import { expect, test } from 'vitest';

import { mockData } from '@/test/msw/mock-data';

import { getCurrencyCodes } from './get-currency-codes';
import { getLastUpdatedDate } from './get-last-updated-date';
import { getRates } from './get-rates';

test('getRates', () => {
  const rates = getRates(mockData);
  expect(rates[0]).toEqual({
    amount: 1,
    code: 'AUD',
    country: 'Australia',
    currency: 'dollar',
    rate: 16.615,
  });
  expect(rates[29]).toEqual({
    amount: 1,
    code: 'USD',
    country: 'USA',
    currency: 'dollar',
    rate: 21.897,
  });
});

test('getCurrencyCodes', () => {
  const rates = getRates(mockData);
  const codes = getCurrencyCodes(rates);
  expect(codes).toEqual([
    'AUD',
    'BRL',
    'BGN',
    'CAD',
    'CNY',
    'DKK',
    'EUR',
    'HKD',
    'HUF',
    'INR',
    'IDR',
    'ILS',
    'JPY',
    'MYR',
    'MXN',
    'NZD',
    'NOK',
    'PHP',
    'PLN',
    'RON',
    'RUB',
    'SGD',
    'ZAR',
    'KRW',
    'SEK',
    'CHF',
    'THB',
    'TRY',
    'GBP',
    'USD',
  ]);
});

test('getLastUpdatedDate', () => {
  const lastUpdated = getLastUpdatedDate(mockData);
  if (lastUpdated === null) {
    throw new Error('lastUpdated is null');
  }
  const { lastUpdatedDate, order } = lastUpdated;
  expect(lastUpdatedDate).toEqual('01 Jan 2021');
  expect(order).toEqual(123);
});

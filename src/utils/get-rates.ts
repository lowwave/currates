import type { RateItemT } from '@/types';

export const getRates = (data: string): Array<RateItemT> => {
  if (!data) {
    return [];
  }

  const lines = data.split('\n');
  const rates = lines.slice(2, lines.length - 1);
  return rates.map((line) => {
    const [country, currency, amount, code, rate] = line.split('|');

    return {
      amount: Number(amount),
      code,
      country,
      currency,
      rate: Number(rate),
    };
  });
};

export type RateItemT = {
  amount: number;
  code: string;
  country: string;
  currency: string;
  rate: number;
};

export type CurrencyCodeT = RateItemT['code'];

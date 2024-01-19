export const currencyTypeMap = {
  domesticCurrency: 'domesticCurrency',
  foreignCurrency: 'foreignCurrency',
} as const;

export type CurrencyType = keyof typeof currencyTypeMap;

export type ForeignCurrencyRateT = {
  rate: number;
  amount: number;
};

import type { RateItemT } from '@/types';

export const getCurrencyCodes = (
  rateItems: Array<RateItemT>,
): Array<RateItemT['code']> => {
  return rateItems.map((item) => item.code);
};

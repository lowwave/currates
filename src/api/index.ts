import { useQuery } from "@tanstack/react-query";
import { parseRates } from "@/utils/parse-rates";
import { RateItemT } from "@/types";

export const API_URL =
  "/api/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt";

const getExchangeRates = async (): Promise<Array<RateItemT>> => {
  const response = await fetch(API_URL, {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error("Something went wrong fetching the exchange rates.");
  }
  const rawData = await response.text();
  const data = parseRates(rawData);

  return data;
};

export const useExchangeRates = () => {
  return useQuery({
    queryFn: getExchangeRates,
    queryKey: ["exchangeRates"],
    refetchOnWindowFocus: false,
  });
};

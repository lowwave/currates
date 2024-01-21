import { useCurrencyRates } from '@/api';
import { Skeleton } from '@/components/skeleton';

import { DateCard } from './components/date-card/date-card';
import { Table } from './components/table';

export const CurrencyRatesTable = () => {
  const { data, isError, isLoading } = useCurrencyRates();

  if (isLoading) {
    return (
      <>
        <Skeleton height="4rem" my="1.5rem" />
        <Skeleton height="100vh" />
      </>
    );
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (!data) {
    return null;
  }

  const { lastUpdated, rates } = data;

  return (
    <>
      <DateCard lastUpdated={lastUpdated} role="heading" />
      <Table>
        <Table.THead>
          <Table.Tr>
            <Table.Th>Country</Table.Th>
            <Table.Th>Currency</Table.Th>
            <Table.Th>Amount</Table.Th>
            <Table.Th>Rate</Table.Th>
          </Table.Tr>
        </Table.THead>
        <Table.TBody>
          {rates &&
            rates.map((rate) => (
              <Table.Tr key={rate.code}>
                <Table.Td>{rate.country}</Table.Td>
                <Table.Td>
                  {rate.code} - {rate.currency}
                </Table.Td>
                <Table.Td>{rate.amount}</Table.Td>
                <Table.Td>{rate.rate}</Table.Td>
              </Table.Tr>
            ))}
        </Table.TBody>
      </Table>
    </>
  );
};

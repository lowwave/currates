import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { renderWithProviders } from '@/test/providers';

import { CurrencyRatesTable } from './currency-rates';

describe('currency rates table', () => {
  it('should display the currency rates table', async () => {
    renderWithProviders(<CurrencyRatesTable />);

    const table = await screen.findByRole('table');
    const headerTitles = (await screen.findAllByRole('columnheader')).map(
      (title) => title.textContent,
    );

    expect(table).toBeInTheDocument();
    expect(headerTitles).toEqual(['Country', 'Currency', 'Amount', 'Rate']);
  });
  it('should display the currency rates table with the correct data', async () => {
    renderWithProviders(<CurrencyRatesTable />);

    const rateItemRows = (await screen.findAllByRole('row')).slice(1);

    expect(rateItemRows).toHaveLength(30);
    expect(rateItemRows[0].textContent).toContain('Australia');
    expect(rateItemRows[0].textContent).toContain('AUD - dollar');
    expect(rateItemRows[0].textContent).toContain('1');
    expect(rateItemRows[0].textContent).toContain('16.615');
  });
  it('should display the date card with correct data', async () => {
    renderWithProviders(<CurrencyRatesTable />);

    const dateCard = await screen.findByRole('heading');
    const infoText = await screen.findByText(/valid for/i);

    expect(dateCard).toBeInTheDocument();
    expect(infoText).toBeInTheDocument();
    expect(dateCard.textContent).toContain('01 Jan 2021');
    expect(dateCard.textContent).toContain('order: 123');
  });
});

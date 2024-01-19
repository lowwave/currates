import { fireEvent, renderHook, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useCurrencyRates } from '@/api';
import { providerWrapper, renderWithProviders } from '@/test/providers';

import { Converter } from '.';

describe('Converter feature', () => {
  it('should render the converter with default values', async () => {
    renderWithProviders(<Converter />);

    const numberInputItems = await screen.findAllByRole('textbox');
    const currencySelectItems = (await screen.findAllByRole(
      'combobox',
    )) as HTMLSelectElement[];
    const defaultSelectValues = currencySelectItems.map((item) => item.value);

    expect(numberInputItems).toHaveLength(2);
    expect(currencySelectItems).toHaveLength(2);
    expect(defaultSelectValues).toEqual(['CZK', 'EUR']);
  });
  it('should fetch the currency rates', async () => {
    const { result } = renderHook(() => useCurrencyRates(), {
      wrapper: providerWrapper,
    });

    await waitFor(() => {
      return result.current.isSuccess;
    });
  });
  it('should populate foreign currency select with correct options', async () => {
    renderWithProviders(<Converter />);

    const currencySelectItems = (await screen.findAllByRole(
      'combobox',
    )) as HTMLSelectElement[];
    const foreignCurrencySelect = currencySelectItems[1];

    expect(foreignCurrencySelect).toBeInTheDocument();
    expect(foreignCurrencySelect.options).toHaveLength(30);
  });
  it('should correctly calculate currency rates', async () => {
    renderWithProviders(<Converter />);

    const [domesticCurrencyInput, foreignCurrencyInput] =
      (await screen.findAllByRole('textbox')) as HTMLInputElement[];

    fireEvent.change(domesticCurrencyInput, { target: { value: '100' } });
    expect(foreignCurrencyInput.value).toEqual('3.79');

    fireEvent.change(foreignCurrencyInput, { target: { value: '100' } });
    expect(domesticCurrencyInput.value).toEqual('2636.30');
  });

  it('should correctly calculate currency rates when changing the currency', async () => {
    renderWithProviders(<Converter />);

    const [domesticCurrencyInput, foreignCurrencyInput] =
      (await screen.findAllByRole('textbox')) as HTMLInputElement[];
    const currencySelectItems = (await screen.findAllByRole(
      'combobox',
    )) as HTMLSelectElement[];

    fireEvent.change(domesticCurrencyInput, { target: { value: '100' } });
    expect(foreignCurrencyInput.value).toEqual('3.79');

    fireEvent.change(currencySelectItems[1], { target: { value: 'USD' } });
    expect(foreignCurrencyInput.value).toEqual('4.57');

    fireEvent.change(foreignCurrencyInput, { target: { value: '100' } });
    expect(domesticCurrencyInput.value).toEqual('2189.70');

    fireEvent.change(currencySelectItems[1], { target: { value: 'JPY' } });
    expect(foreignCurrencyInput.value).toEqual('10640.98');
  });
});

import { Layout } from '@/components/layout';
import { Toggle } from '@/components/toggle/toggle';
import { Converter } from '@/features/converter';
import { CurrencyRatesTable } from '@/features/currency-rates';
import { AppProvider } from '@/providers/app';

function App() {
  return (
    <AppProvider>
      <Toggle />
      <Layout>
        <Converter />
        <CurrencyRatesTable />
      </Layout>
    </AppProvider>
  );
}

export default App;

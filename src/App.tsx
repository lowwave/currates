import { Layout } from '@/components/layout';
import { Converter } from '@/features/converter';
import { CurrencyRatesTable } from '@/features/currency-rates';
import { AppProvider } from '@/providers/app';

function App() {
  return (
    <AppProvider>
      <Layout>
        <Converter />
        <CurrencyRatesTable />
      </Layout>
    </AppProvider>
  );
}

export default App;

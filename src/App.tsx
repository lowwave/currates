import { Layout } from '@/components/layout/layout';
import { AppProvider } from '@/providers/app';

import { Converter } from './features/converter/converter';
import { CurrencyRatesTable } from './features/currency-rates';

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

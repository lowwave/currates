import { AppProvider } from "providers/app";
import { CurrencyRatesTable } from "./features/currency-rates";
import { Layout } from "@/components/layout/layout";

function App() {
  return (
    <AppProvider>
      <Layout>
        <CurrencyRatesTable />
      </Layout>
    </AppProvider>
  );
}

export default App;

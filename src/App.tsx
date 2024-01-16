import { AppProvider } from "providers/app";
import { CurrencyRatesTable } from "./features/currency-rates";

function App() {
  return (
    <AppProvider>
      <CurrencyRatesTable />
    </AppProvider>
  );
}

export default App;

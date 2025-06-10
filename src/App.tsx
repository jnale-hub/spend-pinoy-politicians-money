import AccountLimit from "./components/AccountLimit";
import Items from "./components/Items";
import PageHeader from "./components/PageHeader";
import Receipt from "./components/Receipt";
import { MoneyProvider } from "./contexts/MoneyContext";
import { RemainingMoneyProvider } from "./contexts/RemainingMoneyContext";
import "./index.css";


function App() {
  return (
      <div className="max-w-4xl mx-auto">
        <RemainingMoneyProvider>
          <MoneyProvider>
            <PageHeader />
            <AccountLimit />
            <Items />
            <Receipt />
          </MoneyProvider>
        </RemainingMoneyProvider>
      </div>
  );
}

export default App;

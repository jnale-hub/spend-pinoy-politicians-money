import "./index.css";
import Items from "./components/Items";
import { MoneyProvider } from "./contexts/MoneyContext";
import AccountLimit from "./components/AccountLimit";
import { RemainingMoneyProvider } from "./contexts/RemainingMoneyContext";
import Receipt from "./components/Receipt";
import PageHeader from "./components/PageHeader";

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

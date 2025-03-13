import { createContext, useState, useContext, useEffect } from "react";
import { useMoney } from "./MoneyContext";

export interface RemainingMoneyContextInterface {
  remainingMoney: number;
  setRemainingMoney: (remainingMoney: number) => void;
}

export const TOTAL_MONEY = 3875696435;

const RemainingMoneyContext = createContext<RemainingMoneyContextInterface>({
  remainingMoney: TOTAL_MONEY,
  setRemainingMoney: () => {},
});

export const RemainingMoneyProvider = ({ children }) => {
  const { items } = useMoney();
  const [remainingMoney, setRemainingMoney] = useState<number>(TOTAL_MONEY);

  useEffect(() => {
    const totalExpense = items.reduce(
      (acc, currentValue) =>
        acc + currentValue.price * Number(currentValue.quantity),
      0
    );
    setRemainingMoney(TOTAL_MONEY - totalExpense);
  }, [items]);

  return (
    <RemainingMoneyContext.Provider
      value={{ remainingMoney, setRemainingMoney }}
    >
      {children}
    </RemainingMoneyContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useRemainingMoney = () => useContext(RemainingMoneyContext);

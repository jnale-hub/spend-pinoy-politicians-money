import { createContext, useState, useContext } from "react";
import data from "../data.json";

export type Item = {
  oldPrice?: number;
  name: string;
  price: number;
  img: string;
  quantity: string;
};

export type Politician = {
  name: string;
  netWorth: number;
};

export interface MoneyContextInterface {
  items: Item[];
  politicians: Politician[];
  setItems: (items: Item[]) => void;
  setPoliticians: (politicians: Politician[]) => void;
}

const MoneyContext = createContext<MoneyContextInterface>({
  items: [],
  politicians: [],
  setItems: () => {},
  setPoliticians: () => {},
});

export const MoneyProvider = ({ children }) => {
  const [items, setItems] = useState<Item[]>(data.items);
  const [politicians, setPoliticians] = useState<Politician[]>(
    data.politicians.map(politician => ({
      ...politician,
      netWorth: Number(politician.netWorth)
    }))
  );

  return (
    <MoneyContext.Provider value={{ items, politicians, setItems, setPoliticians }}>
      {children}
    </MoneyContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useMoney = () => useContext(MoneyContext);

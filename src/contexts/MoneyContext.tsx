import { createContext, useState, useContext } from "react";
import data from "../data.json";

export type Item = {
  id: number;
  name: string;
  price: number;
  img: string;
  quantity: string;
};

export interface MoneyContextInterface {
  items: Item[];
  setItems: (items: Item[]) => void;
}

const MoneyContext = createContext<MoneyContextInterface>({
  items: [],
  setItems: () => {},
});

export const MoneyProvider = ({ children }) => {
  const [items, setItems] = useState<Item[]>(data);

  return (
    <MoneyContext.Provider value={{ items, setItems }}>
      {children}
    </MoneyContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useMoney = () => useContext(MoneyContext);

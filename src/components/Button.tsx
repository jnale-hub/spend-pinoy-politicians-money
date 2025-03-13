import { useCallback } from "react";
import { useMoney } from "../contexts/MoneyContext";
import { useRemainingMoney } from "../contexts/RemainingMoneyContext";

const buySound = new Audio('/audios/buy.mp3');
const sellSound = new Audio('/audios/sell.mp3');

interface ButtonProps {
  children: React.ReactNode;
  className: string;
  index: number;
}

const Button: React.FC<ButtonProps> = ({ children, className, index }) => {
  const { items, setItems } = useMoney();
  const { remainingMoney } = useRemainingMoney();

  const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    const updatedItems = [...items];
    const target = event.currentTarget;
    const currentQuantity = Number(updatedItems[index].quantity);
    
    if (target.innerText === "Buy") {
      updatedItems[index].quantity = (currentQuantity + 1).toString();
      buySound.currentTime = 0;
      buySound.play();
    } else if (currentQuantity > 0) {
      updatedItems[index].quantity = (currentQuantity - 1).toString();
      sellSound.currentTime = 0;
      sellSound.play();
    }

    setItems(updatedItems);
  }, [items, index, setItems]);

  const isSellDisabled = Number(items[index].quantity) === 0;
  const isBuyDisabled = remainingMoney < items[index].price;

  return (
    <button
      className={`${className} px-4 py-1 rounded-sm font-semibold ${
        className === "buyBtn" ? (isBuyDisabled ? "disabledBuyBtn" : "clickableBuyBtn") 
        : (isSellDisabled ? "disabledSellBtn" : "clickableSellBtn")
      }`}
      onClick={handleClick}
      id={`${index}-${className}`}
      disabled={className === "buyBtn" ? isBuyDisabled : isSellDisabled}
    >
      {children}
    </button>
  );
};

export default Button;

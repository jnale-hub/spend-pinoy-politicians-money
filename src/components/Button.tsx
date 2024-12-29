import { useMoney } from "../contexts/MoneyContext";
import { useRemainingMoney } from "../contexts/RemainingMoneyContext";

const buySound = new Audio('/audios/buy.mp3');
const sellSound = new Audio('/audios/sell.mp3');

interface ButtonProps {
  children: React.ReactNode;
  className: string;
  index: number;
}

let newValue: number;

const Button: React.FC<ButtonProps> = ({ children, className, index }) => {
  const { items, setItems } = useMoney();
  const { remainingMoney } = useRemainingMoney();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const updatedItems = [...items];
    const target = event.target as HTMLButtonElement;

    if (target.innerHTML === "Buy") {
      newValue = Number(updatedItems[index].quantity) + 1;
      buySound.currentTime = 0;
      buySound.play();
    } else {
      newValue = Number(updatedItems[index].quantity) > 0 
        ? Number(updatedItems[index].quantity) - 1 
        : 0;
      if (Number(updatedItems[index].quantity) > 0) {
        sellSound.currentTime = 0;
        sellSound.play();
      }
    }

    updatedItems[index].quantity = newValue.toString();
    setItems(updatedItems);
  };

  const sellBtnClass =
    Number(items[index].quantity) > 0 ? "clickableSellBtn" : "disabledSellBtn";

  const buyBtnClass =
    remainingMoney >= items[index].price ? "clickableBuyBtn" : "disabledBuyBtn";

  return (
    <button
      className={`${
        className === "buyBtn" ? buyBtnClass : sellBtnClass
      } px-4 py-1 rounded-sm font-semibold`}
      onClick={handleClick}
      id={`${index}-${className}`}
      disabled={className === "buyBtn" && remainingMoney < items[index].price}
    >
      {children}
    </button>
  );
};

export default Button;

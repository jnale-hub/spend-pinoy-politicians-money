import { useMoney } from "../contexts/MoneyContext";
import { useRemainingMoney, TOTAL_MONEY } from "../contexts/RemainingMoneyContext";

const Receipt = () => {
  const { items } = useMoney();
  const { remainingMoney } = useRemainingMoney();

  const filteredList = items.filter((item) => Number(item.quantity) > 0);

  const isClosed = filteredList.length === 0;

  const formatPrice = (price: number) => {
    if (price < 1000) {
      return `$${price}`;
    } else if (price < 1000000) {
      return `$${(price / 1000).toFixed(1).replace(/\.0$/, "")}k`;
    } else if (price < 1000000000) {
      return `$${(price / 1000000).toFixed(1).replace(/\.0$/, "")}m`;
    } else {
      return `$${(price / 1000000000).toFixed(1).replace(/\.0$/, "")}b`;
    }
  };

  const list = filteredList.map((item, index) => (
    <div key={index} className="flex w-full max-w-md justify-between">
      <div className="w-2/5">{item.name}</div>
      <div className="w-1/5 text-center">{`x${item.quantity}`}</div>
      <div className="w-1/5 text-right text-teal-500 font-semibold">
        {formatPrice(item.price * Number(item.quantity))}
      </div>
    </div>
  ));

  const totalSpent = TOTAL_MONEY - remainingMoney;

  return (
    <div className={`${isClosed ? "hidden" : ""} mx-auto max-w-4xl bg-white rounded-lg shadow-md p-6 mt-4`}>
      <h1 className="text-2xl font-bold mb-6 text-center">Your Receipt</h1>
      <div className="max-w-sm mx-auto">{list}</div>
      <div className="max-w-sm mx-auto mt-6 border-t border-gray-300 pt-4 flex justify-between">
        <p className="font-semibold text-lg">Total</p>
        <div className="font-semibold text-lg text-teal-500">
          {`${totalSpent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
        </div>
      </div>
    </div>
  );
};

export default Receipt;

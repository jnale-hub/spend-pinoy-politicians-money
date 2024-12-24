import { useMoney } from "../contexts/MoneyContext";
import Button from './Button';
import Input from "./Input";

const Items = () => {
  const { items } = useMoney();

  return (
    <div className="grid gap-4 min-[560px]:grid-cols-2 md:grid-cols-3">
      {items.map((item) => (
        <div key={item.id} className="w-full bg-white p-4">
          <img src={item.img} alt={item.name} className="mx-auto p-4 h-40" />
          <h2 className="text-center text-xl font-semibold">{item.name}</h2>
          <p className="text-center text-orange-600 font-semibold text-xl">${item.price}</p>

          <div className="grid grid-cols-3 gap-2 mt-4">
            <Button id={item.id} className="sellBtn">
              Sell
            </Button>

            <Input id={item.id} value={item.quantity} />

            <Button id={item.id} className="buyBtn">
              Buy
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;

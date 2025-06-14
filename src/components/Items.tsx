import { useEffect, useRef, useState } from "react";
import { useMoney } from "../contexts/MoneyContext";
import { formatMoney } from "../utils/formatMoney";
import Button from "./Button";

const Items = () => {
  const { items } = useMoney();
  const [animatingItems, setAnimatingItems] = useState<{[key: number]: boolean}>({});
  const prevQuantities = useRef<number[]>([]);

  useEffect(() => {
    // Initialize prev quantities on first render
    if (prevQuantities.current.length === 0) {
      prevQuantities.current = items.map(item => Number(item.quantity));
      return;
    }

    // Compare current quantities with previous
    items.forEach((item, index) => {
      const currentQuantity = Number(item.quantity);
      const prevQuantity = prevQuantities.current[index];

      if (currentQuantity !== prevQuantity) {
        setAnimatingItems(prev => ({ ...prev, [index]: true }));
        setTimeout(() => {
          setAnimatingItems(prev => ({ ...prev, [index]: false }));
        }, 1000);
      }
    });

    // Update previous quantities
    prevQuantities.current = items.map(item => Number(item.quantity));
  }, [items]);

  return (
    <div className="relative grid sm:gap-4 gap-3 grid-cols-2 md:grid-cols-3 px-1 sm:px-4">
      {items.map((item, index) => {
        const discountPercentage = item.oldPrice
          ? ((item.oldPrice - item.price) / item.oldPrice) * 100
          : 0;

        return (
          <div
            key={index}
            className="relative w-full bg-white rounded-lg shadow-md hover:shadow-lg"
          >
            <img
              src={item.img}
              alt={item.name}
              className="mx-auto aspect-square object-contain w-full"
            />
            <div className="sm:px-4 px-3 pt-4">
              <h2 className="text-sm md:text-lg leading-tight mb-1">
                {item.name}
              </h2>
              <p className="text-orange-600 font-semibold tetxt-xl md:text-2xl break-words leading-tight">
                {formatMoney(item.price)}
              </p>
              <div className="flex justify-right items-center gap-2 md:text-sm text-xs mb-2">
                {item.oldPrice && (
                  <span className="text-gray-400 line-through">
                    {formatMoney(item.oldPrice)}
                  </span>
                )}
                {item.oldPrice && (
                  <span className="">{discountPercentage.toFixed(2)}% off</span>
                )}
              </div>
            </div>
            <div className="sm:px-4 px-3 pb-4">
              <div className="grid grid-cols-2 sm:gap-4 gap-2">
              <Button index={index} className="sellBtn">
  Sell
</Button>
                <Button index={index} className="buyBtn">
                  Buy
                </Button>
              </div>
            </div>
            {Number(item.quantity) > 0 && (
              <div className="absolute top-2 right-2">
                {animatingItems[index] && (
                  <div className="absolute animate-ping bg-red-500 rounded-full size-6 opacity-75"></div>
                )}
                <div className="relative bg-red-500 text-white rounded-full size-6 flex items-center justify-center text-xs shadow-md">
                  {item.quantity}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Items;

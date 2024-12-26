import { useMoney } from "../contexts/MoneyContext";
import { useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useRemainingMoney, TOTAL_MONEY } from "../contexts/RemainingMoneyContext";
import { formatMoney } from "../utils/formatMoney";

const AccountLimit = () => {
  const { remainingMoney, setRemainingMoney } = useRemainingMoney();
  const { items } = useMoney();

  useEffect(() => {
    const totalExpense = items.reduce(
      (acc, currentValue) =>
        acc + currentValue.price * Number(currentValue.quantity),
      0
    );
    setRemainingMoney(TOTAL_MONEY - totalExpense);
  }, [items, setRemainingMoney]);

  const remainingPercentage = (remainingMoney / TOTAL_MONEY) * 100;

  const { number } = useSpring({
    from: { number: TOTAL_MONEY },
    number: remainingMoney,
    delay: 0,
    config: { mass: 1, tension: 210, friction: 20 },
  });

  return (
    <div className="my-4 sticky top-0">
      <div className="relative w-full h-20 bg-slate-300 overflow-hidden rounded-lg shadow-md">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-b from-orange-500 to-orange-600 transition-all duration-1000 ease-out rounded-lg shadow-md"
          style={{ width: `${remainingPercentage}%` }}
        ></div>
        <div className="relative z-10 text-slate-50 p-6 text-4xl font-semibold text-center">
          <animated.span>
            {number.to((n) => formatMoney(n))}
          </animated.span>
        </div>
      </div>
    </div>
  );
};

export default AccountLimit;

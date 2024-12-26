export const formatMoney = (amount: number): string => {
  return `₱${amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
};

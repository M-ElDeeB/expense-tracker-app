import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts
    .reduce((acc, item) => {
      return acc += item;
    }, 0)
    .toFixed(2);
    
  return (
    <div className="balance">
      <span>your balance</span>
      <h2>${total}</h2>
    </div>
  );
};

export default Balance;

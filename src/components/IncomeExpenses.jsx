import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map((transaction) => transaction.amount);
  const income = amount
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expens = (
    amount.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="IncomeExpenses">
      <div className="income">
        <span>income</span>
        <span className="money plus">${income}</span>
      </div>
      <div className="expense">
        <span>Expense</span>
        <span className="money minus">${expens}</span>
      </div>
    </div>
  );
};

export default IncomeExpenses;

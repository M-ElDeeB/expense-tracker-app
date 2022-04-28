import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
 

  return (
    <div className="TransactionList">
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction,index) => (
          <Transaction key={index} transactions={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;

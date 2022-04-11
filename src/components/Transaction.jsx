import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transactions }) => {
  const { id, text, amount } = transactions;
  const { deleteTransction } = useContext(GlobalContext);
  const sign = amount < 0 ? "-" : "+";
  return (
    <>
      <li className={amount < 0 ? "minus" : "plus"}>
        {text}{" "}
        <span>
          {sign}${Math.abs(amount)}
        </span>
        <button className="delete-btn" onClick={(e) => deleteTransction(id)}>
          x
        </button>
      </li>
    </>
  );
};

export default Transaction;

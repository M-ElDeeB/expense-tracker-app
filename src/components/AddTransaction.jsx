import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");


  const { addTransction } = useContext(GlobalContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const transaction = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: +amount,
    };
    
  
    addTransction(transaction);
  };


  return (
    <div className="add-trans">
      <h3>Add new trnsaction</h3>
      <form onSubmit={onSubmitHandler}>
        <div className="form-control">
          <label htmlFor="">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </div>
        <button className="del-btn">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;

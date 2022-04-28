import { createContext, useEffect, useReducer, useState } from "react";
import AppReducer from "./AppReducer";

const INITIAL_STATE = {
  transactions:
    JSON.parse(localStorage.getItem("transactions")) == null
      ? []
      : JSON.parse(localStorage.getItem("transactions")),
};

const GlobalContext = createContext(INITIAL_STATE);

const GlobalStateProvicer = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state.transactions));
  }, [state.transactions]);

  const deleteTransction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  const addTransction = (transaction) => {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransction,
        addTransction,
        
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export { GlobalContext, GlobalStateProvicer };

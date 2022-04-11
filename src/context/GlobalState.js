import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const INITIAL_STATE = {
  transactions: [],
};

export const GlobalContext = createContext(INITIAL_STATE);

export const GlobalStateProvicer = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);

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

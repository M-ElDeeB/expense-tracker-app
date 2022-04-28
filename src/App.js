
import "./App.css";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Header from "./components/Header";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";


function App() {
 

  console.log("app component");
  return (
      <div className="container">
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
  );
}

export default App;

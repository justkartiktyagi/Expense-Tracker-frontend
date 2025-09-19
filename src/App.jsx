import { TransactionProvider } from "../src/context/reactContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header.jsx";
import Balance from "./Components/Balance.jsx";
import IncomeExpense from "./Components/IncomeExpense.jsx";
import AddBalance from "./Components/addBalance.jsx";
import TransactionList from "./Components/TransactionList.jsx";
import TransactionGraph from "./Components/TransactionGraph"; // adjust path if needed

function App() {
  return (
    <TransactionProvider>
      <Header />
      <Balance />
      <IncomeExpense />
      <AddBalance />
      <TransactionList />
      <div className="bg-white rounded-xl shadow-md p-4 mt-6 graph">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 graphText">
          Income vs Expense
        </h2>
        <TransactionGraph />
      </div>
    </TransactionProvider>
  );
}

export default App;

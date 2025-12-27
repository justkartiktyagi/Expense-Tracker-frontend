import { TransactionProvider } from "./context/reactContext.jsx";
import { AuthProvider } from "./context/authContext.jsx";
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
    <AuthProvider>
      <TransactionProvider>
        <div className="app-wrapper">
          <Header />
          <div className="app-container">
            <div className="content-grid">
              <Balance />
              <IncomeExpense />
            </div>
            <AddBalance />
            <TransactionList />
            <div className="graph-container">
              <h2 className="graph-title">📊 Income vs Expense</h2>
              <TransactionGraph />
            </div>
          </div>
        </div>
      </TransactionProvider>
    </AuthProvider>
  );
}

export default App;

import Transaction from "./Transaction";
import { useContext } from "react";
import { TransactionContext } from "../context/reactContext.jsx";

const TransactionList = () => {
  const { transactions } = useContext(TransactionContext);
  const reversedTransactions = [...transactions].reverse();
  return (
    <div className="transaction-list shadow p-6">
      <h2 className="Transiction_hist">Transaction History</h2>

      {transactions.length === 0 ? (
        <div className="empty-state">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
            alt="No Transactions"
            className="empty-image"
          />
          <p className="empty-text">
            No transactions yet. Add one to get started!
          </p>
        </div>
      ) : (
        <Transaction transactions={reversedTransactions} />
      )}
    </div>
  );
};

export default TransactionList;

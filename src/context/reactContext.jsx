import { createContext, useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "./authContext.jsx";
import { apiFetch } from "../utils/api";

// Create the context
export const TransactionContext = createContext();

// Create the Provider component
export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    if (!token) return;

    const fetchExpenses = async () => {
      const data = await apiFetch("/expense", token);
      setTransactions(data);
    };

    fetchExpenses();
  }, [token]);

  // Add a new transaction
  const addTransaction = async (title, amount, category) => {
    const newTransaction = {
      title,
      amount: parseFloat(amount),
      category,
      location: {
        lat: 28.6139 + Math.random() * 0.05, // mock lat near Delhi
        lng: 77.209 + Math.random() * 0.05, // mock lng near Delhi
      },
    };

    try {
      const data = await apiFetch("/expense", {
        method: "POST",
        body: JSON.stringify(newTransaction),
      });

      setTransactions((prev) => [...prev, data]);
    } catch (err) {
      console.error("Add expense failed:", err.message);
    }
  };

  // Delete a transaction
  const handleDeleteTransaction = async (id) => {
    try {
      await apiFetch(`/expense/${id}`, {
        method: "DELETE",
      });

      setTransactions((prev) => prev.filter((t) => t._id !== id));
    } catch (err) {
      console.error("Delete failed:", err.message);
    }
  };

  // Calculate income and expense
  const income = transactions.filter((t) => t.amount > 0).map((t) => t.amount);
  const expense = transactions.filter((t) => t.amount < 0).map((t) => t.amount);
  const Income_sum = income.reduce((acc, curr) => acc + curr, 0);
  const Expense_sum = expense.reduce((acc, curr) => acc + curr, 0);
  const Balance = Income_sum + Expense_sum;

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        addTransaction,
        handleDeleteTransaction,
        Balance,
        Income_sum,
        Expense_sum,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

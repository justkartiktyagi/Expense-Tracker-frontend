import { createContext, useState, useEffect } from "react";

// Create the context
export const TransactionContext = createContext();

// Create the Provider component
export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  const BASE_URL =
    "https://expense-tracker-backend-1-emhh.onrender.com/expense";

  // Fetch all transactions
  useEffect(() => {
    fetch(`${BASE_URL}/`)
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data);
      })
      .catch((err) => console.error("Error fetching expenses:", err));
  }, []);

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

    const response = await fetch(`${BASE_URL}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTransaction),
    });

    if (!response.ok) {
      console.error("Failed to add transaction");
      return;
    }

    const data = await response.json();
    console.log("New expense added:", data);
    setTransactions([...transactions, data]);
  };

  // Delete a transaction
  const handleDeleteTransaction = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete transaction");
    }

    setTransactions((prev) => prev.filter((t) => t._id !== id));
    console.log("Transaction deleted successfully");
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

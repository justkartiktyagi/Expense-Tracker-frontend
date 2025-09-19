import { createContext, useState } from "react";

// Create the context
export const TransactionContext = createContext();

// Create the Provider component
export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  // Add a new transaction
  const addTransaction = (text, amount, category) => {
    const newTransaction = {
      id: Date.now(),
      text: text,
      amount: parseFloat(amount),
      category: category,
      location: {
        lat: 28.6139 + Math.random() * 0.05, // mock lat near Delhi
        lng: 77.209 + Math.random() * 0.05, // mock lng near Delhi
      },
    };
    setTransactions([...transactions, newTransaction]);
  };

  const income = transactions.filter((t) => t.amount > 0).map((t) => t.amount);
  const expense = transactions.filter((t) => t.amount < 0).map((t) => t.amount);
  const Income_sum = income.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const Expense_sum = expense.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const Balance = Income_sum + Expense_sum;
  return (
    <TransactionContext.Provider
      value={{ transactions, addTransaction, Balance, Income_sum, Expense_sum }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

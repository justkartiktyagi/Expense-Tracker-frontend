import { useContext, useState } from "react";
import "./AddBalance.css";
import { TransactionContext } from "../context/reactContext.jsx";

const AddBalance = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const { addTransaction } = useContext(TransactionContext);
  const handleIncomeSubmit = (text, amount, category) => {
    addTransaction(text, amount, category);
    setText("");
    setAmount("");
    setCategory("");
  };
  const handleExpenseSubmit = (text, amount, category) => {
    amount = -amount;
    addTransaction(text, amount, category);
    setText("");
    setAmount("");
    setCategory("");
  };
  return (
    <div className="add-balance-container">
      <h3>Add New Transaction</h3>
      <form>
        <div className="form-control">
          <label>Description</label>
          <input
            type="text"
            value={text}
            placeholder="Enter description..."
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>
            Amount <br />
          </label>
          <input
            type="number"
            value={amount}
            placeholder="Enter amount..."
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="fruits">Choose a category:</label>
          <select
            id="fruits"
            name="selected_fruit"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>
              -- Select an option --
            </option>
            <option value="food">Food</option>
            <option value="shopping">Shopping</option>
            <option value="travel">Travel</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="submitButton">
          <button
            className="add-btn"
            onClick={(e) => {
              e.preventDefault();
              handleIncomeSubmit(text, amount, category);
            }}
          >
            Income
          </button>
          <button
            className="add-btn-expense"
            onClick={(e) => {
              e.preventDefault();
              handleExpenseSubmit(text, amount, category);
            }}
          >
            Expense
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBalance;

import { useContext } from "react";
import { TransactionContext } from "../context/reactContext.jsx";

const IncomeExpense = () => {
  const { Income_sum, Expense_sum } = useContext(TransactionContext);
  return (
    <div className="IncomeExpenses">
      <div>
        <h4 className="headie">💵 Income</h4>
        <p className="income">₹ {Income_sum.toLocaleString()}</p>
      </div>
      <div>
        <h4 className="headie">💸 Expense</h4>
        <p className="expense">₹ {Expense_sum.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;

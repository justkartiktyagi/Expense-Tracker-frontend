import { useContext } from "react";
import { TransactionContext } from "../context/reactContext.jsx";

const IncomeExpense = () => {
  const { Income_sum, Expense_sum } = useContext(TransactionContext);
  return (
    <div className="IncomeExpenses bg-white rounded-lg shadow p-6 text-center my-6">
      <div className="text-center">
        <h4 className="text-sm text-gray-500 headie">Income</h4>
        <p className="income text-lg">₹ {Income_sum}</p>
      </div>
      <div className="text-center">
        <h4 className="text-sm text-gray-500 headie">Expense</h4>
        <p className="expense text-lg">₹ {Expense_sum}</p>
      </div>
    </div>
  );
};

export default IncomeExpense;

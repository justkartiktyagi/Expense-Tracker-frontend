import { useContext } from "react";
import { TransactionContext } from "../context/reactContext.jsx";

const Balance = () => {
  const { Balance } = useContext(TransactionContext);
  return (
    <div className="balance bg-white rounded-lg shadow p-6 text-center my-6">
      <h2 className="balance-heading "> Balance </h2>
      <h2 className="balance-amount">₹ {Balance}</h2>
    </div>
  );
};

export default Balance;

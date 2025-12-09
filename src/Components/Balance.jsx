import { useContext } from "react";
import { TransactionContext } from "../context/reactContext.jsx";

const Balance = () => {
  const { Balance } = useContext(TransactionContext);
  return (
    <div className="balance">
      <h2 className="balance-heading">Your Balance</h2>
      <h2 className="balance-amount">₹ {Balance.toLocaleString()}</h2>
    </div>
  );
};

export default Balance;

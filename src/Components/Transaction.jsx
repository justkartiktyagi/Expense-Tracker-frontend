const Transaction = ({ transactions }) => {
  return (
    <div>
      {transactions.map((transaction_ser) => (
        <div className="Transaction" key={transaction_ser.id}>
          <h2 style={{ color: "#1E2939" }}>{transaction_ser.text}</h2>

          <p
            className={
              transaction_ser.amount < 0 ? "text-red-500" : "text-green-500"
            }
          >
            Amount: {transaction_ser.amount}
          </p>

          <p className="text-gray-500">Category: {transaction_ser.category}</p>
        </div>
      ))}
    </div>
  );
};

export default Transaction;

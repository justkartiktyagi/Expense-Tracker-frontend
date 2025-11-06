import { Trash2 } from "lucide-react";

const Transaction = ({ transactions, onDelete }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
      <ul className="divide-y divide-gray-200">
        {transactions.map((transaction) => (
          <li
            key={transaction._id}
            className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-all"
          >
            <div className="flex flex-col">
              <span className="text-[#1E2939] font-medium">
                {transaction.title}
              </span>
              <span className="text-gray-500 text-sm">
                Category: {transaction.category}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span
                className={`font-semibold ${
                  transaction.amount < 0 ? "text-red-500" : "text-green-600"
                }`}
              >
                ₹ {Math.abs(transaction.amount).toLocaleString()}
              </span>

              <button
                onClick={() => onDelete(transaction._id)}
                className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white rounded-md px-2 py-1 text-sm font-medium transition"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transaction;

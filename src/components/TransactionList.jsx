import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

const TransactionList = () => {
  const { transactions, deleteTransaction } = useContext(GlobalContext);
  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className={transaction.amount < 0 ? 'minus' : 'plus'}
          >
            {transaction.text} <span>{transaction.amount}</span>
            <button
              className="delete-btn"
              onClick={() => deleteTransaction(transaction.id)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;

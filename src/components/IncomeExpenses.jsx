import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  //   const plus = transactions.foreach((transaction) => transaction.amount);

  const plus = transactions.reduce(
    (acc, transaction) =>
      transaction.amount >= 0 ? acc + transaction.amount : acc,
    0
  ).toFixed(2);
  const minus = transactions.reduce(
    (acc, transaction) =>
      transaction.amount < 0? acc + Math.abs(transaction.amount) : acc,
    0
).toFixed(2);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +${plus}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -${minus}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpenses;

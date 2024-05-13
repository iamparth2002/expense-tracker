import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.reduce((acc, item) => {
    return acc + item.amount;
  }, 0).toFixed(2);
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${amount}</h1>
    </>
  );
};

export default Balance;

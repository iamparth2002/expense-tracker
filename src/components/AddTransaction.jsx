import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState('')

    const {addTransaction} = useContext(GlobalContext)

    const onSubmit=(e)=>{   


        e.preventDefault()
        if(amount==''){
            alert('Please add amount')
            return
        }
        if(text==='' ){
            alert('Please add text')
            return
        }
        if(text === '' || amount==''){
            alert('Please add text and amount')
            return
        }
        
        const newTransaction = {
            id: Math.floor(Math.random()*10000),
            text,
            amount:Number(amount)
        }
        addTransaction(newTransaction)
        setText('')
        setAmount('')
    }
  return (
    <div>
      <h3>Add new transaction</h3>
      <form id="form" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" placeholder="Enter text..."value={text} onChange={e=>setText(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" id="amount" placeholder="Enter amount..." value={amount} onChange={e=>setAmount(e.target.value)}/>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;

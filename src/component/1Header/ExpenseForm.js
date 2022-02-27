import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    
        const [title,setTitle] = useState('');
        const [amount,setAmount] = useState('');
        const [date,setDate] = useState('');

        const AddTitleChange = (e) => {
            setTitle(e.target.value)
        }
        const AddAmountChange = (e) => {
            setAmount(e.target.value)
        }
        const AddDateChange = (e) => {
            setDate(e.target.value)
        }
        const AddExpenses = (e) => {
            e.preventDefault();

            const expenseData = {
                title: title,
                amount: amount,
                date: new Date(date)
            }
            props.OnSaveExpenseData(expenseData);
            setTitle('');
            setAmount('');
            setDate('');
        }
    return (
            <form onSubmit={AddExpenses}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                     <label>Title:</label>
                     <input type='text' value={title} onChange={AddTitleChange} />
                    </div>
                    <div className='new-expense__control'>
                     <label>Amount:</label>
                     <input type='number' min='0.01' step='0.01' value={amount} onChange={AddAmountChange} />
                    </div>
                    <div className='new-expense__control'>
                     <label>Date:</label>
                     <input type='date' value={date} onChange={AddDateChange} min='2017-01-01' max='2021-12-31' />
                    </div> 
                    <div className='new-expense__actions'>
                      <button type='submit' className='btn btn-primary'>Submit</button>
                    </div>
                </div>
            </form>
           );
    
};

export default ExpenseForm;
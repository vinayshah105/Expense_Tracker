import React from 'react';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const AddSaveExpenseData = (enterExpenseData) => {
        const ExpenseData = {
            ...enterExpenseData
        } ;
        props.onSaveNewExpense(ExpenseData)
    };
    return (
        <div>
            <ExpenseForm OnSaveExpenseData = {AddSaveExpenseData} />
        </div>
    );
};

export default NewExpense;
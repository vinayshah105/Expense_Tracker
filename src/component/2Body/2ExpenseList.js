import React from 'react';
import './2ExpenseList.css';
import ExpenseDate from './3ExpenseDate';

const ExpenseList = (props) => {
    
    return (
            <div className='expense-item'>
                <ExpenseDate date = {props.Date} />
                <div className='expense-item-product'>
                   <h2 className='expense-item'>{props.Title}</h2>
                   <div className='expense-item-price'>${props.Amount}</div>
                </div>
            </div>
    );
};

export default ExpenseList;
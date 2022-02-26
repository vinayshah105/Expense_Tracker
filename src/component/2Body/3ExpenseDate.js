import React from 'react';
import './3ExpenseDate.css';

const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('hi-IN', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {month: '2-digit'});
    const year = props.date.getFullYear();
    return (
        <div className='expense-date'>
          <div className='expense-date-month'>{month}</div>      
          <div className='expense-date-year'>{year}</div>      
          <div className='expense-date-day'>{day}</div>      
        </div>
    );
};

export default ExpenseDate;

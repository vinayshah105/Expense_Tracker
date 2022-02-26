import React, { useState } from 'react';
import './2ExpenseList.css';
import ExpenseDate from './3ExpenseDate';

const ExpenseList = (props) => {
    const [title, setTitle] = useState(props.Title);

    const onTitleChange = () => {
        setTitle('Vinay');
        console.log(title);
    };

    return (
            <div className='expense-item'>
                <ExpenseDate date = {props.Date} />
                <div className='expense-item-product'>
                   <h2 className='expense-item'>{title}</h2>
                   <div className='expense-item-price'>${props.Amount}</div>
                </div>
                <button onClick={onTitleChange}>Change Title</button>
            </div>
    );
};

export default ExpenseList;
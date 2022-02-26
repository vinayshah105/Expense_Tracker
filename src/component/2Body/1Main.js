import React from 'react';
import ExpenseList from './2ExpenseList';

const Main = (props) => {
    return (
        <div className='expenses'>
            <ExpenseList Date={props.items[0].date} Title={props.items[0].title} Amount= {props.items[0].amount} />
            <ExpenseList Date={props.items[1].date} Title={props.items[1].title} Amount= {props.items[1].amount} />
            <ExpenseList Date={props.items[2].date} Title={props.items[2].title} Amount= {props.items[2].amount} />
            <ExpenseList Date={props.items[3].date} Title={props.items[3].title} Amount= {props.items[3].amount} />
        </div>
    );
};

export default Main;
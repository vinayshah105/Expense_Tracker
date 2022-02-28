import React, {useState} from 'react';
import ExpenseList from './2ExpenseList';
import ExpenseFilter from './4ExpenseFilter';

const Main = (props) => {
    const [filteredYear, setFilteredYear] = useState('2017');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    };
    return (
        <div className='expenses'>
        <ExpenseFilter selected={filteredYear} onChangeFilter= {filterChangeHandler} />
        
        {props.items.map((expense) => (
            <ExpenseList 
            Date= {expense.date}
            Title = {expense.title} 
            Amount = {expense.amount} />
        ))}
        </div>
    );
};

export default Main;
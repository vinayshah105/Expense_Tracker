import React, {useState} from 'react';
import ExpenseList from './2ExpenseList';
import ExpenseFilter from './4ExpenseFilter';


const Main = (props) => {
    const [filteredYear, setFilteredYear] = useState('2017');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    return (
        <div className='expenses'>
        <ExpenseFilter 
          selected={filteredYear} 
          onChangeFilter= {filterChangeHandler} />
        
        {filteredExpenses.length === 0 ? ( <p>No Expense Found</p> ) : 
        (
        filteredExpenses.map((expense) => (
            <ExpenseList 
            key= {expense.id}
            Date= {expense.date}
            Title = {expense.title} 
            Amount = {expense.amount} />
        ))
        )}
        </div>
    );
};

export default Main;
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
            <ExpenseList Date={props.items[0].date} Title={props.items[0].title} Amount= {props.items[0].amount} />
            <ExpenseList Date={props.items[1].date} Title={props.items[1].title} Amount= {props.items[1].amount} />
            <ExpenseList Date={props.items[2].date} Title={props.items[2].title} Amount= {props.items[2].amount} />
            <ExpenseList Date={props.items[3].date} Title={props.items[3].title} Amount= {props.items[3].amount} />
        </div>
    );
};

export default Main;
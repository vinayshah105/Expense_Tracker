import React, { useState } from 'react';
import Main from './component/2Body/1Main';
import './App.css';
import NewExpense from './component/1Header/NewExpense';

const expense1 = [
  {id:1, title:'Grocery', amount:500.25, date: new Date('may-10-2020')},
  {id:2, title:'Furniture', amount:750.45, date: new Date('jan-05-2020')},
  {id:3, title:'Fashion', amount:200, date: new Date('Aug-12-2020')},
  {id:4, title:'Gas', amount:125.80, date: new Date('jun-25-2020')}
] 

const App = () => {
    const [expenses, setExpenses] = useState(expense1);

  const AddSaveNewExpense = (expense) => {
  //  console.log(expense);
  setExpenses((prevExpenses) => {
    return [expense, ...prevExpenses]
  });
}
  
  return ( 
    <div>
      <h2 className='MainHead'>ExPense Tracker</h2>
      <NewExpense onSaveNewExpense = {AddSaveNewExpense} />
      <Main items={expenses} />
    </div>
  );
}
export default App;
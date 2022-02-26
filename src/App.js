import React from 'react';
import Main from './component/2Body/1Main';
import './App.css';

function App() {
   
  const expense = [
    {id:1, title:'Grocery', amount:500.25, date: new Date('may-10-2020')},
    {id:2, title:'Furniture', amount:750.45, date: new Date('jan-05-2020')},
    {id:3, title:'Fashion', amount:200, date: new Date('Aug-12-2020')},
    {id:4, title:'Gas', amount:125.80, date: new Date('jun-25-2020')}
  ]
  return ( 
    <div>
      <h2 className='MainHead'>ExPense Tracker</h2>
      <Main items={expense} />
    </div>
  );
}

export default App;

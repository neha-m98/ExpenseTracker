import './App.css';
import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';

const DUMMY_EXPENSES=[
  {id:'e1',title:'Car Insurance', amount:500.78,date:new Date(2021,2,28)},
  {id:'e2',title:'Home Loan', amount:1200.34,date:new Date(2022,3,15)},
  {id:'e3',title:'Health Insurance', amount:200.78,date:new Date(2020,7,8)},
   {id:'e3',title:'Car Loan', amount:200.78,date:new Date(2022,9,8)},
   {id:'e3',title:'Medical Insurance', amount:200.78,date:new Date(2022,9,8)},
  {id:'e4',title:'life Insurance', amount:350.67,date:new Date(2019,7,2)},
  {id:'e4',title:'Vacation', amount:700.67,date:new Date(2021,7,2)}
]

const App = () =>{
  const [expenses,setExpenses]=useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense =>{
    setExpenses((prevExpenses)=>{
       return [expense,...prevExpenses];
    });
  }

  
  return (
    <>
    <h1>Expense Tracker</h1>
    <NewExpense onAddExpense={addExpenseHandler}/>
   <Expenses items={expenses}/>
   </>
  )
}

export default App;

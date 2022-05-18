import React from 'react'
import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
const dropDownChangeHandler = (event) =>{
   props.onFilterChange(event.target.value);
}
  return (
    <div className='expense-filter'>
    <div className='expense-filter__control'>
    <label className='label'>Filter by year</label>
    <div className='selectBox'>
    <select onChange={dropDownChangeHandler} value={props.selected}>
    <option value="2022">2022</option>
    <option value="2021">2021</option>
    <option value="2020">2020</option>
    <option value="2019">2019</option>
    </select>
    </div>
    </div>
    </div>
  )
}

export default ExpenseFilter;
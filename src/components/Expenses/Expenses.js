import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredState, setFilteredState] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredState(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredState;
  });

  return (
    <div className="App">
      <Card className="expenses">
        <ExpenseFilter
          onFilterChange={filterChangeHandler}
          selected={filteredState}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;

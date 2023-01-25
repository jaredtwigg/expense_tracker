import { useState } from "react";
import ExpensesList from "../expensesFilter/ExpensesList";
import ExpensesFilter from "../expensesFilter/ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2023");

  const filterChangeHandler = (selectedfilter) => {
    setFilterYear(selectedfilter);
  };

  const filteredExpenses = props.item.filter(expense => {
      if(filterYear === 'all') return expense;

      return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;

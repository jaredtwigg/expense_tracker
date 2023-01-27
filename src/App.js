import { useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expenseData) => {
    setExpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses]
    });
  }

  const handleDelete = (itemId) => {
    console.log(itemId);
    setExpenses(expenses.filter(expense => expense.id !== itemId));
    console.log("AFTER", expenses);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} onDelete={handleDelete} />
    </div>
  );
}

export default App;

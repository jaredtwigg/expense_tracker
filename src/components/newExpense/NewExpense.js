import { useState } from "react";
import NewExpenseForm from "./NewExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [visible, setVisible] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(1000 + Math.random() * 9000),
    };

    setVisible(false);

    props.onAddExpense(expenseData);
  };

  const showHideExpenseForm = () => {
    setVisible(!visible);
  };

  return (
    <div className="new-expense">
      {!visible && <button onClick={showHideExpenseForm}>Add New Expense</button>}
      {visible && <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} hideForm={showHideExpenseForm} />}
    </div>
  );
};

export default NewExpense;

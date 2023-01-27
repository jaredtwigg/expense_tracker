import ExpenseItem from "../expenses/ExpenseItem";
import "./ExpensesList.css"

const ExpensesList = (props) => {
  if (props.items.length === 0) {
      return <h2 className="expenses-list__fallback">Found no expenses.</h2>
  }

  return <ul className="expenses-list">
      {props.items.map((expense) => (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        key={expense.id}
        id={expense.id}
        onDelete={() => {props.onDelete(expense.id)}}
      />))}
  </ul>
};

export default ExpensesList;

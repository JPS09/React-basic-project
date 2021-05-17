import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

/* Shorter way than ternary:
    {filteredExpenses.length === 0 && <p>No displayable expenses</p>}
    {filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))} */
function ExpenseList(props) {
  // We can conditionnaly return different jsx code
  if (props.data.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }
  // If first if not met, display all
  return (
    <ul className="expenses-list">
      {props.data.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}

export default ExpenseList;

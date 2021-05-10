import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2021, 5, 10);
  const expenseDescription = "A Spending";
  const expenseAmount = 268.12;
  return (
    <div className="expense-item">
      <div>{expenseDate.getUTCDate}</div>
      <div className="expense-item__description">
        <h2>{expenseDescription}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

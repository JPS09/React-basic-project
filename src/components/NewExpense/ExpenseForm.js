import "./ExpenseForm.css";

function ExpenseForm() {
  return (
    <form action="">
      <div className="expense-form__controls">
        <div className="expense-form__control">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="expense-form__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="expense-form__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className="expense-form__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.js";
import { useState } from "react";

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onNewExpense(expenseData);
    setDisplaygFlag(false);
  };

  const [displayFlag, setDisplaygFlag] = useState(true);
  const displayHandler = () => {
    setDisplaygFlag(!displayFlag);
  };

  return (
    <div className="new-expense">
      {displayFlag && <button onClick={displayHandler}>Add new expense</button>}
      {!displayFlag && (
        <ExpenseForm
          cancelHandler={displayHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        ></ExpenseForm>
      )}
    </div>
  );
}

export default NewExpense;

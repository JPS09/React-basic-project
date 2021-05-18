import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // 1.Merging the above states into one
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredDate: "",
  //   enteredAmount: "",
  // });
  // 1.1 [Can Fail] The three states needs to be updated each time to avoid losing a part of it
  // setUserInput({
  //   ...userInput,
  //   enteredTitle: "",
  // });
  // 2. [Best Practice] Correct way of doing this
  // setUserInput((prevState)=>{
  //   return {...prevState, enteredTitle: event.target.value}
  // })
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.currentTarget.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.currentTarget.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.currentTarget.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // Merging all date into one object
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    console.log(expenseData);
    // Resetting input field to empty
    setEnteredDate("");
    setEnteredTitle("");
    setEnteredAmount("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle} //Two way binding
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount} //Two way binding
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate} //Two way binding
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.cancelHandler}>
          Cancel
        </button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;

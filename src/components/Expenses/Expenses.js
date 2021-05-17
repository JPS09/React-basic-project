import ExpenseItem from "./ExpenseItem.js";
import ExpenseFilter from "./ExpenseFilter.js";
import Card from "../Card.js";
import "./Expenses.css";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filteredExpenses = props.data.filter(
    (expense) => expense.date.getFullYear() === parseInt(filteredYear,10)
  );
  const selectedYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(filteredExpenses)
  };
  return (
    <Card className="expenses">
      <ExpenseFilter
        onSelectedYear={selectedYearHandler}
        selected={filteredYear}
      ></ExpenseFilter>
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;

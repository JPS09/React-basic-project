import ExpenseItem from "./ExpenseItem.js";
import ExpenseFilter from "./ExpenseFilter.js";
import Card from "../Card.js";
import "./Expenses.css";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const selectedYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpenseFilter
        onSelectedYear={selectedYearHandler}
        selected={filteredYear}
      ></ExpenseFilter>
      {props.data.map((expense) => (
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

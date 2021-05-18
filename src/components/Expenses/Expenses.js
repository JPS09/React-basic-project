import ExpenseList from "./ExpenseList.js";
import ExpenseFilter from "./ExpenseFilter.js";
import ExpensesChart from "./ExpensesChart.js";
import Card from "../Card.js";
import "./Expenses.css";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filteredExpenses = props.data.filter(
    (expense) => expense.date.getFullYear() === parseInt(filteredYear, 10)
  );
  const selectedYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpenseFilter
        onSelectedYear={selectedYearHandler}
        selected={filteredYear}
      ></ExpenseFilter>
      <ExpenseList data={filteredExpenses} />
    </Card>
  );
}

export default Expenses;

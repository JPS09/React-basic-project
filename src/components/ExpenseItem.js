import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "./Card.js";

function ExpenseItem(props) {
  let title = props.title;

  const clickHandler = () => {
    console.log("Much click");
    title = "Changing the title";
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
        <button onClick={clickHandler}>This a test</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;

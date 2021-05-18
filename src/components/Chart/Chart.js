import ChartBar from "./CharBar.js";
import "./Chart.css";

function Chart(props) {
  const dataElementValues = props.dataElements.map(
    (dataElement) => dataElement.value
  );
  const maxValue = Math.max(...dataElementValues);
  return (
    <div className="chart">
      {props.dataElements.map((dataElement) => (
        <ChartBar
          key={dataElement.label}
          value={dataElement.value}
          maxValue={maxValue}
          label={dataElement.label}
        />
      ))}
    </div>
  );
}

export default Chart;

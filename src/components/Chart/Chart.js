import ChartBar from "./CharBar.js";
import "./Chart.css";

function Chart(props) {
  return (
    <div className="chart">
      {props.dataElements.map((dataElement) => (
        <ChartBar
          key={dataElement.label}
          value={dataElement.value}
          maxValue={null}
          label={dataElement.label}
        />
      ))}
    </div>
  );
}

export default Chart;

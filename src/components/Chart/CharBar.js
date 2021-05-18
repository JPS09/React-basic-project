function ChartBar(props) {
  let barFillHeight = "0%";

  if (props.max > 0) {
    barFillHeight = `${Math.round((props.value / props.max) * 100)}%`;
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          // For two words css properties 2 solutions :
          // 1. 'two-words' property between quotes
          // 2. twoWords in camelCase
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="char-bar__label">{props.label}</div>
    </div>
  );
}

export default ChartBar;

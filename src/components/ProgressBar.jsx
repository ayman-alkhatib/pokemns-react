function ProgressBar({ statName, progress, color, maxValue }) {
  return (
    <>
      <span className="stat-name">
        {statName} {progress}/{maxValue}
      </span>
      <div className="progress-bar">
        <div
          className="progress"
          style={{
            width: `${(progress / maxValue) * 100}%`,
            backgroundColor: color,
          }}
        ></div>
      </div>
    </>
  );
}
export default ProgressBar;

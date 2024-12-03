import styles from "./ProgressBar.module.css";
function ProgressBar({ statName, progress, color, maxValue }) {
  return (
    <>
      <span>
        {statName} {progress}/{maxValue}
      </span>
      <div className={styles.progressBar}>
        <div
          className={styles.progress}
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

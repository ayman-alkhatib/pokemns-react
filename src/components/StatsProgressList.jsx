import ProgressBar from "./ProgressBar";

function StatsProgressList({ detailsData }) {
  return (
    <ul className="stats-list">
      {detailsData.stats.map((stat) => (
        <li key={stat.statName}>
          <ProgressBar
            statName={stat.statName}
            progress={stat.baseStat}
            color={"red"}
            maxValue={stat.maxValue}
          />
        </li>
      ))}
    </ul>
  );
}

export default StatsProgressList;

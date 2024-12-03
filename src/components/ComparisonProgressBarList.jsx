import ComparisonProgressBar from "./ComparisonProgressBar";
import styles from "./ComparisonProgressBarList.module.css";
function ComparisonProgressBarList({ firstPokemon, secondPokemon }) {
  [firstPokemon, secondPokemon] = getTheWiner(firstPokemon, secondPokemon);
  return (
    <div className={styles.progressList}>
      {firstPokemon.map((stat, i) => (
        <ComparisonProgressBar
          firstPokemon={{
            statName: stat.statName,
            progress: stat.baseStat,
            color: "blue",
          }}
          secondPokemon={{
            statName: secondPokemon[i].statName,
            progress: secondPokemon[i].baseStat,
            color: "brown",
          }}
          maxValue={stat.maxValue}
          key={stat.statName}
        />
      ))}
    </div>
  );
}

export default ComparisonProgressBarList;

function getTheWiner(first, second) {
  const isFirstWin =
    first.reduce((prev, curStat, i) => {
      if (curStat.baseStat > second[i].baseStat) {
        return prev + 1;
      } else if (curStat.baseStat < second[i].baseStat) {
        return prev - 1;
      }
      return prev;
    }, 0) > 0;
  if (!isFirstWin) {
    [first, second] = [second, first];
  }
  return [first, second];
}

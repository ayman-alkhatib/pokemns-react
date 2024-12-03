import styles from "./ComparisonProgressBar.module.css";
function ComparisonProgressBar({ firstPokemon, secondPokemon }) {
  return (
    <div className={styles.statProgress}>
      <span className={styles.statName}>{secondPokemon.statName}</span>
      <div>
        <span className={styles.firstProgressText}>
          {(
            (firstPokemon.progress /
              (firstPokemon.progress + secondPokemon.progress)) *
            100
          ).toFixed(0)}
          %
        </span>
        <div className={styles.progressBar}>
          <div
            className={styles.firstPokemonProgress}
            style={{
              width: `${
                (firstPokemon.progress /
                  (firstPokemon.progress + secondPokemon.progress)) *
                100
              }%`,
              backgroundColor: firstPokemon.color,
            }}
          ></div>

          <div
            className={styles.secondPokemonProgress}
            style={{
              width: `${
                (secondPokemon.progress /
                  (firstPokemon.progress + secondPokemon.progress)) *
                100
              }%`,
              backgroundColor: "brown",
            }}
          ></div>
        </div>
        <span className={styles.secondProgressText}>
          {(
            (secondPokemon.progress /
              (firstPokemon.progress + secondPokemon.progress)) *
            100
          ).toFixed(0)}
          %
        </span>
      </div>
    </div>
  );
}

export default ComparisonProgressBar;

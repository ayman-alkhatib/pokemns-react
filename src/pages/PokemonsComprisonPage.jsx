import { useLoaderData, useNavigation } from "react-router-dom";
import styles from "./PokemonsComprisonPage.module.css";
import Loading from "../components/Loading";
import PokemonImage from "../components/PokemonImage";
import PokemonDetailsText from "../components/PokemonDetailsText";
import ComparisonProgressBarList from "../components/ComparisonProgressBarList";
function PokemonsComprisonPage() {
  const dataObj = useLoaderData(); // first/second pokemonData
  const navigation = useNavigation();

  if (navigation.state === "loading") return <Loading />;

  return (
    <div className={styles.comprisonPage}>
      <section className={styles.pokemonsSection}>
        <div className={styles.leftSide}>
          <div>
            <PokemonImage detailsData={dataObj.firstPokemonData} />
            <PokemonDetailsText detailsData={dataObj.firstPokemonData} />
          </div>
        </div>
        <div className={styles.rightSide}>
          <div>
            <PokemonImage detailsData={dataObj.secondPokemonData} />
            <PokemonDetailsText detailsData={dataObj.secondPokemonData} />
            {/* <StatsProgressList /> */}
          </div>
        </div>
      </section>
      <section className={styles.comparisonSection}>
        <ComparisonProgressBarList
          firstPokemon={dataObj.firstPokemonData.stats}
          secondPokemon={dataObj.secondPokemonData.stats}
        />
      </section>
    </div>
  );
}

export default PokemonsComprisonPage;

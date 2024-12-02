import { useLoaderData, useLocation, useNavigation } from "react-router-dom";
import styles from "./PokemonsComprisonPage.module.css";
import Loading from "../components/Loading";
import StatsProgressList from "../components/StatsProgressList";

import PokemonImage from "../components/PokemonImage";
import PokemonDetailsText from "../components/PokemonDetailsText";
function PokemonsComprisonPage() {
  const dataObj = useLoaderData(); // first/second pokemonData
  const navigation = useNavigation();

  // get the pokemons names
  const firstPokemonName = useLocation().pathname.split("/")[2];
  const secondPokemonName = useLocation().pathname.split("/")[3];

  if (navigation.state === "loading") return <Loading />;

  return (
    <div className={styles.comprisonPage}>
      <section className={styles.leftSide}>
        <div>
          <PokemonImage detailsData={dataObj.firstPokemonData} />
          <PokemonDetailsText detailsData={dataObj.firstPokemonData} />
          <StatsProgressList detailsData={dataObj.firstPokemonData} />
        </div>
      </section>
      <section className={styles.rightSide}>
        <div>
          <PokemonImage detailsData={dataObj.secondPokemonData} />
          <PokemonDetailsText detailsData={dataObj.secondPokemonData} />
          <StatsProgressList detailsData={dataObj.secondPokemonData} />
        </div>
      </section>
    </div>
  );
}

export default PokemonsComprisonPage;

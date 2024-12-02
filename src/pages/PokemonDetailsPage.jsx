import styles from "./PokemonDetailsPage.module.css";
import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import { typesColors } from "../typesColors";
import { data } from "../logic/fetchPokemons";
import Loading from "../components/Loading";
import StatsProgressList from "../components/StatsProgressList";
import PokemonsList from "../components/PokemonsList";
import { routes } from "../router";
import PokemonDetailsText from "../components/PokemonDetailsText";
import PokemonImage from "../components/PokemonImage";
function PokemonDetailsPage() {
  const detailsData = useLoaderData();
  const navigation = useNavigation();
  const navigate = useNavigate();

  if (navigation.state === "loading") return <Loading />;

  function handleCardClickFunciton(name) {
    const firstPokemonName = detailsData.name;
    navigate(`/${routes.comparison}${firstPokemonName}/${name}`);
  }

  return (
    <>
      <div
        className={styles.detailsPageContainer}
        style={{ backgroundColor: `${typesColors[detailsData.type]}` }}
      >
        <div className={styles.pokemonDetails}>
          <PokemonImage detailsData={detailsData} />
          <div className={styles.pokemonDetails}>
            <PokemonDetailsText detailsData={detailsData} />
            <StatsProgressList detailsData={detailsData} />
          </div>
        </div>
        <div className={styles.pokemonsCompareList}>
          <PokemonsList data={data} clickFn={handleCardClickFunciton} />
        </div>
      </div>
    </>
  );
}

export default PokemonDetailsPage;

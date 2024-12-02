import { useLocation } from "react-router-dom";
import styles from "./PokemonsComprisonPage.module.css";
function PokemonsComprisonPage() {
  // get the pokemons names
  const firstPokemon = useLocation().pathname.split("/")[2];
  const secondPokemon = useLocation().pathname.split("/")[3];

  return (
    <div className={styles.comprisonPage}>
      <div>{firstPokemon}</div>
      <div>{secondPokemon}</div>
    </div>
  );
}

export default PokemonsComprisonPage;

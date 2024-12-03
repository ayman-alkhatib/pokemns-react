import styles from "./PokemonsListPage.module.css";
import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import Loading from "../components/Loading.jsx";
import PokemonsList from "../components/PokemonsList.jsx";
import { routes } from "../router.js";
function PokemonsListPage() {
  const data = useLoaderData();
  const navigation = useNavigation();
  const navigate = useNavigate();

  if (navigation.state === "loading") return <Loading />;

  function handleCardClickFunciton(PokemonName) {
    navigate(`/${routes.details}${PokemonName}`);
  }
  return (
    <div className={styles.pokemonList}>
      <PokemonsList data={data} clickFn={handleCardClickFunciton} />
    </div>
  );
}

export default PokemonsListPage;

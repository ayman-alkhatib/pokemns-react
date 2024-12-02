import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import PokemonCard from "../components/PokemonCard.jsx";
import Loading from "../components/Loading.jsx";
import { routes } from "../router.js";

function PokemonsListPage() {
  const data = useLoaderData();
  const navigation = useNavigation();
  const navigate = useNavigate();

  if (navigation.state === "loading") return <Loading />;
  return (
    <div className="pokemon-list">
      {data.map((pokemon) => {
        return (
          <PokemonCard
            clickFn={(name) => {
              navigate(`/${routes.details}${pokemon.name}`);
            }}
            name={pokemon.name}
            img={pokemon.img}
            key={pokemon.name}
          />
        );
      })}
    </div>
  );
}

export default PokemonsListPage;

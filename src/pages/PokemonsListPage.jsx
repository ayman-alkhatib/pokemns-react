import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import PokemonCard from "../components/PokemonCard.jsx";

function PokemonsListPage() {
  const data = useLoaderData();
  const navigation = useNavigation();
  const navigate = useNavigate();

  if (navigation.state === "loading") return <h1>Loading!</h1>;
  return (
    <div className="pokemon-list">
      {data.map((pokemon) => {
        return (
          <PokemonCard
            clickFn={(name) => {
              navigate(`/details/${pokemon.name}`);
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

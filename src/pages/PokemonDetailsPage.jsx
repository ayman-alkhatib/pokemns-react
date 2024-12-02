import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import { typesColors } from "../typesColors";
import { data } from "../logic/fetchPokemons";
import Loading from "../components/Loading";
import StatsProgressList from "../components/StatsProgressList";
import PokemonsList from "../components/PokemonsList";
import { routes } from "../router";

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
        className="details-page-container"
        style={{ backgroundColor: `${typesColors[detailsData.type]}` }}
      >
        <div className="pokemon-details">
          <div className="image">
            <img src={detailsData.img} alt={detailsData.name} />
          </div>
          <div className="details">
            <div className="details-text">
              <h2> {detailsData.name}</h2>
              <ul>
                <li>height: {detailsData.height}</li>
                <li>weight: {detailsData.weight}</li>
                <li>type: {detailsData.type} </li>
              </ul>
            </div>
            <StatsProgressList detailsData={detailsData} />
          </div>
        </div>
        <div className="pokemons-compare-list">
          <PokemonsList data={data} clickFn={handleCardClickFunciton} />
        </div>
      </div>
    </>
  );
}

export default PokemonDetailsPage;

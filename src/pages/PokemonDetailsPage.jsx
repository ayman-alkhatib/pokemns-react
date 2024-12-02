import { useLoaderData, useNavigation } from "react-router-dom";
import { typesColors } from "../typesColors";
import ProgressBar from "../components/ProgressBar";
import { data } from "../logic/fetchPokemons";
import PokemonCard from "../components/PokemonCard";
import Loading from "../components/Loading";
import { routes } from "../router";
import StatsProgressList from "../components/StatsProgressList";
function PokemonDetailsPage() {
  const detailsData = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") return <Loading />;
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
          {data.map((pokemon) => {
            return (
              <PokemonCard
                name={pokemon.name}
                img={pokemon.img}
                key={pokemon.name}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default PokemonDetailsPage;

import { useLoaderData, useNavigation } from "react-router-dom";
import { typesColors } from "../typesColors";
import ProgressBar from "../components/ProgressBar";
import { data } from "../logic/fetchPokemons";
import PokemonCard from "../components/PokemonCard";
function PokemonDetailsPage() {
  const detailsData = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") return <h1>Loading!</h1>;
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
            <ul className="stats-list">
              {detailsData.stats.map((stat) => (
                <li key={stat.statName}>
                  <ProgressBar
                    statName={stat.statName}
                    progress={stat.baseStat}
                    color={"red"}
                    maxValue={stat.maxValue}
                  />
                </li>
              ))}
            </ul>
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

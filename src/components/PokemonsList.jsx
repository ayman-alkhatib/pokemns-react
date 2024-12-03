import PokemonCard from "./PokemonCard";

function PokemonsList({ data, clickFn }) {
  return (
    <>
      {data.map((pokemon) => {
        return (
          <PokemonCard
            clickFn={() => {
              clickFn(pokemon.name);
            }}
            name={pokemon.name}
            img={pokemon.img}
            key={pokemon.name}
          />
        );
      })}
    </>
  );
}

export default PokemonsList;

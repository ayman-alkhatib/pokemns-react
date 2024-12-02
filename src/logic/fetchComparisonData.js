import fetchPokemonDetails from "./fetchPokemonDetails"

export default async function fetchComparisonData(firstPokemon, secondPokemon) {
    return {
        firstPokemonData: await getData(firstPokemon),
        secondPokemonData: await getData(secondPokemon)
    }
}
function getData(name) {
    return fetchPokemonDetails(name).then(data => data)
}


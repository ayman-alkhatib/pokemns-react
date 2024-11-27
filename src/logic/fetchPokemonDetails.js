export default async function fetchPokemonDetails(name) {
    const pokemonName = localStorage.getItem("pokemonName")
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    const jsonResult = await res.json()

    const pokemon = { name: jsonResult.name, img: jsonResult.sprites.front_shiny, height: jsonResult.height, weight: jsonResult.weight, exp: jsonResult.base_experience }
    return pokemon
}


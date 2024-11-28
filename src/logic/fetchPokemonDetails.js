import { globalObject } from "../components/PokemonCard"
export default async function fetchPokemonDetails() {

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${globalObject.pokemonName}`)
    const jsonResult = await res.json()

    const pokemon = { name: jsonResult.name, img: jsonResult.sprites.front_shiny, height: jsonResult.height, weight: jsonResult.weight, exp: jsonResult.base_experience }
    return pokemon
}


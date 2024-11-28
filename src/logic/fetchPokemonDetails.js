export default async function fetchPokemonDetails(name) {

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const jsonResult = await res.json()

    const pokemon = {
        name: jsonResult.name,
        img: jsonResult.sprites.front_shiny,
        height: jsonResult.height,
        weight: jsonResult.weight,
        exp: jsonResult.base_experience,
        hp: jsonResult.stats.at(0).base_stat,
        attack: jsonResult.stats.at(1).base_stat,
        defense: jsonResult.stats.at(2).base_stat,
        speed: jsonResult.stats.at(5).base_stat,
    }
    return pokemon
}



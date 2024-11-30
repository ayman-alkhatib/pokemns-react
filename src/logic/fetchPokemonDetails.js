export default async function fetchPokemonDetails(name) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const jsonResult = await res.json()
    const pokemon = {
        name: jsonResult.name,
        img: jsonResult.sprites.other.dream_world.front_default,
        height: jsonResult.height,
        weight: jsonResult.weight,
        exp: jsonResult.base_experience,
        type: jsonResult.types.at(0).type.name,
        stats: [
            { statName: "HP", baseStat: jsonResult.stats.at(0).base_stat, maxValue: 100 },
            { statName: "Attack", baseStat: jsonResult.stats.at(1).base_stat, maxValue: 100 },
            { statName: "Defense", baseStat: jsonResult.stats.at(2).base_stat, maxValue: 100 },
            { statName: "Speed", baseStat: jsonResult.stats.at(5).base_stat, maxValue: 100 },
            { statName: "Exp", baseStat: jsonResult.base_experience, maxValue: 300 },
        ]
    }
    return pokemon
}



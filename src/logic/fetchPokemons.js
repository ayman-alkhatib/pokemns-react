const data = []
export default async function fetchPokemons() {
    if (data.length === 20) return data
    for (let i = 0; i < 20; i++) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`)
        const jsonResult = await res.json()

        const pokemonobj = { name: jsonResult.name, img: jsonResult.sprites.front_shiny, height: jsonResult.height, weight: jsonResult.weight, exp: jsonResult.base_experience }
        data.push(pokemonobj)
    }
    return data
}




















// GET https://pokeapi.co/api/v2/pokemon/{id or name}
// console.log(data.sprites.front_shiny)
// console.log(data.name)
// console.log(data.height)
// console.log(data.weight)
// console.log(data.base_experience)

// export const dataLoader = async () => {
//     const res = await fetch('https://pokeapi.co/api/v2/pokemon/1')
//     const jsonResult = await res.json()
//     console.log(jsonResult)
//     return jsonResult
// }
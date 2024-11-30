let data = []
if (localStorage.getItem("pokemonsListData")) {
    data = JSON.parse(localStorage.getItem("pokemonsListData"))
}
export { data }

export default async function fetchPokemons() {
    if (localStorage.getItem("pokemonsListData")) {
        data = JSON.parse(localStorage.getItem("pokemonsListData"))
        return data
    }

    for (let i = 0; i < 200; i++) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`)
        const jsonResult = await res.json()

        const pokemonobj = { name: jsonResult.name, img: jsonResult.sprites.other.dream_world.front_default }
        data.push(pokemonobj)
    }
    localStorage.setItem("pokemonsListData", JSON.stringify(data))
    return data
}
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import PokemonsListPage from "./pages/PokemonsListPage";
import PokemonDetailsPage from "./pages/PokemonDetailsPage";
import PokemonsComprisonPage from "./pages/PokemonsComprisonPage";
import Nav from "./components/Nav";
import ErrorMessage from "./components/ErrorMessage";
import fetchPokemons from "./logic/fetchPokemons";
import fetchPokemonDetails from "./logic/fetchPokemonDetails";
import fetchComparisonData from "./logic/fetchComparisonData"

export const routes = { pokemons: "pokemons", details: "details/", comparison: "comparison/" }

export const router = createBrowserRouter(


    createRoutesFromElements(
        <Route path="/" element={<Nav />} errorElement={<ErrorMessage message={"test"} />}>
            <Route path="pokemons" element={<PokemonsListPage />} loader={fetchPokemons} />
            <Route path="details/:name" element={<PokemonDetailsPage />} loader={({ params }) => fetchPokemonDetails(params.name)} />

            <Route path="comparison/:name1/:name2" element={<PokemonsComprisonPage />} loader={({ params }) => fetchComparisonData(params.name1, params.name2)}
            />
        </Route>
    )
)


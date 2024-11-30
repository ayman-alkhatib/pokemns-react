import { createBrowserRouter, createRoutesFromElements, Link, Outlet, Route } from "react-router-dom";
import PokemonsListPage from "./pages/PokemonsListPage";
import PokemonDetailsPage from "./pages/PokemonDetailsPage";
import fetchPokemonDetails from "./logic/fetchPokemonDetails";
import fetchPokemons from "./logic/fetchPokemons";
import Nav from "./components/Nav";
import ErrorMessage from "./components/ErrorMessage";


export const router = createBrowserRouter(


    createRoutesFromElements(
        <Route path="/" element={<Nav />} errorElement={<ErrorMessage message={"test"} />}>
            <Route path="pokemon" element={<PokemonsListPage />} loader={fetchPokemons} />
            <Route path="details/:name" element={<PokemonDetailsPage />} loader={({ params }) => fetchPokemonDetails(params.name)} />
        </Route>
    )
)


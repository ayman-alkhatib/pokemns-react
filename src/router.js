import { createBrowserRouter, createRoutesFromElements, Link, Outlet, Route } from "react-router-dom";
import PokemonsListPage from "./pages/PokemonsListPage";
import PokemonDetailsPage from "./pages/PokemonDetailsPage";
import fetchPokemonDetails from "./logic/fetchPokemonDetails";
import fetchPokemons from "./logic/fetchPokemons";
const Layout = () => {
    return (
        <>
            <Link to="/">home</Link>
            <Link to="/pokemon">pokemonPage</Link>
            <Link to="/details">details</Link>
            <div>
                <Outlet />
            </div>
        </>
    );
};

export const router = createBrowserRouter(


    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="pokemon" element={<PokemonsListPage />} loader={fetchPokemons} />
            <Route path="details/:name" element={<PokemonDetailsPage />} loader={({ params }) => fetchPokemonDetails(params.name)} />
        </Route>
    )
)


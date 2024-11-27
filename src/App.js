import fetchPokemons from "./logic/fetchPokemons.js"
import PokemonsListPage from "./pages/PokemonsListPage.jsx";
import PokemonDetailsPage from "./pages/PokemonDetailsPage.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";

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
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index path="/pokemon" element={<PokemonsListPage />} loader={fetchPokemons} />
      <Route path="/details" element={<PokemonDetailsPage />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

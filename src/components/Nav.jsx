import { Link, Outlet } from "react-router-dom";
import { routes } from "../router";
function Nav() {
  return (
    <>
      <nav>
        <div className="logo">
          <img src="https://i.postimg.cc/ZngPsmf6/logo.png" alt="" />
        </div>
        <ul>
          <li>
            <Link to={routes.pokemons}>pokemonsPage</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;

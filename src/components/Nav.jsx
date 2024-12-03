import styles from "./Nav.module.css";
import { Link, Outlet, redirect } from "react-router-dom";
import { routes } from "../router";
function Nav() {
  // <redirect from="/" to="searchDashboard" />;
  return (
    <>
      <nav>
        <div className={styles.logo}>
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

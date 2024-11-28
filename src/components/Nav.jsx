import { Link, Outlet } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav>
        <div className="logo">
          <img src="logo.png" alt="" />
        </div>
        <ul>
          <li>
            <Link to="/pokemon">pokemonPage</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Nav;

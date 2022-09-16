import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink className="index-link" to="/">
              base
            </NavLink>
            <NavLink className="home-link" to="/home">
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default NavBar;

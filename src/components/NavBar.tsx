import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const menuObj = { home: "/", symposium: "/symposium", about: "/about" };
  const listMenu = () => {
    return Object.entries(menuObj).map(([key, value], idx) => (
      <NavLink className="NavBar-link" key={idx} to={value}>
        {key.charAt(0).toUpperCase() + key.slice(1)}
      </NavLink>
    ));
  };
  return (
    <div>
      <nav className="NavBar-container">{listMenu()}</nav>
    </div>
  );
};

export default NavBar;

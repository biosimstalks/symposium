import NavBar from "./NavBar";
import "./Header.css";

const Header = () => {
  return (
    <header className="Header-container">
      <h1 className="Header-title">BioSim</h1>
      <NavBar />
    </header>
  );
};

export default Header;

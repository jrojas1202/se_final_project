import "./Header.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = ({ handleSearch }) => {
  const { pathname } = useLocation();

  return (
    <header
      className="header"
      //style={{
      // justifyContent: pathname === "/" ? "space-between" : "center",
      //}}
    >
      <Link to="/">
        <h1 className="header__title">Virtual Pokèdex</h1>
      </Link>

      {pathname !== "/about" ? (
        <Link to="/about">
          <span className="header__link">About me</span>
        </Link>
      ) : null}

      {pathname === "/" ? <SearchBar handleSearch={handleSearch} /> : null}
    </header>
  );
};

export default Header;

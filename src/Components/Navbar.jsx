import { Link } from "react-router-dom";
import ThemeContext from "../Helpers/ThemeContext";
import { useContext } from "react";

const Navbar = () => {

  const {theme, themeText, toggleTheme } = useContext(ThemeContext);


  return (
    <nav className={theme}>
      <div className="navbar-cont">
        <Link to="/">
          <h1 className="logo">Where in the world?</h1>
        </Link>
        <div className="theme-cont">
          <button className='theme' onClick={ toggleTheme }></button>
          <p className="theme-p">{themeText}</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

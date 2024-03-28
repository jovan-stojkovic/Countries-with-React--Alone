import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-cont">
        <Link to="/">
          <h1 className="logo">Where in the world?</h1>
        </Link>
        <div className="theme-cont">
          <button className="theme"></button>
          <p className="theme-p">Dark Mode</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

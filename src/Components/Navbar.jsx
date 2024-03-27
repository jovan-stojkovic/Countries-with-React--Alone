const Navbar = () => {
    return ( <nav>
        <div className="navbar-cont">
            <h1 className="logo">Where in the world?</h1>
            <div className="theme-cont">
                <button className="theme"></button>
                <p className="theme-p">Dark Mode</p>
            </div>
        </div>
    </nav> );
}
 
export default Navbar;
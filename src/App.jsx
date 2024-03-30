import "./Styles.scss";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Country from "./Pages/Country";
import BackToTopButton from "./Components/BackToTopButton";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ThemeContext from "./Helpers/ThemeContext";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [themeText, setThemeText] = useState("Dark Mode");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(theme);
  };

  useEffect(() => {
    setThemeText(theme === 'light' ? "Dark Mode" : 'Light Mode')
  }, [theme])

  return (
    <Router>
      <ThemeContext.Provider value={{ theme, themeText, toggleTheme }}>
        <main className={theme}>
          <Navbar />
          <BackToTopButton />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/countries/:cca3" element={<Country />} />
          </Routes>
        </main>
      </ThemeContext.Provider>
    </Router>
  );
};

export default App;

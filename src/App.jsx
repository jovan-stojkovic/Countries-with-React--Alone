import "./Styles.scss";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Country from "./Pages/Country";
import BackToTopButton from "./Components/BackToTopButton";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <main>
        <Navbar />
        <BackToTopButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries/:cca3" element={ <Country /> }/>
        </Routes>
      </main>
    </Router>
  );
};

export default App;

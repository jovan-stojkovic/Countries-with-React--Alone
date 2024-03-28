import "./Styles.scss";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
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
        </Routes>
      </main>
    </Router>
  );
};

export default App;

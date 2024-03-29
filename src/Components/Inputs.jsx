import { useState } from "react";

const Inputs = ({ setSearchWord, setSelectRegion }) => {
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const [showRegionDiv, setShowRegionDiv] = useState("");

  const handleRegionClick = () => {
    setShowRegionDiv(showRegionDiv === "" ? "show" : "");
  };

  const handleRegionBlur = () => {
    setShowRegionDiv("");
  };

  return (
    <div className="inputs">
      <input
        type="text"
        placeholder="Search for a country..."
        className="search"
        onChange={(e) => setSearchWord(e.target.value)}
      />
      <button
        className={`filter ${showRegionDiv}`}
        onClick={handleRegionClick}
        onBlur={handleRegionBlur}
      >
        Filter by Region
      </button>

      <div className={`regions ${showRegionDiv}`}>
        <ul>
          {regions.map((reg) => (
            <li
              key={reg}
              onClick={() => {
                setSelectRegion(reg);
              }}
            >
              {reg}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Inputs;

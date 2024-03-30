import Inputs from "../Components/Inputs";
import axios from "axios";
import { useEffect, useState, useContext} from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../Helpers/ThemeContext";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [selectRegion, setSelectRegion] = useState('');
  const { theme } = useContext(ThemeContext);


  const url = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        setCountries(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={`home ${theme}`}>
      <div className="home-cont">
        <Inputs setSearchWord={setSearchWord} setSelectRegion={setSelectRegion}/>
        <div className="countries">
          {countries &&
            countries
              .filter((country) => {
                if (searchWord === "") {
                  return country;
                } else if (
                  country.name.common
                    .toLowerCase()
                    .includes(searchWord.toLowerCase())
                ) {
                  return country;
                }
              })
              .filter((country) => {
                if (selectRegion === "") {
                  return country;
                } else if (
                  country.region.toLowerCase().includes(selectRegion.toLowerCase())
                ) {
                  return country
                }
              })
              .map((country) => {
                const {
                  name,
                  population,
                  region,
                  capital,
                  flags,
                  index,
                  cca3,
                } = country;

                return (
                  <div className="country-card" key={cca3}>
                    <Link to={`/countries/${cca3}`}>
                      <div className="flag-cont">
                        <img src={flags.svg} alt={name.common} />
                      </div>
                      <div className="single-country-info">
                        <h2>{name.common}</h2>
                        <p>
                          Population:{" "}
                          <span>{population.toLocaleString("en-US")}</span>
                        </p>
                        <p>
                          Region: <span>{region}</span>
                        </p>
                        <p>
                          Capital: <span>{capital}</span>
                        </p>
                      </div>
                    </Link>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default Home;

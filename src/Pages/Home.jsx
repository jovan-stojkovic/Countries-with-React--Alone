import Imputs from "../Components/Imput";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [countries, setCountries] = useState([]);

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
    <div className="home">
      <div className="home-cont">
        <Imputs />

        
        <div className="countries">
          {countries.map((country, index) => (
            <div key={index} className="country-card">
              <Link to={`/countries/${country.cca3}`}>
              <div className="flag-cont">
                <img src={country.flags.svg} alt={country.name.common} />
              </div>
              <div className="single-country-info">
                <h2>{country.name.common}</h2>
                <p>
                  Population:{" "}
                  <span>{country.population.toLocaleString("en-US")}</span>
                </p>
                <p>
                  Region: <span>{country.region}</span>
                </p>
                <p>
                  Capital: <span>{country.capital}</span>
                </p>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
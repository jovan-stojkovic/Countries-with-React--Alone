import Inputs from "./Inputs";
import axios from "axios";
import { useEffect, useState } from "react";

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
        <Inputs />

        <div className="countries">
          {countries.map((country, index) => (
            <div key={index} className="country-card">
              <div className="flag-cont">
                <img src={country.flags.svg} alt={country.name.common} />
              </div>
              <div className="single-country-info">
                <h2>{country.name.common}</h2>
                <p>
                  Population: <span>{country.population.toLocaleString("en-US")}</span>
                </p>
                <p>
                  Region: <span>{country.region}</span>
                </p>
                <p>
                  Capital: <span>{country.capital}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

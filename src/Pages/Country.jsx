import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ThemeContext from "../Helpers/ThemeContext";

const Country = () => {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [country, setCountry] = useState([]);
  const { cca3 } = useParams();

  useEffect(() => {
    const fetchCountryData = async () => {
      const api = `https://restcountries.com/v3.1/alpha/${cca3}`;

      const res = await fetch(api);
      const country = await res.json();
      setCountry(country);
    };

    fetchCountryData();
  }, []);

  return (
    <div className={`single-country-page ${theme}`}>
      <div className="inputs">
        <button onClick={() => navigate(-1)} className="back-button">
          Back
        </button>
      </div>

      <div className="country">
        {country.map((c) => {
          const {
            name,
            flags,
            population,
            region,
            subregion,
            capital,
            tld,
            currencies,
            languages,
            borders,
            cca2,
          } = c;

          const nameGet = Object.entries(name.nativeName);
          return (
            <div key={cca2} className="country-page-cont">
              <div className="flag">
                <img src={flags.svg} alt={name.common} />
              </div>
              <div className="info-single-country">
                <h1>{name.common}</h1>
                <div className="all-info">
                  <div className="info-single-country-left">
                    <h5>
                      Native Name:
                      <span className="single-country-span">
                        {nameGet[0][1].common || "N/A"}
                      </span>
                    </h5>

                    <h5>
                      Population:
                      <span className="single-country-span">
                        {population.toLocaleString("en-US") || "N/A"}
                      </span>
                    </h5>

                    <h5>
                      Region:
                      <span className="single-country-span">
                        {region || "N/A"}
                      </span>
                    </h5>

                    <h5>
                      Sub Region:
                      <span className="single-country-span">
                        {subregion || "N/A"}
                      </span>
                    </h5>
                  </div>
                  <div className="info-single-country-right">
                    <h5>
                      Capital:
                      <span className="single-country-span">
                        {capital || "N/A"}
                      </span>
                    </h5>
                    <h5>
                      Top Level Domain:
                      <span className="single-country-span">
                        {tld[0] || "N/A"}
                      </span>
                    </h5>
                    <h5>
                      Currencies:
                      <span className="single-country-span">
                        {Object.values(currencies)[0].name || "N/A"}
                      </span>
                    </h5>
                    <h5>
                      Languages:
                      <span className="single-country-span">
                        {Object.values(languages).join(", ") || "N/A"}
                      </span>
                    </h5>
                  </div>
                </div>
                <div className="border-container">
                  <h5>Border Countries: </h5>
                  {borders && borders.length > 0 ? (
                    <div className="borders">
                      {borders.map((border) => (
                        <a href={`/countries/${border}`} key={border}>
                          {border}
                        </a>
                      ))}
                    </div>
                  ) : (
                    "N/A"
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Country;

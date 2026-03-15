import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { ButtonLinkStyled } from "../styles/ButtonLink.styled";
import { CountrySectionStyled } from "../styles/CountrySection.styled";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function CountryMain({ data }) {
  const { code } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [code]);
  const country = data.find((item) => item.alpha3Code === code);
  if (!country) return <h1>Country not found</h1>;

  const currency = country.currencies.map((coin) => coin.name).join("");
  const languages = country.languages
    .map((language) => {
      const firstLetter = language.nativeName.charAt(0).toUpperCase();
      const substring = language.nativeName.slice(1);
      const word = firstLetter.concat(substring);
      return word;
    })
    .join(", ");

  const borders = country.borders.map((border) =>
    data.find((item) => item.alpha3Code === border),
  );

  return (
    <div>
      <ButtonLinkStyled to={"/"}>
        <FontAwesomeIcon className="icon" icon={faArrowLeft} />
        <button className="back-btn">Back</button>
      </ButtonLinkStyled>
      <CountrySectionStyled $items={borders.length}>
        <div className="img-container">
          <img src={country.flags.svg} alt="" />
        </div>
        <div className="country-details">
          <div className="details-group">
            <h2>{country.name}</h2>
            <div className="groups">
              <div className="group_1">
                <p>
                  <span>Native Name: </span>
                  {country.nativeName}
                </p>
                <p>
                  <span>Population: </span>
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <span>Region: </span>
                  {country.region}
                </p>
                <p>
                  <span>Sub Region: </span>
                  {country.subregion}
                </p>
                <p>
                  <span>Capital: </span>
                  {country.capital}
                </p>
              </div>
              <div className="group_2">
                <p>
                  <span>Top Level Domain: </span>
                  {country.topLevelDomain}
                </p>
                <p>
                  <span>Currency: </span>
                  {currency}
                </p>
                <p>
                  <span>Languages: </span>
                  {languages}
                </p>
              </div>
            </div>
          </div>
          <div className="borders-group">
            <h3>Border Countries:</h3>
            <div className="borders-container">
              {borders.map((border) => (
                <Link
                  to={`/country/${border.alpha3Code}`}
                  key={border.alpha3Code}
                >
                  {border.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </CountrySectionStyled>
    </div>
  );
}

export default CountryMain;

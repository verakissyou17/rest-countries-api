import { CardStyled } from "../styles/Card.styled";

function Card({ filteredCountries }) {
  return (
    <>
      {filteredCountries.map((item) => {
        const population = new Intl.NumberFormat("en-US").format(
          item.population,
        );

        return (
          <CardStyled key={item.alpha3Code} to={`/country/${item.alpha3Code}`}>
            <div className="img-container">
              <img src={item.flags.svg} alt={item.name} />
            </div>
            <div className="section-details">
              <h2 className="subtitle">{item.name}</h2>
              <p>
                <strong>Population:</strong> {population}
              </p>
              <p>
                <strong>Region:</strong> {item.region}
              </p>
              <p>
                <strong>Capital:</strong> {item.capital}
              </p>
            </div>
          </CardStyled>
        );
      })}
    </>
  );
}

export default Card;

import Card from "../components/Card";
import { MainStyled } from "../styles/Main.styled";

function Main({ filteredCountries }) {
  return (
    <MainStyled>
      <Card filteredCountries={filteredCountries} />
    </MainStyled>
  );
}

export default Main;

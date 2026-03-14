import { BodyStyled } from "../styles/Body.styled";
import Header from "../components/Header";
import CountryMain from "../components/CountryMain";
import Footer from "../components/Footer";

function CountryPage({data, toggleTheme, darkThemeEnabled}) {

  return (
    <BodyStyled>
      <Header toggleTheme={toggleTheme} darkThemeEnabled={darkThemeEnabled} />
      <CountryMain data={data} />
      <Footer />
    </BodyStyled>
  )
}

export default CountryPage


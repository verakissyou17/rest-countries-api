import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { BodyStyled } from "../styles/Body.styled"
import Header from "../components/Header";
import Form from "../components/Form";
import Main from "../components/Main";
import Footer from "../components/Footer";

function Home({
  toggleTheme,
  darkThemeEnabled,
  scrollPage,
  data,
  filteredCountries,
  setRegion,
  setSearch,
}) {
  return (
    <BodyStyled>
      <Header toggleTheme={toggleTheme} darkThemeEnabled={darkThemeEnabled} />
      <div className="arrowdown">
        <FontAwesomeIcon
          onClick={scrollPage}
          className="icon"
          icon={faArrowDown}
        />
      </div>
      <Form data={data} setRegion={setRegion} setSearch={setSearch} />
      <Main filteredCountries={filteredCountries} />
      <Footer />
    </BodyStyled>
  );
}

export default Home;

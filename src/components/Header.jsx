import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { HeaderStyled } from "../styles/Header.styled";

function Header({ toggleTheme, darkThemeEnabled  }) {
  return (
    <HeaderStyled>
      <h1>Where in the world?</h1>
      <div onClick={toggleTheme} className="header-right">
        {darkThemeEnabled ? <FontAwesomeIcon className="icon" icon={faSun} /> : <FontAwesomeIcon className="icon" icon={faMoon} />}
        <span>{darkThemeEnabled ? "Light Mode" : "Dark Mode"}</span>
      </div>
    </HeaderStyled>
  );
}

export default Header;

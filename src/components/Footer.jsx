import { FooterStyled } from "../styles/Footer.styled";

function Footer() {
  return (
    <FooterStyled>
      <p>
        Designed with 💞 by
        <a href="#" className="link" target="_blank">
          {" "}
          Vera.
        </a>
      </p>
    </FooterStyled>
  );
}

export default Footer;

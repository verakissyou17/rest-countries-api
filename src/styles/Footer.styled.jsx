import styled from "styled-components";

export const FooterStyled = styled.footer`
  text-align: center;
  background-color: ${({theme}) => theme.elements};
  color: ${({theme}) => theme.text};
  box-shadow: -2px -2px 4px var(--shadow);
  padding-block: 1.5rem;

  p {
    font-size: small;

    a {
      text-decoration: none;
      color: #05ae05;
    }
  }
`;

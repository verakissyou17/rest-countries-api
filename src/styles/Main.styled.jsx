import styled from "styled-components";

export const MainStyled = styled.main`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 5rem;

  @media (min-width: 48em) {
    padding: 4rem;
    gap: 2.5rem;
  }
`;

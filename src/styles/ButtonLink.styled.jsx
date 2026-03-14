import styled from "styled-components";
import { Link } from "react-router-dom";

export const ButtonLinkStyled = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 2rem;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.elements};
  max-width: 120px;
  border-radius: 0.25rem;
  box-shadow:
    2px 2px 2px var(--shadow),
    -2px -2px 2px var(--shadow);

  .back-btn {
    border: none;
    outline: none;
    background-color: inherit;
    color: inherit;
    font-family: var(--font-main);
  }

  margin-left: 2rem;
  margin-top: 2rem;
`;

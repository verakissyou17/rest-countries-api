import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardStyled = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-decoration: none; 
  border-radius: 0.5rem;
  box-shadow: 2px 2px 4px var(--shadow);
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.elements};

  .img-container {
    height: 250px;
    border-radius: 0.5rem;

    img {
      border-radius: 0.5rem 0.5rem 0 0;
      width: 100%;
      height: 100%;
    }
  }

  .section-details {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .subtitle {
      margin-bottom: 1rem;
    }
  }
`;

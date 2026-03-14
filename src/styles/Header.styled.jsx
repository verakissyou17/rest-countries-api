import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1rem;
  background-color: ${({ theme }) => theme.elements};
  box-shadow: 2px 2px 4px var(--shadow);

  h1 {
    font-size: clamp(1.5rem, 1.06rem + 1.878vw, 2.75rem);
    color: ${({ theme }) => theme.text};
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: ${({ theme }) => theme.text};

    .icon {
      transform: rotate(-15deg);
      color: ${({ theme }) => theme.text};
    }

    &:hover {
      cursor: pointer;
    }
  }
`;

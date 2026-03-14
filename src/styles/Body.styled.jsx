import styled from "styled-components";

export const BodyStyled = styled.div`
  background-color: ${({ theme }) => theme.body};

  .arrowdown {
    position: fixed;
    z-index: 10;
    bottom: 0%;
    right: 0;
    transform: translateY(-45%);
    width: 2.5rem;
    height: 2.5rem;
    background-color: ${({ theme }) => theme.text};
    display: grid;
    place-content: center;
    border-radius: 50%;

    .icon {
      color: ${({ theme }) => theme.elements};
    }
  }

  .reversed {
    transform: rotate(180deg);
  }
`;

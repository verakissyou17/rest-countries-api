import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 2rem;
  margin: 0 auto;

  .form-group {
    width: 100%;
    position: relative;

    input {
      width: 100%;
      max-width: 500px;
      height: 3rem;
      padding: 1rem 3rem;
      border: none;
      outline: none;
      box-shadow:
        2px 2px 2px var(--shadow),
        -2px -2px 2px var(--shadow);
      border-radius: 0.25rem;
      font-family: var(--font-main);
      font-size: var(--fs-homepage);
      background-color: ${({ theme }) => theme.elements};

      &::placeholder {
        font-size: var(--fs-homepage);
        font-family: var(--font-main);
        color: ${({ theme }) => theme.input};
        opacity: 0.75;
      }
    }

    .icon {
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      pointer-events: none;
      color: ${({ theme }) => theme.input};
    }
  }

  select {
    width: 100%;
    max-width: 250px;
    height: 3rem;
    padding: 0.5rem;
    align-self: flex-start;
    border: none;
    outline: none;
    box-shadow:
      2px 2px 2px var(--shadow),
      -2px -2px 2px var(--shadow);
    border-radius: 0.25rem;
    font-family: var(--font-main);
    font-size: var(--fs-homepage);
    background-color: ${({ theme }) => theme.elements};
    color: ${({ theme }) => theme.text};
  }


  @media (min-width: 48em) {
    flex-direction: row;
    padding: 4rem;
  }
`;

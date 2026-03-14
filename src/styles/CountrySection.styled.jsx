import styled from "styled-components";

export const CountrySectionStyled = styled.section`
  width: 80%;
  margin: 2em auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  color: ${({ theme }) => theme.text};

  .img-container {
    flex: 1;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .country-details {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    flex: 1;

    .details-group {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      h2 {
        margin-bottom: 1rem;
      }

      .groups {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        .group_1 {
          p {
            margin-bottom: 1rem;
            span {
              font-weight: var(--fw-800);
            }
          }
        }

        .group_2 {
          p {
            margin-bottom: 1rem;

            span {
              font-weight: var(--fw-800);
            }
          }
        }
      }
    }

    .borders-group {
      h3 {
        margin-bottom: 0.75rem;
      }

      .borders-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        gap: 0.75rem;

        a {
          display: grid;
          place-content: center;
          text-decoration: none;
          outline: none;
          padding: 0.25rem 0.5rem;
          box-shadow:
            2px 2px 2px var(--shadow),
            -2px -2px 2px var(--shadow);
          flex: 1;
          color: ${({ theme }) => theme.text};
          background-color: ${({ theme }) => theme.elements};
        }
      }
    }
  }

  @media (min-width: 68em) {
    flex-direction: row;
    align-items: center;
    padding: 0;
    gap: 6rem;
    margin: 4rem auto;

    .country-details {
      gap: 5rem;

      .details-group {
        flex: 1;

        h2 {
          margin-bottom: 0;
        }

        .groups {
          flex-direction: row;
          justify-content: space-between;

          .group_1 p,
          .group_2 p {
            margin-bottom: 1.5rem;
          }
        }
      }

      .borders-group {
        display: flex;
        flex-direction: row;
        gap: 1rem;

        h3 {
          margin-bottom: 0;
        }

        .borders-container {
            flex: 1;
        }
      }
    }
  }
`;

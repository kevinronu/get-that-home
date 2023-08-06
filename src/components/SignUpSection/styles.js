import styled from "@emotion/styled";

export const StyledSection = styled.section`
  padding: 16px 0;
  position: relative;
  min-height: 80vh;
  text-align: center;
  display: grid;
  place-items: center;

  ::after {
    position: absolute;
    z-index: -1;
    bottom: 0;
    width: 100%;
    height: 50%;
    content: "";
    background-color: ${(props) => props.theme.colors.background.lighter};
  }

  ::before {
    position: absolute;
    z-index: -1;
    top: 0;
    width: 100%;
    height: 50%;
    content: "";
    background-color: ${(props) => props.theme.colors.primary.lighter};
  }

  .header {
    margin-bottom: 3.5rem;
  }

  .header__title {
    font-size: 4rem;
    font-weight: 300;
    line-height: 5.5rem;
    letter-spacing: -0.03125rem;
  }

  .header__instructions {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .options {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .link {
    padding: 1rem 1.25rem;
    aspect-ratio: 1/1;
    background-color: ${(props) => props.theme.colors.white.saturated};
    border-radius: 0.5rem;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    color: ${(props) => props.theme.colors.black.saturated};
  }

  .link:hover {
    background-color: ${(props) => props.theme.colors.pink[500]};
  }

  .link:focus {
    outline: 0.1875rem solid ${(props) => props.theme.colors.info};
  }

  .link__img {
    max-width: 15rem;
    object-fit: cover;
    margin-bottom: 0.5rem;
  }

  .link__title {
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.75rem;
    letter-spacing: 0.00938rem;
    margin-bottom: 0.38rem;
  }

  .link__description {
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.25rem;
    letter-spacing: 0.00625rem;
  }

  @media only screen and (max-width: 624px) {
    .header {
      margin-bottom: 1rem;
    }

    .header__title {
      font-size: 1.5rem;
      line-height: 2rem;
      font-weight: 400;
    }

    .header__instructions {
      font-size: 1rem;
      line-height: 1.5rem;
    }

    .options {
      gap: 1rem;
    }
  }
`;

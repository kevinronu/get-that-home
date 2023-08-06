import styled from "@emotion/styled";
import { fonts } from "../../styles";

export const StyledSection = styled.section`
  padding: 16px 0;
  position: relative;
  min-height: 80vh;
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

  .sign-up-container {
    background-color: ${(props) => props.theme.colors.background.light};
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
    min-width: 21rem;
  }

  .title {
    font-size: 1.5rem;
    line-height: 2rem;
    text-align: center;
    margin-bottom: 1rem;
  }

  .form {
    display: grid;
    place-items: center;
    width: 100%;
  }

  .form__inputs {
    width: 100%;
    margin-bottom: 1rem;
  }

  .form__error {
    min-height: 1rem;
    font-family: ${fonts.secondary};
    font-size: 0.75rem;
    line-height: 1rem;
    letter-spacing: 0.025rem;
  }
`;

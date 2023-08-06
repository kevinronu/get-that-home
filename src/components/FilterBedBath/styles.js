import styled from "@emotion/styled";
import { fonts } from "../../styles";

export const StyledContainer = styled.div`
  position: relative;
  width: 100%;

  .container {
    z-index: 1;
    border-radius: 0.5rem;
    padding: 0.5rem;
    background-color: ${(props) => props.theme.colors.background.lighter};
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
    position: absolute;
    // top: 100%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .button-container {
    display: flex;
  }

  .title {
    font-family: ${fonts.secondary};
    font-size: 0.625rem;
    letter-spacing: 0.09375rem;
    margin-bottom: 0.25rem;
  }

  .send-button {
    place-self: flex-end;
  }

  .button-active {
    width: 3.125rem;
    padding: 0.5rem;
    font-family: ${fonts.secondary};
    font-size: 0.875rem;
    line-height: 1.25rem; /* 142.857% */
    letter-spacing: 0.01563rem;
    color: ${(props) => props.theme.colors.white.standard};
    background-color: ${(props) => props.theme.colors.pink[500]};
    border: 0.0625rem solid ${(props) => props.theme.colors.background.darker};
    cursor: pointer;
  }
  .button-active:hover {
    background-color: ${(props) => props.theme.colors.pink[600]};
  }
  .button-active:active {
    background-color: ${(props) => props.theme.colors.pink[700]};
  }

  .button-inactive {
    cursor: pointer;
    padding: 0.5rem;
    width: 3.125rem;
    font-family: ${fonts.secondary};
    font-size: 0.875rem;
    line-height: 1.25rem; /* 142.857% */
    letter-spacing: 0.01563rem;
    color: ${(props) => props.theme.colors.text.light};
    background-color: ${(props) => props.theme.colors.background.lighter};
    border: 0.0625rem solid ${(props) => props.theme.colors.background.darker};
  }
  .button-inactive:hover {
    background-color: ${(props) => props.theme.colors.background.light};
  }
  .button-inactive:active {
    background-color: ${(props) => props.theme.colors.background.standard};
  }

  .button-zero {
    border-radius: 0.5rem 0 0 0.5rem;
  }

  .button-four {
    border-radius: 0 0.5rem 0.5rem 0;
  }
`;

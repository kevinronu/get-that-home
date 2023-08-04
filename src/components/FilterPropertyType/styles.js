import styled from "@emotion/styled";
import { fonts } from "../../styles";

export const StyledContainer = styled.div`
  position: relative;

  .filter-price-button {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container {
    z-index: 1;
    width: 15.5rem;
    border-radius: 0.5rem;
    padding: 0.5rem;
    background-color: ${(props) => props.theme.colors.background.lighter};
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
    position: absolute;
    // top: 100%;
    left: 50%;
    transform: translateX(-50%);
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .form__label {
    font-family: ${fonts.secondary};
    font-size: 0.625rem;
    letter-spacing: 0.09375rem;
    margin-bottom: 0.25rem;
  }

  .form__inputs {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .form__checkbox {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .form__button {
    place-self: flex-end;
  }
`;

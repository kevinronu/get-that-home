import styled from "@emotion/styled";
import { fonts } from "../../styles";

export const StyledH1 = styled.h1`
  font-size: 2.25rem;
  line-height: 3rem;
  margin-bottom: 1rem;
`;

export const StyledLinksContainer = styled.div`
  font-family: ${fonts.secondary};
  font-size: 0.875rem;
  line-height: 1.25rem; /* 142.857% */
  letter-spacing: 0.01563rem;
  margin-bottom: 1rem;

  .links-title {
    font-size: 0.625rem;
    line-height: 1rem;
    letter-spacing: 0.09375rem;
  }

  .links-container {
    display: flex;
    align-item: center;
  }

  .link-left {
    border: 0.0625rem solid ${(props) => props.theme.colors.background.darker};
    border-right: none;
    padding: 0.5rem;
    border-radius: 0.5rem 0 0 0.5rem;
  }

  .link-right {
    border: 0.0625rem solid ${(props) => props.theme.colors.background.darker};
    padding: 0.5rem;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    border-radius: 0 0.5rem 0.5rem 0;
  }

  .active {
    background-color: ${(props) => props.theme.colors.pink[400]};
  }
`;

export const StyledForm = styled.form`
  font-family: ${fonts.secondary};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 37.5rem;

  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }

  .label-container {
    display: flex;
    gap: 0.25rem;
    font-size: 0.875rem;
    margin-bottom: 0.25rem;
  }

  .label {
    color: ${(props) => props.theme.colors.text.light};
    font-size: 0.625rem;
    font-family: ${fonts.secondary};
    letter-spacing: 0.09375rem;
  }

  .form__type {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .form__property {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .input-area {
    max-width: 6rem;
  }

  .form__pets {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .quote {
    color: ${(props) => props.theme.colors.text.light};
    font-family: Inter;
    font-size: 0.75rem;
    letter-spacing: 0.025rem;
  }

  .images-container {
    background-color: ${(props) => props.theme.colors.background.light};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
  }

  .images-container__no-image {
    background-color: ${(props) => props.theme.colors.background.lighter};
    height: 7.5rem;
    aspect-ratio: 1/1;
    display: grid;
    place-items: center;
  }

  .images-container__image {
    height: 7.5rem;
    width: 7.5rem;
    object-fit: cover;
  }

  .photos-title {
    font-family: ${fonts.primary};
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.75rem; /* 140% */
    letter-spacing: 0.00938rem;
  }

  .photos-instructions {
    font-size: 0.625rem;
    letter-spacing: 0.09375rem;
  }
`;

export const StyledTextArea = styled.textarea`
  font-family: ${fonts.secondary};
  padding: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem; /* 142.857% */
  width: 100%;
  letter-spacing: 0.01563rem;
  border: 1px solid ${(props) => props.theme.colors.pink[400]};
  border-radius: 0.5rem;

  ::placeholder {
    color: ${(props) => props.theme.colors.text.light};
  }

  :focus {
    outline: 0.1875rem solid ${(props) => props.theme.colors.info};
  }
`;

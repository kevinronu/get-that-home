import styled from "@emotion/styled";
import { fonts } from "../../styles";

export const StyledDiv = styled.div`
  padding: 1rem;
  height: fit-content;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors.background.lighter};
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;

  .contact-container {
    font-family: ${fonts.secondary};
    font-size: 0.875rem;
    line-height: 1.25rem;
    letter-spacing: 0.01563rem;
  }

  .contact-info__title {
    font-family: ${fonts.primary};
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.75rem; /* 140% */
    letter-spacing: 0.00938rem;
  }

  .contact-info__subtitle {
    color: ${(props) => props.theme.colors.pink[600]};
  }
`;

export const ButtonFavorite = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 0.5rem;
  padding: 0.5rem;

  :focus {
    outline: 0.1875rem solid ${(props) => props.theme.colors.info};
  }
  :hover {
    background-color: ${(props) => props.theme.colors.background.standard};
  }
  :active {
    background-color: ${(props) => props.theme.colors.background.dark};
  }
`;

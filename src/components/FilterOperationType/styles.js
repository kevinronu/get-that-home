import styled from "@emotion/styled";
import { fonts } from "../../styles";

export const StyledSelect = styled.select`
  font-family: ${fonts.secondary};
  padding: 0.5rem;
  border: 0.0625rem solid ${(props) => props.theme.colors.pink[500]};
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors.background.lighter};

  option {
    background-color: ${(props) => props.theme.colors.background.lighter};
  }

  :focus {
    outline: 0.1875rem solid ${(props) => props.theme.colors.info};
  }

  @media only screen and (max-width: 1100px) {
    width: 100%;
  }
`;

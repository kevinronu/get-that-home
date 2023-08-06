import styled from "@emotion/styled";
import { fonts } from "../../styles";

export const StyledContainer = styled.div`
  flex-grow: 1;
  width: 100%;
  padding: 0.5rem;
  display: flex;
  gap: 0.5rem;
  border-radius: 0.5rem;
  border: 0.0625rem solid ${(props) => props.theme.colors.pink[500]};
  background-color: ${(props) => props.theme.colors.background.lighter};

  .input {
    font-family: ${fonts.secondary};
    width: 100%;
  }

  .input::placeholder {
    color: ${(props) => props.theme.colors.text.light};
  }

  .input:focus {
    outline: 0.1875rem solid ${(props) => props.theme.colors.info};
  }
`;

import styled from "@emotion/styled";
import { fonts } from "../../styles";

export const StyledNav = styled.nav`
  padding: 2rem 0;

  .links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  .inactive {
    padding: 0.35rem 0.75rem;
    border-radius: 0.25rem;
    border: 0.0625rem solid ${(props) => props.theme.colors.background.light};
    font-family: ${fonts.secondary};
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .active {
    padding: 0.35rem 0.75rem;
    border-radius: 0.25rem;
    background-color: ${(props) => props.theme.colors.pink[100]};
    border: 0.0625rem solid ${(props) => props.theme.colors.pink[700]};
    font-family: ${fonts.secondary};
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
`;

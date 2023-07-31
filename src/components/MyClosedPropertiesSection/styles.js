import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { fonts, typography } from "../../styles";

export const StyledNav = styled.div`
  margin-top: 1rem;

  .links {
    display: flex;
    align-items: center;
    gap: 2rem;
    ${typography.text.sm}
    font-weight: 500;
    margin-bottom: 1rem;
  }

  .link--active {
    border: 0.125rem solid ${(props) => props.theme.colors.pink[500]};
  }

  .link--inactive {
    border: 0.125rem solid ${(props) => props.theme.colors.text.light};
  }
`;

export const StyledLinkActive = styled(Link)`
  padding: 0 0.25rem;
  cursor: pointer;
  margin-bottom: 0.25rem;
`;

export const StyledLinkInactive = styled(Link)`
  padding: 0 0.25rem;
  cursor: pointer;
  margin-bottom: 0.25rem;
  color: ${(props) => props.theme.colors.text.light};
`;

export const StyledH2 = styled.h2`
  font-family: ${fonts.primary};
  ${typography.head.xs}
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const PropertiesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(350px, 100%), 1fr));
  gap: 2rem;
`;

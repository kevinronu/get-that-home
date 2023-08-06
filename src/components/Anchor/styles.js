import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { typography } from "../../styles";

function typeStyles(type, theme) {
  switch (type) {
    case "primary":
      return `
        background-color: ${theme.colors.pink[400]};
        color: ${theme.colors.white.saturated};
        :hover {
          background-color: ${theme.colors.pink[500]};
        }
        :focus {
          outline: 0.1875rem solid ${theme.colors.info};
        }
      `;
    case "secondary":
      return `
        background-color: transparent; 
        border: 0.0625rem solid ${theme.colors.pink[400]};
        color: ${theme.colors.text.standard};
        :hover {
          background-color: ${theme.colors.background.dark};
        }
        :focus {
          outline: 0.1875rem solid ${theme.colors.info};
        }
      `;
    case "tertiary":
      return `
        background-color: ${theme.colors.pink[600]};
        color: ${theme.colors.white.saturated};
        :hover {
          background-color: ${theme.colors.pink[700]};
        }
        :active {
          background-color: ${theme.colors.pink[800]};
        }
        :focus {
          outline: 0.1875rem solid ${theme.colors.info};
        }
        `;
    default:
      return `
        background-color: transparent;
        color: ${theme.colors.text.standard};
        :hover {
          background-color: ${theme.colors.background.dark};
        }
        :focus { 
          outline: 0.1875rem solid ${theme.colors.info};
        }
      `;
  }
}

function sizeStyles(size, rounded) {
  switch (size) {
    case "sm":
      return `
        padding: 0.375rem ${rounded ? "" : "0.625rem"};
        ${typography.text.xs}
      `;
    case "lg":
      return `
          padding: 0.75rem ${rounded ? "" : "1.5rem"};
          ${typography.text.md}
        `;
    default:
      return `
          padding: 0.5rem ${rounded ? "" : "1rem"};
          ${typography.text.sm}
        `;
  }
}

export const StyledAnchor = styled(Link)`
  display: flex;
  width: ${({ fit }) => (fit === "true" ? "fit-content" : "100%")};
  justify-content: center;
  align-items: center;
  text-align: center;
  white-space: nowrap;
  gap: 0.5rem;
  font-weight: 500;
  border-radius: ${({ rounded }) => (rounded ? "50%" : "1.875rem")};
  border: none;
  cursor: pointer;
  letter-spacing: 0.07813rem;
  ${(props) => typeStyles(props.type, props.theme)}
  ${(props) => sizeStyles(props.size, props.rounded)}
`;

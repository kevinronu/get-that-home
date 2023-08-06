import styled from "@emotion/styled";
import { typography } from "../../styles";

function typeStyles(type, theme) {
  switch (type) {
    case "primary":
      return `
        background-color: ${theme.colors.pink[500]};
        border: 0.0625rem solid ${theme.colors.pink[500]};
        color: ${theme.colors.white.saturated};
        :hover {
          background-color: ${theme.colors.pink[600]};
        }
        :active {
          background-color: ${theme.colors.pink[700]};
        }
        :focus {
          outline: 0.1875rem solid ${theme.colors.info};
        }
      `;
    case "secondary":
      return `
        background-color: ${theme.colors.background.lighter};
        border: 0.0625rem solid ${theme.colors.pink[500]};
        color: ${theme.colors.text.standard};
        :hover {
          background-color: ${theme.colors.background.light};
        }
        :active {
          background-color: ${theme.colors.background.standard};
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
        background-color: ${theme.colors.gray[200]};
        color: ${theme.colors.text.standard};
        :hover {
          background-color: ${theme.colors.gray[300]};
        }
        :active {
          background-color: ${theme.colors.gray[400]};
        }
        :focus {
          outline: 0.125rem solid ${theme.colors.gray[400]};
          outline-offset: 0.0625rem;
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
          padding: 0.5rem ${rounded ? "" : "1rem"};
          ${typography.text.md}
        `;
    default:
      return `
          padding: 0.5rem ${rounded ? "" : "1rem"};
          ${typography.text.sm}
        `;
  }
}

export const StyledButton = styled.button`
  display: flex;
  width: ${({ isFullWidth }) => (isFullWidth ? "100%" : "fit-content")};
  justify-content: center;
  align-items: center;
  text-align: center;
  white-space: nowrap;
  gap: 0.5rem;
  font-weight: 700;
  border-radius: ${({ rounded }) => (rounded ? "50%" : "0.5rem")};
  border: none;
  cursor: pointer;
  :disabled {
    opacity: 60%;
    cursor: not-allowed;
  }
  ${(props) => typeStyles(props.type, props.theme)}
  ${(props) => sizeStyles(props.size, props.rounded)}
`;

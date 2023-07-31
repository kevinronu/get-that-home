import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { typography } from "../../styles";

function sizeStyles(size) {
  switch (size) {
    case "sm":
      return `
        padding: 0 0.625rem;
        ${typography.text.sm}
      `;
    case "lg":
      return `
          padding: 0 1.5rem;
          ${typography.text.lg}
        `;
    default:
      return `
          padding: 0 1rem ;
          ${typography.text.md}
        `;
  }
}

export const StyledAnchor = styled(Link)`
  display: flex;
  width: ${({ isFullWidth }) => (isFullWidth ? "100%" : "fit-content")};
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  ${(props) => sizeStyles(props.size)}
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.colors.background.darker};
  }

  :focus {
    outline: 0.1875rem solid ${(props) => props.theme.colors.info};
  }

  .title {
    // white-space: nowrap;
    text-align: center;
    font-weight: 900;
    letter-spacing: 0.07813rem;
    line-height: 1rem;
  }
`;

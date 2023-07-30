import styled from "@emotion/styled";

import { fonts } from "../../styles";

export const StyledInput = styled("input")`
  border: 0.0625rem solid ${(props) => props.theme.colors.pink[400]};
  border-radius: 0.5rem;
  padding: 0.5rem;
  width: ${({ isFullWidth }) => (isFullWidth ? "100%" : "fit-content")};
  accent-color: ${(props) => props.theme.colors.pink[400]};
  ::placeholder {
    color: ${(props) => props.theme.colors.text.light};
  }
  :focus {
    outline: 0.1875rem solid ${(props) => props.theme.colors.info};
  }
`;

export const StyledLabel = styled.label`
  color: ${(props) => props.theme.colors.text.light};
  font-size: 0.625rem;
  font-family: ${fonts.secondary};
  letter-spacing: 0.09375rem;
`;

export const StyledContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 0.25rem;
`;

import styled from "@emotion/styled";
import { fonts } from "../../styles";

export const StyledInput = styled("input")`
  border: none;
  padding: 0.25rem 0;
  width: ${({ isFullWidth }) => (isFullWidth ? "100%" : "3.625rem")};
  accent-color: ${(props) => props.theme.colors.pink[400]};
  ::placeholder {
    color: ${(props) => props.theme.colors.text.light};
    font-family: ${fonts.secondary};
    letter-spacing: 0.03125rem;
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
  //word-wrap: break-word;
`;

export const StyledContainer = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.pink[400]};
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

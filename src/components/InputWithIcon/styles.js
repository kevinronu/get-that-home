import styled from "@emotion/styled";
import { fonts } from "../../styles";

export const StyledDiv = styled.div`
  width: ${({ isFullWidth }) => (isFullWidth ? "100%" : "fit-content")};
`;

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.pink[400]};
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

export const StyledLabel = styled.label`
  color: ${(props) => props.theme.colors.text.light};
  font-size: 0.875rem;
  line-height: 1.25rem; /* 142.857% */
  font-family: ${fonts.secondary};
  letter-spacing: 0.01563rem;
  //word-wrap: break-word;
`;

export const StyledInput = styled("input")`
  border: none;
  font-size: 0.875rem;
  line-height: 1.25rem; /* 142.857% */
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

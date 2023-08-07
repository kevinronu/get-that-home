import styled from "@emotion/styled";
import { fonts } from "../../styles";

export const StyledDiv = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);

  .label {
    padding-right: 0.5rem;
    border-right: 1px solid #e1e2e1;
  }

  .info {
    font-family: ${fonts.secondary};
    font-size: 0.625rem;
    line-height: 1rem;
    letter-spacing: 0.09375rem;
    padding-left: 0.5rem;
  }

  .select {
    padding: 0.5rem;
    font-family: ${fonts.secondary};
    letter-spacing: 0.03125rem;
  }

  @media only screen and (max-width: 580px) {
    flex-direction: column;

    .label {
      border-right: none;
    }

    .select {
      width: 15rem;
    }
  }
`;

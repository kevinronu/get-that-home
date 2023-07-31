import styled from "@emotion/styled";

export const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.colors.background.dark};
`;

export const StyledDiv = styled.div`
  padding: 1rem 1.9375rem;
  text-align: center;
  color: ${(props) => props.theme.colors.text.highContrast};
  font-size: 0.875rem;
  line-height: 1.125rem; /* 128.571% */
  letter-spacing: 0.00625rem;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;

  .source-code {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .source-code__info {
    display: flex;
    gap: 0.35rem;
  }

  @media only screen and (max-width: 630px) {
    flex-direction: column;
  }
`;

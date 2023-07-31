import styled from "@emotion/styled";

export const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.colors.background.dark};
`;

export const StyledDiv = styled.div`
  padding: 1rem 1.9375rem;
  color: ${(props) => props.theme.colors.text.highContrast};
  font-size: 0.875rem;
  line-height: 1.125rem; /* 128.571% */
  letter-spacing: 0.00625rem;
  padding: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  .title {
    text-align: left;
  }

  .title__icon {
    color: ${(props) => props.theme.colors.pink[600]};
  }

  .github__link {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .source-code,
  .logo,
  .Footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-width: 860px) {
    flex-direction: column;
  }
`;

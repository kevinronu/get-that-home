import styled from "@emotion/styled";

export const StyledDiv = styled.div`
  padding: 2rem;
  max-width: 18.125rem;

  .login__card {
    display: flex;
    padding: 2rem;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    border-radius: 0.5rem;
    background: ${(props) => props.theme.colors.white.standard};
    color: ${(props) => props.theme.colors.black.standard};
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  }

  .login__title {
    text-align: center;
    letter-spacing: 0.03125rem;
  }
`;

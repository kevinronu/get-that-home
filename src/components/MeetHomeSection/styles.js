import styled from "@emotion/styled";
import background from "../../assets/images/background.webp";

export const StyledMain = styled.main`
  padding: 4rem 0;
  background: url(${background}) no-repeat center center;
  background-size: cover;
  min-height: 60vh;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.colors.black.standard};
`;

export const StyledH1 = styled.h1`
  font-size: 4rem;
  font-weight: 300;
  line-height: 5.5rem;
  letter-spacing: -0.03125rem;
  text-align: center;

  @media only screen and (max-width: 580px) {
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.5rem;
  }
`;

export const Info = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;

  @media only screen and (max-width: 580px) {
    font-size: 1.25rem;
  }
`;

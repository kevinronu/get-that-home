import styled from "@emotion/styled";

export const StyledSection = styled.section`
  margin: 4rem 0;
  background-color: ${(props) => props.theme.colors.primary.lighter};
`;

export const StyledH3 = styled.h3`
  text-align: center;
  font-family: Montserrat;
  font-size: 2.25rem;
  line-height: 3rem;
  letter-spacing: 0.01563rem;
`;

export const StyledContainer = styled.div`
  display: grid;
  place-items: center;
  gap: 2rem;
`;

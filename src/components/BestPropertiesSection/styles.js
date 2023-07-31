import styled from "@emotion/styled";

export const StyledP = styled.p`
  text-align: center;
  font-size: 0.875rem;
  margin-bottom: 1rem;
`;

export const StyledH2 = styled.h2`
  text-align: center;
  font-size: 2.25rem;
  letter-spacing: 0.01563rem;
  margin-bottom: 2rem;
`;

export const PropertiesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(350px, 100%), 1fr));
  gap: 2rem;
`;

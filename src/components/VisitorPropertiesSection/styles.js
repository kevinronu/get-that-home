import styled from "@emotion/styled";
import { typography, fonts } from "../../styles/typography";

export const StyledH2 = styled.h2`
  font-family: ${fonts.primary};
  ${typography.head.xs}
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const PropertiesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(350px, 100%), 1fr));
  gap: 2rem;
`;

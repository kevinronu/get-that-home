import Container from "../../layout/Container";
import { StyledContainer, StyledH3, StyledSection } from "./styles";
import Anchor from "../Anchor";

export default function SignUpMessageSection() {
  return (
    <StyledSection>
      <Container size={"xl"}>
        <StyledContainer>
          <StyledH3>
            Getting someone to rent your apartment has never been this easy
          </StyledH3>
          <Anchor type="primary" size="lg" to={"/sign_up"}>
            CREATE AN ACCOUNT NOW
          </Anchor>
        </StyledContainer>
      </Container>
    </StyledSection>
  );
}

import { StyledDiv, StyledFooter } from "./styles";
import { DiRuby, DiReact } from "react-icons/di";
import Container from "../../layout/Container";

function FooterHome() {
  return (
    <StyledFooter>
      <Container size={"xl"}>
        <StyledDiv>
          <p>©2023 - Find That Home</p>
          <div className="source-code">
            <p>Source Code</p>
            <div className="source-code__info">
              <DiRuby size={"1.125rem"} />
              <p>Ruby on Rails REST API</p>
            </div>
            <div className="source-code__info">
              <DiReact size={"1.125rem"} />
              <p>React Responsive SPA</p>
            </div>
          </div>
        </StyledDiv>
      </Container>
    </StyledFooter>
  );
}

export default FooterHome;

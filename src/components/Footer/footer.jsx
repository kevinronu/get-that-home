import { StyledDiv, StyledFooter } from "./styles";
import { DiRuby, DiReact } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
import Container from "../../layout/Container";
import Logo from "../Logo";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <StyledFooter>
      <Container size={"xl"}>
        <>
          <StyledDiv>
            <div className="logo">
              <Logo size="sm" />
              <p>© 2023 - Get That Home</p>
            </div>
            <div className="owner">
              <p className="title">
                Build with <span className="title__icon">❤</span> by:
              </p>
              <a
                href={"https://github.com/kevinronu"}
                target="_blank"
                rel="noreferrer"
                className="github__link"
              >
                <AiFillGithub />
                Kevin Robles
              </a>
            </div>
            <div className="source-code">
              <p className="title">Source code:</p>
              <Link
                className="github__link"
                to={"https://github.com/kevinronu/get-that-home-api"}
                target="_blank"
                rel="noreferrer"
              >
                <DiRuby size={"1.125rem"} />
                <p>Ruby on Rails REST API</p>
              </Link>
              <Link
                className="github__link"
                to={"https://github.com/kevinronu/get-that-home"}
                target="_blank"
                rel="noreferrer"
              >
                <DiReact size={"1.125rem"} />
                <p>React Responsive SPA</p>
              </Link>
            </div>
          </StyledDiv>
        </>
      </Container>
    </StyledFooter>
  );
}

export default Footer;

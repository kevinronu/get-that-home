import { useContext } from "react";

import Anchor from "../../components/Anchor";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { AuthContext } from "../../context/auth-context";
import Section from "../../layout/Section";
import Container from "../../layout/Container";
import { StyledContainer } from "./styles";

export default function NotFoundPage() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Header user={user} />
      <Section size="xs">
        <StyledContainer>
          <h1 className="title">Page not found</h1>
          <Anchor to={"/"} fit={"true"} type={"primary"} size={"lg"}>
            Go Home
          </Anchor>
        </StyledContainer>
      </Section>
      <Footer />
    </>
  );
}

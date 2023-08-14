import { useContext } from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { AuthContext } from "../../context/auth-context";
import Section from "../../layout/Section";
import { StyledContainer } from "./styles";

export default function LoadingPage() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Header user={user} />
      <Section size="xs">
        <StyledContainer>
          <h1 className="loading">Loading...</h1>
        </StyledContainer>
      </Section>
      <Footer />
    </>
  );
}

import { Link } from "react-router-dom";

import Container from "../../layout/Container";
import landlord from "../../assets/images/landlord.webp";
import seeker from "../../assets/images/seeker.webp";
import { StyledSection } from "./styles";

export default function SignUpSection() {
  return (
    <StyledSection>
      <Container size={"xl"} padding={"1rem"}>
        <div className="header">
          <p className="header__instructions">
            Select the profile with which you identify
          </p>
          <h1 className="header__title">What are you looking for?</h1>
        </div>
        <div className="options">
          <Link to={"landlord"} className="link">
            <img src={landlord} alt="landlord" className="link__img" />
            <h2 className="link__title">Landlord</h2>
            <p className="link__description">You want to rent or sell a home</p>
          </Link>
          <Link to={"seeker"} className="link">
            <img src={seeker} alt="seeker" className="link__img" />
            <h2 className="link__title">Home seeker</h2>
            <p className="link__description">You want to find a home</p>
          </Link>
        </div>
      </Container>
    </StyledSection>
  );
}

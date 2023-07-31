import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import {
  PropertiesContainer,
  StyledSection,
  StyledNav,
  StyledLinkActive,
  StyledLinkInactive,
  StyledH2,
} from "./styles";
import Container from "../../layout/Container/container";
import { LandlordContext } from "../../context/landlord-context";
import Pagination from "../Pagination";
import LandlordPropertyCard from "../LandlordPropertyCard";
import Anchor from "../Anchor";

export default function MyActivePropertiesSection() {
  const { page } = useParams();
  const { myProperties } = useContext(LandlordContext);
  const [myActiveProperties, setMyActiveProperties] = useState([]);
  const [quantityPerPage] = useState(12);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const lastIndex = page * quantityPerPage;
  const firstIndex = lastIndex - quantityPerPage;

  useEffect(() => {
    const myNewActiveProperties = myProperties.filter(
      (property) => !property.closed
    );
    setTotalQuantity(myNewActiveProperties.length);
    setMyActiveProperties(myNewActiveProperties);
  }, [myProperties]);

  return (
    <>
      <StyledSection>
        <Container size="xl">
          <>
            <Anchor to={"/property/create"} type="primary">
              Create Property
            </Anchor>
            <StyledNav>
              <ul className="links">
                <li>
                  <StyledLinkActive>ACTIVE</StyledLinkActive>
                  <hr className="link--active" />
                </li>
                <li>
                  <StyledLinkInactive to={"/my_properties/closed"}>
                    CLOSED
                  </StyledLinkInactive>
                  <hr className="link--inactive" />
                </li>
              </ul>
            </StyledNav>
            <StyledH2>{totalQuantity} Properties found</StyledH2>
            <PropertiesContainer>
              {myActiveProperties
                .slice(firstIndex, lastIndex)
                .map((property) => {
                  const isOwner = true;

                  return (
                    <LandlordPropertyCard
                      key={`property-${property.id}`}
                      property={property}
                      isOwner={isOwner}
                    />
                  );
                })}
            </PropertiesContainer>
            <Pagination
              quantityPerPage={quantityPerPage}
              totalQuantity={totalQuantity}
              location={"/my_properties/closed"}
            />
          </>
        </Container>
      </StyledSection>
    </>
  );
}

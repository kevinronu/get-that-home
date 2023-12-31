import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import {
  PropertiesContainer,
  StyledNav,
  StyledH2,
  StyledLinkInactive,
  StyledLinkActive,
} from "./styles";
import Container from "../../layout/Container/container";
import LandlordPropertyCard from "../LandlordPropertyCard";
import Pagination from "../Pagination";
import { LandlordContext } from "../../context/landlord-context";
import Anchor from "../Anchor";
import Section from "../../layout/Section";
import { MAX_PAGES_GENERATED } from "../../const/pagination";

export default function MyClosedPropertiesSection() {
  const { page } = useParams();
  const { myProperties } = useContext(LandlordContext);
  const [myClosedProperties, setMyClosedProperties] = useState([]);
  const [quantityPerPage] = useState(12);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const lastIndex = page * quantityPerPage;
  const firstIndex = lastIndex - quantityPerPage;

  useEffect(() => {
    const myNewClosedProperties = myProperties.filter(
      (property) => property.closed
    );
    setTotalQuantity(myNewClosedProperties.length);
    setMyClosedProperties(myNewClosedProperties);
  }, [myProperties]);

  return (
    <>
      <Section size="xs">
        <Container size="xl" padding={"1rem"}>
          <>
            <Anchor to={"/property/create"} type="primary" fit={"true"}>
              Create Property
            </Anchor>
            <StyledNav>
              <ul className="links">
                <li>
                  <StyledLinkInactive to={"/my_properties/active"}>
                    ACTIVE
                  </StyledLinkInactive>
                  <hr className="link--inactive" />
                </li>
                <li>
                  <StyledLinkActive>CLOSED</StyledLinkActive>
                  <hr className="link--active" />
                </li>
              </ul>
            </StyledNav>
            <StyledH2>{totalQuantity} Properties found</StyledH2>
            <PropertiesContainer>
              {myClosedProperties
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
              location={"/my_properties/closed"}
              currentPage={Number(page)}
              totalQuantity={totalQuantity}
              quantityPerPage={quantityPerPage}
              maxPagesGenerated={MAX_PAGES_GENERATED}
            />
          </>
        </Container>
      </Section>
    </>
  );
}

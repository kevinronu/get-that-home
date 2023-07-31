import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  PropertiesContainer,
  StyledSection,
  StyledNav,
  StyledH2,
  StyledLinkInactive,
  StyledLinkActive,
} from "./styles";
import SeekerPropertyCard from "../SeekerPropertyCard";
import { SeekerContext } from "../../context/seeker-context";
import Container from "../../layout/Container/container";
import Pagination from "../Pagination";

export default function SavedContactedPropertiesSection() {
  const { page } = useParams();
  const { contacts, favorites } = useContext(SeekerContext);
  const [quantityPerPage] = useState(12);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const lastIndex = page * quantityPerPage;
  const firstIndex = lastIndex - quantityPerPage;

  useEffect(() => {
    setTotalQuantity(contacts.length);
  }, [contacts]);

  return (
    <>
      <StyledSection>
        <Container size="xl">
          <>
            <StyledNav>
              <ul className="links">
                <li>
                  <StyledLinkInactive to={"/saved_properties/favorites"}>
                    FAVORITE
                  </StyledLinkInactive>
                  <hr className="link--inactive" />
                </li>
                <li>
                  <StyledLinkActive>CONTACTED</StyledLinkActive>
                  <hr className="link--active" />
                </li>
              </ul>
            </StyledNav>
            <StyledH2>{totalQuantity} Properties found</StyledH2>
            <PropertiesContainer>
              {contacts.slice(firstIndex, lastIndex).map((property) => {
                const isFavorite = favorites.some(
                  (favorite) => favorite.id === property.id
                );

                return (
                  <SeekerPropertyCard
                    key={`property-${property.id}`}
                    property={property}
                    isFavorite={isFavorite}
                  />
                );
              })}
            </PropertiesContainer>
            <Pagination
              quantityPerPage={quantityPerPage}
              totalQuantity={totalQuantity}
              location={"/saved_properties/contacted"}
            />
          </>
        </Container>
      </StyledSection>
    </>
  );
}

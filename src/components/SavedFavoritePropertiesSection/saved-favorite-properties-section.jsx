import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  PropertiesContainer,
  StyledSection,
  StyledNav,
  StyledH2,
  StyledLinkActive,
  StyledLinkInactive,
} from "./styles";
import { SeekerContext } from "../../context/seeker-context";
import SeekerPropertyCard from "../SeekerPropertyCard";
import Container from "../../layout/Container/container";
import Pagination from "../Pagination";

export default function SavedFavoritePropertiesSection() {
  const { page } = useParams();
  const { favorites } = useContext(SeekerContext);
  const [quantityPerPage] = useState(12);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const lastIndex = page * quantityPerPage;
  const firstIndex = lastIndex - quantityPerPage;

  useEffect(() => {
    setTotalQuantity(favorites.length);
  }, [favorites]);

  return (
    <>
      <StyledSection>
        <Container size="xl">
          <>
            <StyledNav>
              <ul className="links">
                <li>
                  <StyledLinkActive>FAVORITE</StyledLinkActive>
                  <hr className="link__active" />
                </li>
                <li>
                  <StyledLinkInactive to={"/saved_properties/contacted"}>
                    CONTACTED
                  </StyledLinkInactive>
                  <hr className="link__inactive" />
                </li>
              </ul>
            </StyledNav>
            <StyledH2>{totalQuantity} Properties found</StyledH2>
            <PropertiesContainer>
              {favorites.slice(firstIndex, lastIndex).map((property) => {
                return (
                  <SeekerPropertyCard
                    key={`property-${property.id}`}
                    property={property}
                    isFavorite={true}
                  />
                );
              })}
            </PropertiesContainer>
            <Pagination
              quantityPerPage={quantityPerPage}
              totalQuantity={totalQuantity}
              location={"/saved_properties/favorites"}
            />
          </>
        </Container>
      </StyledSection>
    </>
  );
}

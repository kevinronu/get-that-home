import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  PropertiesContainer,
  StyledNav,
  StyledH2,
  StyledLinkActive,
  StyledLinkInactive,
} from "./styles";
import { SeekerContext } from "../../context/seeker-context";
import SeekerPropertyCard from "../SeekerPropertyCard";
import Container from "../../layout/Container/container";
import Pagination from "../Pagination";
import Section from "../../layout/Section";

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
      <Section size="xs">
        <Container size="xl" padding={"1rem"}>
          <>
            <StyledNav>
              <ul className="links">
                <li>
                  <StyledLinkActive>FAVORITE</StyledLinkActive>
                  <hr className="link--active" />
                </li>
                <li>
                  <StyledLinkInactive to={"/saved_properties/contacted"}>
                    CONTACTED
                  </StyledLinkInactive>
                  <hr className="link--inactive" />
                </li>
              </ul>
            </StyledNav>
            <StyledH2>{totalQuantity} Properties found</StyledH2>
            <PropertiesContainer>
              {favorites.slice(firstIndex, lastIndex).map((favorite) => {
                return (
                  <SeekerPropertyCard
                    key={`favorite-property-${favorite.property.id}`}
                    property={favorite.property}
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
      </Section>
    </>
  );
}

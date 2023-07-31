import PropTypes from "prop-types";
import { useContext } from "react";

import {
  PropertiesContainer,
  StyledSection,
  StyledH2,
  StyledP,
} from "./styles";
import { AuthContext } from "../../context/auth-context";
import Container from "../../layout/Container/container";
import VisitorPropertyCard from "../VisitorPropertyCard";
import LandlordPropertyCard from "../LandlordPropertyCard";
import SeekerPropertyCard from "../SeekerPropertyCard";

export default function BestPropertiesSection() {
  const { user, properties } = useContext(AuthContext);

  return (
    <StyledSection>
      <Container size="xl">
        <>
          <StyledP>Find an Apartment you Love</StyledP>
          <StyledH2>Homes for rent at the best prices</StyledH2>
          <PropertiesContainer>
            {properties.slice(0, 3).map((property) => {
              const isOwner = false;
              const isFavorite = false;

              return !user ? (
                <VisitorPropertyCard
                  key={`property-${property.id}`}
                  property={property}
                />
              ) : user.role === "landlord" ? (
                <LandlordPropertyCard
                  key={`property-${property.id}`}
                  property={property}
                  isOwner={isOwner}
                />
              ) : (
                <SeekerPropertyCard
                  key={`property-${property.id}`}
                  property={property}
                  isFavorite={isFavorite}
                />
              );
            })}
          </PropertiesContainer>
        </>
      </Container>
    </StyledSection>
  );
}

BestPropertiesSection.propTypes = {
  best_properties: PropTypes.array,
  favorites: PropTypes.array,
  own_properties: PropTypes.array,
};

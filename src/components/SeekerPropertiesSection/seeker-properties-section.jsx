import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { PropertiesContainer, StyledH2 } from "./styles";
import Container from "../../layout/Container";
import Section from "../../layout/Section";
import SeekerPropertyCard from "../SeekerPropertyCard";
import Pagination from "../Pagination";
import { SeekerContext } from "../../context/seeker-context";
import { PropertyContext } from "../../context/property-context";
import FilterPropertiesPage from "../FiltersPropertiesPage";

export default function SeekerPropertiesSection() {
  const { page } = useParams();
  const { filteredProperties } = useContext(PropertyContext);
  const { favorites } = useContext(SeekerContext);
  const [quantityPerPage] = useState(12);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const lastIndex = page * quantityPerPage;
  const firstIndex = lastIndex - quantityPerPage;

  useEffect(() => {
    setTotalQuantity(filteredProperties.length);
  }, [filteredProperties]);

  return (
    <Section size="xs">
      <Container size="xl" padding={"1rem"}>
        <>
          <FilterPropertiesPage />
          <StyledH2>{totalQuantity} Properties found</StyledH2>
          <PropertiesContainer>
            {filteredProperties.slice(firstIndex, lastIndex).map((property) => {
              const isFavorite = favorites.some(
                (favorite) => favorite.property.id === property.id
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
            location={"/properties"}
          />
        </>
      </Container>
    </Section>
  );
}

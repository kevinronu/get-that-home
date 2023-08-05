import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { PropertiesContainer, StyledH2 } from "./styles";
import Container from "../../layout/Container";
import Section from "../../layout/Section";
import LandlordPropertyCard from "../LandlordPropertyCard";
import Pagination from "../Pagination";
import { LandlordContext } from "../../context/landlord-context";
import { PropertyContext } from "../../context/property-context";
import FilterPropertiesPage from "../FiltersPropertiesPage";

export default function LandlordPropertiesSection() {
  const { page } = useParams();
  const { filteredProperties } = useContext(PropertyContext);
  const { myProperties } = useContext(LandlordContext);
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
              const isOwner = myProperties.some(
                (myProperty) => myProperty.id === property.id
              );

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
            location={"/properties"}
          />
        </>
      </Container>
    </Section>
  );
}

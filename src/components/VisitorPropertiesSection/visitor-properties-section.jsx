import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { PropertyContext } from "../../context/property-context";
import FilterPropertiesPage from "../FiltersPropertiesPage";
import { PropertiesContainer, StyledH2 } from "./styles";
import VisitorPropertyCard from "../VisitorPropertyCard";
import Container from "../../layout/Container";
import Section from "../../layout/Section";
import Pagination from "../Pagination";

export default function VisitorPropertiesSection() {
  const { page } = useParams();
  const { filteredProperties } = useContext(PropertyContext);
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
              return (
                <VisitorPropertyCard
                  key={`property-${property.id}`}
                  property={property}
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

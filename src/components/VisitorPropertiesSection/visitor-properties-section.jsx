import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { PropertiesContainer, StyledH2 } from "./styles";
import { AuthContext } from "../../context/auth-context";
import VisitorPropertyCard from "../VisitorPropertyCard";
import Pagination from "../Pagination";
import Container from "../../layout/Container";
import Section from "../../layout/Section";

export default function VisitorPropertiesSection() {
  const { page } = useParams();
  const { properties } = useContext(AuthContext);
  const [quantityPerPage] = useState(12);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const lastIndex = page * quantityPerPage;
  const firstIndex = lastIndex - quantityPerPage;

  useEffect(() => {
    setTotalQuantity(properties.length);
  }, [properties]);

  return (
    <Section size="xs">
      <Container size="xl" padding={"1rem"}>
        <>
          <div>Filters</div>
          <StyledH2>{totalQuantity} Properties found</StyledH2>
          <PropertiesContainer>
            {properties.slice(firstIndex, lastIndex).map((property) => {
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

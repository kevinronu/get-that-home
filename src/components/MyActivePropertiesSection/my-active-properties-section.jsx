import { useState, useEffect } from "react";
import {
  PropertiesContainer,
  StyledSection,
  BoxOptions,
  StyledLinkActive,
  StyledLinkInactive,
  StyledH2,
} from "./styles";
import Container from "../../layout/Container/container";
import PropertyCard from "../PropertyCard";
import Pagination from "../Pagination";
import { getMyProperties } from "../../services/property-service";

export default function MyActivePropertiesSection() {
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [productsPerpage, setProductsPerpage] = useState(12);
  const [currentPage, setCurrentPage] = useState(
    sessionStorage.getItem("seekerCurrentPage")
      ? sessionStorage.getItem("seekerCurrentPage")
      : 1
  );

  useEffect(() => {
    const actProducts = [];

    getMyProperties()
      .then((property) => {
        property.forEach((property) => {
          if (!property.close) {
            actProducts.push(property);
          }
        });
        sessionStorage.setItem("seekerCurrentPage", 1);
        setProducts(actProducts);
      })
      .catch(console.log);
  }, []);

  useEffect(() => {
    const totalProducts = products.length;
    setTotalProducts(totalProducts);
    setCurrentPage(1);
  }, [products]);

  function handleDeleteProperty(id) {
    const newProducts = products.filter((product) => product.id != id);
    setProducts(newProducts);
  }

  const lastIndex = currentPage * productsPerpage;
  const firstIndex = lastIndex - productsPerpage;

  return (
    <>
      <StyledSection>
        <Container size="xl">
          <>
            <BoxOptions>
              <div>
                <StyledLinkActive>ACTIVE</StyledLinkActive>
                <hr className="active" />
              </div>
              <div>
                <StyledLinkInactive to={"/myproperties/closed"}>
                  CLOSED
                </StyledLinkInactive>
                <hr className="inactive" />
              </div>
            </BoxOptions>
            <StyledH2>{totalProducts} Properties found</StyledH2>
            <PropertiesContainer>
              {products.slice(firstIndex, lastIndex).map((property) => {
                const isOwner = true;

                return (
                  <PropertyCard
                    key={`property-${property.id}`}
                    property={property}
                    isOwner={isOwner}
                    handleDeleteProperty={handleDeleteProperty}
                  />
                );
              })}
            </PropertiesContainer>
          </>
        </Container>
      </StyledSection>
      <Pagination
        productsPerpage={productsPerpage}
        setCurrentPage={setCurrentPage}
        totalProducts={totalProducts}
      />
    </>
  );
}

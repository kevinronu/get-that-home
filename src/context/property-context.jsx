import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getProperties } from "../services/property-service";
import { filterProperties } from "../utils/utils";

const PropertyContext = createContext();

function PropertyProvider(props) {
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [filters, setFilters] = useState({
    address: "",
    minPrice: 0,
    maxPrice: Infinity,
    propertyType: [],
    minBeds: 0,
    minBaths: 0,
    petsAllowed: null,
    minArea: 0,
    maxArea: Infinity,
    operationType: "all",
  });

  useEffect(() => {
    getProperties()
      .then((properties) => {
        setProperties(properties);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    setFilteredProperties(filterProperties(properties, filters));
  }, [properties, filters]);

  function handleFilters(newFilters) {
    const newAllFilters = { ...filters, ...newFilters };
    setFilters(newAllFilters);
    navigate("/properties/page/1");
  }

  function handleFiltersWithoutRefresh(newFilters) {
    const newAllFilters = { ...filters, ...newFilters };
    setFilters(newAllFilters);
  }

  function createProperty(property) {
    const newProperties = [...properties, property];
    setProperties(newProperties);
  }

  function updateProperty(property) {
    const indexToUpdate = properties.findIndex((e) => e.id === property.id);
    const newProperties = [
      ...properties.slice(0, indexToUpdate),
      property,
      ...properties.slice(indexToUpdate + 1),
    ];
    setProperties(newProperties);
  }

  function deleteProperty(id) {
    const newProperties = properties.filter((property) => property.id != id);
    setProperties(newProperties);
  }

  const value = {
    properties,
    filteredProperties,
    createProperty,
    updateProperty,
    deleteProperty,
    handleFilters,
    handleFiltersWithoutRefresh,
  };

  return <PropertyContext.Provider value={value} {...props} />;
}

export { PropertyProvider, PropertyContext };

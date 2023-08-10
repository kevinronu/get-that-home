import { ALL_FILTERS_SELECTED } from "../const/filters";

export function filterProperties(
  properties,
  filters = {
    address: "",
    minPrice: 0,
    maxPrice: Infinity,
    propertyType: [],
    minBeds: 0,
    minBaths: 0,
    petsAllowed: null,
    minArea: 0,
    maxArea: Infinity,
    operationType: ALL_FILTERS_SELECTED,
  }
) {
  return properties.filter((property) => {
    if (property.closed) return false;

    if (filters.address) {
      if (
        !property.address.toLowerCase().includes(filters.address.toLowerCase())
      )
        return false;
    }

    if (property.operation_type === "rent") {
      if (
        property.monthly_rent < filters.minPrice * 1000 ||
        property.monthly_rent > filters.maxPrice * 1000
      )
        return false;
    } else if (property.operation_type === "sale") {
      if (
        property.price * 1000 < filters.minPrice ||
        property.price > filters.maxPrice * 1000
      )
        return false;
    }

    if (
      filters.propertyType.length != 0 &&
      !filters.propertyType.includes(property.property_type)
    )
      return false;

    if (
      property.bedrooms < filters.minBeds ||
      property.bathrooms < filters.minBaths
    )
      return false;

    if (filters.petsAllowed != null) {
      if (property.pets_allowed != filters.petsAllowed) return false;
    }

    if (property.area < filters.minArea || property.area > filters.maxArea)
      return false;

    if (
      filters.operationType != ALL_FILTERS_SELECTED &&
      filters.operationType != property.operation_type
    )
      return false;

    return true;
  });
}

export function getCoordinates(address) {
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

  return fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => data.results[0].geometry.location)
    .catch(console.log);
}

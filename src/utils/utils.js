export function filterProperties(
  properties,
  filters = {
    address: "",
    minPrice: 0,
    maxPrice: Infinity,
    propertyType: [],
    minBeds: 0,
    minBaths: 0,
    petsAllowed: false,
    minArea: 0,
    maxArea: Infinity,
    operationType: "all",
  }
) {
  return properties
    .filter((property) => {
      const regex = new RegExp(filters.address, "i");
      return filters.address === "" || property.address.search(regex) >= 0;
    })
    .filter((property) => {
      if (property.operation_type === "rent") {
        return (
          property.monthly_rent >= filters.minPrice * 1000 &&
          property.monthly_rent <= filters.maxPrice * 1000
        );
      } else if (property.operation_type === "sale") {
        return (
          property.price * 1000 >= filters.minPrice &&
          property.price <= filters.maxPrice * 1000
        );
      }
    })
    .filter(
      (property) =>
        filters.propertyType.length === 0 ||
        filters.propertyType.includes(property.property_type)
    )
    .filter(
      (property) =>
        property.bedrooms >= filters.minBeds &&
        property.bathrooms >= filters.minBaths
    )
    .filter(
      (property) =>
        (!filters.petsAllowed ||
          property.pets_allowed >= filters.petsAllowed) &&
        property.area >= filters.minArea &&
        property.area <= filters.maxArea
    )
    .filter(
      (property) =>
        filters.operationType === "all" ||
        filters.operationType === property.operation_type
    );
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

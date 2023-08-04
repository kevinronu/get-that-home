export function filterProperties(
  properties,
  filters = {
    address: "",
    minPrice: 0,
    maxPrice: Infinity,
    propertyType: [],
    minBeds: 0,
    minBaths: 0,
    petsAllowed: "all",
    minArea: 0,
    maxArea: Infinity,
  }
) {
  return properties
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
    );
}

import { FilterContainer } from "./styles";
import FilterPropertyType from "../FilterPropertyType";
import FilterPetArea from "../FilterPetArea";
import FilterBedBath from "../FilterBedBath";
import FilterSearch from "../FilterSearch";
import FilterPrice from "../FilterPrice";
import FilterOperationType from "../FilterOperationType";
import Button from "../Button";
import { useContext } from "react";
import { PropertyContext } from "../../context/property-context";

export default function FilterPropertiesPage() {
  const { clearFilters } = useContext(PropertyContext);

  return (
    <FilterContainer>
      <FilterSearch />
      <div className="filters-container">
        <FilterPrice />
        <FilterPropertyType />
        <FilterBedBath />
        <FilterPetArea />
      </div>
      <FilterOperationType />
      <Button onClick={clearFilters} type="secondary">
        Clear Filters
      </Button>
    </FilterContainer>
  );
}

import { FilterContainer } from "./styles";
import FilterPropertyType from "../FilterPropertyType";
import FilterPetArea from "../FilterPetArea";
import FilterBedBath from "../FilterBedBath";
import FilterSearch from "../FilterSearch";
import FilterPrice from "../FilterPrice";

export default function FilterPropertiesPage() {
  return (
    <FilterContainer>
      <FilterSearch />
      <div className="filters-container">
        <FilterPrice />
        <FilterPropertyType />
        <FilterBedBath />
        <FilterPetArea />
      </div>
    </FilterContainer>
  );
}

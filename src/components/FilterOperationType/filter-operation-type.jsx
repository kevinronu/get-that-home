import { useContext } from "react";

import { PropertyContext } from "../../context/property-context";
import { StyledSelect } from "./styles";
import { ALL_FILTERS_SELECTED } from "../../const/filters";

export default function FilterOperationType() {
  const { filters, handleFilters } = useContext(PropertyContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    handleFilters({ [name]: value });
  };

  return (
    <StyledSelect
      name="operationType"
      value={filters.operationType}
      onChange={handleChange}
    >
      <option value={ALL_FILTERS_SELECTED}>Buying & Renting</option>
      <option value="sale">Buying</option>
      <option value="rent">Renting</option>
    </StyledSelect>
  );
}

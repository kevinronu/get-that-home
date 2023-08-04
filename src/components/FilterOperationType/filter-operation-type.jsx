import { useContext } from "react";

import { PropertyContext } from "../../context/property-context";
import { StyledSelect } from "./styles";

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
      <option value="all">Buying & Renting</option>
      <option value="sale">Buying</option>
      <option value="rent">Renting</option>
    </StyledSelect>
  );
}

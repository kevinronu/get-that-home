import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { TfiSearch } from "react-icons/tfi";

import { StyledContainer } from "./styles";
import { PropertyContext } from "../../context/property-context";

export default function FilterSearch() {
  const { datalist, filters, setFilters } = useContext(PropertyContext);
  const [query, setQuery] = useState("");

  useEffect(() => setQuery(filters.address), [filters.address]);

  useEffect(() => {
    if (query === "") return;

    const setFilter = () => {
      setFilters((prevFilters) => ({ ...prevFilters, address: query }));
    };

    const timerId = setTimeout(setFilter, 1000);
    return () => clearTimeout(timerId);
  }, [query, setFilters]);

  return (
    <StyledContainer>
      <TfiSearch size={"1.25rem"} />
      <input
        list="address"
        name="address"
        onChange={(event) => setQuery(event.target.value)}
        value={query}
        placeholder="Search by address"
        className="input"
      />
      <datalist id="address">
        {datalist.map((e, index) => (
          <option key={index} value={e} />
        ))}
      </datalist>
    </StyledContainer>
  );
}

FilterSearch.propTypes = {
  handleFilters: PropTypes.func,
  datalist: PropTypes.array,
};

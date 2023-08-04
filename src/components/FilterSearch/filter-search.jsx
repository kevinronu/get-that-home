import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { TfiSearch } from "react-icons/tfi";

import { StyledContainer } from "./styles";
import { PropertyContext } from "../../context/property-context";

export default function FilterSearch() {
  const { filteredProperties, handleFilters } = useContext(PropertyContext);
  const [formData, setFormData] = useState({
    address: "",
  });
  const [datalist, setDatalist] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query === "" && formData.address === "") return;

    const setFilter = () => {
      const newData = { address: query };
      setFormData(newData);
      handleFilters(newData);
    };
    const timerId = setTimeout(setFilter, 1000);

    return () => clearTimeout(timerId);
  }, [query, handleFilters, formData.address]);

  useEffect(() => {
    setDatalist(filteredProperties.map((property) => property.address));
  }, [filteredProperties]);

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

import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import { TfiSearch } from "react-icons/tfi";
import { StyledContainer } from "./styles";

export default function FilterSearch({ datalist = [], handleFilters }) {
  const [formData, setFormData] = useState({
    address: "",
  });
  const [query, setQuery] = useState("");

  const { address } = formData;

  useEffect(() => {
    if (query === "" && address === "") return;

    const setFilter = () => {
      const newData = { address: query };
      setFormData(newData);
      handleFilters(newData);
    };
    const timerId = setTimeout(setFilter, 1000);

    return () => clearTimeout(timerId);
  }, [query]);

  return (
    <StyledContainer>
      <TfiSearch size={"1.25rem"} />
      <input
        list="address"
        name="address"
        onChange={(event) => setQuery(event.target.value)}
        value={query}
      />
      <datalist id="address" className="container">
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

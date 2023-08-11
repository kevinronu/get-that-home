import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { BiSolidDollarCircle } from "react-icons/bi";
import { BsDashLg } from "react-icons/bs";

import Button from "../Button";
import InputWithIcon from "../InputWithIcon";
import { StyledContainer } from "./styles";
import { PropertyContext } from "../../context/property-context";

export default function FilterPrice() {
  const { filters, handleFilters } = useContext(PropertyContext);
  const [showFilter, setShowFilter] = useState(false);

  const [formData, setFormData] = useState({
    minPrice: "",
    maxPrice: "",
  });

  useEffect(() => {
    const { minPrice, maxPrice } = filters;
    setFormData({
      minPrice,
      maxPrice,
    });
  }, [filters]);

  const { minPrice, maxPrice } = formData;

  const handleToggleFilter = () => {
    setShowFilter(!showFilter);
  };

  function handleChange(event) {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    const newValues = { ...formData, [name]: value };
    setFormData(newValues);
  }

  function calcText() {
    if (minPrice === "" && maxPrice === "") {
      return "PRICE";
    } else if (minPrice != "" && maxPrice === "") {
      return `>= $${minPrice}k`;
    } else if (minPrice === "" && maxPrice != "") {
      return `<= $${maxPrice}k`;
    } else {
      return `$${minPrice}k - $${maxPrice}k`;
    }
  }

  return (
    <StyledContainer>
      <Button type="primary" onClick={handleToggleFilter} isFullWidth={true}>
        {calcText()}
      </Button>
      {showFilter && (
        <div className="container">
          <form className="form">
            <div>
              <p className="form__label">PRICE RANGE</p>
              <div className="form__inputs">
                <InputWithIcon
                  icon={<BiSolidDollarCircle size={"1.25rem"} />}
                  name="minPrice"
                  type="number"
                  placeholder="min"
                  onChange={handleChange}
                  value={minPrice}
                />
                <BsDashLg size={"0.6875rem"} />
                <InputWithIcon
                  icon={<BiSolidDollarCircle size={"1.25rem"} />}
                  name="maxPrice"
                  type="number"
                  placeholder="max"
                  onChange={handleChange}
                  value={maxPrice}
                />
              </div>
            </div>
            <Button
              type="primary"
              className="form__button"
              onClick={(e) => {
                e.preventDefault();
                handleToggleFilter();
                handleFilters(formData);
              }}
            >
              DONE
            </Button>
          </form>
        </div>
      )}
    </StyledContainer>
  );
}

FilterPrice.propTypes = {
  handleFilters: PropTypes.func,
};

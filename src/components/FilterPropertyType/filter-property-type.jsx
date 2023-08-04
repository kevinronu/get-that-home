import PropTypes from "prop-types";
import { useState } from "react";

import Button from "../Button";
import { StyledContainer } from "./styles";

export default function FilterPropertyType({ handleFilters }) {
  const [showFilter, setShowFilter] = useState(false);

  const [formData, setFormData] = useState({
    propertyType: [],
  });

  const { propertyType } = formData;

  const handleToggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleChange = (event) => {
    const { name, checked } = event.target;

    if (checked) {
      const newSet = new Set(propertyType);
      newSet.add(name);
      const newArray = Array.from(newSet);
      setFormData({ propertyType: newArray });
    } else {
      const newPropertyType = propertyType.filter((e) => e != name);
      setFormData({ propertyType: newPropertyType });
    }
  };

  function calcText() {
    if (propertyType.length === 0) {
      return "PROPERTY TYPE";
    } else if (propertyType.length === 2) {
      return `HOUSE & APARTMENT`;
    } else if (propertyType.includes("house")) {
      return `HOUSE`;
    } else if (propertyType.includes("apartment")) {
      return `APARTMENT`;
    }
  }

  return (
    <StyledContainer>
      <div className="filter-price-button">
        <Button type="primary" onClick={handleToggleFilter}>
          {calcText()}
        </Button>
      </div>
      {showFilter && (
        <div className="container">
          <form className="form">
            <div>
              <p className="form__title">PROPERTY TYPE</p>
              <div className="form__inputs">
                <label className="form__checkbox">
                  <input
                    name="house"
                    type="checkbox"
                    checked={propertyType.includes("house")}
                    onChange={handleChange}
                  />
                  <p className="form__label">House</p>
                </label>
                <label className="form__checkbox">
                  <input
                    name="apartment"
                    type="checkbox"
                    checked={propertyType.includes("apartment")}
                    onChange={handleChange}
                  />
                  <p className="form__label">Apartment</p>
                </label>
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

FilterPropertyType.propTypes = {
  handleFilters: PropTypes.func,
};

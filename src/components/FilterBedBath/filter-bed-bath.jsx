import PropTypes from "prop-types";
import { useState } from "react";

import Button from "../Button";
import { StyledContainer } from "./styles";

export default function FilterBedBath({ handleFilters }) {
  const [showFilter, setShowFilter] = useState(false);

  const [formData, setFormData] = useState({
    minBeds: 0,
    minBaths: 0,
  });

  const { minBeds, minBaths } = formData;

  const handleToggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleClick = (event, key, value) => {
    event.preventDefault();
    const newData = { [key]: value };
    setFormData({ ...formData, ...newData });
  };

  function calcText() {
    if (minBeds === 0 && minBaths === 0) {
      return "BEDS & BATH";
    } else if (minBeds === 0) {
      return `0+ BD, ${minBaths}+ BA`;
    } else if (minBaths === 0) {
      return `${minBeds}+ BD, 0+ BA`;
    } else {
      return `${minBeds}+ BD, ${minBaths}+ BA`;
    }
  }

  return (
    <StyledContainer>
      <Button
        type="primary"
        onClick={handleToggleFilter}
        className="filter-button"
      >
        {calcText()}
      </Button>
      {showFilter && (
        <div className="container">
          <div className="option-container">
            <p className="title">BEDS</p>
            <div className="button-container">
              <button
                className={
                  minBeds === 0
                    ? "button-active button-zero"
                    : "button-inactive button-zero"
                }
                onClick={(event) => handleClick(event, "minBeds", 0)}
              >
                Any
              </button>
              <button
                className={minBeds === 1 ? "button-active" : "button-inactive"}
                onClick={(event) => handleClick(event, "minBeds", 1)}
              >
                1+
              </button>
              <button
                className={minBeds === 2 ? "button-active" : "button-inactive"}
                onClick={(event) => handleClick(event, "minBeds", 2)}
              >
                2+
              </button>
              <button
                className={minBeds === 3 ? "button-active" : "button-inactive"}
                onClick={(event) => handleClick(event, "minBeds", 3)}
              >
                3+
              </button>
              <button
                className={
                  minBeds === 4
                    ? "button-active button-four"
                    : "button-inactive button-four"
                }
                onClick={(event) => handleClick(event, "minBeds", 4)}
              >
                4+
              </button>
            </div>
          </div>
          <div className="option-container">
            <p className="title">BEDS</p>
            <div className="button-container">
              <button
                className={
                  minBaths === 0
                    ? "button-active button-zero"
                    : "button-inactive button-zero"
                }
                onClick={(event) => handleClick(event, "minBaths", 0)}
              >
                Any
              </button>
              <button
                className={minBaths === 1 ? "button-active" : "button-inactive"}
                onClick={(event) => handleClick(event, "minBaths", 1)}
              >
                1+
              </button>
              <button
                className={minBaths === 2 ? "button-active" : "button-inactive"}
                onClick={(event) => handleClick(event, "minBaths", 2)}
              >
                2+
              </button>
              <button
                className={minBaths === 3 ? "button-active" : "button-inactive"}
                onClick={(event) => handleClick(event, "minBaths", 3)}
              >
                3+
              </button>
              <button
                className={
                  minBaths === 4
                    ? "button-active button-four"
                    : "button-inactive button-four"
                }
                onClick={(event) => handleClick(event, "minBaths", 4)}
              >
                4+
              </button>
            </div>
          </div>
          <Button
            type="primary"
            className="send-button"
            onClick={(e) => {
              e.preventDefault();
              handleToggleFilter();
              handleFilters(formData);
            }}
          >
            DONE
          </Button>
        </div>
      )}
    </StyledContainer>
  );
}

FilterBedBath.propTypes = {
  handleFilters: PropTypes.func,
};

import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

import { PropertyContext } from "../../context/property-context";
import InputWithIcon from "../InputWithIcon";
import { StyledContainer } from "./styles";
import { BsDashLg } from "react-icons/bs";
import Button from "../Button";

export default function FilterPetArea() {
  const [showFilter, setShowFilter] = useState(false);
  const { filters, handleFilters } = useContext(PropertyContext);
  const [formData, setFormData] = useState({
    petsAllowed: false,
    minArea: 0,
    maxArea: Infinity,
  });

  useEffect(() => {
    const { petsAllowed, minArea, maxArea } = filters;
    setFormData({
      petsAllowed,
      minArea,
      maxArea,
    });
  }, [filters]);

  const { petsAllowed, minArea, maxArea } = formData;

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

  return (
    <StyledContainer>
      <Button type="primary" onClick={handleToggleFilter} isFullWidth>
        <>
          MORE
          <RiArrowDownSLine size={"1.25rem"} />
        </>
      </Button>
      {showFilter && (
        <div className="container">
          <form className="form">
            <label className="form__checkbox">
              <input
                name="petsAllowed"
                type="checkbox"
                checked={petsAllowed === true}
                onChange={handleChange}
              />
              <p className="form__label">Pets Allowed</p>
            </label>
            <div>
              <p className="form__title">AREA IN M2</p>
              <div className="form__inputs">
                <InputWithIcon
                  name="minArea"
                  type="number"
                  placeholder="min"
                  onChange={handleChange}
                  value={minArea}
                />
                <BsDashLg size={"0.6875rem"} />
                <InputWithIcon
                  name="maxArea"
                  type="number"
                  placeholder="max"
                  onChange={handleChange}
                  value={maxArea}
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

FilterPetArea.propTypes = {
  handleFilters: PropTypes.func,
};

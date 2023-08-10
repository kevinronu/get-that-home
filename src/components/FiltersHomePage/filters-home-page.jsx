import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../Button";
import { StyledDiv } from "./styles";
import { PropertyContext } from "../../context/property-context";

export default function FiltersHomePage() {
  const navigate = useNavigate();
  const { datalistCity, handleFilters, clearFilters } =
    useContext(PropertyContext);
  const [formData, setFormData] = useState({
    address: "",
    propertyType: [],
    operationType: "all",
  });

  const { address, propertyType, operationType } = formData;

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "propertyType") {
      value === ""
        ? setFormData({ ...formData, propertyType: [] })
        : setFormData({ ...formData, propertyType: [value] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleClick = () => {
    clearFilters();
    handleFilters(formData);
    navigate("/properties");
  };

  return (
    <StyledDiv>
      <label className="label">
        <p className="info">I’m Looking for</p>
        <select
          name="propertyType"
          value={propertyType[0]}
          onChange={handleChange}
          className="select"
        >
          <option value="">Any property</option>
          <option value="apartment">An Apartment</option>
          <option value="house">A House</option>
        </select>
      </label>
      <label className="label">
        <p className="info">I want To</p>
        <select
          name="operationType"
          value={operationType}
          onChange={handleChange}
          className="select"
        >
          <option value="all">Rent and buy</option>
          <option value="rent">Rent</option>
          <option value="sale">Buy</option>
        </select>
      </label>
      <label className="label">
        <p className="info">Where</p>
        <select
          name="address"
          value={address}
          onChange={handleChange}
          className="select"
        >
          <option value="" disabled>
            Any City
          </option>
          {datalistCity.map((e, index) => (
            <option key={index} value={e}>
              {e}
            </option>
          ))}
        </select>
      </label>
      <Button type="primary" onClick={handleClick}>
        SEARCH
      </Button>
    </StyledDiv>
  );
}

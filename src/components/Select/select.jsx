import PropTypes from "prop-types";

import { StyledLabel, StyledSelect } from "./styles";

// options = [{label: "Peru", value: "PE"}, ...]

function Select({ label, options, defaultValue, ...rest }) {
  return (
    <div>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledSelect {...rest} defaultValue={defaultValue}>
        {defaultValue && <option value="">{defaultValue}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </div>
  );
}

Select.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
  defaultValue: PropTypes.string,
};

export default Select;

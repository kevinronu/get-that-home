import PropTypes from "prop-types";

import { StyledLabel, StyledSelect } from "./styles";

// options = [{label: "Peru", value: "PE"}, ...]

function Select({ label, options, instruction, ...rest }) {
  return (
    <div>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledSelect {...rest}>
        {instruction && (
          <option value="" disabled>
            {instruction}
          </option>
        )}
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
  instruction: PropTypes.string,
};

export default Select;

import PropTypes from "prop-types";

import { StyledInput, StyledLabel, StyledContainer } from "./styles";

function Input({
  id,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  label,
  ...props
}) {
  return (
    <StyledContainer>
      {label ? <StyledLabel htmlFor={id || name}>{label}</StyledLabel> : ""}
      <StyledInput
        id={id || name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
    </StyledContainer>
  );
}

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  onChange: PropTypes.func,
  isFullWidth: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.string,
};

export default Input;

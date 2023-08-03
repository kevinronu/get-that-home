import PropTypes from "prop-types";

import { StyledInput, StyledLabel, StyledContainer } from "./styles";

function InputWithIcon({
  icon,
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
    <div>
      {label ? <StyledLabel htmlFor={id || name}>{label}</StyledLabel> : ""}
      <StyledContainer>
        {icon}
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
    </div>
  );
}

InputWithIcon.propTypes = {
  icon: PropTypes.element,
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

export default InputWithIcon;

import PropTypes from "prop-types";

import { StyledInput, StyledLabel, StyledContainer, StyledDiv } from "./styles";

function InputWithIcon({
  icon,
  id,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  label,
  googleRef,
  ...props
}) {
  return (
    <StyledDiv {...props}>
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
          ref={googleRef}
          {...props}
        />
      </StyledContainer>
    </StyledDiv>
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
  googleRef: PropTypes.object,
  isFullWidth: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.string,
};

export default InputWithIcon;

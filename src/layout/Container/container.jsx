import PropTypes from "prop-types";

import { StyledDiv } from "./styles";
function Container({ children, size, padding }) {
  return (
    <StyledDiv size={size} padding={padding}>
      {children}
    </StyledDiv>
  );
}

Container.propTypes = {
  children: PropTypes.element,
  size: PropTypes.oneOf(["sm", "lg", "xl"]),
  padding: PropTypes.string,
};

export default Container;

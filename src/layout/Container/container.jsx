import PropTypes from "prop-types";

import { StyledDiv } from "./styles";
function Container({ children, size }) {
  return <StyledDiv size={size}>{children}</StyledDiv>;
}

Container.propTypes = {
  children: PropTypes.element,
  size: PropTypes.oneOf(["sm", "lg", "xl"]),
};

export default Container;

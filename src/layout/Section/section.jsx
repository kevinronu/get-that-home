import PropTypes from "prop-types";
import { StyledSection } from "./styles";

function Section({ children, size }) {
  return <StyledSection size={size}>{children}</StyledSection>;
}

Section.propTypes = {
  children: PropTypes.element,
  size: PropTypes.oneOf(["xs", "sm", "lg", "xl"]),
};

export default Section;

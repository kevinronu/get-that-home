import PropTypes from "prop-types";
import { TiHomeOutline } from "react-icons/ti";
import { useTheme } from "@emotion/react";

import { StyledAnchor } from "./styles";

function Logo({ ...props }) {
  const theme = useTheme();

  function iconSize() {
    const { size } = props;
    switch (size) {
      case "sm":
        return `2.25rem`;
      case "lg":
        return `2.75rem`;
      default:
        return `2.5rem`;
    }
  }

  return (
    <StyledAnchor {...props} to={"/home"}>
      <TiHomeOutline size={iconSize()} color={theme.colors.pink[700]} />
      <div className="title">
        <p>GET THAT</p>
        <p>HOME</p>
      </div>
    </StyledAnchor>
  );
}

Logo.propTypes = {
  children: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(["sm", "lg"]),
  isFullWidth: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Logo;

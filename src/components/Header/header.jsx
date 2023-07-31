import PropTypes from "prop-types";

import HeaderSeeker from "../HeaderSeeker";
import HeaderLandlord from "../HeaderLandlord";
import HeaderVisitor from "../HeaderVisitor";

export default function Header({ user }) {
  if (!user) {
    return <HeaderVisitor />;
  } else if (user.role === "landlord") {
    return <HeaderLandlord />;
  } else {
    return <HeaderSeeker />;
  }
}

Header.propTypes = {
  user: PropTypes.object,
};

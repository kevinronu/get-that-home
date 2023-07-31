import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import { StyledNav } from "./styles";

export default function Pagination({
  quantityPerPage,
  totalQuantity,
  location,
}) {
  const numberOfPages = Math.ceil(totalQuantity / quantityPerPage);
  const components = [];

  for (let i = 1; i <= numberOfPages; i++) {
    components.push(
      <li key={i}>
        <NavLink
          to={`${location}/page/${i}`}
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          {i}
        </NavLink>
      </li>
    );
  }

  return (
    <StyledNav>
      <ul className="links">{components}</ul>
    </StyledNav>
  );
}

Pagination.propTypes = {
  quantityPerPage: PropTypes.number,
  totalQuantity: PropTypes.number,
  location: PropTypes.string,
};

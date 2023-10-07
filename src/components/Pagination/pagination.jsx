import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

import { StyledNav } from "./styles";

export default function Pagination({
  location,
  currentPage,
  totalQuantity,
  quantityPerPage,
  maxPagesGenerated,
}) {
  const [paginationState, setPaginationState] = useState({
    initialPage: 0,
    numberOfPages: 0,
    remainingPagesToDisplay: 0,
    validation: false,
    pagesToDisplay: 0,
  });

  const {
    initialPage,
    numberOfPages,
    remainingPagesToDisplay,
    validation,
    pagesToDisplay,
  } = paginationState;

  useEffect(() => {
    const newPaginationState = {
      initialPage:
        (Math.ceil(currentPage / maxPagesGenerated) - 1) * maxPagesGenerated +
        1,
      numberOfPages: Math.ceil(totalQuantity / quantityPerPage),
      remainingPagesToDisplay: Math.max(numberOfPages - initialPage + 1, 0),
      validation: remainingPagesToDisplay > maxPagesGenerated,
      pagesToDisplay: validation ? maxPagesGenerated : remainingPagesToDisplay,
    };
    setPaginationState(newPaginationState);
  }, [
    currentPage,
    totalQuantity,
    quantityPerPage,
    maxPagesGenerated,
    initialPage,
    numberOfPages,
    remainingPagesToDisplay,
    validation,
  ]);

  // const components = [];
  // for (let i = 1; i <= pagesToDisplay; i++) {
  //   components.push(
  //     <li key={i}>
  //       <NavLink
  //         to={`${location}/page/${initialPage + i - 1}`}
  //         className={({ isActive }) => (isActive ? "active" : "inactive")}
  //       >
  //         {initialPage + i - 1}
  //       </NavLink>
  //     </li>
  //   );
  // }

  const components = Array.from({ length: pagesToDisplay }, (_, index) => (
    <li key={index}>
      <NavLink
        to={`${location}/page/${initialPage + index}`}
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        {initialPage + index}
      </NavLink>
    </li>
  ));

  return (
    <StyledNav>
      <ul className="links">
        {initialPage > 1 && remainingPagesToDisplay > 0 && (
          <NavLink
            to={`${location}/page/${initialPage - maxPagesGenerated}`}
            className={"icon"}
          >
            <MdKeyboardArrowLeft size={"1.5rem"} />
          </NavLink>
        )}
        {components}
        {validation && (
          <NavLink
            to={`${location}/page/${initialPage + maxPagesGenerated}`}
            className={"icon"}
          >
            <MdKeyboardArrowRight size={"1.5rem"} />
          </NavLink>
        )}
      </ul>
    </StyledNav>
  );
}

Pagination.propTypes = {
  location: PropTypes.string,
  currentPage: PropTypes.number,
  totalQuantity: PropTypes.number,
  quantityPerPage: PropTypes.number,
  maxPagesGenerated: PropTypes.number,
};

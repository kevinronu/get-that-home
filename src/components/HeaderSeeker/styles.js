import styled from "@emotion/styled";
import { fonts } from "../../styles";

export const StyledHeader = styled.header`
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1;
`;

export const StyledNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem;
  font-family: ${fonts.secondary};

  .navbar__logo-container {
    display: flex;
    align-items: center;
    flex-grow: 1;
  }

  .navbar__links {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
  }

  #menu-mobile,
  .toggle-checkbox {
    display: none;
  }

  .toggle-checkbox {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    gap: 0.5rem;
  }

  .toggle-checkbox__first_line,
  .toggle-checkbox__second_line,
  .toggle-checkbox__last_line {
    background: currentColor;
    height: 0.25rem;
    width: 100%;
    border-radius: 0.25rem;
    transition: 0.5s ease-in-out;
    transform-origin: right;
  }

  @media only screen and (max-width: 600px) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .navbar__logo-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    .toggle-checkbox {
      display: flex;
    }

    .navbar__links {
      display: none;
      flex-direction: column;
      margin: 0;
      padding: 0.5rem 0;
      width: 100%;
    }

    #menu-mobile:checked ~ .navbar__links {
      display: flex;
    }

    #menu-mobile:checked ~ * .toggle-checkbox__first_line {
      transform: rotate(-45deg) scaleX(1.05);
    }

    #menu-mobile:checked ~ * .toggle-checkbox__second_line {
      opacity: 0;
    }

    #menu-mobile:checked ~ * .toggle-checkbox__last_line {
      transform: rotate(45deg) scaleX(1.05);
    }
  }
`;

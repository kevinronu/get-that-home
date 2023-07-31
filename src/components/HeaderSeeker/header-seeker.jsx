import { RiLogoutCircleLine, RiUserLine } from "react-icons/ri";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { GoHeartFill } from "react-icons/go";
import { useContext } from "react";

import { StyledNav, StyledHeader } from "./styles";
import { AuthContext } from "../../context/auth-context";
import Button from "../Button";
import Anchor from "../Anchor";
import Logo from "../Logo";
import Container from "../../layout/Container";

function HeaderSeeker() {
  const { logout } = useContext(AuthContext);

  return (
    <StyledHeader>
      <Container size={"xl"}>
        <StyledNav>
          <input type="checkbox" id="menu-mobile" />
          <div className="navbar__logo-container">
            <Logo />
            <label htmlFor="menu-mobile" className="toggle-checkbox">
              <span className="toggle-checkbox__first_line"></span>
              <span className="toggle-checkbox__second_line"></span>
              <span className="toggle-checkbox__last_line"></span>
            </label>
          </div>
          <ul className="navbar__links">
            <li>
              <Anchor icon={<HiMagnifyingGlass />} to={"/properties"}>
                FIND A HOME
              </Anchor>
            </li>
            <li>
              <Button
                icon={<RiLogoutCircleLine />}
                type={"secondary"}
                onClick={logout}
              >
                LOGOUT
              </Button>
            </li>
            <li>
              <Anchor
                icon={<GoHeartFill />}
                type={"primary"}
                to={"/saved_properties"}
              >
                SAVED PROPERTIES
              </Anchor>
            </li>
            <li>
              <Anchor icon={<RiUserLine />} type={"primary"} to={"/profile"}>
                PROFILE
              </Anchor>
            </li>
          </ul>
        </StyledNav>
      </Container>
    </StyledHeader>
  );
}

export default HeaderSeeker;

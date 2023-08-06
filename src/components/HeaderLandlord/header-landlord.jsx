import { RiLogoutCircleLine, RiUserLine, RiHome8Line } from "react-icons/ri";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useContext } from "react";

import Button from "../Button";
import Anchor from "../Anchor";
import Logo from "../Logo";
import Container from "../../layout/Container";
import { AuthContext } from "../../context/auth-context";
import { StyledNav, StyledHeader } from "./styles";

function HeaderLandlord() {
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
            <li className="link">
              <Anchor
                icon={<HiMagnifyingGlass />}
                to={"/properties"}
                isFullWidth
              >
                FIND A HOME
              </Anchor>
            </li>
            <li className="link">
              <Button
                icon={<RiLogoutCircleLine />}
                type={"secondary"}
                onClick={logout}
                isFullWidth
              >
                LOGOUT
              </Button>
            </li>
            <li className="link">
              <Anchor
                icon={<RiHome8Line />}
                type={"primary"}
                to={"/my_properties"}
                isFullWidth
              >
                MY PROPERTIES
              </Anchor>
            </li>
            <li className="link">
              <Anchor
                icon={<RiUserLine />}
                type={"primary"}
                to={"/profile"}
                isFullWidth
              >
                PROFILE
              </Anchor>
            </li>
          </ul>
        </StyledNav>
      </Container>
    </StyledHeader>
  );
}

export default HeaderLandlord;

import { useContext } from "react";
import { TbUserPlus } from "react-icons/tb";
import { RiUserReceived2Line } from "react-icons/ri";
import { HiMagnifyingGlass } from "react-icons/hi2";

import Button from "../Button";
import Anchor from "../Anchor";
import Logo from "../Logo";
import { StyledNav, StyledHeader } from "./styles";
import Container from "../../layout/Container";
import { AuthContext } from "../../context/auth-context";

function HeaderVisitor() {
  const { handleModal } = useContext(AuthContext);

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
                isFullWidth={true}
              >
                FIND A HOME
              </Anchor>
            </li>
            <li className="link">
              <Anchor
                icon={<TbUserPlus />}
                type={"secondary"}
                to={"/sign_up"}
                isFullWidth={true}
              >
                JOIN
              </Anchor>
            </li>
            <li className="link">
              <Button
                icon={<RiUserReceived2Line />}
                type={"primary"}
                to={"/login"}
                onClick={handleModal}
                isFullWidth={true}
              >
                LOGIN
              </Button>
            </li>
          </ul>
        </StyledNav>
      </Container>
    </StyledHeader>
  );
}

export default HeaderVisitor;

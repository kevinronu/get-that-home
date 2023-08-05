import { useContext } from "react";
import { RiUserReceived2Line } from "react-icons/ri";

import Button from "../Button";
import { AuthContext } from "../../context/auth-context";
import { StyledDiv } from "./styles";

export default function PropertyWindowVisitor() {
  const { handleModal } = useContext(AuthContext);

  return (
    <StyledDiv>
      <div className="login__card">
        <p className="login__title">Log in or Join to contact the advertiser</p>
        <Button
          className="button"
          icon={<RiUserReceived2Line />}
          type={"primary"}
          onClick={handleModal}
        >
          LOGIN
        </Button>
      </div>
    </StyledDiv>
  );
}

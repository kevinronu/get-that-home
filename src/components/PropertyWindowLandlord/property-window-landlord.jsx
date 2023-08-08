import PropTypes from "prop-types";
import { useContext } from "react";
import { RiUserReceived2Line } from "react-icons/ri";

import Anchor from "../Anchor";
import { LandlordContext } from "../../context/landlord-context";
import { StyledDiv } from "./styles";

export default function PropertyWindowLandlord({ id }) {
  const { myProperties } = useContext(LandlordContext);
  const property = myProperties.find(
    (myProperty) => myProperty.id === Number(id)
  );

  return property ? (
    <StyledDiv>
      <Anchor
        className="Anchor"
        icon={<RiUserReceived2Line />}
        type={"primary"}
        to={`/property/edit/${property.operation_type}/${id}`}
      >
        EDIT PROPERTY
      </Anchor>
    </StyledDiv>
  ) : null;
}

PropertyWindowLandlord.propTypes = {
  id: PropTypes.string,
};

import PropTypes from "prop-types";
import { useContext } from "react";
import { MdFavorite } from "react-icons/md";
import { useTheme } from "@emotion/react";

import Button from "../Button";
import { SeekerContext } from "../../context/seeker-context";
import { ButtonFavorite, StyledDiv } from "./styles";

export default function PropertyWindowSeeker({ id }) {
  const theme = useTheme();
  const { favorites, createFavorite, deleteFavorite, contacts, createContact } =
    useContext(SeekerContext);
  const contact = contacts.find(
    (contact) => contact.property_id === Number(id)
  );
  const favorite = favorites.find(
    (favorite) => favorite.property_id === Number(id)
  );

  return (
    <StyledDiv>
      {contact ? (
        <div className="contact-info">
          <h3 className="contact-info__title">Contact Information</h3>
          <div>
            <p className="contact-info__subtitle">Email</p>
            <p>{contact.landlord_email}</p>
          </div>
          <div>
            <p className="contact-info__subtitle">Phone</p>
            <p>{contact.landlord_phone}</p>
          </div>
        </div>
      ) : (
        <Button onClick={() => createContact(id)} type={"primary"}>
          CONTACT ADVISER
        </Button>
      )}
      {favorite ? (
        <ButtonFavorite onClick={() => deleteFavorite(favorite.id)}>
          <MdFavorite size={"1.5rem"} fill={theme.colors.pink[500]} />
          Remove from Favorites
        </ButtonFavorite>
      ) : (
        <ButtonFavorite onClick={() => createFavorite(id)}>
          <MdFavorite size={"1.5rem"} />
          Add to Favorites
        </ButtonFavorite>
      )}
    </StyledDiv>
  );
}

PropertyWindowSeeker.propTypes = {
  id: PropTypes.string,
};

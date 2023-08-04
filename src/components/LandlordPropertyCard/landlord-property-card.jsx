import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";
import { useContext } from "react";
import { TbCoin } from "react-icons/tb";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdOutlinePets } from "react-icons/md";
import { BiBed, BiBath, BiArea, BiEdit } from "react-icons/bi";
import { RiCloseCircleLine, RiCoinsLine } from "react-icons/ri";
import { BsHouseDoor, BsArrowBarUp, BsFillTrashFill } from "react-icons/bs";

import DefaultImage from "../../assets/images/default-property-image.webp";
import { OwnerMenu, StyledContainer, StyledLink } from "./styles";
import Anchor from "../Anchor";
import Button from "../Button";
import { LandlordContext } from "../../context/landlord-context";

function LandlordPropertyCard({ property, isOwner }) {
  const theme = useTheme();
  const { closeOwnProperty, restoreOwnProperty, deleteOwnProperty } =
    useContext(LandlordContext);

  const {
    id,
    operation_type,
    address,
    city,
    country,
    monthly_rent,
    price,
    property_type,
    bedrooms,
    bathrooms,
    area,
    pets_allowed,
    closed,
    images,
  } = property;

  const renderPropertyType = {
    apartment: (
      <div className="info-title__type">
        <HiOutlineBuildingOffice2 size={"1.5rem"} />
        <p>Apartment</p>
      </div>
    ),
    house: (
      <div className="info-title__type">
        <BsHouseDoor size={"1.5rem"} />
        <p>House</p>
      </div>
    ),
  };

  const renderOperationType = {
    rent: (
      <div className="operation-type">
        <RiCoinsLine color={theme.colors.white.standard} size={"1.25rem"} />
        <p>For Rental</p>
      </div>
    ),
    sale: (
      <div className="operation-type">
        <TbCoin color={theme.colors.white.standard} size={"1.25rem"} />
        <p>For Sale</p>
      </div>
    ),
  };

  const renderFirstElement = {
    edit: (
      <Anchor
        icon={<BiEdit color={theme.colors.white.standard} size={"1.5rem"} />}
        type="tertiary"
        to={`/property/edit/${
          operation_type === "rent" ? "rent" : "sale"
        }/${id}`}
      >
        EDIT
      </Anchor>
    ),
    restore: (
      <Button
        icon={
          <BsArrowBarUp size={"1.5rem"} color={theme.colors.white.standard} />
        }
        type={"tertiary"}
        onClick={() => restoreOwnProperty(id)}
      >
        RESTORE
      </Button>
    ),
  };

  const renderSecondElement = {
    closed: (
      <Button
        icon={
          <RiCloseCircleLine
            size={"1.5rem"}
            color={theme.colors.white.standard}
          />
        }
        type={"tertiary"}
        onClick={() => closeOwnProperty(id)}
      >
        CLOSE
      </Button>
    ),
    delete: (
      <Button
        icon={
          <BsFillTrashFill
            size={"1.5rem"}
            color={theme.colors.white.standard}
          />
        }
        type={"tertiary"}
        onClick={() => deleteOwnProperty(id)}
      >
        DELETE
      </Button>
    ),
  };

  return (
    <StyledContainer>
      <StyledLink
        to={`/property/detail/${id}`}
        className={isOwner ? "property-with-owner-menu" : ""}
      >
        {renderOperationType[operation_type]}
        {images.length === 0 ? (
          <img src={DefaultImage} className="photo" />
        ) : (
          <img src={images[0]} className="photo" />
        )}
        <div className="info-title">
          <div className="info-title__rent">
            <TbCoin size={"2rem"} />
            {operation_type === "rent" ? <p>{monthly_rent}</p> : <p>{price}</p>}
          </div>
          {renderPropertyType[property_type]}
        </div>
        <div className="info-address">{`${address}, ${city}, ${country}`}</div>
        <div className="info-footer">
          <div className="info-footer__icons">
            <div className="info-footer__icon">
              <BiBed size={"1.5rem"} />
              <p>{bedrooms}</p>
            </div>
            <div className="info-footer__icon">
              <BiBath size={"1.5rem"} />
              <div>{bathrooms}</div>
            </div>
            <div className="info-footer__icon">
              <BiArea size={"1.5rem"} />
              <div>{area}</div>
            </div>
            {pets_allowed ? <MdOutlinePets /> : null}
          </div>
        </div>
      </StyledLink>
      {isOwner ? (
        <OwnerMenu>
          {closed ? renderFirstElement.restore : renderFirstElement.edit}
          {closed ? renderSecondElement.delete : renderSecondElement.closed}
        </OwnerMenu>
      ) : null}
    </StyledContainer>
  );
}

LandlordPropertyCard.propTypes = {
  property: PropTypes.object,
  isOwner: PropTypes.bool,
};

export default LandlordPropertyCard;

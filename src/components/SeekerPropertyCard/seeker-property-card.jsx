import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";
import { TbCoin } from "react-icons/tb";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdOutlinePets, MdFavorite } from "react-icons/md";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { RiCoinsLine } from "react-icons/ri";
import { BsHouseDoor } from "react-icons/bs";

import DefaultImage from "../../assets/images/default-property-image.webp";
import { StyledContainer, StyledLink } from "./styles";

function SeekerPropertyCard({ property, isFavorite }) {
  const theme = useTheme();

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

  return (
    <StyledContainer>
      <StyledLink to={`/property/detail/${id}`}>
        {renderOperationType[operation_type]}
        {images.length === 0 ? (
          <img src={DefaultImage} className="photo" alt={`default-photo`} />
        ) : (
          <img
            src={images[0]}
            className="photo"
            alt={`first-photo-property-${id}`}
          />
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
          {isFavorite ? (
            <MdFavorite size={"1.5rem"} color={theme.colors.pink[500]} />
          ) : null}
        </div>
      </StyledLink>
    </StyledContainer>
  );
}

SeekerPropertyCard.propTypes = {
  property: PropTypes.object,
  isFavorite: PropTypes.bool,
};

export default SeekerPropertyCard;

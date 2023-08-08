import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdOutlinePets } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BiBed, BiBath, BiArea } from "react-icons/bi";

import DefaultImage from "../../assets/images/default-property-image.webp";
import PropertyWindowVisitor from "../PropertyWindowVisitor";
import PropertyWindowLandlord from "../PropertyWindowLandlord";
import PropertyWindowSeeker from "../PropertyWindowSeeker";
import { PropertyContext } from "../../context/property-context";
import { AuthContext } from "../../context/auth-context";
import { getCoordinates } from "../../utils/utils";
import Container from "../../layout/Container";
import { StyledSection } from "./styles";
import Slideshow from "../Slideshow";

const containerStyle = {
  minWidth: "343px",
  aspectRatio: "1/1",
  maxWidth: "512px",
  margin: "auto",
};

const libraries = ["places"];

export default function PropertyDetailSection() {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const { properties } = useContext(PropertyContext);
  const [property, setProperty] = useState({});
  const [coordinates, setCoordinates] = useState();

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    libraries: libraries,
  });

  useEffect(() => {
    if (!id || properties.length === 0) return;

    const foundProperty = properties.find(
      (property) => property.id === Number(id)
    );
    getCoordinates(
      `${foundProperty.address}, ${foundProperty.city}, ${foundProperty.country}`
    ).then((coords) => {
      if (coords) {
        setCoordinates(coords);
      }
    });
    setProperty(foundProperty);
  }, [id, properties]);

  return (
    <StyledSection>
      <Container size={"xl"} padding={"1rem"}>
        <div className="container">
          <div className="property-info">
            <Slideshow
              images={
                property.images?.length != 0 ? property.images : [DefaultImage]
              }
            />
            <div className="address-price">
              <p className="address-price__address">{property.address}</p>
              <div className="address-price__price">
                <RiMoneyDollarCircleLine />
                {property.operation_type === "rent" ? (
                  <p>{property.monthly_rent}</p>
                ) : (
                  <p>{property.price}</p>
                )}
              </div>
            </div>
            <div className="city-country">
              <p>
                {property.city}, {property.country}
              </p>
              {property.operation_type === "rent" ? (
                <p>+{property.maintenance}</p>
              ) : null}
            </div>
            <hr className="line" />
            <div className="highlights">
              <div className="highlights__element">
                <BiBed />
                {property.bedrooms} bedrooms
              </div>
              <div className="highlights__element">
                <BiBath />
                {property.bathrooms} bathrooms
              </div>
              <div className="highlights__element">
                <BiArea />
                {property.area} m2
              </div>
              {property.pets_allowed ? (
                <div className="highlights__element">
                  <MdOutlinePets />
                  Pets allowed
                </div>
              ) : null}
            </div>
            <hr className="line"></hr>
            <div className="about-location">
              <p className="about-location__title">About this property</p>
              <p className="about-location__description">{property.about}</p>
            </div>
            <div className="about-location">
              <p className="about-location__title">Location</p>
              <p className="about-location__description">
                {property.address}, {property.city}, {property.country}
              </p>
              {isLoaded
                ? coordinates && (
                    <GoogleMap
                      mapContainerStyle={containerStyle}
                      center={coordinates}
                      zoom={15}
                    >
                      <Marker position={coordinates} />
                    </GoogleMap>
                  )
                : null}
            </div>
          </div>
          {!user ? (
            <PropertyWindowVisitor />
          ) : user.role === "landlord" ? (
            <PropertyWindowLandlord id={id} />
          ) : (
            <PropertyWindowSeeker id={id} />
          )}
        </div>
      </Container>
    </StyledSection>
  );
}

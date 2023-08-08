import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { TbCoin } from "react-icons/tb";
import { useFormik } from "formik";

import { LandlordContext } from "../../context/landlord-context";
import { AuthContext } from "../../context/auth-context";
import Container from "../../layout/Container";
import InputWithIcon from "../InputWithIcon";
import Section from "../../layout/Section";
import Button from "../Button/button";
import Select from "../Select";
import Input from "../Input";
import {
  StyledForm,
  StyledH1,
  StyledLinksContainer,
  StyledTextArea,
} from "./styles";

export default function CreateRentalPropertySection() {
  const { createOwnProperty } = useContext(LandlordContext);
  const { user } = useContext(AuthContext);
  const [images, SetImages] = useState([]);

  const handleImages = (event) => {
    const MAX_FILE_SIZE = 5120; //MB
    const KB = 1024;
    const images = Array.from(event.target.files);
    if (images.every((image) => image.size / KB <= MAX_FILE_SIZE)) {
      SetImages(images);
    } else {
      event.target.value = null;
      alert("Some image size exceeds the allowed limit");
    }
  };

  const validate = (values) => {
    const errors = {};

    if (!values.address) {
      errors.address = "Required";
    }

    if (!values.monthly_rent) {
      errors.monthly_rent = "Required";
    }

    if (!values.maintenance) {
      errors.maintenance = "Required";
    }

    if (!values.property_type) {
      errors.property_type = "Required";
    }

    if (!values.bedrooms) {
      errors.bedrooms = "Required";
    }

    if (!values.bathrooms) {
      errors.bathrooms = "Required";
    }

    if (!values.area) {
      errors.area = "Required";
    }

    if (!values.operation_type) {
      errors.operation_type = "Required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      address: "",
      monthly_rent: "",
      maintenance: "",
      property_type: "",
      bedrooms: "",
      bathrooms: "",
      area: "",
      pets_allowed: false,
      about: "",
      operation_type: "rent",
      user_id: user?.id,
    },
    validate,
    onSubmit: (values) => {
      const propertyData = new FormData();
      for (const [key, value] of Object.entries(values)) {
        if (key === "address") {
          propertyData.append("address", value.split(",")[0]);
          propertyData.append("city", value.split(",")[1]);
          propertyData.append("country", value.split(",")[2]);
          continue;
        }
        propertyData.append(key, value);
      }
      for (let i = 0; i < images.length; i++) {
        propertyData.append("images[]", images[i]);
      }
      createOwnProperty(propertyData);
    },
  });

  return (
    <Section size="xs">
      <Container size="xl" padding={"1rem"}>
        <>
          <StyledH1 className="title">Create a property listing</StyledH1>
          <StyledLinksContainer>
            <p className="links-title">OPERATION TYPE</p>
            <div className="links-container">
              <NavLink
                to="/property/create/rent"
                className={({ isActive }) =>
                  isActive ? "link-left active" : "link-left"
                }
              >
                Rent
              </NavLink>
              <NavLink
                to="/property/create/sale"
                className={({ isActive }) =>
                  isActive ? "link-right active" : "link-right"
                }
              >
                Sale
              </NavLink>
            </div>
          </StyledLinksContainer>
          <StyledForm className="form" onSubmit={formik.handleSubmit}>
            <InputWithIcon
              label={"ADDRESS"}
              icon={<HiMagnifyingGlass size={"1.25rem"} />}
              isFullWidth={true}
              name="address"
              type="text"
              placeholder="Address"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
            />
            {formik.touched.address && formik.errors.address ? (
              <div className="form__error">{formik.errors.address}</div>
            ) : (
              <div className="form__error"></div>
            )}
            <InputWithIcon
              label="MONTHLY RENT"
              icon={<TbCoin size={"1.25rem"} />}
              type="number"
              name="monthly_rent"
              placeholder="2000"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.monthly_rent}
            />
            {formik.touched.monthly_rent && formik.errors.monthly_rent ? (
              <div className="form__error">{formik.errors.monthly_rent}</div>
            ) : (
              <div className="form__error"></div>
            )}
            <InputWithIcon
              label="MAINTENANCE"
              icon={<TbCoin size={"1.25rem"} />}
              type="number"
              name="maintenance"
              placeholder="100"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.maintenance}
            />
            {formik.touched.maintenance && formik.errors.maintenance ? (
              <div className="form__error">{formik.errors.maintenance}</div>
            ) : (
              <div className="form__error"></div>
            )}
            <Select
              label={"PROPERTY TYPE"}
              name="property_type"
              options={[
                { label: "Apartment", value: "apartment" },
                { label: "House", value: "house" },
              ]}
              instruction={"Select..."}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.property_type}
            />
            {formik.touched.property_type && formik.errors.property_type ? (
              <div className="form__error">{formik.errors.property_type}</div>
            ) : (
              <div className="form__error"></div>
            )}
            <div className="form__selects">
              <div>
                <Select
                  label={"BEDROOMS"}
                  name="bedrooms"
                  options={[
                    { label: "1", value: "1" },
                    { label: "2", value: "2" },
                    { label: "3", value: "3" },
                    { label: "4", value: "4" },
                    { label: "5", value: "5" },
                    { label: "6", value: "6" },
                    { label: "7", value: "7" },
                    { label: "8", value: "8" },
                    { label: "9", value: "9" },
                    { label: "10", value: "10" },
                  ]}
                  instruction={"Select..."}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.bedrooms}
                />
                {formik.touched.bedrooms && formik.errors.bedrooms ? (
                  <div className="form__error">{formik.errors.bedrooms}</div>
                ) : (
                  <div className="form__error"></div>
                )}
              </div>
              <div>
                <Select
                  label={"BATHROOMS"}
                  name="bathrooms"
                  options={[
                    { label: "1", value: "1" },
                    { label: "2", value: "2" },
                    { label: "3", value: "3" },
                    { label: "4", value: "4" },
                    { label: "5", value: "5" },
                    { label: "6", value: "6" },
                    { label: "7", value: "7" },
                    { label: "8", value: "8" },
                    { label: "9", value: "9" },
                    { label: "10", value: "10" },
                  ]}
                  instruction={"Select..."}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.bathrooms}
                />
                {formik.touched.bathrooms && formik.errors.bathrooms ? (
                  <div className="form__error">{formik.errors.bathrooms}</div>
                ) : (
                  <div className="form__error"></div>
                )}
              </div>
              <div>
                <Input
                  label="AREA IN M2"
                  name="area"
                  type="number"
                  placeholder="##"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="input-area"
                  value={formik.values.area}
                />
                {formik.touched.area && formik.errors.area ? (
                  <div className="form__error">{formik.errors.area}</div>
                ) : (
                  <div className="form__error"></div>
                )}
              </div>
            </div>
            <div>
              <label className="label">
                <Input
                  name="pets_allowed"
                  type="checkbox"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.pets_allowed}
                />
                Pets Allowed
              </label>
              <blockquote className="quote">
                Allowing pets increases the likehood of renters liking the
                property by 9001%. It also makes you a better person.
              </blockquote>
            </div>
            <label>
              <p className="label__info">ABOUT THIS PROPERTY</p>
              <StyledTextArea
                name="about"
                placeholder="My Apartment is great because..."
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.about}
              />
              <blockquote className="quote">
                Renters will read this first, so highlight any features or
                important information the apartment has.
              </blockquote>
            </label>
            <div>
              <h3 className="photos-title">Photos</h3>
              <label>
                <p className="photos-instructions">
                  Upload as many photos as you wish
                </p>
                <input
                  type="file"
                  multiple
                  name="images"
                  onChange={handleImages}
                  accept="image/*"
                />
                <blockquote className="quote">Only images, max 5MB</blockquote>
              </label>
              <div className="images-container">
                {images.length === 0 ? (
                  <div className="images-container__no-image">
                    No photos yet
                  </div>
                ) : (
                  images.map((image, index) => (
                    <img
                      key={index}
                      src={URL.createObjectURL(image)}
                      className="images-container__image"
                    />
                  ))
                )}
              </div>
            </div>
            <Button
              type="primary"
              size="lg"
              disabled={!(formik.isValid && formik.dirty)}
            >
              PUBLISH PROPERTY LISTING
            </Button>
          </StyledForm>
        </>
      </Container>
    </Section>
  );
}

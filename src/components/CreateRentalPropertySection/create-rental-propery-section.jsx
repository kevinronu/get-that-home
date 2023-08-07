import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { TbCoin } from "react-icons/tb";

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

  const [formData, setFormData] = useState({
    address: "",
    monthly_rent: null,
    maintenance: null,
    property_type: null,
    bedrooms: null,
    bathrooms: null,
    area: null,
    pets_allowed: null,
    about: "",
    operation_type: "rent",
    user_id: user?.id,
    images: [],
  });

  function handleChange(event) {
    const name = event.target.name;
    if (name === "images") {
      const MAX_FILE_SIZE = 5120; //MB
      const KB = 1024;
      const images = Array.from(event.target.files);
      if (images.every((image) => image.size / KB <= MAX_FILE_SIZE)) {
        setFormData((prevData) => ({
          ...prevData,
          images: images,
        }));
      } else {
        event.target.value = null;
        alert("Some image size exceeds the allowed limit");
      }
    } else {
      const value =
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const propertyData = new FormData();

    for (const [key, value] of Object.entries(formData)) {
      if (key === "address") {
        propertyData.append("address", value.split(",")[0]);
        propertyData.append("city", value.split(",")[1]);
        propertyData.append("country", value.split(",")[2]);
        continue;
      }
      if (key === "images") {
        for (let i = 0; i < formData.images.length; i++) {
          propertyData.append("images[]", formData.images[i]);
        }
        continue;
      }
      propertyData.append(key, value);
    }

    createOwnProperty(propertyData);
  }

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
          <StyledForm
            className="form"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <InputWithIcon
              label={"ADDRESS"}
              icon={<HiMagnifyingGlass size={"1.25rem"} />}
              isFullWidth={true}
              name="address"
              type="text"
              placeholder="Address"
              onChange={handleChange}
            />
            <InputWithIcon
              label="MONTHLY RENT"
              icon={<TbCoin size={"1.25rem"} />}
              type="number"
              name="monthly_rent"
              placeholder="2000"
              onChange={handleChange}
            />
            <InputWithIcon
              label="MAINTENANCE"
              icon={<TbCoin size={"1.25rem"} />}
              type="number"
              name="maintenance"
              placeholder="100"
              onChange={handleChange}
            />
            <Select
              label={"PROPERTY TYPE"}
              name="property_type"
              options={[
                { label: "Apartment", value: "apartment" },
                { label: "House", value: "house" },
              ]}
              defaultValue={"Select..."}
              onChange={handleChange}
            />
            <div className="form__property">
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
                defaultValue={"Select..."}
                onChange={handleChange}
              />
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
                defaultValue={"Select..."}
                onChange={handleChange}
              />
              <Input
                label="AREA IN M2"
                name="area"
                type="number"
                placeholder="##"
                onChange={handleChange}
                className="input-area"
              />
            </div>
            <div>
              <label className="label-container">
                <Input
                  name="pets_allowed"
                  type="checkbox"
                  onChange={handleChange}
                />
                Pets Allowed
              </label>
              <blockquote className="quote">
                Allowing pets increases the likehood of renters liking the
                property by 9001%. It also makes you a better person.
              </blockquote>
            </div>
            <label>
              <p className="label">ABOUT THIS PROPERTY</p>
              <StyledTextArea
                name="about"
                placeholder="My Apartment is great because..."
                onChange={handleChange}
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
                  onChange={handleChange}
                  accept="image/*"
                />
                <blockquote className="quote">Only images, max 5MB</blockquote>
              </label>
              <div className="images-container">
                {formData.images.length === 0 ? (
                  <div className="images-container__no-image">
                    No photos yet
                  </div>
                ) : (
                  formData.images.map((image, index) => (
                    <img
                      key={index}
                      src={URL.createObjectURL(image)}
                      className="images-container__image"
                    />
                  ))
                )}
              </div>
            </div>
            <Button type="primary" size="lg">
              PUBLISH PROPERTY LISTING
            </Button>
          </StyledForm>
        </>
      </Container>
    </Section>
  );
}

import { createContext, useContext, useEffect, useState } from "react";

import * as propertyServices from "../services/property-service";
import { PropertyContext } from "./property-context";
import { useNavigate } from "react-router-dom";

const LandlordContext = createContext();

function LandlordProvider(props) {
  const navigate = useNavigate();
  const [myProperties, setMyProperties] = useState([]);
  const { createProperty, deleteProperty, updateProperty } =
    useContext(PropertyContext);

  useEffect(() => {
    propertyServices
      .getMyProperties()
      .then((properties) => {
        setMyProperties(properties);
      })
      .catch((e) => console.log(e));
  }, []);

  function createOwnProperty(propertyData) {
    propertyServices
      .createProperty(propertyData)
      .then((property) => {
        const newMyProperties = [...myProperties, property];
        setMyProperties(newMyProperties);
        createProperty(property);
        navigate(`/property/detail/${property.id}`);
      })
      .catch(console.log);
  }

  function closeOwnProperty(id) {
    const indexToUpdate = myProperties.findIndex(
      (myProperty) => myProperty.id === id
    );
    propertyServices
      .closeProperty(id)
      .then((property) => {
        const newMyProperties = [
          ...myProperties.slice(0, indexToUpdate),
          property,
          ...myProperties.slice(indexToUpdate + 1),
        ];
        setMyProperties(newMyProperties);
        updateProperty(property);
      })
      .catch(console.log);
  }

  function restoreOwnProperty(id) {
    const indexToUpdate = myProperties.findIndex(
      (myProperty) => myProperty.id === id
    );
    propertyServices
      .restoreProperty(id)
      .then((property) => {
        const newMyProperties = [
          ...myProperties.slice(0, indexToUpdate),
          property,
          ...myProperties.slice(indexToUpdate + 1),
        ];
        setMyProperties(newMyProperties);
        updateProperty(property);
      })
      .catch(console.log);
  }

  function deleteOwnProperty(id) {
    propertyServices
      .deleteProperty(id)
      .then(() => {
        const newMyProperties = myProperties.filter(
          (property) => property.id != id
        );
        setMyProperties(newMyProperties);
        deleteProperty(id);
      })
      .catch(console.log);
  }

  const value = {
    myProperties,
    createOwnProperty,
    closeOwnProperty,
    restoreOwnProperty,
    deleteOwnProperty,
  };

  return <LandlordContext.Provider value={value} {...props} />;
}

export { LandlordProvider, LandlordContext };

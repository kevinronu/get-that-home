import { createContext, useContext, useEffect, useState } from "react";

import { AuthContext } from "./auth-context";
import * as propertyServices from "../services/property-service";

const LandlordContext = createContext();

function LandlordProvider(props) {
  const [myProperties, setMyProperties] = useState([]);
  const { createProperty, deleteProperty } = useContext(AuthContext);

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
      })
      .catch(console.log);
  }

  function closeOwnProperty(id) {
    propertyServices
      .closeProperty(id)
      .then((property) => {
        let newMyProperties = myProperties.filter(
          (myProperty) => myProperty.id != id
        );
        newMyProperties = [...newMyProperties, property];
        setMyProperties(newMyProperties);
      })
      .catch(console.log);
  }

  function restoreOwnProperty(id) {
    propertyServices
      .restoreProperty(id)
      .then((property) => {
        let newMyProperties = myProperties.filter(
          (myProperty) => myProperty.id != id
        );
        newMyProperties = [...newMyProperties, property];
        setMyProperties(newMyProperties);
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

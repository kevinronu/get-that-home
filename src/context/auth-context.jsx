import { useNavigate } from "react-router-dom";
import { createContext, useEffect, useState } from "react";

import { tokenKey } from "../config";
import * as auth from "../services/auth-service";
import { getProperties } from "../services/property-service";
import { createUser, getUser } from "../services/user-service";

const AuthContext = createContext();

function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [properties, setProperties] = useState([]);
  const [isLoginModalActive, setIsLoginModalActive] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    getUser()
      .then((user) => {
        setUser(user);
      })
      .catch(console.log);

    getProperties()
      .then((properties) => {
        setProperties(properties);
      })
      .catch((e) => console.log(e));
  }, []);

  function login(credentials) {
    auth
      .login(credentials)
      .then((user) => {
        setUser(user);
        handleModal();
      })
      .catch(console.log);
  }

  function signUp(userData) {
    createUser(userData)
      .then((user) => {
        setUser(user);
        navigate("/home");
      })
      .catch(console.log);
  }

  function logout() {
    auth
      .logout()
      .then(() => {
        sessionStorage.removeItem(tokenKey);
        setUser(null);
        navigate("/home");
      })
      .catch(console.log);
  }

  function createProperty(property) {
    const newProperties = [...properties, property];
    setProperties(newProperties);
  }

  function updateProperty(property) {
    const indexToUpdate = properties.findIndex((e) => e.id === property.id);
    const newProperties = [
      ...properties.slice(0, indexToUpdate),
      property,
      ...properties.slice(indexToUpdate + 1),
    ];
    setProperties(newProperties);
  }

  function deleteProperty(id) {
    const newProperties = properties.filter((property) => property.id != id);
    setProperties(newProperties);
  }

  function handleModal() {
    setIsLoginModalActive(!isLoginModalActive);
  }

  const value = {
    user,
    login,
    signUp,
    logout,
    properties,
    createProperty,
    updateProperty,
    deleteProperty,
    isLoginModalActive,
    handleModal,
  };

  return <AuthContext.Provider value={value} {...props} />;
}

export { AuthProvider, AuthContext };

import { useNavigate } from "react-router-dom";
import { createContext, useEffect, useState } from "react";

import { tokenKey } from "../config";
import * as auth from "../services/auth-service";
import * as userService from "../services/user-service";

const AuthContext = createContext();

function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [isLoginModalActive, setIsLoginModalActive] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    userService
      .getUser()
      .then((user) => {
        setUser(user);
      })
      .catch(console.log);
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
    userService
      .createUser(userData)
      .then((user) => {
        setUser(user);
        navigate("/home");
      })
      .catch(console.log);
  }

  function updateUser(userData) {
    userService
      .updateUser(userData)
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

  function handleModal() {
    setIsLoginModalActive(!isLoginModalActive);
  }

  const value = {
    user,
    login,
    signUp,
    updateUser,
    logout,
    isLoginModalActive,
    handleModal,
  };

  return <AuthContext.Provider value={value} {...props} />;
}

export { AuthProvider, AuthContext };

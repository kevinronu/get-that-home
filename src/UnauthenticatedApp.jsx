import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";

import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import PropertiesPage from "./pages/PropertiesPage";
import PropertyDetailPage from "./pages/PropertyDetailPage";
import LoginModal from "./components/LoginModal";
import { AuthContext } from "./context/auth-context";

function UnauthenticatedApp() {
  const { isLoginModalActive, handleModal } = useContext(AuthContext);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="home" element={<HomePage />} />
        <Route path="login" element={<LoginModal />} />
        <Route path="sign_up" element={<SignUpPage />} />
        <Route path="properties">
          <Route index element={<Navigate to="page/1" />} />
          <Route path="page/:page" element={<PropertiesPage />} />
        </Route>
        <Route path="property">
          <Route path="detail/:id" element={<PropertyDetailPage />} />
        </Route>
      </Routes>
      {isLoginModalActive && <LoginModal toggleModal={handleModal} />}
    </>
  );
}

export default UnauthenticatedApp;

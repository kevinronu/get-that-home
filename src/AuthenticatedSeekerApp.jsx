import { Routes, Route, Navigate } from "react-router-dom";

import { SeekerProvider } from "./context/seeker-context";
import HomePage from "./pages/HomePage";
import PropertiesPage from "./pages/PropertiesPage";
import PropertyDetailPage from "./pages/PropertyDetailPage";
import SavedContactedPropertiesPage from "./pages/SavedContactedPropertiesPage";
import SavedFavoritePropertiesPage from "./pages/SavedFavoritePropertiesPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";

function AuthenticatedSeekerApp() {
  return (
    <SeekerProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="home" element={<HomePage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="properties">
          <Route index element={<Navigate to="page/1" />} />
          <Route path="page/:page" element={<PropertiesPage />} />
        </Route>
        <Route path="property">
          <Route path="detail/:id" element={<PropertyDetailPage />} />
        </Route>
        <Route path="saved_properties">
          <Route index element={<Navigate to="favorites/page/1" />} />
          <Route path="favorites">
            <Route index element={<Navigate to="page/1" />} />
            <Route
              path="page/:page"
              element={<SavedFavoritePropertiesPage />}
            />
          </Route>
          <Route path="contacted">
            <Route index element={<Navigate to="page/1" />} />
            <Route
              path="page/:page"
              element={<SavedContactedPropertiesPage />}
            />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </SeekerProvider>
  );
}

export default AuthenticatedSeekerApp;

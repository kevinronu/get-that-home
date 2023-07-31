import { Routes, Route, Navigate } from "react-router-dom";

import { LandlordProvider } from "./context/landlord-context";
import HomePage from "./pages/HomePage";
import PropertiesPage from "./pages/PropertiesPage";
import PropertyDetailPage from "./pages/PropertyDetailPage";
import CreateRentalPropertyPage from "./pages/CreateRentalPropertyPage";
import EditRentPropertyPage from "./pages/EditRentPropertyPage ";
import EditSalePropertyPage from "./pages/EditSalePropertyPage";
import CreateSalePropertyPage from "./pages/CreateSalePropertyPage";
import ProfilePage from "./pages/ProfilePage";
import MyActivePropertiesPage from "./pages/MyActivePropertiesPage";
import MyClosedPropertiesPage from "./pages/MyClosedPropertiesPage";

function AuthenticatedLandlordApp() {
  return (
    <LandlordProvider>
      <Routes>
        <Route path="/">
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="home" element={<HomePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="properties">
            <Route index element={<Navigate to="page/1" />} />
            <Route path="page/:page" element={<PropertiesPage />} />
          </Route>
          <Route path="property">
            <Route index element={<Navigate to="/property/create/rent" />} />
            <Route path="create">
              <Route index element={<Navigate to="/property/create/rent" />} />
              <Route path="rent" element={<CreateRentalPropertyPage />} />
              <Route path="sale" element={<CreateSalePropertyPage />} />
            </Route>
            <Route path="detail/:id" element={<PropertyDetailPage />} />
            <Route path="edit">
              <Route path="rent/:id" element={<EditRentPropertyPage />} />
              <Route path="sale/:id" element={<EditSalePropertyPage />} />
            </Route>
          </Route>
          <Route path="my_properties">
            <Route index element={<Navigate to="active/page/1" />} />
            <Route path="active">
              <Route index element={<Navigate to="page/1" />} />
              <Route path="page/:page" element={<MyActivePropertiesPage />} />
            </Route>
            <Route path="closed">
              <Route index element={<Navigate to="page/1" />} />
              <Route path="page/:page" element={<MyClosedPropertiesPage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </LandlordProvider>
  );
}

export default AuthenticatedLandlordApp;

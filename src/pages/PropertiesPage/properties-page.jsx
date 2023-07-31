import { useContext } from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import VisitorPropertiesSection from "../../components/VisitorPropertiesSection";
import { AuthContext } from "../../context/auth-context";
import LandlordPropertiesSection from "../../components/LandlordPropertiesSection";
import SeekerPropertiesSection from "../../components/SeekerPropertiesSection";

export default function PropertiesPage() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Header user={user} />
      {!user ? (
        <VisitorPropertiesSection />
      ) : user.role === "landlord" ? (
        <LandlordPropertiesSection />
      ) : (
        <SeekerPropertiesSection />
      )}
      <Footer />
    </>
  );
}

import { useContext } from "react";

import PropertyDetailSection from "../../components/PropertyDetailSection";
import { AuthContext } from "../../context/auth-context";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function PropertyDetailPage() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Header user={user} />
      <PropertyDetailSection />
      <Footer />
    </>
  );
}

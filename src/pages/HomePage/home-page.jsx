import { useContext } from "react";

import SignUpMessageSection from "../../components/SignUpMessageSection";
import BestPropertiesSection from "../../components/BestPropertiesSection";
import MeetHomeSection from "../../components/MeetHomeSection";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { AuthContext } from "../../context/auth-context";
import { PropertyContext } from "../../context/property-context";

export default function HomePage() {
  const { user } = useContext(AuthContext);
  const { properties } = useContext(PropertyContext);

  return (
    <>
      <Header user={user} />
      <MeetHomeSection />
      <BestPropertiesSection best_properties={properties.slice(0, 3)} />
      {user ? "" : <SignUpMessageSection />}
      <Footer />
    </>
  );
}

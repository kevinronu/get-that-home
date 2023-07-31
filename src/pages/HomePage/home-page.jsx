import { useContext } from "react";

import SignUpMessageSection from "../../components/SignUpMessageSection";
import BestPropertiesSection from "../../components/BestPropertiesSection";
import MeetHomeSection from "../../components/MeetHomeSection";
import FooterHome from "../../components/FooterHome";
import Header from "../../components/Header";
import { AuthContext } from "../../context/auth-context";

export default function HomePage() {
  const { user, properties } = useContext(AuthContext);

  return (
    <>
      <Header user={user} />
      <MeetHomeSection />
      <BestPropertiesSection best_properties={properties.slice(0, 3)} />
      {user ? "" : <SignUpMessageSection />}
      <FooterHome />
    </>
  );
}

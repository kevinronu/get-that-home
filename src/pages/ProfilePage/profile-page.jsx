import { useContext } from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { AuthContext } from "../../context/auth-context";
import ProfileSection from "../../components/ProfileSection";

export default function ProfilePage() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Header user={user} />
      <ProfileSection />
      <Footer />
    </>
  );
}

import HeaderLandlord from "../../components/HeaderLandlord";
import Footer from "../../components/Footer";
import Container from "../../layout/Container";
import MyClosedPropertiesSection from "../../components/MyClosedPropertiesSection";

export default function MyClosedPropertiesPage() {
  return (
    <>
      <HeaderLandlord />
      <Container size="xl">
        <MyClosedPropertiesSection />
      </Container>
      <Footer />
    </>
  );
}

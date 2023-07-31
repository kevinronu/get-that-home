import HeaderLandlord from "../../components/HeaderLandlord";
import Footer from "../../components/Footer";
import Container from "../../layout/Container";
import MyActivePropertiesSection from "../../components/MyActivePropertiesSection";

export default function MyActivePropertiesPage() {
  return (
    <>
      <HeaderLandlord />
      <Container size="xl">
        <MyActivePropertiesSection />
      </Container>
      <Footer />
    </>
  );
}

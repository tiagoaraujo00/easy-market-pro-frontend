import { CaseStudies } from "./components/CaseStudies/CaseStudies";
import { Container } from "./components/Container/Container";
import Header from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Services } from "./components/Services/Services";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";

export function App() {
  return (
    <>
      <Container>
        <Header />
        <Hero />
        <Services />
        <CaseStudies />
        <ContactUs />
        <Footer />
      </Container>
    </>
  );
}

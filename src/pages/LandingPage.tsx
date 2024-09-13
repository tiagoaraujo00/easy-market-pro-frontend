
import { CaseStudies } from '../components/CaseStudies/CaseStudies';
import ContactUs from '../components/ContactUs/ContactUs';
import { Container } from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { Hero } from '../components/Hero/Hero';
import { Services } from '../components/Services/Services';

export default function LandingPage() {
  return (
    <Container>
      <Header />
      <Hero />
      <Services />
      <CaseStudies />
      <ContactUs />
      <Footer />
    </Container>
  )
}

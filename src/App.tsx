import { Container } from "./components/Container/Container";
import Header from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Services } from "./components/Services/Services";

export function App() {
  return (
    <div className="w-screen h-screen">
      <Container>
        <Header />
        <Hero />
        <Services />
      </Container>
    </div>
  );
}

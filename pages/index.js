import Hero from "layouts/index/Hero";
import LearnMore from "layouts/index/LearnMore";
import Roadmap from "layouts/index/Roadmap";
import Stats from "layouts/index/Stats";
import { Container } from "styles/GlobalStyle";

export default function Home() {
  return (
    <div>
      <Container className="py-100px">
        <Hero />
      </Container>

      <Stats />

      <Roadmap />

      <LearnMore />
    </div>
  );
}

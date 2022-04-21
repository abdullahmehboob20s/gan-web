import Stats from "layouts/index/Stats";
import Achievement from "layouts/myganbatte/Achievement";
import Expertise from "layouts/myganbatte/Expertise";
import Footer from "layouts/myganbatte/Footer";
import Hero from "layouts/myganbatte/Hero";
import Innovators from "layouts/myganbatte/Innovators";
import Searching from "layouts/myganbatte/Searching";
import Testimonials from "layouts/myganbatte/Testimonials";
import ToolsAndBenefits from "layouts/myganbatte/ToolsAndBenefits";
import React from "react";
import { Container } from "styles/GlobalStyle";

function myganbatte() {
  return (
    <div>
      <Container className="py-100px">
        <Hero />
      </Container>

      <Searching />

      <Achievement />

      <ToolsAndBenefits />

      <Expertise />

      <Innovators />

      <Testimonials />

      <Footer />
    </div>
  );
}

export default myganbatte;

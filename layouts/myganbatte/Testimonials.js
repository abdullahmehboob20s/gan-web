import TestimonialsCard from "components/TestimonialsCard";
import React from "react";
import { Container } from "styles/GlobalStyle";

function Testimonials() {
  return (
    <div className="py-100px pt-0">
      <Container>
        <p className="fs-28px weight-4 black opacity-0_8 mb-40px">
          Testimonials
        </p>

        <TestimonialsCard
          img="/personImg1.png"
          title="– Christoff Scharff, CEO at ARA"
          desc="We are proud to be one of the first partners to contribute to the digital circularity gap report. This instrument brings together the best of two worlds – an evolving digital platform and interdisciplinary research in circular economy. The tool provides a data-driven assessment of Austria’s situation regarding the circularity reach performance, which gives us the opportunity to identify action fields and understand how to implement transformation strategies. This will help us as the driving force in the Austrian recycling economy to further push the change towards a circular economy."
        />
      </Container>
    </div>
  );
}

export default Testimonials;

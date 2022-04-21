import BulletPoint from "components/BulletPoint";
import ToolsAndBenefitsCard from "components/ToolsAndBenefitsCard";
import React from "react";
import styled from "styled-components";
import { Container } from "styles/GlobalStyle";

const Wrapper = styled.div`
  background: url(frameBg.png);
  background-repeat: no-repeat;
  background-size: cover;
`;
const Header = styled.header`
  max-width: 647px;
`;

const Points = styled.div`
  & > :not(:last-child) {
    margin-bottom: 10px;
  }
`;

const Cards = styled.div`
  display: grid;
  gap: 32px;
`;

function ToolsAndBenefits() {
  return (
    <Wrapper>
      <Container className="py-150px">
        <Header className="mb-70px">
          <h1
            className="white fs-28px weight-4 mb-30px"
            style={{ letterSpacing: "0.01em" }}
          >
            Tools & benefits
          </h1>

          <p className="fs-20px white weight-6 lh-1_6 mb-30px">
            In Ganbatte, you can assign the different tools and modules to
            businesses, cities, and governments you are working with.
          </p>

          <Points>
            <BulletPoint>
              <p className="fs-16px white weight-6">
                Ganbatte delivers data-driven insights, tools and actionable
                case studies from around the world and makes them easily
                accessible to you.
              </p>
            </BulletPoint>
            <BulletPoint>
              <p className="fs-16px white weight-6">
                We're developing hand in hand with users and partners to
                co-create the most valuable features and contextualise insights
                to bring the biggest change.
              </p>
            </BulletPoint>
          </Points>
        </Header>

        <Cards>
          <ToolsAndBenefitsCard
            id="dashboard"
            link="https://docs.google.com/forms/d/e/1FAIpQLSf26lSZdTm4t2a1KYaudM2bBLn3mngD5OQUPf5HHKEwjdHWTQ/viewform"
            title="MyGanbatte Dashboard"
            subtitle="Turn your actions into valuable and comparable data "
            desc="With your MyGanbatte license, you will be able to onboard all your clients and provide access to our data and tools on an individual basis. From the My Ganbatte Dashboard, you will be able to visualise all the data and insights from these interactions. "
            img="/toolImg1.png"
          />
          <ToolsAndBenefitsCard
            id="circularity"
            link="https://circularity.games/"
            title="Circularity Academy"
            subtitle="Delivering skills for the circular economy "
            desc="Knowledge and skills are essential to accelerate the transition to an economic system where the planet and all people can thrive. Circularity Academy is a gamified e-learning platform, to build awareness, knowledge and skills for a circular economy. "
            img="/toolImg2.png"
          />
          <ToolsAndBenefitsCard
            id="tool"
            link="https://cat.ganbatte.world/"
            title="Circularity Assessment Tool"
            subtitle="Create a baseline, learn together and see progress on becoming circular "
            desc="Evaluate your progress on key circular strategies and discover opportunities to make your business, product, city or policies more circular."
            img="/toolImg3.png"
          />
          <ToolsAndBenefitsCard
            id="hub"
            link="https://knowledge-hub.circle-lab.com/"
            title="Knowledge Hub Collection"
            subtitle="Your curated collection of circular economy case studies"
            desc="Knowledge Hub is a powerful global knowledge platform. Receive your own Knowledge Hub Collection that you can co-brand, use to showcase local case studies and share with your audience while contributing to the common evidence base for the circular economy."
            img="/toolImg4.png"
          />
        </Cards>
      </Container>
    </Wrapper>
  );
}

export default ToolsAndBenefits;

import React from "react";
import { Container } from "styles/GlobalStyle";
import styled from "styled-components";
import Button from "components/Button";
import ToolsCard from "components/ToolsCard";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const SectionWrapper = styled.div`
  position: relative;
  background-color: #5c0c40;
  z-index: 10;
  margin-bottom: 48px;

  &::before {
    content: "";
    position: absolute;
    top: calc(100%);
    left: 0;
    width: 100%;
    height: 48px;
    background: url(./bottomCurve.svg);
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 12;
    background-position: center center;
  }
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div:not(:last-child) {
    flex: 1;
  }

  & > div:last-child {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 1000px) {
    flex-direction: column;

    button {
      margin-top: 3rem;
      width: fit-content;
    }
  }
`;

const Cards = styled.div`
  display: flex;

  & > div {
    flex: 1;
  }

  & > div:not(:last-child) {
    margin-right: 50px;
  }

  @media (max-width: 1000px) {
    & > div:not(:last-child) {
      margin-right: 1rem;
    }
  }
  @media (max-width: 760px) {
    flex-direction: column;

    & > div:not(:last-child) {
      margin-right: 0rem;
      margin-bottom: 1.5rem;
    }
  }
`;

const TextLink = styled.a`
  display: flex;
  align-items: center;
  width: fit-content;

  & > :not(:last-child) {
    margin-right: 0.5rem;
  }
`;

function LearnMore() {
  const router = useRouter();

  const navigating = (link) => {
    router.push(link);
  };

  return (
    <div className="bg-purple">
      <SectionWrapper>
        <Container>
          <Section className="py-100px ">
            <div>
              <p className="fs-28px weight-4 mb-5px white">MyGanbatte</p>
              <p className="fs-20px weight-6 mb-30px white">
                Your actions, our expertise
              </p>

              <p className="fs-16px lh-1_6 weight-6 white">
                MyGanbatte is your companion to driving circularity in your city
                or region. Designed to help you engage with businesses, cities
                and nations, it offers ready-to-use, practical solutions to
                build momentum around the circular economy. It will help your
                track and monitor progress over time, as well as your overall
                impact.
              </p>
            </div>
            <div>
              <Button
                title="Learn about MyGanbatte"
                bg="#FDBD57"
                color="#263238"
                onClick={() => router.push("/myganbatte")}
              />
            </div>
          </Section>
        </Container>
      </SectionWrapper>
      <Container className="py-100px">
        <h1 className="fs-20px white weight-6 white mb-30px ">Tools</h1>

        <Cards className="mb-35px">
          <ToolsCard
            img="/toolImg1.png"
            title="MyGanbatte Dashboard"
            subtitle="Turn your actions into valuable and comparable data "
            onClick={() => navigating("/myganbatte/#dashboard")}
          />
          <ToolsCard
            img="/toolImg2.png"
            title="Circularity Academy"
            subtitle="Delivering skills for the circular economy "
            onClick={() => navigating("/myganbatte/#circularity")}
          />
          <ToolsCard
            img="/toolImg3.png"
            title="Circularity Assessment Tool"
            subtitle="Create a baseline, learn together and progress on becoming circular "
            onClick={() => navigating("/myganbatte/#tool")}
          />
        </Cards>

        <TextLink className="pointer hover-underline white">
          <p className="fs-16px white weight-7">Learn more about our tools</p>
          <Image src="/rightArrow.svg" alt="" width="24px" height="24px" />
        </TextLink>
      </Container>
    </div>
  );
}

export default LearnMore;

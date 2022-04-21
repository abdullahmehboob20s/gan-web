import Button from "components/Button";
import RoadmapCard from "components/RoadmapCard";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { Container } from "styles/GlobalStyle";

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 64px;

  @media (max-width: 1000px) {
    gap: 30px;
  }
  @media (max-width: 760px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ExploringBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 350px;
  margin: 0 auto;

  @media (max-width: 760px) {
    max-width: 100%;
    align-items: flex-start;
    margin: 0 3%;
    margin-top: 6%;
  }
`;

const ImageWrapper = styled.div`
  width: ${({ width }) => (width ? width : "100%")};
  aspect-ratio: ${({ ratio }) => (ratio ? ratio : "2/5")};
  position: relative;
`;
const Images = styled.div`
  display: none;

  @media (max-width: 1000px) {
    display: flex;
    max-width: 400px;
    margin: 0 auto;
    margin-bottom: 3rem;
    align-items: center;

    & > :not(:last-child) {
      margin-right: 1.5rem;
    }
  }
`;

function Roadmap() {
  return (
    <div className="py-150px bg-light-gray">
      <Container>
        <div className="mb-70px">
          <p className="fs-28px black opacity-0_8 weight-4 mb-25px">
            How can Ganbatte transform your city?
          </p>

          <p className="fs-16px black opacity-0_8 weight-4 mb-15px lh-1_6">
            Ganbatte can kickstart your city's circular journey. A circular
            economy yields many benefits for cities; these range from reduced
            greenhouse gas emissions and improved material security to savings
            on landfilling costs and value creation for the local community.
          </p>

          <p className="fs-16px black opacity-0_8 weight-4 lh-1_6">
            Within Ganbatte, cities go through three stages to transition to
            becoming fully circular.
          </p>
        </div>

        <Images>
          <ImageWrapper>
            <Image src="/girl-reading.png" layout="fill" alt="" />
          </ImageWrapper>
          <ImageWrapper ratio="2/5">
            <Image src="/girl-searching.png" layout="fill" alt="" />
          </ImageWrapper>
          <ImageWrapper ratio="2/5">
            <Image src="/boy-celebrating.png" layout="fill" alt="" />
          </ImageWrapper>
        </Images>

        <CardsGrid>
          <RoadmapCard
            title="Explore"
            img="/girl-reading.png"
            descWidth="80%"
            desc="Ganbatte provides key metrics, case studies and solutions specifically selected to guide you in making sustainable choices. This allows you to browse suitable solutions and understand where you should focus your efforts to make the most impact. You will see how moving from a linear to a circular economy can benefit the environment, the community and boost jobs."
          />
          <RoadmapCard
            title="Scan"
            descWidth="80%"
            imgAspectRatio="3/5"
            imgWidth="20%"
            img="/girl-searching.png"
            desc="Scanning to find specific solutions for your city can be done by analysing your progress towards circularity, benchmarking with other cities and listing all the businesses and initiatives in your city, to accelerate the transition towards a fully circular city."
          />
          <RoadmapCard
            title="Act"
            descWidth="70%"
            imgAspectRatio="2/6"
            imgWidth="12%"
            img="/boy-celebrating.png"
            desc="Ganbatte makes it possible to connect with cities, nations and businesses with similar profiles to transition faster. Having explored and scanned, you can gather all insights to create and pitch your roadmap towards circularity, and get prepared to go out and get it implemented!"
          />
          <ExploringBox>
            <p className="fs-20px black opacity-0_8 lh-1_4 weight-6 mb-20px">
              Start exploring what a circular economy can do for your city!
            </p>

            <Button title="Find my city" />
          </ExploringBox>
        </CardsGrid>
      </Container>
    </div>
  );
}

export default Roadmap;

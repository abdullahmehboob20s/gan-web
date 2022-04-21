import AchievementCard from "components/AchievementCard";
import StatsCard from "components/StatsCard";
import useMediaQuery from "hooks/useMediaQuery";
import Stats from "layouts/index/Stats";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { Container } from "styles/GlobalStyle";

const Cards = styled.div`
  max-width: 660px;

  & > :not(:last-child) {
    margin-bottom: 20px;
  }
`;

const StatsContainer = styled.div`
  /* padding: 40px 65px; */
  border-radius: 8px;
`;

const StatsRow = styled.div`
  display: grid;
  grid-template-columns: 303px 1fr 1fr 1fr;
  gap: 35px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 26px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const Icons = styled.div`
  margin-right: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 600px) {
    margin-right: 0px;
    flex-direction: row;
    margin-bottom: 20px;
    justify-content: flex-start;

    & > :not(:last-child) {
      margin-right: 1.2rem;
    }
  }
`;

const ImageBox = styled.div`
  min-width: 48px;
  height: 48px;
  position: relative;
`;

function Achievement() {
  const isBellow1000px = useMediaQuery("(max-width : 1000px)");

  return (
    <div className="bg-light-gray py-100px">
      <Container>
        <div>
          <p className="fs-28px black opacity-0_8 mb-30px weight-4">
            What can you achieve with MyGanbatte?
          </p>

          <ContentWrapper className="mb-80px">
            <Icons>
              <ImageBox>
                <Image src="/bag.svg" alt="" layout="fill" />
              </ImageBox>
              <ImageBox>
                <Image src="/building.svg" alt="" layout="fill" />
              </ImageBox>
              <ImageBox>
                <Image src="/flag.svg" alt="" layout="fill" />
              </ImageBox>
            </Icons>

            <Cards>
              <AchievementCard>
                <p className="fs-16px weight-4 black opacity-0_8 lh-1_6">
                  Designed to help you engage with{" "}
                  <span className="weight-7">Businesses, Cities,</span> and{" "}
                  <span className="weight-7">Nations,</span> we offer
                  ready-to-use solutions to build momentum around circular
                  economy, find practical, proven solutions and actionable
                  insights to help you track and monitor progress over time, as
                  well as your overall impact.{" "}
                </p>
              </AchievementCard>
              <AchievementCard>
                <p className="fs-16px weight-4 black opacity-0_8 lh-1_6">
                  Centered around the achievement of{" "}
                  <span className="weight-7">national and city targets,</span>{" "}
                  Ganbatte helps you and your customers link progress towards
                  the circular economy to national ambitions.
                </p>
              </AchievementCard>
            </Cards>
          </ContentWrapper>

          <StatsContainer className="bg-light-gray">
            <p className="fs-20px black weight-5 lh-1_4 mb-30px text-center opacity-0_8">
              Ganbatte was created by Circle Economy and its partners, based on{" "}
              <br />
              more than 10 years of circular economy experience and research.
            </p>

            <StatsRow>
              <StatsCard
                shouldRow={isBellow1000px ? false : true}
                style={{ background: "white" }}
                title="10+"
                description="Powerful data and knowledge partnerships"
              />
              <StatsCard
                style={{ background: "white" }}
                title="31+"
                subtitle="CITIES"
                description="supported"
              />
              <StatsCard
                style={{ background: "white" }}
                title="21+"
                subtitle="NATIONS"
                description="supported"
              />
              <StatsCard
                style={{ background: "white" }}
                title="3000+"
                description="Global case studies on our Knowledge Hub"
              />
            </StatsRow>
          </StatsContainer>
        </div>
      </Container>
    </div>
  );
}

export default Achievement;

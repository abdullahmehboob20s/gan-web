import StatsCard from "components/StatsCard";
import useMediaQuery from "hooks/useMediaQuery";
import React from "react";
import styled from "styled-components";
import { Container } from "styles/GlobalStyle";

const Wrapper = styled.div`
  background: url(section-bg.png);
`;

const TitleWrapper = styled.div`
  max-width: 600px;
`;

const StatsContainer = styled.div`
  padding: 40px 65px;
  border-radius: 8px;

  @media (max-width: 1000px) {
    padding: 30px 40px;
  }
`;

const StatsRow = styled.div`
  display: flex;

  & > div {
    flex: 1;
  }

  @media (max-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

function Stats() {
  const isBellow1000px = useMediaQuery("(max-width : 1000px)");

  return (
    <Wrapper>
      <Container className="py-150px">
        {isBellow1000px ? (
          <TitleWrapper>
            <p className="fs-20px white weight-5 lh-1_4 mb-40px">
              Ganbatte was created by Circle Economy and its partners, based on
              more than 10 years of circular economy experience and research.
            </p>
          </TitleWrapper>
        ) : (
          ""
        )}

        <StatsContainer className="bg-light-gray">
          {isBellow1000px ? (
            ""
          ) : (
            <p className="fs-20px black weight-5 lh-1_4 mb-30px text-center opacity-0_8">
              Ganbatte was created by Circle Economy and its partners, based on{" "}
              <br />
              more than 10 years of circular economy experience and research.
            </p>
          )}

          <StatsRow>
            <StatsCard
              title="10+"
              description="Powerful data and knowledge partnerships"
            />
            <StatsCard title="31+" subtitle="CITIES" description="" />
            <StatsCard title="21+" subtitle="NATIONS" description="supported" />
            <StatsCard
              title="3000+"
              description="Global case studies on our Knowledge Hub"
            />
          </StatsRow>
        </StatsContainer>
      </Container>
    </Wrapper>
  );
}

export default Stats;

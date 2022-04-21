import { Container } from "styles/GlobalStyle";
import Button from "components/Button";
import styled from "styled-components";
import useMediaQuery from "hooks/useMediaQuery";

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div:not(:last-child) {
    margin-right: 100px;
  }

  & > div {
    flex: 1;
  }

  & > div:last-child {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 1000px) {
    flex-direction: column;

    & > div:not(:last-child) {
      margin-right: 0px;
    }

    & > div:last-child {
      display: block;
    }
  }
`;

const ProgressBar = styled.div`
  width: 302.54px;
  height: 302.54px;
  border: 16.0924px solid #564f4e;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  box-shadow: 0px 13.5575px 36.1534px -5.64897px rgba(2, 24, 110, 0.15);

  @media (max-width: 1000px) {
    margin: 0 auto;
    margin-bottom: 40px;
  }
`;

function Hero() {
  const isBellow1000px = useMediaQuery("(max-width : 1000px)");
  return (
    <Section>
      <div>
        <h1 className="fs-48px black opacity-0_8 weight-7 mb-45px">Ganbatte</h1>

        {isBellow1000px ? (
          <ProgressBar>
            <p className="uppercase text-center fs-18px black opacity-0_8 weight-6 lh-1_6">
              GLOBAL <br /> CIRCULARITY METRIC
            </p>
            <p className="text-center fs-78px black opacity-0_8 weight-5 mb-5px">
              8.6%
            </p>
            <p className="fs-16px text-center weight-5 uppercase">GOAL: 17%</p>
          </ProgressBar>
        ) : (
          ""
        )}

        <p className="fs-28px black weight-4 mb-15px">
          The world is <span className="weight-6">only 8.6% circular.</span>
        </p>
        <p className="fs-28px black weight-4 mb-30px">
          Learn how your city can help to{" "}
          <span className="weight-6">double global circularity.</span>
        </p>

        {isBellow1000px ? (
          <div className="mb-30px">
            <Button title="Explore your city" />
          </div>
        ) : (
          ""
        )}

        <p
          className={`fs-20px black opacity-0_8 weight-5 ${
            isBellow1000px ? "" : "mb-50px"
          }`}
        >
          Ganbatte delivers data-driven insights, tools and actionable case
          studies from around the world and makes them easily accessible.
        </p>
        {isBellow1000px ? "" : <Button title="Explore your city" />}
      </div>

      {isBellow1000px ? (
        ""
      ) : (
        <div>
          <ProgressBar>
            <p className="uppercase text-center fs-18px black opacity-0_8 weight-6 lh-1_6">
              GLOBAL <br /> CIRCULARITY METRIC
            </p>
            <p className="text-center fs-78px black opacity-0_8 weight-5 mb-5px">
              8.6%
            </p>
            <p className="fs-16px text-center weight-5 uppercase">GOAL: 17%</p>
          </ProgressBar>
        </div>
      )}
    </Section>
  );
}

export default Hero;

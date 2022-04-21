import { Container } from "styles/GlobalStyle";
import Button from "components/Button";
import styled from "styled-components";
import useMediaQuery from "hooks/useMediaQuery";
import ProgressBarComponent from "components/ProgressBarComponent";

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

function Hero() {
  const isBellow1000px = useMediaQuery("(max-width : 1000px)");

  return (
    <Section>
      <div>
        <h1 className="fs-48px black opacity-0_8 weight-7 mb-45px">Ganbatte</h1>

        {isBellow1000px ? <ProgressBarComponent /> : ""}

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
          <ProgressBarComponent />
        </div>
      )}
    </Section>
  );
}

export default Hero;

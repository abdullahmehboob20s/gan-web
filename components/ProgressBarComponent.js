import React from "react";
import styled from "styled-components";
import ProgressCircle from "./ProgressCircle";

const ProgressBarWrapper = styled.div`
  position: relative;
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
  background-color: white;

  @media (max-width: 1000px) {
    margin: 0 auto;
    margin-bottom: 40px;
  }

  @media (max-width: 500px) {
    width: 280px;
    height: 280px;
  }
`;

function ProgressBarComponent() {
  return (
    <ProgressBarWrapper>
      <ProgressCircle
        percentage={8}
        speedValue={20}
        progressColor={"#FF7F66"}
        size="130%"
        zindex="-1"
      />
      <ProgressCircle
        percentage={14}
        speedValue={10}
        progressColor={"#FFC6A6"}
        size="123%"
        zindex="-2"
      />

      <p className="uppercase text-center fs-18px black opacity-0_8 weight-6 lh-1_6">
        GLOBAL <br /> CIRCULARITY METRIC
      </p>
      <p className="text-center fs-78px black opacity-0_8 weight-5 mb-5px">
        8.6%
      </p>
      <p className="fs-16px text-center weight-5 uppercase">GOAL: 17%</p>
    </ProgressBarWrapper>
  );
}

export default ProgressBarComponent;

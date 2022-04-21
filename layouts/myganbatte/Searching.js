import Button from "components/Button";
import React from "react";
import styled from "styled-components";
import { Container } from "styles/GlobalStyle";

const Wrapper = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #f7f4f8;
    width: 100%;
    height: 50%;
    z-index: -1;
  }
`;
const Section = styled(Container)`
  background-color: #5c0c40;
  padding: 40px 90px;
  box-shadow: 0px 12px 32px -5px rgba(2, 24, 110, 0.15);
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div:first-child {
    flex: 1;
    margin-right: 90px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 40px 40px;

    & > div:first-child {
      flex: 1;
      margin-right: 0px;
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 500px) {
    padding: 30px 26px;
  }
`;

const ContactUs = styled.div`
  padding: 24px;
  background-color: white;
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 309px;
  text-align: center;
`;

function Searching() {
  return (
    <Wrapper className="py-100px">
      <Section>
        <div>
          <p className="fs-20px white weight-6 lh-1_5">
            We are searching for pioneering organisations to rally and support
            entrepreneurial business leaders, brave city officials, and
            charismatic governments that dare to lead and become future-proof.{" "}
          </p>
        </div>
        <ContactUs>
          <p className="fs-16px black opacity-0_8 weight-6 lh-1_7 mb-15px">
            Get in contact with us to become a Ganbatte Innovator
          </p>
          <Button title="Contact us" />
        </ContactUs>
      </Section>
    </Wrapper>
  );
}

export default Searching;

import Button from "components/Button";
import React from "react";
import styled from "styled-components";
import { Container } from "styles/GlobalStyle";
import { FiArrowUpRight } from "react-icons/fi";

const Section = styled.div`
  display: flex;
  align-items: center;
  max-width: 724px;
  margin: 0 auto;
  padding: 20px 0;
  justify-content: space-between;

  & > div:not(:last-child) {
    margin-right: 100px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 3rem 0;

    & > div:not(:last-child) {
      margin-right: 0px;
      margin-bottom: 1rem;
    }
  }
`;

function Footer() {
  return (
    <div className="bg-light-gray">
      <Container>
        <Section>
          <div>
            <p className="fs-20px black opacity-0_8 weight-6 mb-10px">
              Stay in the loop!
            </p>
            <p className="fs-16px black opacity-0_8 weight-6 mb-10px">
              Be the first one to hear about upcoming tools through MyGanbatte
              newsletters
            </p>
          </div>

          <Button title="Register" icon={<FiArrowUpRight size={22} />} />
        </Section>
      </Container>
    </div>
  );
}

export default Footer;

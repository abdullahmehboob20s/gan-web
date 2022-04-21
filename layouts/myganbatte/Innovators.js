import React from "react";
import styled from "styled-components";
import { Container } from "styles/GlobalStyle";

const Images = styled.div`
  display: flex;
  align-items: center;
  margin: -60px;
  flex-wrap: wrap;

  & > img {
    margin: 60px;
  }

  @media (max-width: 600px) {
    margin: 0px;
    flex-direction: column;
    align-items: unset;

    & > img {
      margin: 0px;
      width: 30%;
    }
    & > :not(:last-child, :first-child) {
      margin-bottom: 3rem;
    }
  }
`;

function Innovators() {
  return (
    <Container className="py-100px">
      <div className="mb-50px">
        <p className="fs-28px black opacity-0_8 weight-4 mb-15px">
          Our founding co-creators
        </p>
        <p className="fs-20px black opacity-0_8 weight-6">
          The first Ganbatte Innovators
        </p>
      </div>

      <div>
        <Images>
          <img src="/ara.svg" alt="" />
          <img src="/beah.svg" alt="" />
          <img src="/zero.svg" alt="" />
          <img src="/circularNorway.svg" alt="" />
        </Images>
      </div>
    </Container>
  );
}

export default Innovators;

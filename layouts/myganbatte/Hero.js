import { Container } from "styles/GlobalStyle";
import Button from "components/Button";
import styled from "styled-components";
import Image from "next/image";

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

  @media (max-width: 760px) {
    flex-direction: column;

    & > div:not(:last-child) {
      margin-right: 0px;
      margin-bottom: 1.4rem;
    }
  }
`;

const ImageBox = styled.div`
  /* width: 100%; */
  /* flex: 1; */
  max-width: 500px;
  aspect-ratio: 16/9;

  @media (max-width: 760px) {
    max-width: 100%;
    min-height: 50vw;
    aspect-ratio: none;
  }
`;

function Hero() {
  return (
    <Section>
      <div>
        <h1 className="fs-28px black opacity-0_8 weight-4 mb-10px">Ganbatte</h1>

        <p className="fs-16px black weight-6 mb-30px">
          Your actions, our expertise
        </p>
        <p className="fs-16px black weight-6 mb-10px">
          We are facing a big challenge, but we can do it:
        </p>

        <p className="fs-16px black opacity-0_8 weight-4 lh-1_7">
          Ganbatte means moving into action, despite the challenges you face. To
          really accelerate circularity globally, we need to leverage digital
          technology and your local expertise to scale!
        </p>
      </div>
      <ImageBox className="relative">
        <Image src="/gettingData.svg" alt="" layout="fill" />
      </ImageBox>
    </Section>
  );
}

export default Hero;

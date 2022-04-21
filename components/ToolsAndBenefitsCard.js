import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Card = styled.div`
  background-color: white;
  display: flex;
  box-shadow: 0px 12px 32px -5px rgba(2, 24, 110, 0.15);
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
const Content = styled.div`
  padding: 34px 42px;

  @media (max-width: 700px) {
    padding: 1rem 1rem;
  }
`;
const Title = styled.div`
  display: flex;
  align-items: center;

  & > :not(:last-child) {
    margin-right: 10px;
  }
`;
const ImageBox = styled.div`
  position: relative;
  aspect-ratio: 1/1;
  min-width: 253px;
  object-fit: cover;

  @media (max-width: 700px) {
    aspect-ratio: 1/0.5;
    min-width: 100%;
  }
`;

function ToolsAndBenefitsCard({ title, subtitle, desc, link, img, id }) {
  return (
    <Card id={id}>
      <ImageBox className="relative">
        <Image src={img} alt="" layout="fill" objectFit="cover" />
      </ImageBox>
      <Content>
        <Title className=" mb-15px">
          <p className="fs-20px weight-6 black opacity-0_8 ">{title}</p>
          <Link href={link} passHref>
            <div className="pointer">
              <img src="./externalLink.svg" alt="" />
            </div>
          </Link>
        </Title>

        <p className="fs-16px weight-6 black opacity-0_8 mb-15px">{subtitle}</p>

        <p className="fs-16px weight-4 black opacity-0_8 lh-1_6">{desc}</p>
      </Content>
    </Card>
  );
}

export default ToolsAndBenefitsCard;

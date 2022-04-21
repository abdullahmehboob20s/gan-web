import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;

  @media (max-width: 760px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const ImageBox = styled.div`
  min-width: 212px;
  height: 212px;
  border-radius: 50%;
  box-shadow: 0px 12px 32px -5px rgba(2, 24, 110, 0.15);
  margin-right: 64px;

  @media (max-width: 760px) {
    min-width: 170px;
    height: 170px;
    margin-right: 0px;
    margin-bottom: 2rem;
  }
`;

const Content = styled.div`
  max-width: 673px;
`;

function TestimonialsCard({ title, desc, img }) {
  return (
    <Card>
      <ImageBox className="relative">
        <Image src={img} alt="" layout="fill" />
      </ImageBox>

      <Content>
        <p className="black opacity-0_8 fs-20px weight-4 mb-20px lh-1_6">
          {desc}
        </p>
        <p className="black opacity-0_8 fs-20px weight-7 ">{title}</p>
      </Content>
    </Card>
  );
}

export default TestimonialsCard;

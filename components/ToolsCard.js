import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: #ffffff;
  box-shadow: 0px 12px 32px -5px rgba(2, 24, 110, 0.15);
  border-radius: 8px;
  overflow: hidden;
`;
const ImageDiv = styled.div`
  aspect-ratio: 16/8;
  object-fit: cover;
`;
const Content = styled.div`
  padding: 18px;
`;

function ToolsCard({ img, title, subtitle, onClick }) {
  return (
    <Card className="pointer" onClick={onClick}>
      {img && (
        <ImageDiv className="relative mb-10px">
          <Image src={img} alt="" layout="fill" />
        </ImageDiv>
      )}
      <Content>
        <p className="black fs-16px weight-6 mb-10px opacity-0_8">{title}</p>
        <p className="black fs-16px weight-4 opacity-0_8 lh-1_6">{subtitle}</p>
      </Content>
    </Card>
  );
}

export default ToolsCard;

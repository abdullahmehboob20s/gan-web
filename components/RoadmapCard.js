import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  padding: 24px;
  background-color: white;
  position: relative;
`;

const ImageWrapper = styled.div`
  width: ${({ width }) => width};
  aspect-ratio: ${({ ratio }) => ratio};
  position: absolute;
  right: 25px;
  bottom: -10%;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const Description = styled.p`
  width: ${(props) => props.width};

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

function RoadmapCard({
  title,
  desc,
  img,
  descWidth = "90%",
  imgAspectRatio = "2/5",
  imgWidth = "14%",
}) {
  return (
    <Card>
      <p className="fs-20px black opacity-0_8 mb-15px weight-6">{title}</p>
      <Description
        className="fs-16px weight-4 black opacity-0_6 lh-1_6"
        width={descWidth}
      >
        {desc}
      </Description>

      <ImageWrapper ratio={imgAspectRatio} width={imgWidth}>
        <Image src={img} layout="fill" alt="" />
      </ImageWrapper>
    </Card>
  );
}

export default RoadmapCard;

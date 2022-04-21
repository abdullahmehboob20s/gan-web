import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
`;

const ImageBox = styled.div`
  min-width: 48px;
  height: 48px;
  margin-right: 32px;

  position: relative;
`;

function AchievementCard({ img, children }) {
  return (
    <Card>
      {/* {img && (
        <ImageBox>
          <Image src={img} alt="" layout="fill" />
        </ImageBox>
      )} */}
      {children}
    </Card>
  );
}

export default AchievementCard;

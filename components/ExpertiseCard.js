import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: white;
  padding: 24px;

  @media (max-width: 600px) {
    padding: 16px 24px;
  }
`;
const Header = styled.div`
  display: flex;
  align-items: center;

  & > :not(:first-child) {
    margin-left: 1rem;
  }
`;

const Img = styled.div`
  min-width: 60px;
  height: 60px;

  @media (max-width: 1000px) {
    min-width: 40px;
    height: 40px;
  }
`;

function ExpertiseCard({ title, icon, desc }) {
  return (
    <Card>
      <Header className="mb-15px">
        <Img className="relative">
          <Image src={icon} layout="fill" alt="" />
        </Img>

        <p className="fs-20px weight-6 black opacity-0_8">{title}</p>
      </Header>

      <p className="black opacity-0_6 fs-16px weight-4 lh-1_7">{desc}</p>
    </Card>
  );
}

export default ExpertiseCard;

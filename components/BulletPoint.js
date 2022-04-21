import React from "react";
import styled from "styled-components";

const Point = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Bullet = styled.div`
  margin-right: 8px;
  background: ${({ bg }) => bg};
  min-width: 8px;
  height: 8px;
  border-radius: 50%;
`;

function BulletPoint({ children, bulletBg = "#FF7F66", className, style }) {
  return (
    <Point className={className} style={style}>
      <Bullet bg={bulletBg} />
      {children}
    </Point>
  );
}

export default BulletPoint;

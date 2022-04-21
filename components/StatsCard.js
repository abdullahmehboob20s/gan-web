import React from "react";
import styled from "styled-components";

const Card = styled.div`
  padding: 24px 20px;
  display: flex;
  flex-direction: ${({ shouldRow }) => (shouldRow ? "row" : "column")};
  text-align: ${({ shouldRow }) => (shouldRow ? "left" : "center")};
  align-items: center;

  & > :not(:last-child) {
    margin-right: ${({ shouldRow }) => (shouldRow ? "22px" : "0px")};
  }
`;

function StatsCard({ title, subtitle, description, style, shouldRow = false }) {
  return (
    <Card style={style} shouldRow={shouldRow}>
      <h1 className="black opacity-0_8 fs-50px weight-7 mb-5px">{title}</h1>
      {subtitle && (
        <h2 className="black opacity-0_8 fs-20px uppercase weight-7 mb-5px">
          {subtitle}
        </h2>
      )}
      <p className="black opacity-0_8 weight-6 fs-16px lh-1_6">{description}</p>
    </Card>
  );
}

export default StatsCard;

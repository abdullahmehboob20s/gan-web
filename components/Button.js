import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  background-color: ${({ bg }) => bg};
  padding: 16px 32px;
  box-shadow: 0px 5px 20px -10px rgba(38, 50, 56, 0.2);
  border-radius: 4px;
  cursor: pointer;
  color: ${({ color }) => color};

  display: flex;
  align-items: center;

  & > :not(:last-child) {
    margin-right: 0.5rem;
  }
`;

function Button({ title, bg = "#4450bf", color = "white", icon, onClick }) {
  return (
    <Btn bg={bg} color={color} onClick={onClick}>
      <p className="fs-18px weight-7 font-noto-sans">{title}</p>
      {icon && icon}
    </Btn>
  );
}

export default Button;

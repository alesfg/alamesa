import React from "react";
import "./Card.css";
const Card = ({ bebida }) => {
  return (
    <>
      <div className="CardContainer">{bebida.name}</div>
    </>
  );
};

export default Card;

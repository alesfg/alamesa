import React from "react";
import "./ProductCard.css";

function ProductCard({ name, price, img }) {

  console.log("Hey")
  console.log(typeof (img))

  return (
    <div className="card">
      <img src={img} alt={name} className='img' />
      <div className="footer">
        <div>{name}</div>
        <div>{price}</div>
      </div>
    </div>
  );
}

export default ProductCard;

import React from "react";

function Product({ productName, productColor }) {
  return (
    <div>
      <h3>Name: {productName}</h3>
      <p>Color: {productColor}</p>
    </div>
  );
}

export default Product;

import React from "react";
import Product from "./Product";

function ObjectList() {
  const products = [
    {
      id: 1,
      name: "iphone",
      color: "purple",
    },
    {
      id: 2,
      name: "iphone",
      color: "blue",
    },
    {
      id: 3,
      name: "iphone",
      color: "pink",
    },
  ];
  return (
    <div>
      {products.map((product) => (
        <Product productName={product.name} productColor={product.color} />
      ))}
    </div>
  );
}

export default ObjectList;

import React from "react";

function Property({ size, isSold, name }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Size: {size}</p>
      <p>Is Sold: {isSold ? "Yes" : "No"}</p>
    </div>
  );
}

export default Property;

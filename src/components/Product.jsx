import React, { useState } from "react";

function Product({ name, price }) {
  const [quantity, setQuantity] = useState(1);
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <p>Quantity: {quantity}</p>
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
      <button onClick={() => setQuantity(quantity - 1)}>-</button>
      <p>Total: ${price * quantity}</p>
    </div>
  );
}

export default Product;

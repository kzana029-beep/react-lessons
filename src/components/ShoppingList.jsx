import React, { useState } from "react";

function ShoppingList() {
  const [cart, setCart] = useState([]);
  const products = [
    {
      name: "Iphone 14",
      price: 1000,
    },
    {
      name: "laptop",
      price: 500,
    },
    {
      name: "mouse",
      price: 50,
    },
  ];
  return (
    <>
      {products.map((product, index) => (
        <div key={index}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button onClick={() => setCart([...cart, product])}>
            Add to Cart
          </button>
        </div>
      ))}
      <div>
        <p> Items in Cart: {cart.length}</p>
        <p> Total: ${cart.reduce((sum, item) => sum + item.price, 0)}</p>
        {cart.length === 0 ? (
          <p>cart empty</p>
        ) : (
          <p>you have items in your cart</p>
        )}
      </div>
    </>
  );
}

export default ShoppingList;

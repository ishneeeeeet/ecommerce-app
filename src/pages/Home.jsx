import React, { useState } from "react";
import Products from "../api/Products";
import Card from "../components/Card";

export function Home() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
    console.log(cartItems);
  };

  return (
    <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      {Products.map((item) => (
        <Card item={item} addToCart={addToCart} key={item.key} />
      ))}
    </div>
  );
}

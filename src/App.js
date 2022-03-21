import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import Shop from "./components/Shop";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]); // inits cart as an empty array
  const [total, setTotal] = useState(0);
  useEffect(() => {
    //runs everytime cart is updated
    console.log("cart updated");
  }, [cart]);
  function handleAddToCart(item) {
    // adds items to cart

    console.log(item);
  }

  return (
    <div className="App">
      <Shop cart={cart} total={total} handleAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;

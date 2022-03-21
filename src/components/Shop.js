import Cart from "./Cart";
import DisplayItems from "./DisplayItems";

import { useState } from "react";
import { useEffect } from "react";

export default function Shop(props) {
  const [cart, setCart] = useState([
    {
      name: "Test Emerald",
      price: "400",
      quantity: 1,
      src:
        "https://media.istockphoto.com/photos/green-round-cut-emerald-picture-id158282939?k=20&m=158282939&s=612x612&w=0&h=VGVoivLLuwlWxoxt3G7wWJhLiZtltzKmr94NVr44i5w="
    },
    {
      name: "Test Crystal",
      price: "300",
      quantity: 1,
      src:
        "https://media.istockphoto.com/photos/closeup-of-a-sparkling-red-ruby-picture-id172373115?k=20&m=172373115&s=612x612&w=0&h=Q9fXXbmdgwD6YfBODeLKRNF4Ig0pu3UX1mVRbQfYk6g="
    }
  ]); // inits cart as an empty array
  const [total, setTotal] = useState(0);

  useEffect(() => {
    //runs everytime cart is updated
    console.log("cart updated");
  }, [cart]);

  function handleAddToCart(item) {
    // adds items to cart
    console.log(item);
  }

  function handleIncrement(item) {
    console.log(item);
    const indexOfItem = cart.indexOf(item);
    console.log(indexOfItem);
    setCart((prevCart) => {
      prevCart[indexOfItem].quantity++;
      return [...prevCart];
    });
  }
  return (
    <section id="shop">
      <DisplayItems handleAddToCart={handleAddToCart} />
      <Cart cart={cart} total={total} handleIncrement={handleIncrement} />
    </section>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./../App";
import Shop from "./Shop";
import Home from "./Home";
import Cart from "./Cart";
import FoodList from "./FoodList";
import { useState } from "react";
import { useEffect } from "react";

const test = "test";

const RouteSwitch = () => {
  const [foods, setFoods] = useState(FoodList);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [cartJSX, setCartJSX] = useState([]);

  function handleAddItemToCart(item) {
    const itemToFind = cart.find((object) => {
      //looks for item in cart
      return object.name === item.name;
    });
    if (itemToFind === undefined) {
      //if item is not in cart already, adds a new object
      console.log("Not in cart yet!");
      setCart((prevCart) => {
        return [
          ...prevCart,
          {
            name: item.name,
            price: item.price,
            id: item.id,
            quantity: 1
          }
        ];
      });
    } else if (itemToFind) {
      //if item is not in the cart yet
      const index = cart.indexOf(itemToFind);
      console.log("Item in cart!");

      setCart((prevCart) => {
        prevCart[index].quantity++;
        return prevCart;
      });
      setCart((prevCart) => {
        return [...prevCart];
      });
    }
  }
  function handleRemove(item) {
    const index = cart.indexOf(item);
    console.log(index);
    console.log(cart);
    // setCart(prevCart => {
    //     prevCart.splice(index, 1);
    //     return prevCart;
    // })
    // setCart(prevCart => {
    //     return ([
    //         ...prevCart
    //     ])
    // })
  }
  useEffect(() => {
    console.log(cart);
    setTotal((prevTotal) => {
      let total = 0;
      cart.forEach((object) => {
        total += object.price * object.quantity;
      });
      return total;
    });
  }, [cart]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/shop"
          element={
            <Shop foods={foods} handleAddItemToCart={handleAddItemToCart} />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart handleRemove={handleRemove} cart={cart} total={total} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;

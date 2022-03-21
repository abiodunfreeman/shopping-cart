import Cart from "./Cart";
import DisplayItems from "./DisplayItems";

export default function Shop(props) {
  const { total, cart, handleAddToCart } = props;

  return (
    <section id="shop">
      <DisplayItems handleAddToCart={handleAddToCart} />
      <Cart cart={cart} total={total} />
    </section>
  );
}

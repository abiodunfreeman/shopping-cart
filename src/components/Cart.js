export default function Cart(props) {
  let cartTotal = 0;
  if (props.cart.length !== 0) {
    cartTotal = props.cart.reduce(
      (total, cur) => total + cur.price * cur.quantity,
      0
    );
  }
  console.log(cartTotal);
  console.log(props.cart);
  const cartJSX = props.cart.map((item) => {
    return (
      <div className="cart-item" key={item.name}>
        <img className="cart-picture" src={item.src} alt={item.name} />
        <div className="item-cart-info">
          <h3>{item.name}</h3>
          <h3>{item.price * item.quantity}</h3>
          <div className="item-quan">
            <button onClick={() => props.onSubtractItem(item)}>-</button>
            <h3>{item.quantity}</h3>
            <button onClick={() => props.onAddItem(item)}>+</button>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div id="cart">
      {props.cart.length === 0 && <h1>Cart is Empty</h1>}
      {cartJSX}
      <br />
      <h1> Total - ${cartTotal}</h1>
    </div>
  );
}

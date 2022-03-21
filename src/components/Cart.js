export default function Cart(props) {
  // console.log(props);
  // console.log(props.cart[0]);
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
      <h1> Total - {props.total}</h1>
    </div>
  );
}

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
            <button>-</button>
            <h3>{item.quantity}</h3>
            <button onClick={() => props.handleIncrement(item)}>+</button>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div id="cart">
      <h1>cart</h1>
      {cartJSX}
      <h1>{props.total}</h1>
    </div>
  );
}

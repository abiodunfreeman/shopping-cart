export default function Cart(props) {
  console.log(props);
  return (
    <div id="cart">
      <h1>cart</h1>
      <h1>{props.total}</h1>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header>
      <Link to="/home">Home</Link>
      <Link to="/">Shop ({props.cart.length})</Link>
    </header>
  );
}

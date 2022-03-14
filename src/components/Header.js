import React from 'react'
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
        <h1>Wild Mango</h1>

    <nav>
        <ul id='nav-ul'>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/shop">Order Online</Link></li>
            <li><Link to="/cart">Cart</Link></li>
        </ul>
    </nav>
       
    </header>
  )
}

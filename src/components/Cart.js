import React from 'react'
import Header from './Header'

export default function Cart( props ) {
const {cart, total, handleRemove} = props


const JSX = cart.map(item => {
    return(
        <div className="item-container" key={item.id}>
        <h3 className="individual-price" >{item.quantity}x</h3>
        <h3>{item.name} (${item.price})</h3>
        <h3 className="individual-price">{item.quantity * item.price} <button onClick={() => handleRemove(item)}>X</button></h3>
        </div>
    )
})
const styles={
    
}
  return (
    <div id="cart-page">
    <Header/>
    <h1>Cart </h1>
        <div id="display-cart">
        <div id="display-cart-header">
            <h3>Qty</h3> <h3>Item</h3> <h3 >price</h3>
        </div>
            {JSX }
            <h3>Cart Total - ${total}</h3>
        </div>
    </div>
  )
}

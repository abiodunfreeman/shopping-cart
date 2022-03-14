import React from 'react'
import { useState } from 'react'
import Header from './Header'
import FoodList from './FoodList'
import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Cart from './Cart';
export default function Shop( props ) {

const {foods} = props;

// console.log(foods);
const foodJSX = foods.map(item => {
    return(
        <div className="display-item" key={item.id}>
            <div className="display-item-left">
                <h3>{item.name}</h3>
                <p>{item.ingredients}</p>
            </div>
            <div className="display-item-right">
                
                <h3>{item.price}</h3>
                <button
                onClick={() => props.handleAddItemToCart(item)}
                >Add to cart</button>
            </div>

        </div>
    )
})
        
        

// crafting your story // online prescense// hitlist// interview process //car /prep// interview process
  return (


    <div id="shop-page">
        <Header/>
        <h2>SHOP</h2>
        <div id="display-food-items">
            {foodJSX}
        </div>
        
    </div>
  )
}

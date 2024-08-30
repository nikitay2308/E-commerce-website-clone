import React from 'react'
import './Product.css'
import {useStateValue} from "./StateProvider"

function Product({id,title,price,rating,image}) {
  const [{basket},dispatch]=useStateValue();
  const addToBasket=()=>{
    dispatch({
      type:"ADD_TO_BASKET",
      item:{
        id:id,
      title:title,
    image:image,
    price:price,
  rating:rating},
    })
  }
  return (
    <div className="product">
     <div className='product-info'>
        <p>{title}</p>
        <p className="product-price">
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className='product-rating'>
          {Array(rating).fill().map((_,i)=>(
            <p>⭐</p>
          ))}
            
        </div>
     </div>
     <div >
        <img className="product-image" src={image}></img>
     </div>
     
        <button onClick={addToBasket} class="product-button">Add to Basket</button>
     
    </div>
  )
}

export default Product
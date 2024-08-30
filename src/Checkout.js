import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal';
import {useStateValue} from "./StateProvider"
import CheckoutProduct from './CheckoutProduct';
import Header from './Header';


function Checkout() {
  const [{basket,user},dispatch]=useStateValue();
  return (
    <div>
      <Header/>
    <div className="checkout">
        
    <div className="checkout-left">
      <img className="checkout-ad" 
      src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"></img>
    
    <div >
       <h3 >Hello!, {user?.email}</h3>
        <h1 className="checkout-title">Your Shopping Basket</h1>
      {basket.map(item=>(
        <CheckoutProduct
        id={item.id}
        image={item.image}
        price={item.price}
        title={item.title}
        rating={item.rating}

        />
      ))}
    </div>
   

    </div>




    <div className="checkout-right">
   <Subtotal/>

    </div>
   

    </div>
    </div>
  )
}

export default Checkout
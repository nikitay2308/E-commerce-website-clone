import React from 'react'
import './Home.css'
import Product from './Product';
import Header from './Header';

function Home() {
  return (
    
    <div classname="home">
       <Header/>
        <div className="home-container">
          <img className="home-image" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Suzhal/3000x1200_Hero-Tall_NP._CB635319275_.jpg" ></img>
          
          
        <div className="home-row">
        <Product id="1675787" title="AmazonBasics AAAA Everyday Alkaline Batteries for Stylus
         (8-Pack) - Appearance May Vary" price={11} rating={3}
         image="https://m.media-amazon.com/images/I/61SXv8OuNkL._AC_UL480_FMwebp_QL65_.jpg"
         />
       <Product id="15998837"title="AmazonBasics 50-Inch Lightweight Tripod with Bag" 
       price={20} rating={4}
         image="https://m.media-amazon.com/images/I/71Bl+JlWzJL._AC_UL480_FMwebp_QL65_.jpg"
         />
        </div>

        <div className="home-row">
        <Product id="1567837" title="Men's Regular T-shirt" 
       price={15} rating={3}
         image="https://m.media-amazon.com/images/I/71DosJOQtUL._AC_UL480_FMwebp_QL65_.jpg"
         />
         <Product id="15678678" title="Amazon Brand - Vedaka Idli Rawa 500g" 
       price={4} rating={4}
         image="https://m.media-amazon.com/images/I/81vIBhSdjbL._AC_UL480_FMwebp_QL65_.jpg"
         />
         <Product id="1567556" title="Amazon Brand - Eden & Ivy Womens Casual Nightgown (PAG 702 B_Multi 3_L)" 
       price={28} rating={3}
         image="https://m.media-amazon.com/images/I/61NXDxbe4NL._AC_UL480_FMwebp_QL65_.jpg"
         />
        </div>
        </div>

        <div className="home-row">
        <Product id="1877537" title="Fire TV Stick (3rd Gen, 2021) with Alexa Voice Remote (includes TV and app controls) | HD streaming device | " 
       price={100} rating={4}
         image="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/b1225c3b-9711-4f13-b37c-71f5859947e5._CR0,0,1200,628_SX810_QL70_.jpg"
         />
        
        </div>
        
    </div>
  )
}

export default Home
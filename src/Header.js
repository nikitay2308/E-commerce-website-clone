import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import{Link} from "react-router-dom";
import {useStateValue} from "./StateProvider";
import {auth} from './firebase';

function Header() {
    const [{basket,user},dispatch]=useStateValue();

    const handleAuthentication=()=>{
        if(user){
      auth.signOut();
        }
    }
    return (
        <div className="header">
            
            <Link to={"/"}>
            <img className="header-logo"
                src="https://pngimg.com/uploads/amazon/small/amazon_PNG25.png"></img></Link>
            

            <div className="header-search">
                <input className="header-searchInput" type="text"></input>
                <SearchIcon className="header-searchIcon"></SearchIcon>
            </div>

            <div className="header-navbar">
                
                <Link to={!user && "/login"}>
                <div onClick={handleAuthentication} className="header-option">

                   <span className='header-optionone'>
                    Hello,{user?.email}
                   </span>

                   <span className='header-optiontwo'>{
                    user?'Sign Out':' Sign In'
                   }
                    
                   </span>
                   
                </div>
                </Link>


                
                <div className="header-option">
                   <span className='header-optionone'>
                    Returns
                   </span>

                   <span className='header-optiontwo'>
                    & Orders
                   </span>
                </div>
                 
                 <Link to="/checkout">
                 <div className="header-option" >
                   <span className='header-optionone ' id="header-basketCount">
                   {basket?.length}
                   </span>

                   <span className='header-optiontwo'>
                    <ShoppingCartOutlinedIcon id="header-basket"/>
                   </span>
                   </div>
                 </Link>
                
                   
                
               

                

            </div>
        </div>
    )
}

export default Header
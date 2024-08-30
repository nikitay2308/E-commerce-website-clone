import React,{useEffect}from "react";
import './App.css';

import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {useStateValue} from "./StateProvider"
import {auth} from './firebase';

import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom";



function App() {
  const [{},dispatch]=useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      

      if(authUser){
      dispatch({
        type:"SET_USER",
        user:authUser

      })
      }
      else{
       dispatch({
        type:"SET_USER",
        user:null
        
       })}
    })
  },[])
  return (
    <Router>
      
    <div className="App">
      <Routes>
      
     
      
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Home/>}/>
      
      
      
     
        </Routes>
      
      </div>
      </Router>
  );
}

export default App;

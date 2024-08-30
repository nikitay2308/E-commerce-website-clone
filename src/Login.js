import react,{useState} from 'react';
import React from 'react'
import './Login.css'
import{Link,useNavigate} from "react-router-dom";
import {auth} from './firebase';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'



function Login() {
    
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    let navigate = useNavigate();

    const signIn = e => {
        e.preventDefault()
        
        
          // Create a new user with email and password using firebase
          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigate(`/`);
                alert("loggedin");
              })
              .catch((error) => {
                alert("already logged in")
                const errorCode = error.code;
                const errorMessage = error.message;})
            
        
        
        
      }

    
    const register = e => {
        e.preventDefault()
        
        
          // Create a new user with email and password using firebase
            createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                navigate("/");
              })
              .catch((error) => {
                alert("user already exists")
                const errorCode = error.code;
                const errorMessage = error.message;})

            
        
        setEmail('')
        setPassword('')
        
      }

    
    /*const register= e=> {
        e.preventDefault();
        
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            const user = userCredential.user;
            navigate('./');
         
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;});
    }
*/
  return (
    <div className="login">
        <Link to="/">
     <img className="login-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"/>
     </Link>

     <div className="login-container">
      <h1>Sign in</h1>
      <form>
        <h5>Email</h5>
        <input type="text" value={email} 
        onChange={e=>setEmail(e.target.value)}></input>
        <h5>Password</h5>
        <input type="password" value={password} 
        onChange={e=>setPassword(e.target.value)}></input><br>
        </br>
        <button type="submit" onClick={signIn}  className="login-button" >
        Sign in</button>
        
      </form>
      <p>By continuing, you agree to Amazon Clone's Conditions 
        of Use and Privacy Notice.</p>
       <div className="ok">
        <p >New to Amazon?</p>
        </div>
     <button type="" onClick={register} className="signup-button">Create Amazon Account</button>
     </div>
    </div>
  )
}

export default Login
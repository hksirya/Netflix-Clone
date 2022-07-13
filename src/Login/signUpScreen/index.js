import React, { useRef } from 'react'
import "./SignUpScreen.css"
import {auth }from './firebase.js'

export const SignUpScreen = () => {

  const emailRef=useRef(null);
  const passwordRef=useRef(null);

  const signIn=(e)=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then(authUser=>{
      console.log(authUser)
      window.location.replace("/")
    }).catch(error=>{
      alert(error.message)
    })
    
  }
  const register=(e)=>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then(authUser=>{
      console.log(authUser)
      window.location.replace("/")
    }).catch(error=>{
      alert(error.message)
    })
  }
  return (
    <div className='signUpScreen'>
    <div className='form-heading'>Sign In</div>
    <form>
    <input type="text" ref={emailRef} className='signup-input' placeholder='Email or Phone number'/>
    <input type="text"  ref={passwordRef} className='signup-input' placeholder='Password'/>
    </form>
    <button className='signup-btn' onClick={signIn}>Sign In</button>
    <div onClick={register} className='alt-text1 alt-text'> New to Netflix ? <span className='alt-text2'>Sign Up Now</span></div>
    <div className='alt-text3'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</div>
    </div>

  )
}

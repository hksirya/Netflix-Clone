import React, { useState } from 'react'
import './login.css';
import { SignUpScreen } from './signUpScreen';

const Login = () => {
  const[signIn,setSignIn]=useState(false);

  const showSignUp=(e)=>{
    setSignIn(true);
  }



  return (
    <div  className='login-page'>
    <div className='login_header'>
    <img className='login_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158' />
   <button className='login_button' onClick={<SignUpScreen/>}>Sign In</button>
    </div>

    <div className='login_body'>
    {
      signIn? (<SignUpScreen/>) : (
        <>
        <h1>Unlimited movies, TV <br/>shows and more.</h1>
    <h2>Watch anywhere. Cancel anytime.</h2>
    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

    <form className='login_form' onClick={showSignUp}>
    <input type="text" placeholder="Email Address"></input>
    <button className='submit_btn' >Get Started</button>
    </form>
    
    </>
      )
    }
    </div>
    <div className='login_gradient'></div>
    </div>
  )
}

export default Login
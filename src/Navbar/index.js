import React, { useEffect, useState } from 'react'
import "./navbar.css"
import firebase from 'firebase/compat/app'

const Navbar = () => {

    const [show,setShow]=useState(false);

    const transitionNavbar=()=>{

        if(window.scrollY>100){
            setShow(true);
        }
        else{
            setShow(false);
        }
    }

    useEffect(()=>{

        window.addEventListener("scroll",transitionNavbar)

        return ()=>{
            window.removeEventListener("scroll",transitionNavbar)
        }
    },[])
  return (
    
    <div className={`nav ${show && "nav-black"}`}>
    <div className='nav-content'>
    <img className='nav_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158' />
    <button onClick={()=> {firebase.auth().signOut();window.location.replace("/")}} className='nav-btn'>LogOut</button>
    </div>
    </div>
  )
}

export default Navbar
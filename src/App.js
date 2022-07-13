import React, { useEffect } from 'react';
import Login from "./Login";
import { useDispatch, useSelector } from 'react-redux'
import HomeScreen from './Login/HomeScreen/index.js'
import { selectUser ,login,logout} from './features/userSlice.js'
import {auth}from '../src/Login/signUpScreen/firebase'
function App() {

  const user = useSelector(selectUser);
  const dispatch=useDispatch();

  useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged(user=>{

      if(user){

        dispatch(login({
          uid:user.uid,
          email:user.email
        }))
      }
      else{
        dispatch(logout);
      }
    })

    return unsubscribe()
  },[])
  return (
    <div >
    {
      !user ? (<Login/>):
      (<HomeScreen />)
    }
    </div>
  );
}

export default App;

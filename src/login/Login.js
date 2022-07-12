import './login.css'
import React, { useState, useEffect } from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import { signInGoogle } from '../mainFeed/firebase';
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {auth} from '../mainFeed/firebase';

function Login() {
  const [registerEmail, setEmail] = useState("");
  const [registerPassword, setPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

}, [])

  const register = async () => {
    try {
    const user = await createUserWithEmailAndPassword(auth, 
      registerEmail, 
      registerPassword);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, 
        loginEmail, 
        loginPassword);
      console.log(user)
      } catch (error) {
        console.log(error.message);
      }
  }

  const logout = async () => {
    await signOut(auth);
  }
  return (
    <div className='loginBody'>
      <div>     
      <div className='signInFunctions'>
        <TwitterIcon fontSize='large' className="loginTwitterIcon"/>
        <h1>
          Welcome to Brock's Twitter
        </h1>  
        <button type="button" onClick={signInGoogle}className="login-with-google-btn">
        Continue with Google
        </button>

        <div>
            <input className='loginEmail' placeholder='Enter Email' onChange={(event) => 
              {setLoginEmail(event.target.value);
              }}/>
        </div>
        <div className='loginPassDiv'>
              <input className='loginPass' placeholder='Enter Password' onChange={(event) => 
              {setLoginPassword(event.target.value);
              }}/>
        </div>
          <div className='loginDiv'>
          <button type="button" onClick={login} className="loginButton">Login</button>
          </div>

          <div>
              <input className='registerEmail' placeholder='Register E-Mail' onChange={(event) => 
              {setEmail(event.target.value);
              }}/>
          </div>

          <div>
            <input className='registerPass' placeholder='Register Password' onChange={(event) => 
              {setPassword(event.target.value);
              }}/>
            </div>

            <div>
            <button type="button" onClick={register}>
            Create User</button>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Login
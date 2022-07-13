import './login.css'
import React, { useState, useEffect, useContext } from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import { signInGoogle } from '../mainFeed/firebase';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {auth} from '../mainFeed/firebase';
import { useNavigate } from "react-router-dom";

function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  let navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

}, [])

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, 
        loginEmail, 
        loginPassword);
        
        if (user) {
          navigate('/home')
        }
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
          Log In to Brock's Twitter
        </h1>  
        {/* <button type="button" onClick={signInGoogle}className="login-with-google-btn">
        Continue with Google
        </button> */}

        <div>
            <input className='loginEmail' placeholder='Enter Email' onChange={(event) => 
              {setLoginEmail(event.target.value);
              }}/>
        </div>
        <div className='loginPassDiv'>
              <input type="password" className='loginPass' placeholder='Enter Password' onChange={(event) => 
              {setLoginPassword(event.target.value);
              }}/>
        </div>
          <div className='loginDiv'>
          <button type="button" onClick={login} className="loginButton">Login</button>
          </div>
            <div>
            <button className='createUserBtn' type="button" onClick={() => {
              navigate("/signup");
            }}>
            Not a user? Sign up</button>
          </div>
      </div>
      </div>
    </div>
  )
}

export default Login
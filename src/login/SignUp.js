import React, { useState, useEffect } from 'react'
import {createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signOut} from "firebase/auth";
import {auth} from '../mainFeed/firebase';
import { useNavigate } from "react-router-dom";
import TwitterIcon from '@mui/icons-material/Twitter';
import './signup.css';

function SignUp() {
    const [registerEmail, setEmail] = useState("");
    const [registerPassword, setPassword] = useState("");
    const [registerUserName, setUserName] = useState("");

    const [user, setUser] = useState({});


    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    
    }, [])

    let navigate = useNavigate();


    const register = async () => {
        try {
          const user = await createUserWithEmailAndPassword(auth, 
            registerEmail, 
            registerPassword);
            user.setUserName = registerUserName;
            console.log(registerUserName);

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
          Sign Up for Brock's Twitter
        </h1>
        <form>
          <div>
              <input className='registerEmail' placeholder='Enter E-Mail' onChange={(event) => 
              {setEmail(event.target.value);
              }}/>
          </div>
          
          <div>
            <input type="password" className='registerPass' placeholder='Enter Password' onChange={(event) => 
              {setPassword(event.target.value);
              }}/>
            </div>

            <div>
            <input className='registerUserName' placeholder='Create Username' onChange={(event) => 
              {setUserName(event.target.value);
              }}/>
            </div>

            <div>
            <button className='signUpBtn' type="button" onClick={register}>
            Create User</button>
          </div>
          <div>
          <button className='goBackToLogin' type="button" onClick={(() => {
            navigate('/login')
          })}>
           Go Back to Login</button>
          </div>
          </form>

      </div>
      </div>
    </div>
  )
}

export default SignUp;
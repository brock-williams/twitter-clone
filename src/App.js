import './App.css';
import Home from './Home';
import Login from './login/Login';
import SignUp from './login/SignUp';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from './mainFeed/firebase';


function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
     })
  }, [])

  

  return (
    <div className="app">
      <Router>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/signup" element={<SignUp/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;

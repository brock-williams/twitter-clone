import './App.css';
import Home from './Home';
import Login from './login/Login';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/profile"/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;

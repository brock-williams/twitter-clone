import './App.css';
import Sidebar from './sidebar/Sidebar';
import MainFeed from './mainFeed/MainFeed';
import RightSide from './rightSide/RightSide';
import Login from './login/Login';

function App() {
  return (
    <div className="app">
      <Sidebar/>
      
      <MainFeed/>

      <RightSide/>

      {/* <Login/> */}


    </div>
  );
}

export default App;

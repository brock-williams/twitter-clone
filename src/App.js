import './App.css';
import Sidebar from './sidebar/Sidebar';
import MainFeed from './mainFeed/MainFeed';
import RightSide from './rightSide/RightSide';


function App() {
  return (
    <div className="app">
      <Sidebar/>
      
      <MainFeed/>

      <RightSide/>
    </div>
  );
}

export default App;

import './App.css';
import Sidebar from './sidebar/Sidebar';
import MainFeed from './mainFeed/MainFeed';

function App() {
  return (
    <div className="app">
      <Sidebar/>
      
      <MainFeed/>
    </div>
  );
}

export default App;

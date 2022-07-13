import React from 'react'
import Sidebar from './sidebar/Sidebar';
import MainFeed from './mainFeed/MainFeed';
import RightSide from './rightSide/RightSide';
import './home.css';

function Home() {
  return (
    <div className='homeApp'> 
        <Sidebar/>

        <MainFeed/>

        <RightSide/>
    </div>
  )
}

export default Home
import React from 'react'
import './rightSide.css'
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed
} from 'react-twitter-embed';
import SearchIcon from '@mui/icons-material/Search';

function RightSide() {
  return (
    <div className='rightSide'>
      <div className='rightSide_input'>
        <SearchIcon className='searchIcon'/>
        <input placeholder='Search Twitter' type="text"></input>
      </div>
      <div className="rightSideContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"153867887882208051"}/>

        <TwitterTimelineEmbed 
          sourceType='profile'
          screenName='rashjichords'
          options={{height: 400}}/>

        <TwitterShareButton/>
      </div>
    </div>
  )
}

export default RightSide
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

        <TwitterTweetEmbed tweetId={"1539445216083693569"}/>

        <TwitterTimelineEmbed 
          sourceType='profile'
          screenName='brockwilliams37'
          options={{height: 400}}/>

        <TwitterShareButton
        options={{text: "This tweet is from Brock's Twitter Clone"}}/>
      </div>
    </div>
  )
}

export default RightSide
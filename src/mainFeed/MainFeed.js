import React from 'react'
import './mainFeed.css';
import TweetBox from './tweet/TweetBox';
import Tweet from './tweet/Tweet';

function MainFeed() {
  return (
    <div className="feed">
      <div className="feedHeader">
        <h2>Home</h2>

      </div>

        <TweetBox/>

        <Tweet/>
        <Tweet/>
        <Tweet/>
        <Tweet/>
        <Tweet/>

    </div>
  )
}

export default MainFeed
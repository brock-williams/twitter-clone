import React from 'react'
import './mainFeed.css'
import TweetBox from './tweet/TweetBox'
import Tweet from './tweet/Tweet'

function mainFeed() {
  return (
    <div className="feed">
      <div className="feedHeader">
        <h2>Home</h2>

      </div>

        <TweetBox/>

        <Tweet/>
    </div>
  )
}

export default mainFeed
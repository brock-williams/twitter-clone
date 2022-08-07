import React, { useEffect, useState } from 'react'
import './mainFeed.css';
import TweetBox from './tweet/TweetBox';
import Tweet from './tweet/Tweet';
import db from './firebase'
import { collection } from 'firebase/firestore/lite';
import { onSnapshot } from "firebase/firestore";


function MainFeed() {
  const [tweets, sendTweets] = useState([]);


  useEffect(() => {
    onSnapshot(collection(db,"tweets"), (snapshot) =>
     sendTweets(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  
  return (
    <div className="feed">
      <div className="feedHeader">
        <h2>Home</h2>

      </div>

        <TweetBox/>
      
        {tweets.map((tweet) => (
      <Tweet
      key={tweet.text}
      displayName={tweet.displayName}
      username={tweet.username}
      verified={tweet.verified}
      text={tweet.text}
      avatar={tweet.avatar}
      image={tweet.image}
      time={tweet.timestamp}
      /> 
      ))};

    </div>
  )
}

export default MainFeed;
import React, { useState } from 'react'
import './TweetBox.css';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import { Button } from '@mui/material';
import { Avatar } from '@mui/material';
import db from '../firebase';
import { addDoc, doc } from "firebase/firestore"; 

function TweetBox() {
  const [tweetMessage, sendTweetMessage] = useState("");
  const [tweetImage, sendTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

      addDoc(doc(db, "tweets"), {
      displayName: "Brock Williams",
      username: "brockwill1",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://i.pinimg.com/236x/31/eb/97/31eb9767cb1e55594bfcae11c9fe1967.jpg"

    });

    sendTweetMessage("");
    sendTweetImage("");
  };


  return (
    <div className="tweetBox">
        <form>
            <div className="tweetInput">
            <div> <Avatar src="https://www.pajiba.com/assets_c/2021/07/ted-lasso-cheers-george-wendt-thumb-700xauto-237052.jpeg"/>
            </div>
                <input
                onChange={(e) => sendTweetMessage(e.target.value)}
                 value={tweetMessage} placeholder="What's happening?" type="text"></input>
            </div>
            <PermMediaIcon  className="mediaIcon"/>
            <input value={tweetImage}
            onChange={(e) => sendTweetImage(e.target.value)}
             className="imageURL" placeholder="Enter Image URL" type="text"></input>
            <Button onClick={sendTweet}
            type="submit"
            className="tweetBoxButton">Tweet</Button>
        </form>

    </div>
  )
}

export default TweetBox
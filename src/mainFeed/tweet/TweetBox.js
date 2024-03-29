import React, { useState } from 'react'
import './TweetBox.css';
import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined';
import { Button } from '@mui/material';
import { Avatar } from '@mui/material';
import db from '../firebase';
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore"; 

function TweetBox() {
  const [tweetMessage, sendTweetMessage] = useState("");
  const [tweetImage, sendTweetImage] = useState("");
  

  const sendTweet = (e) => {
    // const collectionRef = collection(db, "tweets");
    // const q = query(collectionRef, orderBy("timestamp", "desc"));

    
    e.preventDefault();
    
      addDoc(collection(db, "tweets"), {
      displayName: "Brock Williams",
      username: "brockwill1",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://pbs.twimg.com/media/E9sN5jzVUAUgYHn.png",
      timestamp: serverTimestamp()

    });

    sendTweetMessage("");
    sendTweetImage("");

    db.collection('tweets').orderBy('time', 'desc');

  };



  return (
    <div className="tweetBox">
        <form>
            <div className="tweetInput">
            <div> <Avatar src={"https://pbs.twimg.com/media/E9sN5jzVUAUgYHn.png"}/>
            </div>
                <input
                onChange={(e) => sendTweetMessage(e.target.value)}
                 value={tweetMessage} placeholder="What's happening?" type="text" maxLength={250}></input>
            </div>
            <PermMediaOutlinedIcon  className="mediaIcon"/>
            {/* <input value={tweetImage}
            onChange={(e) => sendTweetImage(e.target.value)}
             className="imageURL" placeholder="Enter Image URL" type="text"></input> */}

            <Button onClick={sendTweet}
            type="submit"
            className="tweetBoxButton">Tweet</Button>
        </form>

    </div>
  );
}


export default TweetBox;
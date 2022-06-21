import React from 'react'
import './TweetBox.css';
import { Button } from '@mui/material';
import { Avatar } from '@mui/material';

function TweetBox() {
  return (
    <div className="tweetBox">
        <form>
            <div className="tweetInput">
            <div> <Avatar src="https://www.pajiba.com/assets_c/2021/07/ted-lasso-cheers-george-wendt-thumb-700xauto-237052.jpeg"/>
            </div>
                <input placeholder="What's happening?" type="text"></input>
            </div>
            <input className="imageURL" placeholder="Enter Image URL" type="text"></input>
            <Button className="tweetBoxButton">Tweet</Button>
        </form>

    </div>
  )
}

export default TweetBox
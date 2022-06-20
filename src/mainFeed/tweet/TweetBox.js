import React from 'react'
import './tweetBox.css';
import { Button } from '@mui/material';

function tweetBox() {
  return (
    <div className="tweetBox">
        <form>
            <div className="tweetInput">
                <input placeholder="What's happening?" type="text"></input>
            </div>
            <input className="imageURL" placeholder="Enter Image URL" type="text"></input>
            <Button className="tweetBoxButton">Tweet</Button>
        </form>

    </div>
  )
}

export default tweetBox
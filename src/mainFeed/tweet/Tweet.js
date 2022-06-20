import React from 'react'
import './Tweet.css';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatOneIcon from '@mui/icons-material/RepeatOne';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

function Tweet({
  displayName,
  username,
  verified,
  text,
  image,
  pfp
}) {
  return (
    <div className="tweet">
      <div className="tweetBody">
        <div className="tweetHeader">
          <div className="tweetHeaderText">
            <h3>
              Brock Williams 
              <span className="tweetHeaderSpecial">
                <VerifiedIcon className="tweetBadge"/>
              </span>
            </h3>
          </div>
          <div className="tweetHeaderDesc">
            <p>
              Currently making Twitter... hold up
            </p>
          </div>
        </div>
        <img src="https://tenor.com/search/twitter-gifs" alt=''/>
        <div className="tweetFooter">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatOneIcon fontSize="small"/>
          <FavoriteBorderIcon fontSize="small"/>
          <PublishIcon fontSize="small"/>
        </div>
      </div>





    </div>
  )
}

export default Tweet
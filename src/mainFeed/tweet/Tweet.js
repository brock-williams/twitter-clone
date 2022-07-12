import React, { forwardRef } from 'react'
import './Tweet.css';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatOneIcon from '@mui/icons-material/RepeatOne';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import { Avatar } from '@mui/material';

const Tweet = forwardRef(
  ({
  displayName,
  username,
  verified,
  text,
  image,
  avatar,
  time
}, ref) => {
  return (
    <div className="tweet" ref={ref}>
      <div className="tweet_Avatar">
        <Avatar src={avatar}/>
      </div>
      <div className="tweet_Body">
        <div className="tweet_Header">
          <div className="tweet_HeaderText">
            <h3>
              {displayName}{" "}
              <span className="tweet_HeaderSpecial">
                {verified && <VerifiedIcon className="tweet_Badge"/>} @{username}
              </span>
            </h3>
          </div>
          <div className="tweet_HeaderDesc">
            <p>
              {text}
            </p>
          </div>
        </div>
        <img src={image} alt=""/>
        <div className="tweet_Footer">
          <ChatBubbleOutlineIcon className="comment" fontSize="small" />
          <RepeatOneIcon className="retweet" fontSize="small"/>
          <FavoriteBorderIcon className="like" fontSize="small"/>
          <PublishIcon className="dm_post" fontSize="small"/>
        </div>
      </div>
    </div>
  );
}
);

export default Tweet;
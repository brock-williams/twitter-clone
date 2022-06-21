import React from 'react'
import './Tweet.css';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatOneIcon from '@mui/icons-material/RepeatOne';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import { Avatar } from '@mui/material';

function Tweet({
  displayName,
  username,
  verified,
  text,
  image,
  avatar
}) {
  return (
    <div className="tweet">
      <div className="tweet_Avatar">
        <Avatar src="https://www.pajiba.com/assets_c/2021/07/ted-lasso-cheers-george-wendt-thumb-700xauto-237052.jpeg"/>
      </div>
      <div className="tweet_Body">
        <div className="tweet_Header">
          <div className="tweet_HeaderText">
            <h3>
              Brock Williams{" "}
              <span className="tweet_HeaderSpecial">
                <VerifiedIcon className="tweet_Badge"/> @ {username}
              </span>
            </h3>
          </div>
          <div className="tweet_HeaderDesc">
            <p>
              Currently making Twitter... hold up
            </p>
          </div>
        </div>
        <img src="https://www.mintface.xyz/content/images/2021/08/QmTndiF423kjdXsNzsip1QQkBQqDuzDhJnGuJAXtv4XXiZ-1.png" alt=""/>
        <div className="tweet_Footer">
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
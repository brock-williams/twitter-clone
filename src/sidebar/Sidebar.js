import React from 'react'
import SidebarProps from './SidebarProps'
import './Sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import TwitterIcon from '@mui/icons-material/Twitter';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailIcon from '@mui/icons-material/Mail';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';



function Sidebar() {
  return (
    <div className="sidebar">
        <TwitterIcon onClick={event => window.location.href='http://localhost:3000'} className="twitterIcon"/>
        <SidebarProps text="Home" active Icon={HomeIcon} className="homeIcon"/>
        <SidebarProps text="Explore" Icon={TagIcon}/>
        <SidebarProps text="Notifications" Icon={NotificationsNoneIcon}/>
        <SidebarProps text="Messages" Icon={MailIcon}/>
        <SidebarProps text="Bookmarks" Icon={BookmarkIcon}/>
        <SidebarProps text="Lists" Icon={ListAltIcon}/>
        <SidebarProps text="Profile" Icon={PermIdentityIcon}/>
        <SidebarProps text="More" Icon={MoreHorizIcon}/>
    
        <Button variant="outlined" className="tweetButton" fullWidth>Tweet</Button>
    
    </div>
  )
}

export default Sidebar
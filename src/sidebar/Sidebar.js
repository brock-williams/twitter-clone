import React, { useEffect } from 'react'
import SidebarProps from './SidebarProps'
import './Sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import TwitterIcon from '@mui/icons-material/Twitter';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Button } from '@mui/material';
import {auth} from '../mainFeed/firebase';
import {signOut} from "firebase/auth";
import { useNavigate } from "react-router-dom";


function Sidebar() {

  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate('/login')
    
  };

  return (
    <div className="sidebar">
        <TwitterIcon onClick={navigate('/home')} className="twitterIcon"/>
        <SidebarProps text="Home" Icon={HomeIcon} className="homeIcon"/>
        <SidebarProps text="Explore" Icon={TagIcon}/>
        <SidebarProps text="Notifications" Icon={NotificationsNoneIcon}/>
        <SidebarProps text="Messages" Icon={MailOutlinedIcon}/>
        <SidebarProps text="Bookmarks" Icon={BookmarkBorderOutlinedIcon}/>
        <SidebarProps text="Lists" Icon={ListAltIcon}/>
        <SidebarProps text="Profile" Icon={PermIdentityIcon}/>
        <SidebarProps text="Settings" Icon={SettingsOutlinedIcon}/>
    
        <Button variant="outlined" className="tweetButton" fullWidth>Tweet</Button>
        <Button variant="outlined" className="signOutBtn" fullWidth onClick={logout}>Sign Out</Button>
    
    </div>
  )
}

export default Sidebar
import React from 'react'
import './SidebarProps.css'


function SidebarProps({ active, text, Icon }) {
  return (
    <div className={`SidebarProps ${active && "SidebarProps--active"}`}>
        <Icon />
        <h2>{text}</h2>
    </div>
  );
}

export default SidebarProps
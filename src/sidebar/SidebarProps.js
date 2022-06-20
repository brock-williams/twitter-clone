import React from 'react'
import './SidebarProps.css'


function SidebarProps({active, text, Icon}) {
  return (
    <div className={`sidebarProps ${active && "sidebarProps--active"}`}>
        
        <Icon />
        <h2>{text}</h2>

    </div>
  )
}

export default SidebarProps
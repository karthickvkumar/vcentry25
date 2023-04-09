import React from "react";
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
  return(
    <div className="header">
      <div className="logo">
   
      </div>
      <div className="screens-link">
        <NavLink to="/home" className={({isActive}) => isActive ? "link hightlight-link" : "link" }>Home</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? "link hightlight-link" : "link"  }>About</NavLink>
        <NavLink to="/contact-us" className={({isActive}) => isActive ? "link hightlight-link" : "link"  }>Contact</NavLink>
        <NavLink to="/settings" className={({isActive}) => isActive ? "link hightlight-link" : "link"  }>Settings</NavLink>
        <NavLink to="/login" className={({isActive}) => isActive ? "link hightlight-link" : "link"  }>Login</NavLink>
      </div>
    </div>
  )
}

export default HeaderComponent;
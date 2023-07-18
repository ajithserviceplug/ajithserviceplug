/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Location from "./Location";

const Header = () => {

  
 
  return (
    <div className="header">
    <nav className="nav-style">
      <div className="nav-logo-container">
      <span className='lead-text'>Service <span className='sub-text'>Plug</span></span>
           <p className='small-text mb-0'>Connecting Local Experts</p>
      </div>
      <div className="navbar-links-container">
       <Location />
      </div>
      <div className="nav-logo-container">
      <p className='text-white mb-0'>Partner Login</p>
      </div>
     
     
    </nav>
    </div>
  );
};

export default Header;

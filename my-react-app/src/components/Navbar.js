import React, { useState } from "react";

import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
     
      <div className="rightSide" >
        <Link className="lnk"to="/"> Home </Link>
        <Link  className="lnk" to="/signup"> SignUp </Link>
        <Link className="lnk" to="/product"> Products </Link>
        <Link className="lnk" to="/about"> About </Link>
        
        <button onClick={toggleNavbar}>
         
        </button>
      </div>
    </div>
  );
}

export default Navbar;

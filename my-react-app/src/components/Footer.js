import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faInstagram,faTwitter, faPaypal  } from '@fortawesome/free-brands-svg-icons';

import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
       
      </div>
      <p> &copy; 2023 E-store.com 
        <a href="https://www.facebook.com/"> <FontAwesomeIcon icon={faFacebook} className="icons iconcolor"/></a>
      <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} className="icons iconcolor" /></a>
      <a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} className="icons iconcolor" /> </a>
      <a href="https://www.paypal.com/" > <FontAwesomeIcon icon={faPaypal } className="icons iconcolor" /></a></p>
      <div>
     
      
     
    </div>
    </div>
  );
}

export default Footer;
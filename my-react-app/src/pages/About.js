import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faInstagram,faTwitter, faPaypal  } from '@fortawesome/free-brands-svg-icons';
import "../styles/About.css";
function About() {
  return (
    <div className="about img">
      <div
        className="aboutTop">
         <h1> ABOUT US</h1>
        <p>
        We at E-STORE are your go-to source for anything tech and innovative; we're more than simply an electronics store. 
        We've evolved into a one-stop shop for all of your electronics needs thanks to our love for cutting-edge technology, 
        dedication to providing excellent customer service, and unrelenting pursuit of quality.<br/>
        Feel free to reach out to us anytime; we're here to assist you on your tech adventure.
          <p > <a href="https://www.facebook.com/"> <FontAwesomeIcon icon={faFacebook} className="icons iconcolor2" /></a>
      <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} className="icons iconcolor2" /></a>
      <a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter} className="icons iconcolor2" /> </a>
      <a href="https://www.paypal.com/"> <FontAwesomeIcon icon={faPaypal } className="icons iconcolor2" /></a></p>
        </p>    
      </div>
      <div className="aboutBottom">
        <h2>Feel Free to connect</h2>
      <textarea rows="6" placeholder="Enter message..." name="message"required className="type" ></textarea><br/>
          <button type="submit" className="btn"> Send Message</button>
      </div>
      
    </div>
  );
}

export default About;

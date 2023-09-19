import React from "react";

import "../styles/Signup.css";

function Signup() {
  
  return (
    <div className="contact">
      
      <div className="rightSide">
        <h1> Sign Up</h1>

        <form id="contact-form" method="get" className="myform">
          <label htmlFor="name">First Name</label>
          <input name="name" placeholder="Enter First name..." type="text" />
          <label htmlFor="name">Last Name</label>
          <input name="name" placeholder="Enter Last name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="password">Password</label>
          <input name="password" placeholder="Enter password..." type="password" />
          
          
          <button type="submit"> Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
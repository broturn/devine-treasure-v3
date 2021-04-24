import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo1.png";
function ContactInfo() {
  return (
    <div className="contactInfo">
      <Link to="/">
        <img className="login__logo" src={logo} alt="" />
      </Link>
      <div className="contactInfo__container">
        <div className="contactInfo__title">
          <h1>Please enter your contact information here</h1>
        </div>
       <div className="contactInfo__inputs">
        <form>
        <div className="contactInfo__inputs-fname">
          <h1>First Name</h1>
          <input type="text" />
          </div>
          <div className="contactInfo__inputs-lname">
          <h1>Last Name</h1>
          <input type="text" />
          </div>
          <div className="contactInfo__inputs-addressone">
          <h1>Address Line One</h1>
          <input type="text" />
          </div>
          <div className="contactInfo__inputs-addresstwo">
          <h1>Address Line Two</h1>
          <input type="text" />
          </div>
          <div className="contactInfo__inputs-zip">
        <h1>Zip code</h1>
        <input type="text" />
        </div>
        </form>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;

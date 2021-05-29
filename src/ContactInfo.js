import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "./images/logo1.png";
import axios from './axios';
import { db } from "./firebase";

function ContactInfo() {
  
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
        db.collection('users')
    //     .doc(user?.uid)
    //     .collection('orders')
    //     .doc(paymentIntent.id)
    //     })
      }
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
        <button type='submit' onSubmit={handleSubmit} className='contactInfo__submitInfoButton' >Submit Contact Information</button>
        </form>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;

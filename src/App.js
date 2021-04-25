import React, { useEffect } from "react";
import "./style/main.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Orders from "./Orders";
import Login from "./Login";
import ContactInfo from "./ContactInfo";
import Payment from "./Payment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from './firebase';
import { useStateValue } from "./StateProvider";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/contactinfo">
            <ContactInfo />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          
          <Route path="/payment">
            <Header />
            {/* <Elements stripe={promise}> */}
            <Payment />
            {/* </Elements> */}
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;

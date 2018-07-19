import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './Body.css';

import Home from '../home/Home';
import Crypto from '../crypto/Crypto';
import Contact from '../contact/Contact';

export const PageNotFound = () => (
  <div className="Page-not-found text-center">
    <img src={`${process.env.PUBLIC_URL}/img/404.jpg`} alt="Page not found" />
  </div>
);
class Body extends Component {

  render() {
    const baseUrl = process.env.PUBLIC_URL;

    return (
      <div className="Body">
        <Switch>
          <Route exact path={`${baseUrl}/`} component={Home} />
          <Route exact path={`${baseUrl}/contact`} component={Contact} />
          <Route path={`${baseUrl}/algorithm`} component={Crypto} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }

}

export default Body;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import './Body.css';

import Home from '../home/Home';
import Crypto from '../crypto/Crypto';
import Contact from '../contact/Contact';

export const PageNotFound = () => (
  <div className="Page-not-found text-center">
    <img src="/img/404.jpg" alt="Page not found" />
  </div>
);
class Body extends Component {

  render() {
    const domain = process.env.PUBLIC_URL;
    return (
      <div className="Body">
        <Switch>
          <Route exact path={`${domain}/`} component={Home} />
          <Route exact path={`${domain}/contact`} component={Contact} />
          <Route path={`${domain}/algorithm`} component={Crypto} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }

}

export default Body;

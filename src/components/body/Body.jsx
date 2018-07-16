import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import './Body.css';

import Home from '../home/Home';
import Crypto from '../crypto/Crypto';
import Contact from '../contact/Contact';

class Body extends Component {

  render() {
    return (
      <div className="Body">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/algorithm" component={Crypto} />
          <Route render={() => <div>404 Page Not Found</div>} />
        </Switch>
      </div>
    );
  }

}

export default Body;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);

    document.title = 'Cryptography';
  }

  render() {
    return (
      <div className="Home container">
        <div className="row">
          Home Page
        </div>
      </div>
    );
  }
}

export default Home;

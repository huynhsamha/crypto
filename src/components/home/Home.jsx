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
          <div className="col-12">
            <h2 className="mb-3">Home Page</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import './Crypto.css';

import Menu from '../menu/Menu';
import Algorithm from '../algorithm/Algorithm';

import algorithms from '../../utils/algorithms';

class Crypto extends Component {

  constructor(props) {
    super(props);

    document.title = 'Crypto Algorithms';

    this.state = {};
  }

  render() {
    const { match } = this.props;

    return (
      <div className="Crypto container">
        <div className="row">
          <div className="col-12 col-lg-3 col-md-5">
            <Menu match={match} />
          </div>
          {algorithms.map(groupAlgo => groupAlgo.algorithms.map(algo => (
            <Route
              key={algo.name} exact path={`${match.path}/${algo.name}`}
              component={() => <Algorithm algo={algo} />}
            />
          )))}
        </div>
      </div>
    );
  }
}

Crypto.propTypes = {
  match: PropTypes.object.isRequired
};

export default Crypto;

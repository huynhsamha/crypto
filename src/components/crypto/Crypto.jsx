import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import './Crypto.css';

import Menu from '../menu/Menu';
import Algorithm from '../algorithm/Algorithm';

import algorithms from '../../utils/algorithms';

const NotFound = () => (
  <div>
    <h3>Oops! Please try another algorithm.</h3>
  </div>
);

class Crypto extends Component {

  constructor(props) {
    super(props);

    document.title = 'Crypto Algorithms';

    this.state = {};
  }

  render() {
    const { match } = this.props;
    const defaultAlgo = algorithms[0].algorithms[0];

    return (
      <div className="Crypto container">
        <div className="row">
          <div className="col-12 col-lg-3 col-md-5">
            <Menu match={match} />
          </div>
          <Switch>
            {/* handle default algo for route / */}
            <Route exact path={match.path} component={() => <Algorithm algo={defaultAlgo} />} />

            {algorithms.map(groupAlgo => groupAlgo.algorithms.map(algo => (
              <Route
                key={algo.name} exact path={`${match.path}/${algo.name}`}
                component={() => <Algorithm algo={algo} />}
              />
            )))}

            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

Crypto.propTypes = {
  match: PropTypes.object.isRequired
};

export default Crypto;

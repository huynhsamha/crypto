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

const ShareTwitter = () => (
  <a
    className="twitter-share-button"
    href="https://twitter.com/intent/tweet"
    data-size="large"
  >
    <i className="fa fa-twitter" />
  </a>
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
          <div className="col-12 col-lg-9 col-md-7">
            <Switch>
              {/* handle default algo for route / */}
              <Route exact path={match.path} component={() => <Algorithm algo={defaultAlgo} />} />

              {algorithms.map(groupAlgo => groupAlgo.algorithms.map(algo => (
                <Route
                  key={algo.name} exact path={`${match.path}/${algo.name}`}
                  component={() => <Algorithm algo={algo} />}
                />
              )))}
              {/* no match route */}
              <Route component={NotFound} />
            </Switch>
            {/* <ShareTwitter /> */}
          </div>
        </div>
      </div>
    );
  }
}

Crypto.propTypes = {
  match: PropTypes.object.isRequired
};

export default Crypto;

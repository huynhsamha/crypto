import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import './Crypto.css';

import Menu from '../menu/Menu';
import Algorithm from '../algorithm/Algorithm';
import ShareButtons from '../share-buttons/ShareButtons';
import Adsense from '../adsense/Adsense';

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
  }

  render() {
    const { match, location } = this.props;
    const defaultAlgo = algorithms[0].algorithms[0];

    // Get share data in query params ?data=
    const queryParams = new URLSearchParams(location.search);
    const shareData = queryParams.get('data');

    return (
      <div className="Crypto container">
        <div className="row">
          <div className="col-12 col-lg-3 col-md-5">
            <Menu match={match} />
          </div>
          <div className="col-12 col-lg-9 col-md-7">
            <Switch>
              {/* handle default algo for route / */}
              <Route exact path={match.path} component={() => <Algorithm algo={defaultAlgo} shareData={shareData} />} />

              {algorithms.map(groupAlgo => groupAlgo.algorithms.map(algo => (
                <Route
                  key={algo.name} exact path={`${match.path}/${algo.name}`}
                  component={() => <Algorithm algo={algo} shareData={shareData} />}
                />
              )))}
              {/* no match route */}
              <Route component={NotFound} />
            </Switch>

            {/* Share Buttons (Facebook, LinkedIn, Twitter, Google, ...) */}
            <ShareButtons />

            {/* Google Adsense */}
            <Adsense />
          </div>
        </div>
      </div>
    );
  }
}

Crypto.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default Crypto;

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

const ShareTwitter = () => {
  const text = `Cryptography Algorithm ${document.title}`;
  const url = window.location.href;
  const shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;

  const openPopup = (url) => {
    const height = 500;
    const width = 500;
    const top = window.innerHeight - height;
    const left = window.innerHeight - width;

    const newWindow = window.open(url, '_blank',
      `height=${height}, width=${width},
      top=${top}, left=${left},
      location=yes, scrollbars=yes, status=yes`);
  };

  return (
    <button
      className="twitter-share-button" type="button"
      onClick={() => openPopup(shareUrl)}
      title="Share on Twitter"
    >
      <i className="fa fa-twitter" /> Tweet
    </button>
  );
};

const ShareFacebook = () => {
  function fbs_click() {
    const u = window.location.href;
    const t = document.title;
    window.open(`http://www.facebook.com/sharer.php?u=${encodeURIComponent(u)}&t=${encodeURIComponent(t)}`, 'sharer', 'toolbar=0,status=0,width=626,height=436');
    return false;
  }

  return (
    <a href="http://www.facebook.com/share.php?u=<url>" onClick="return fbs_click()" target="_blank"><img src="ADD_IMAGE_URL_HERE" alt="Share on Facebook" /></a>
  );
};

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

            <ShareTwitter />
            <ShareFacebook />
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

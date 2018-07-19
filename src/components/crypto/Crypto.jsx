import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  PinterestShareButton,

  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,
  LinkedinIcon,
  PinterestIcon,
  TelegramIcon
} from 'react-share';
import Fade from 'react-reveal/Fade';

import './Crypto.css';

import Menu from '../menu/Menu';
import Algorithm from '../algorithm/Algorithm';

import algorithms from '../../utils/algorithms';

const NotFound = () => (
  <div>
    <h3>Oops! Please try another algorithm.</h3>
  </div>
);

const ShareButtons = () => {
  const title = `Cryptography Algorithm ${document.title}`;
  const url = window.location.href;
  const iconSize = 48;
  return (
    <div className="tool-share-buttons">
      <TwitterShareButton url={url} title={title} className="share-button">
        <Fade up><TwitterIcon size={iconSize} round /></Fade>
      </TwitterShareButton>
      <FacebookShareButton url={url} quote={title} className="share-button">
        <Fade up><FacebookIcon size={iconSize} round /></Fade>
      </FacebookShareButton>
      <GooglePlusShareButton url={url} className="share-button">
        <Fade up><GooglePlusIcon size={iconSize} round /></Fade>
      </GooglePlusShareButton>
      <LinkedinShareButton url={url} title={title} className="share-button">
        <Fade up><LinkedinIcon size={iconSize} round /></Fade>
      </LinkedinShareButton>
      <PinterestShareButton url={url} media="/favicon.ico" className="share-button">
        <Fade up><PinterestIcon size={iconSize} round /></Fade>
      </PinterestShareButton>
      <TelegramShareButton url={url} title={title} className="share-button">
        <Fade up><TelegramIcon size={iconSize} round /></Fade>
      </TelegramShareButton>
    </div>
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

    const text = `Cryptography Algorithm ${document.title}`;
    const url = window.location.href;
    const shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;

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

            <ShareButtons />
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

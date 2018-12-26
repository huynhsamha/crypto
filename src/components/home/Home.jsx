import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import LightSpeed from 'react-reveal/LightSpeed';
import { Link } from 'react-router-dom';

import ShareButtons from '../share-buttons/ShareButtons';

import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);

    document.title = 'Cryptography';
  }

  render() {
    const domain = process.env.PUBLIC_URL;

    return (
      <div className="Home">
        <div className="backgound">
          <h1 className="mt-3 mb-5">
            <Zoom bottom cascade>
              Cryptography Algorithms
            </Zoom>
          </h1>
          <h5 className="mb-4">
            <LightSpeed bottom cascade>
              Online, free, fast, accurate, open source, sharable and more
            </LightSpeed>
          </h5>
          <h6 className="mb-4">
            <LightSpeed bottom cascade>
              Support multiple encryption and decryption algorithms
            </LightSpeed>
          </h6>
          <Zoom>
            <Link to={`${domain}/algorithm`}>
              <button className="btn btn-try" type="button">
                <i className="fa fa-bolt left" />
                Try Now
                <i className="fa fa-paper-plane right" />
              </button>
            </Link>
          </Zoom>
        </div>

        <ShareButtons />
      </div>
    );
  }
}

export default Home;

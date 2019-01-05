import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import copy from 'copy-to-clipboard';
import crypto, { enc as cryptoEncoder } from 'crypto-js';

import * as actions from '../../redux/actions';

import './Algorithm.css';
import { getDomain } from '../../utils/url';
import config from '../../config';

class Algorithm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: '',
      key: '',
      decryptKey: '',
      encoder: cryptoEncoder.Hex
    };

    const { algo, shareData } = this.props;
    document.title = algo.name.toUpperCase() + (algo.detail ? ` - ${algo.detail}` : '');

    this.constants = {
      'ONE_WAY_NO_SECRET': 'ONE_WAY_NO_SECRET',
      'ONE_WAY_WITH_SECRET': 'ONE_WAY_WITH_SECRET',
      'ENCRYPT_DECRYPT': 'ENCRYPT_DECRYPT'
    };

    this.decryptShareData(shareData);
  }

  decryptShareData = (shareEncryptedData) => {
    try {
      console.log(shareEncryptedData);
      const shareData = JSON.parse(crypto.AES.decrypt(shareEncryptedData, config.shareEncryptKey).toString(cryptoEncoder.Utf8));
      console.log(shareData);
      const { data, key, decryptKey } = shareData;

      // Call in constructor, so use `this.state = `
      // eslint-disable-next-line
      this.state = {
        ...this.state,
        data, key, decryptKey
      };
      console.log(this.state);
    } catch (err) {
      console.log(err);
    }
  }

  handleOnCopy = () => {
    const { showAlert } = this.props;
    if (copy(this.encryptValue)) {
      showAlert('Copied to clipboard');
    } else {
      showAlert('Error! Please try again');
    }
  }

  handleOnShare = () => {
    // Encode URL to share and copy URL to clipboard
    const { algo, showAlert } = this.props;
    const { data, key, decryptKey } = this.state;
    const shareData = { data, key, decryptKey };
    const shareEncryptedData = crypto.AES.encrypt(JSON.stringify(shareData), config.shareEncryptKey).toString();
    const encodedData = encodeURIComponent(shareEncryptedData); // encode special characters (+, /, ..)
    const url = `${getDomain()}/algorithm/${algo.name}?data=${encodedData}`;
    console.log(url);
    if (copy(url)) {
      showAlert('URL\'ve been copied to clipboard');
    } else {
      showAlert('Error! Please try again');
    }
  }

  retrieveType = () => {
    const { algo } = this.props;
    if (!algo.key) return this.constants.ONE_WAY_NO_SECRET;
    if (!algo.decrypt) return this.constants.ONE_WAY_WITH_SECRET;
    return this.constants.ENCRYPT_DECRYPT;
  }

  render() {
    const { data, key, decryptKey, encoder } = this.state;
    const { algo } = this.props;
    const type = this.retrieveType();

    let encryptValue = '';
    let decryptValue = '';
    if (data) {
      try {
        if (type === this.constants.ONE_WAY_NO_SECRET) {
          // handle one-way algo without secret key
          encryptValue = algo.func(data).toString(encoder);
        } else if (type === this.constants.ONE_WAY_WITH_SECRET) {
          // handle one-way algo using secret key
          encryptValue = algo.func(data, key).toString(encoder);
        } else {
          // handle encryption & decryption algo
          encryptValue = algo.func.encrypt(data, key).toString();
          // handle error malware utf8
          decryptValue = algo.func.decrypt(encryptValue, decryptKey).toString(cryptoEncoder.Utf8);
        }
      } catch (err) {
        console.log(err.message);
        decryptValue = '';
      }
    }

    this.encryptValue = encryptValue;

    return (
      <div className="Algorithm">
        <div className="form-group row">
          <h3>
            <Bounce cascade>
              {algo.name.toUpperCase()}
            </Bounce>
          </h3>
          {algo.detail && (
            <h3>
              <Bounce cascade>
                {` - ${algo.detail}`}
              </Bounce>
            </h3>
          )}
        </div>

        {/* Data Input */}
        <div className="form-group row">
          <Fade>
            <label htmlFor="js-user-data">Data</label>
            <textarea
              className="form-control" rows="6" id="js-user-data"
              placeholder="Add your data for encryption..."
              defaultValue={data}
              onChange={(e) => { this.setState({ data: e.target.value }); }}
            />
          </Fade>
        </div>

        {/* Using secret key */}
        {type !== this.constants.ONE_WAY_NO_SECRET && (
          <div className="form-group row">
            <Fade>
              <label htmlFor="js-user-key">Secret Key</label>
              <textarea
                className="form-control" rows="3" id="js-user-key"
                placeholder="Add your secret key for encryption..."
                defaultValue={key}
                onChange={(e) => { this.setState({ key: e.target.value }); }}
              />
            </Fade>
          </div>
        )}

        {/* Result */}
        <div className="form-group row position-relative">
          <Fade>
            <label htmlFor="js-result">{algo.decrypt && 'Encrypted'} Result</label>
            <textarea
              className="form-control" rows="6" id="js-result" disabled
              value={encryptValue}
            />

            {type !== this.constants.ENCRYPT_DECRYPT ? (
              <div className="side-left">
                {Object.keys(cryptoEncoder).map(name => name !== 'Utf8' && name !== 'Utf16BE' && (
                  <button
                    className={`btn btn-primary btn-sm btn-custom btn-encoder ${cryptoEncoder[name] === encoder ? 'active' : ''}`}
                    type="button" key={name}
                    onClick={() => this.setState({ encoder: cryptoEncoder[name] })}
                  >
                    {name}
                  </button>
                ))}
              </div>
            ) : <div />}
            <div className="side-right">
              <button className="btn btn-primary btn-sm btn-custom btn-length" type="button">
                Length: {encryptValue.length}
              </button>
              <button className="btn btn-primary btn-sm btn-custom btn-share" type="button" onClick={this.handleOnShare}>
                Share <i className="fa fa-share-alt" />
              </button>
              <button className="btn btn-primary btn-sm btn-custom btn-copy" type="button" onClick={this.handleOnCopy}>
                Copy <i className="fa fa-copy" />
              </button>
            </div>
          </Fade>

        </div>

        {/* Encryption & Decryption */}
        {type === this.constants.ENCRYPT_DECRYPT && (
          <div>
            <div className="form-group row">
              <Fade>
                <label htmlFor="js-user-decrypt-key">Decrypt Key</label>
                <textarea
                  className="form-control" rows="3" id="js-user-decrypt-key"
                  placeholder="Add the secret key for decryption..."
                  onChange={(e) => { this.setState({ decryptKey: e.target.value }); }}
                />
              </Fade>
            </div>
            <div className="form-group row">
              <Fade>
                <label htmlFor="js-decrypt-result">Decrypted Result</label>
                <textarea
                  className="form-control" rows="6" id="js-decrypt-result" disabled
                  value={decryptValue}
                />
              </Fade>
            </div>
          </div>
        )}
      </div>
    );
  }
}


Algorithm.propTypes = {
  algo: PropTypes.object.isRequired,
  shareData: PropTypes.string,
  showAlert: PropTypes.func.isRequired
};

Algorithm.defaultProps = {
  shareData: null
};

const mapDispatchToProps = dispatch => ({
  showAlert: (message) => {
    dispatch(actions.showAlert(message));
  }
});

export default connect(null, mapDispatchToProps)(Algorithm);

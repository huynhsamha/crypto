import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import { enc as cryptoEncoder } from 'crypto-js';

import * as actions from '../../redux/actions';

import './Algorithm.css';

class Algorithm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: '',
      key: '',
      decryptKey: '',
      encoder: cryptoEncoder.Hex
    };

    const { algo } = this.props;
    document.title = algo.name.toUpperCase() + (algo.detail ? ` - ${algo.detail}` : '');

    this.constants = {
      'ONE_WAY_NO_SECRET': 'ONE_WAY_NO_SECRET',
      'ONE_WAY_WITH_SECRET': 'ONE_WAY_WITH_SECRET',
      'ENCRYPT_DECRYPT': 'ENCRYPT_DECRYPT'
    };
  }

  handleOnCopy = () => {
    const { showAlert } = this.props;
    showAlert('Copied to clipboard');
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
              <CopyToClipboard
                text={encryptValue}
                onCopy={this.handleOnCopy}
              >
                <button className="btn btn-primary btn-sm btn-custom btn-copy" type="button">
                    Copy <i className="fa fa-copy" />
                </button>
              </CopyToClipboard>
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
  showAlert: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  showAlert: (message) => {
    dispatch(actions.showAlert(message));
  }
});

export default connect(null, mapDispatchToProps)(Algorithm);

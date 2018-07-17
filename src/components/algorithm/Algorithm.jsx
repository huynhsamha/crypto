import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import cryptoEncoderUtf8 from 'crypto-js/enc-utf8';

import * as actions from '../../redux/actions';

import './Algorithm.css';

class Algorithm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: '',
      key: '',
      decryptKey: ''
    };

    const { algo } = this.props;
    document.title = algo.name.toUpperCase() + (algo.detail ? ` - ${algo.detail}` : '');
  }

  handleOnCopy = () => {
    const { showAlert } = this.props;
    showAlert('Copied to clipboard');
  }

  render() {
    const { data, key, decryptKey } = this.state;
    const { algo } = this.props;

    let encryptValue = '';
    let decryptValue = '';
    if (data) {
      if (!algo.key) {
        // handle one-way algo without secret key
        encryptValue = algo.func(data);
      } else if (!algo.decrypt) {
        // handle one-way algo using secret key
        encryptValue = algo.func(data, key);
      } else {
        // handle encryption & decryption algo
        encryptValue = algo.func.encrypt(data, key);
        try {
          // handle error malware utf8
          decryptValue = algo.func.decrypt(encryptValue.toString(), decryptKey).toString(cryptoEncoderUtf8);
        } catch (err) {
          decryptValue = '';
        }
      }
    }

    return (
      <div className="Algorithm col-12 col-lg-9 col-md-7">
        <div className="form-group row">
          <h3>{algo.name.toUpperCase()}{algo.detail && ` - ${algo.detail}`}</h3>
        </div>
        {/* Data Input */}
        <div className="form-group row">
          <label htmlFor="js-user-data">Data</label>
          <textarea
            className="form-control" rows="6" id="js-user-data"
            placeholder="Add your data for encryption..."
            onChange={(e) => { this.setState({ data: e.target.value }); }}
          />
        </div>

        {/* Using secret key */}
        {algo.key && (
          <div className="form-group row">
            <label htmlFor="js-user-key">Secret Key</label>
            <textarea
              className="form-control" rows="3" id="js-user-key"
              placeholder="Add your secret key for encryption..."
              onChange={(e) => { this.setState({ key: e.target.value }); }}
            />
          </div>
        )}

        {/* Result */}
        <div className="form-group row position-relative">
          <label htmlFor="js-result">{algo.decrypt && 'Encrypted'} Result</label>
          <textarea
            className="form-control" rows="4" id="js-result" disabled
            value={encryptValue}
          />
          <CopyToClipboard
            text={encryptValue}
            onCopy={this.handleOnCopy}
          >
            <button className="btn btn-primary btn-sm position-absolute btn-copy" type="button">
              Copy <i className="fa fa-copy" />
            </button>
          </CopyToClipboard>
        </div>

        {/* Encryption & Decryption */}
        {algo.decrypt && (
          <div>
            <div className="form-group row">
              <label htmlFor="js-user-decrypt-key">Decrypt Key</label>
              <textarea
                className="form-control" rows="3" id="js-user-decrypt-key"
                placeholder="Add the secret key for decryption..."
                onChange={(e) => { this.setState({ decryptKey: e.target.value }); }}
              />
            </div>
            <div className="form-group row">
              <label htmlFor="js-decrypt-result">Decrypted Result</label>
              <textarea
                className="form-control" rows="6" id="js-decrypt-result" disabled
                value={decryptValue}
              />
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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <footer>
          <div className="text-center jsc-footer">
            <div className="py-1">
              Copyright <i className="fa fa-copyright" /> 2018. All rights reversed.
            </div>
            <div className="py-1">
              <span> Created by {' '}
                <a className="jsc-link" href="//github.com/huynhsamha" target="_blank" rel="noopener noreferrer">huynhsamha {' '}
                  <i className="fa fa-external-link" />
                </a>
              </span>
              <span>
                {'. '}
              Available on {' '}
                <a className="jsc-link" href="//github.com/huynhsamha/crypto" target="_blank" rel="noopener noreferrer">Github {' '}
                  <i className="fa fa-github" />
                </a>
              </span>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;

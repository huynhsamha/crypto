import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);

    document.title = 'Contact';

    this.socials = {
      twitter: '//twitter.com/huynhsamha',
      google: '//plus.google.com/104401180645424242142',
      facebook: '//www.facebook.com/huynhsamha',
      github: '//github.com/huynhsamha',
      linkedin: '//linkedin.com/in/huynhsamha/',
      stackOverflow: '//stackoverflow.com/users/8828489/huynhsamha'
    };
  }

  render() {
    const { socials } = this;

    return (
      <div className="Contact container">
        <div className="row">
          <div className="col-12">

            <h2 className="mb-3">About me</h2>
            <div className="my-2">I am a science engineer studying at Ho Chi Minh University of Technology in Vietnam.</div>
            <div className="my-2">This is a web site I created for the purpose of review my knowledge about Cryptography, as well as building websites using React, Redux in conjunction with Bootstrap, jQuery, SASS, SCSS, etc.</div>
            <div className="my-2">My source code for this website is available on <a href="//github.com/huynhsamha/crypto">Github</a>. If you have any problems or issues, please create a new issue or a pull request.</div>
            <div className="my-2">You can contact me through {' '}
              <a href={socials.twitter}>Twitter</a>,{' '}
              <a href={socials.facebook}>Facebook</a>,{' '}
              <a href={socials.google}>Google</a>,{' '}
              <a href={socials.github}>Github</a>,{' '}
              <a href={socials.linkedin}>LinkedIn</a>,{' '}
              <a href={socials.stackOverflow}>Stack Overflow</a>.
            </div>
            <div className="text-center mt-5">
              <div className="d-inline-flex">
                <ul className="d-inline-flex">
                  <li>
                    <span className="ic-twitter">
                      <a href={socials.twitter}><i className="fa fa-twitter" /></a>
                    </span>
                  </li>
                  <li>
                    <span className="ic-google">
                      <a href={socials.google}><i className="fa fa-google" /></a>
                    </span>
                  </li>
                  <li>
                    <span className="ic-facebook">
                      <a href={socials.facebook}><i className="fa fa-facebook" /></a>
                    </span>
                  </li>
                  <li>
                    <span className="ic-github">
                      <a href={socials.github}><i className="fa fa-github" /></a>
                    </span>
                  </li>
                  <li>
                    <span className="ic-linkedin">
                      <a href={socials.linkedin}><i className="fa fa-linkedin" /></a>
                    </span>
                  </li>
                  <li>
                    <span className="ic-stack-overflow">
                      <a href={socials.stackOverflow}><i className="fa fa-stack-overflow" /></a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

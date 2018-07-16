import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);

    document.title = 'Contact';
  }

  render() {
    return (
      <div className="Contact container">
        <div className="row">
            Contact here
        </div>
      </div>
    );
  }
}

export default Contact;

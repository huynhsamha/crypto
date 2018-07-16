import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends Component {

  constructor(props) {
    super(props);

    this.navigations = [
      { name: 'Home', path: '/' },
      { name: 'Algorithms', path: '/algorithm' },
      { name: 'Contact', path: '/contact' }
    ];
  }

  isActiveRoute = (path) => {
    const currentPath = window.location.pathname;
    // handle specific path /
    if (path === '/') return currentPath === path;
    // handle others
    return currentPath.indexOf(path) > -1;
  }

  render() {
    const { navigations, isActiveRoute } = this;

    return (
      <div className="Header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to="/" className="navbar-brand">Cryptography</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-supported-content" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbar-supported-content">
            <ul className="navbar-nav mr-auto">
              {navigations.map(nav => (
                <li
                  key={nav.path}
                  className={`nav-item ${isActiveRoute(nav.path) ? 'active' : ''}`}
                >
                  <Link to={nav.path} className="nav-link">{nav.name}</Link>
                </li>
              ))}
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="//github.com/huynhsamha/crypto">Github</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

Header.propTypes = {
};

export default Header;

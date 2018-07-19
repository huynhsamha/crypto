import React, { Component } from 'react';
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
    const baseUrl = process.env.PUBLIC_URL;
    const currentPath = window.location.pathname;
    const fixedPath = currentPath.replace(baseUrl, '');
    // handle specific path /
    if (path === '/') return fixedPath === '/';
    // handle others
    return fixedPath.indexOf(path) > -1;
  }

  render() {
    const { navigations, isActiveRoute } = this;
    const baseUrl = process.env.PUBLIC_URL;

    return (
      <div className="Header">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to={`${baseUrl}/`} className="navbar-brand">
            <img src={`${baseUrl}/favicon.ico`} alt="" className="d-inline-block align-top mr-2" width="36" height="36" />
            Cryptography
          </Link>
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
                  <Link to={`${baseUrl}${nav.path}`} className="nav-link">{nav.name}</Link>
                </li>
              ))}
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="//github.com/huynhsamha/crypto" target="_blank" rel="noopener noreferrer">Available on GitHub</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Menu.css';

import algorithms from '../../utils/algorithms';

class Menu extends Component {

  render() {
    const { match } = this.props;

    return (
      <div className="Menu">
        <h3 className="title">Algorithms</h3>
        {algorithms.map(groupAlgo => (
          <div className="group-algo" key={groupAlgo.title}>
            <h6>{groupAlgo.title}</h6>
            {groupAlgo.algorithms.map(algo => (
              <div className="list-algo" key={algo.name}>
                <Link to={`${match.path}/${algo.name}`}>
                  <div className="algo">
                    <i className="fa fa-angle-double-right" />
                    <span>{algo.name}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

Menu.propTypes = {
  match: PropTypes.object.isRequired
};

export default Menu;

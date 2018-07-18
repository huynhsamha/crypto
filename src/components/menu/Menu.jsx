import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

import './Menu.css';

import algorithms from '../../utils/algorithms';

class Menu extends Component {

  render() {
    const { match } = this.props;

    return (
      <div className="Menu">
        <h3 className="title">
          <Bounce cascade>Algorithms</Bounce>
        </h3>
        <div className="menu-detail">
          {algorithms.map(groupAlgo => (
            <div className="group-algo" key={groupAlgo.title}>
              <h6>
                <Zoom cascade>{groupAlgo.title}</Zoom>
              </h6>
              {groupAlgo.algorithms.map(algo => (
                <div className="list-algo" key={algo.name}>
                  <Link to={`${match.path}/${algo.name}`}>
                    <Fade>
                      <div className="algo">
                        <i className="fa fa-angle-double-right" />
                        <span>{algo.name}</span>
                      </div>
                    </Fade>
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    );
  }
}

Menu.propTypes = {
  match: PropTypes.object.isRequired
};

export default Menu;

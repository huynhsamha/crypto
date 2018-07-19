import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Body from './components/body/Body';
import Alert from './components/alert/Alert';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Body />
            <Footer />
            <Alert />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
